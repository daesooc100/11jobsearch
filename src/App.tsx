import React, { useState, useEffect, useMemo } from 'react';
import { 
  Car, 
  MapPin, 
  Briefcase, 
  Search, 
  RotateCcw, 
  Bookmark, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { JobPosting, FilterState, ApplicationStatus, UserApplication } from './types/job';
import { INITIAL_JOBS } from './data/mockJobs';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { JobFilterSection } from './components/JobFilterSection';
import { JobCard } from './components/JobCard';
import { JobDetailModal } from './components/JobDetailModal';
import { MyApplicationsModal } from './components/MyApplicationsModal';
import { CreateJobModal } from './components/CreateJobModal';
import { IndustryInsightsModal } from './components/IndustryInsightsModal';

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  roleCategory: 'all',
  regionCategory: 'all',
  experienceLevel: 'all',
  companyCategory: 'all',
  employmentType: 'all',
  sortBy: 'deadline'
};

export default function App() {
  // 1. Persistent jobs state
  const [jobs, setJobs] = useState<JobPosting[]>(() => {
    try {
      const stored = localStorage.getItem('autocareer_jobs_v1');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_JOBS;
  });

  // 2. Persistent bookmarks
  const [savedJobIds, setSavedJobIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('autocareer_saved_ids');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return ['hkmc-sdv-001', 'mobis-adas-002'];
  });

  // 3. Persistent application status tracker
  const [applications, setApplications] = useState<Record<string, UserApplication>>(() => {
    try {
      const stored = localStorage.getItem('autocareer_applications');
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
    return {
      'hkmc-sdv-001': {
        jobId: 'hkmc-sdv-001',
        status: 'saved',
        updatedAt: '2026-10-31',
        notes: 'AUTOSAR Adaptive 개발 경력 기술서 보완 후 지원 예정'
      }
    };
  });

  // 4. Filter state
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  // 5. Active Modals
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isSavedModalOpen, setIsSavedModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isTrendsModalOpen, setIsTrendsModalOpen] = useState(false);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('autocareer_jobs_v1', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('autocareer_saved_ids', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  useEffect(() => {
    localStorage.setItem('autocareer_applications', JSON.stringify(applications));
  }, [applications]);

  // Handlers
  const handleFilterChange = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters(DEFAULT_FILTERS);
  };

  const handleSelectKeyword = (keyword: string) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: keyword
    }));
  };

  const handleToggleBookmark = (jobId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedJobIds((prev) => {
      const isAlreadySaved = prev.includes(jobId);
      const next = isAlreadySaved ? prev.filter((id) => id !== jobId) : [...prev, jobId];
      
      // Update jobs bookmark count optimistically
      setJobs((currentJobs) =>
        currentJobs.map((j) =>
          j.id === jobId
            ? { ...j, bookmarksCount: Math.max(0, j.bookmarksCount + (isAlreadySaved ? -1 : 1)) }
            : j
        )
      );

      // If removed, update applications
      if (isAlreadySaved && applications[jobId]?.status === 'saved') {
        const nextApps = { ...applications };
        delete nextApps[jobId];
        setApplications(nextApps);
      } else if (!isAlreadySaved && !applications[jobId]) {
        setApplications((prevApps) => ({
          ...prevApps,
          [jobId]: {
            jobId,
            status: 'saved',
            updatedAt: new Date().toISOString().split('T')[0]
          }
        }));
      }

      return next;
    });
  };

  const handleUpdateApplicationStatus = (jobId: string, status: ApplicationStatus, notes?: string) => {
    setApplications((prev) => ({
      ...prev,
      [jobId]: {
        jobId,
        status,
        updatedAt: new Date().toISOString().split('T')[0],
        notes: notes !== undefined ? notes : prev[jobId]?.notes
      }
    }));

    if (status !== 'none' && !savedJobIds.includes(jobId)) {
      setSavedJobIds((prev) => [...prev, jobId]);
    }
  };

  const handleAddCustomJob = (newJob: JobPosting) => {
    setJobs((prev) => [newJob, ...prev]);
    setSelectedJob(newJob);
  };

  // Filter & Sort Logic
  const filteredJobs = useMemo(() => {
    return jobs
      .filter((job) => {
        // Search query matching
        if (filters.searchQuery.trim()) {
          const query = filters.searchQuery.toLowerCase().trim();
          const matchTitle = job.title.toLowerCase().includes(query);
          const matchCompany = job.company.toLowerCase().includes(query);
          const matchDept = job.department.toLowerCase().includes(query);
          const matchSummary = job.summary.toLowerCase().includes(query);
          const matchRegion = job.regionCategoryLabel.toLowerCase().includes(query) || job.detailedAddress.toLowerCase().includes(query);
          const matchTech = job.techStack.some((t) => t.toLowerCase().includes(query));
          const matchRole = job.roleCategoryLabel.toLowerCase().includes(query);

          if (!matchTitle && !matchCompany && !matchDept && !matchSummary && !matchRegion && !matchTech && !matchRole) {
            return false;
          }
        }

        // Role Category
        if (filters.roleCategory !== 'all' && job.roleCategory !== filters.roleCategory) {
          return false;
        }

        // Region Category
        if (filters.regionCategory !== 'all' && job.regionCategory !== filters.regionCategory) {
          return false;
        }

        // Experience Level
        if (filters.experienceLevel !== 'all') {
          if (filters.experienceLevel === 'entry' && job.experienceLevel !== 'entry' && job.experienceLevel !== 'any') {
            return false;
          }
          if (filters.experienceLevel === 'junior' && job.experienceLevel !== 'junior' && job.experienceLevel !== 'any') {
            return false;
          }
          if (filters.experienceLevel === 'senior' && job.experienceLevel !== 'senior') {
            return false;
          }
        }

        // Company Category
        if (filters.companyCategory !== 'all' && job.companyCategory !== filters.companyCategory) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'deadline') {
          if (a.deadline === '상시채용') return 1;
          if (b.deadline === '상시채용') return -1;
          return a.deadline.localeCompare(b.deadline);
        }
        if (filters.sortBy === 'newest') {
          return b.createdAt.localeCompare(a.createdAt);
        }
        if (filters.sortBy === 'popular') {
          return b.bookmarksCount - a.bookmarksCount;
        }
        if (filters.sortBy === 'salary') {
          const parseUpperSalary = (sal: string) => {
            const matches = sal.match(/(\d+)만원|(\d+)억/g);
            return matches ? matches.length : 0;
          };
          return parseUpperSalary(b.salaryEstimated) - parseUpperSalary(a.salaryEstimated);
        }
        return 0;
      });
  }, [jobs, filters]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. Header (Navbar) */}
      <Navbar
        savedCount={savedJobIds.length}
        onOpenSaved={() => setIsSavedModalOpen(true)}
        onOpenCreateJob={() => setIsCreateModalOpen(true)}
        onOpenTrends={() => setIsTrendsModalOpen(true)}
        onResetFilters={handleResetFilters}
      />

      <main className="flex-1">
        {/* 2. Hero Section with Automotive R&D Visual & Live Search */}
        <HeroBanner
          searchQuery={filters.searchQuery}
          onSearchChange={(q) => handleFilterChange('searchQuery', q)}
          onSelectKeyword={handleSelectKeyword}
          totalJobs={jobs.length}
        />

        {/* 3. Job Filter Section (Sticky Role & Region Filter Bar) */}
        <JobFilterSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          filteredCount={filteredJobs.length}
          totalCount={jobs.length}
        />

        {/* 4. Job Posting Grid Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                조건에 맞는 채용공고가 없습니다
              </h3>
              <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                선택한 직무 또는 지역 필터에 일치하는 공고가 없습니다. 검색어를 변경하거나 필터를 초기화해보세요.
              </p>
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>전체 공고 보기 (필터 초기화)</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  isBookmarked={savedJobIds.includes(job.id)}
                  onToggleBookmark={handleToggleBookmark}
                  onSelectJob={(j) => setSelectedJob(j)}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      {/* 5. Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-slate-900">AutoCareer KR</span>
              <span className="text-slate-400">·</span>
              <span>대한민국 자동차 및 미래 모빌리티 채용 공고 큐레이션 플랫폼</span>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
              <button 
                onClick={() => setIsTrendsModalOpen(true)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                2026 모빌리티 채용 리포트
              </button>
              <button 
                onClick={() => setIsSavedModalOpen(true)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                지원 관리 현황
              </button>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                채용공고 등록
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-400">
            <p>© 2026 AutoCareer KR. All rights reserved. 대한민국 미래 모빌리티 인재를 응원합니다.</p>
            <p>본 서비스는 자동차 산업 구직자를 위한 공고 큐레이션 및 커리어 탐색 도구입니다.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          isBookmarked={savedJobIds.includes(selectedJob.id)}
          onToggleBookmark={(id) => handleToggleBookmark(id)}
          applicationStatus={applications[selectedJob.id]?.status || (savedJobIds.includes(selectedJob.id) ? 'saved' : 'none')}
          onUpdateStatus={handleUpdateApplicationStatus}
          userNotes={applications[selectedJob.id]?.notes}
        />
      )}

      {isSavedModalOpen && (
        <MyApplicationsModal
          isOpen={isSavedModalOpen}
          onClose={() => setIsSavedModalOpen(false)}
          savedJobIds={savedJobIds}
          applications={applications}
          allJobs={jobs}
          onSelectJob={(j) => setSelectedJob(j)}
          onRemoveBookmark={(id) => handleToggleBookmark(id)}
          onUpdateStatus={handleUpdateApplicationStatus}
        />
      )}

      {isCreateModalOpen && (
        <CreateJobModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onAddJob={handleAddCustomJob}
        />
      )}

      {isTrendsModalOpen && (
        <IndustryInsightsModal
          isOpen={isTrendsModalOpen}
          onClose={() => setIsTrendsModalOpen(false)}
          onFilterByKeyword={handleSelectKeyword}
        />
      )}
    </div>
  );
}
