import React, { useState } from 'react';
import { 
  X, 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  Building, 
  Calendar, 
  MapPin, 
  FileText,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { JobPosting, ApplicationStatus, UserApplication } from '../types/job';

interface MyApplicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedJobIds: string[];
  applications: Record<string, UserApplication>;
  allJobs: JobPosting[];
  onSelectJob: (job: JobPosting) => void;
  onRemoveBookmark: (jobId: string) => void;
  onUpdateStatus: (jobId: string, status: ApplicationStatus) => void;
}

export const MyApplicationsModal: React.FC<MyApplicationsModalProps> = ({
  isOpen,
  onClose,
  savedJobIds,
  applications,
  allJobs,
  onSelectJob,
  onRemoveBookmark,
  onUpdateStatus
}) => {
  const [statusFilter, setStatusFilter] = useState<'all' | ApplicationStatus>('all');

  if (!isOpen) return null;

  // Find all jobs that are either bookmarked or have an application entry
  const savedJobs = allJobs.filter((job) => {
    const isBookmarked = savedJobIds.includes(job.id);
    const hasApp = applications[job.id] && applications[job.id].status !== 'none';
    return isBookmarked || hasApp;
  });

  const filteredSavedJobs = savedJobs.filter((job) => {
    if (statusFilter === 'all') return true;
    const currentStatus = applications[job.id]?.status || (savedJobIds.includes(job.id) ? 'saved' : 'none');
    return currentStatus === statusFilter;
  });

  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case 'applied':
        return { label: '지원완료', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'document_pass':
        return { label: '서류합격', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'interview':
        return { label: '면접진행', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'final_pass':
        return { label: '최종합격', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
      case 'saved':
      default:
        return { label: '관심공고', bg: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                스크랩 및 지원 관리 현황
              </h2>
              <p className="text-xs text-slate-500">
                관심 등록한 자동차 공고와 전형 단계별 진행 현황을 관리하세요.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Category Tabs */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-100 flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'all', label: `전체 (${savedJobs.length})` },
            { id: 'saved', label: '관심 등록' },
            { id: 'applied', label: '지원 완료' },
            { id: 'document_pass', label: '서류 합격' },
            { id: 'interview', label: '면접 진행' },
            { id: 'final_pass', label: '최종 합격' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                statusFilter === tab.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-200/70'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {filteredSavedJobs.length === 0 ? (
            <div className="py-16 text-center">
              <Bookmark className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-semibold text-slate-700 mb-1">
                등록된 공고가 없습니다
              </h4>
              <p className="text-xs text-slate-500 mb-4 max-w-sm mx-auto">
                채용공고 목록에서 북마크 아이콘을 눌러 관심 있는 자동차 채용공고를 저장해보세요.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
              >
                채용공고 둘러보기
              </button>
            </div>
          ) : (
            filteredSavedJobs.map((job) => {
              const currentStatus = applications[job.id]?.status || (savedJobIds.includes(job.id) ? 'saved' : 'none');
              const badge = getStatusBadge(currentStatus);
              const note = applications[job.id]?.notes;

              return (
                <div
                  key={job.id}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                >
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onSelectJob(job);
                    }}
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                      <span className="font-bold text-slate-900">{job.company}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-blue-600">{job.roleCategoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-rose-500" />
                        {job.regionCategoryLabel}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1.5">
                      {job.title}
                    </h4>

                    {note && (
                      <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 mb-1">
                        📝 {note}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span>마감: {job.deadline}</span>
                    </div>
                  </div>

                  {/* Actions & Status Selector */}
                  <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
                    <select
                      value={currentStatus}
                      onChange={(e) => onUpdateStatus(job.id, e.target.value as ApplicationStatus)}
                      className={`text-xs font-semibold py-1.5 px-2.5 rounded-lg border focus:outline-none cursor-pointer ${badge.bg}`}
                    >
                      <option value="saved">관심 공고</option>
                      <option value="applied">지원 완료</option>
                      <option value="document_pass">서류 합격</option>
                      <option value="interview">면접 진행</option>
                      <option value="final_pass">최종 합격</option>
                    </select>

                    <button
                      onClick={() => onRemoveBookmark(job.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                      title="저장 목록에서 제거"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>총 {savedJobs.length}건 저장됨</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
};
