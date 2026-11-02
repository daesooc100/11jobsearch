import React from 'react';
import { Bookmark, PlusCircle, Car, TrendingUp, Search } from 'lucide-react';

interface NavbarProps {
  savedCount: number;
  onOpenSaved: () => void;
  onOpenCreateJob: () => void;
  onOpenTrends: () => void;
  onResetFilters: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  savedCount,
  onOpenSaved,
  onOpenCreateJob,
  onOpenTrends,
  onResetFilters
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <div 
          onClick={onResetFilters} 
          className="flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 group"
          role="button"
          tabIndex={0}
        >
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm group-hover:bg-blue-700 transition-colors">
            <Car className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              AutoCareer KR
            </span>
            <span className="text-[11px] font-medium text-slate-500 leading-none">
              대한민국 자동차·모빌리티 채용포털
            </span>
          </div>
        </div>

        {/* Zone 2: Clean single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={onResetFilters}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>채용공고 탐색</span>
          </button>
          
          <button
            onClick={onOpenTrends}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <TrendingUp className="w-4 h-4" />
            <span>모빌리티 채용 트렌드</span>
          </button>

          <button
            onClick={onOpenSaved}
            className="hover:text-blue-600 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer relative"
          >
            <Bookmark className="w-4 h-4" />
            <span>스크랩 및 지원관리</span>
            {savedCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full font-mono">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenSaved}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 relative"
            aria-label="관심공고 확인"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full" />
            )}
          </button>

          <button
            onClick={onOpenCreateJob}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>채용공고 등록</span>
          </button>
        </div>

      </div>
    </header>
  );
};
