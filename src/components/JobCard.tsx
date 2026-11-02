import React from 'react';
import { Bookmark, MapPin, Calendar, Building, ChevronRight, Eye } from 'lucide-react';
import { JobPosting } from '../types/job';

interface JobCardProps {
  job: JobPosting;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string, e: React.MouseEvent) => void;
  onSelectJob: (job: JobPosting) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isBookmarked,
  onToggleBookmark,
  onSelectJob
}) => {
  // Calculate remaining days for deadline
  const calculateDday = (deadline: string) => {
    if (deadline === '상시채용') return '상시';
    try {
      const today = new Date('2026-11-01');
      const target = new Date(deadline);
      const diffTime = target.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays < 0) return '마감';
      if (diffDays === 0) return 'D-Day';
      return `D-${diffDays}`;
    } catch {
      return deadline;
    }
  };

  const dday = calculateDday(job.deadline);
  const isUrgent = dday.startsWith('D-') && parseInt(dday.replace('D-', '')) <= 7;

  return (
    <article
      onClick={() => onSelectJob(job)}
      className="group bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all p-5 flex flex-col justify-between cursor-pointer relative"
    >
      <div>
        {/* Top: Company Wordmark & Category & Bookmark Button */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-slate-900">{job.company}</span>
            <span aria-hidden="true">·</span>
            <span>{job.companyCategoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-600">{job.department}</span>
          </div>

          <button
            onClick={(e) => onToggleBookmark(job.id, e)}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              isBookmarked
                ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
            title={isBookmarked ? '스크랩 해제' : '공고 스크랩'}
            aria-label="스크랩 토글"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-blue-600' : ''}`} />
          </button>
        </div>

        {/* Job Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
          {job.title}
        </h3>

        {/* Clean Unboxed Metadata with Typographic Separators (§1.A Anti-Slop Zero-Pill) */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mb-3.5">
          <span className="flex items-center gap-1 font-medium text-slate-800">
            <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
            {job.regionCategoryLabel}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{job.experienceLabel}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span>{job.employmentType}</span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="font-semibold text-slate-900">{job.salaryEstimated.split('(')[0].trim()}</span>
        </div>

        {/* Job Summary */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
          {job.summary}
        </p>

        {/* Tech Stack Tags (Subtle light grey tags) */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 text-slate-700 rounded-md"
            >
              {tech}
            </span>
          ))}
          {job.techStack.length > 4 && (
            <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
              +{job.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Action */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {job.deadline === '상시채용' ? '상시채용' : `${job.deadline} 마감`}
          </span>
          <span
            className={`font-semibold font-mono tabular-nums ${
              isUrgent ? 'text-rose-600' : 'text-blue-600'
            }`}
          >
            {dday}
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 group-hover:text-blue-600 font-medium transition-colors">
          <span>상세보기</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
