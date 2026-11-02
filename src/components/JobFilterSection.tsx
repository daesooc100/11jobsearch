import React from 'react';
import { 
  Filter, 
  RotateCcw, 
  MapPin, 
  Briefcase, 
  Building, 
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import { 
  FilterState, 
  RoleCategory, 
  RegionCategory, 
  ExperienceLevel, 
  CompanyCategory 
} from '../types/job';
import { 
  ROLE_CATEGORIES, 
  REGION_CATEGORIES, 
  COMPANY_CATEGORIES 
} from '../data/mockJobs';

interface JobFilterSectionProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onResetFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

export const JobFilterSection: React.FC<JobFilterSectionProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  filteredCount,
  totalCount
}) => {
  const isFiltered = 
    filters.roleCategory !== 'all' ||
    filters.regionCategory !== 'all' ||
    filters.experienceLevel !== 'all' ||
    filters.companyCategory !== 'all' ||
    filters.searchQuery !== '';

  return (
    <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        
        {/* 1. Primary Filter 1: Role (직무별) Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              직무 카테고리 (Role)
            </span>
            <span className="text-xs text-slate-400">
              클릭하여 세부 직무별 공고 확인
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {ROLE_CATEGORIES.map((cat) => {
              const active = filters.roleCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onFilterChange('roleCategory', cat.id as RoleCategory)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-600'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Primary Filter 2: Region (근무지/지역별) Selector */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              근무 지역 (Region)
            </span>
            <span className="text-xs text-slate-400">
              연구소(남양·판교) 및 주요 배터리·완성차 생산 거점
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {REGION_CATEGORIES.map((region) => {
              const active = filters.regionCategory === region.id;
              return (
                <button
                  key={region.id}
                  onClick={() => onFilterChange('regionCategory', region.id as RegionCategory)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {region.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Secondary Row: Experience, Company Type, Sort & Results Bar */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          
          {/* Sub Filters Group */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Experience Dropdown */}
            <div className="relative inline-flex items-center">
              <select
                value={filters.experienceLevel}
                onChange={(e) => onFilterChange('experienceLevel', e.target.value as ExperienceLevel)}
                className="appearance-none pl-3 pr-8 py-1.5 text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">경력 구분: 전체</option>
                <option value="entry">신입 / 인턴</option>
                <option value="junior">경력 1~7년</option>
                <option value="senior">경력 8년 이상</option>
                <option value="any">경력 무관</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
            </div>

            {/* Company Type Dropdown */}
            <div className="relative inline-flex items-center">
              <select
                value={filters.companyCategory}
                onChange={(e) => onFilterChange('companyCategory', e.target.value as CompanyCategory)}
                className="appearance-none pl-3 pr-8 py-1.5 text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                {COMPANY_CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    기업 형태: {c.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 pointer-events-none" />
            </div>

            {/* Clear filters trigger */}
            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>필터 초기화</span>
              </button>
            )}
          </div>

          {/* Right: Results Count & Sort Dropdown */}
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-xs text-slate-500">
              검색 결과 <strong className="text-slate-900 font-mono tabular-nums">{filteredCount}</strong>건
              {filteredCount !== totalCount && (
                <span className="text-slate-400 text-[11px] ml-1">(전체 {totalCount}건 중)</span>
              )}
            </span>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange('sortBy', e.target.value as any)}
                className="bg-transparent font-medium text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value="deadline">마감 임박순</option>
                <option value="newest">최신 등록순</option>
                <option value="popular">인기 스크랩순</option>
                <option value="salary">예상 연봉순</option>
              </select>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
