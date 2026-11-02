import React from 'react';
import { Search, X, Sparkles, Building2, MapPin, Cpu, ShieldCheck } from 'lucide-react';
import { POPULAR_KEYWORDS } from '../data/mockJobs';

interface HeroBannerProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectKeyword: (kw: string) => void;
  totalJobs: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  searchQuery,
  onSearchChange,
  onSelectKeyword,
  totalJobs
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headlines & Search */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-2">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                2026 모빌리티 채용 큐레이션
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 font-normal">OEM · Tier-1 · 배터리 · SDV</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-3">
              자동차와 모빌리티의 미래를 만드는 <br className="hidden sm:inline" />
              <span className="text-blue-600">직무·지역별 맞춤 채용공고</span>
            </h1>

            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              현대차·기아·모비스부터 42dot, LG에너지솔루션, 글로벌 부품사까지.
              남양연구소, 판교, 오창, 울산 등 전국의 자동차 연구·양산 거점 공고를 한곳에서 검색하세요.
            </p>

            {/* Live Search Box */}
            <div className="relative mb-4">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="기업명, 직무(SW/배터리/자율주행), 기술스택(AUTOSAR, CAN, C++) 검색"
                  className="w-full pl-11 pr-10 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-md"
                    title="검색어 지우기"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Popular Search Keywords */}
            <div className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
              <span className="font-medium text-slate-700 mr-1">추천 검색어:</span>
              {POPULAR_KEYWORDS.map((keyword) => {
                const isActive = searchQuery.toLowerCase().includes(keyword.toLowerCase());
                return (
                  <button
                    key={keyword}
                    onClick={() => onSelectKeyword(keyword)}
                    className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white font-medium shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    #{keyword}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 group">
              <img
                src="/src/assets/images/hero_automotive_engineering_1793586882016.jpg"
                alt="현대 모빌리티 R&D 연구소 연구원 협업 전경"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container styling
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-300 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>검증된 모빌리티 엔지니어링 포지션</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  차세대 SDV & 전동화 플랫폼 R&D 채용 집중
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  차량 OS 커널, 800V 배터리 제어, 도심 자율주행 인지 센서퓨전 실무자를 적극 영입 중입니다.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Automotive Industry Metrics Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">현재 등록 공고</div>
              <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">{totalJobs}건</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">SW · SDV / 전동화 비중</div>
              <div className="text-lg font-bold text-slate-900 font-mono tabular-nums">72%</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">주요 R&D 연구 거점</div>
              <div className="text-sm font-semibold text-slate-900">남양 · 판교 · 오창 · 울산</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-500">신입 / 경력 맞춤 탐색</div>
              <div className="text-sm font-semibold text-slate-900">원클릭 필터링 지원</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
