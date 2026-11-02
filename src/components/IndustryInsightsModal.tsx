import React from 'react';
import { X, TrendingUp, Cpu, Battery, Car, MapPin, Award, ArrowUpRight } from 'lucide-react';
import { INDUSTRY_TRENDS } from '../data/mockJobs';

interface IndustryInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFilterByKeyword?: (keyword: string) => void;
}

export const IndustryInsightsModal: React.FC<IndustryInsightsModalProps> = ({
  isOpen,
  onClose,
  onFilterByKeyword
}) => {
  if (!isOpen) return null;

  const regionalStats = [
    { region: '경기 남부 (화성 남양연구소 · 판교 · 용인)', share: '42%', desc: '현대차 SDV 본부, 현대모비스 마북, HL만도 넥스트엠' },
    { region: '영남 (울산 EV 메가팩토리 · 부산 · 창원)', share: '24%', desc: '현대차 울산 전기차 전용공장, 르노코리아 부산, 현대위아' },
    { region: '충청 (청주 오창 에너지플랜트 · 서산 배터리)', share: '16%', desc: 'LG에너지솔루션 4680/4695 원통형 셀, SK온 서산 배터리' },
    { region: '서울 (강남 테헤란로 · 서초 양재 · 성수 IT밸리)', share: '12%', desc: '42dot, 포티투닷, 스트라드비젼, 뷰런테크놀로지, 기아 본사' },
    { region: '경기 기타 / 인천 (평택 · 이천 · 송도)', share: '6%', desc: 'KG모빌리티 평택, 콘티넨탈 이천 R&D센터' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                2026 대한민국 모빌리티 채용 동향 리포트
              </h2>
              <p className="text-xs text-slate-500">
                SDV 소프트웨어, 차세대 배터리, 자율주행 센서퓨전 채용 트렌드
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          
          {/* Key Trend Cards */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              3대 핵심 기술 트렌드 & 인재 수요
            </h3>
            <div className="space-y-3">
              {INDUSTRY_TRENDS.map((trend, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>{trend.title}</span>
                    </h4>
                    <span className="font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded text-xs">
                      {trend.growth} 수요증가
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-3">
                    {trend.desc}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-slate-500 font-medium mr-1">핵심 스택:</span>
                    {trend.keySkills.map((sk) => (
                      <button
                        key={sk}
                        onClick={() => {
                          if (onFilterByKeyword) {
                            onFilterByKeyword(sk);
                            onClose();
                          }
                        }}
                        className="px-2 py-0.5 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-mono transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>#{sk}</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Hub Share */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              지역별 모빌리티 R&D 및 제조 거점 비중
            </h3>
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              {regionalStats.map((reg, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-200/60 last:border-0 last:pb-0">
                  <div>
                    <div className="font-bold text-slate-900">{reg.region}</div>
                    <div className="text-[11px] text-slate-500">{reg.desc}</div>
                  </div>
                  <div className="text-sm font-mono font-bold text-blue-600 self-end sm:self-center">
                    {reg.share}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Reference */}
          <div className="p-4 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              2026 자동차 도메인 직무별 중위 연봉 가이드 (신입/경력 평균)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700">
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <div className="font-semibold text-slate-900">SW / SDV / 자율주행</div>
                <div className="text-blue-600 font-bold font-mono mt-0.5">7,500만 ~ 1억 1,000만</div>
                <div className="text-[11px] text-slate-500 mt-1">HPC 아키텍처, AUTOSAR, NPU</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <div className="font-semibold text-slate-900">배터리 / 전동화 (EV)</div>
                <div className="text-blue-600 font-bold font-mono mt-0.5">6,800만 ~ 9,500만</div>
                <div className="text-[11px] text-slate-500 mt-1">BMS, 셀/팩 공정기술, 전고체</div>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <div className="font-semibold text-slate-900">샤시 / 제조기술 / QA</div>
                <div className="text-blue-600 font-bold font-mono mt-0.5">6,300만 ~ 8,800만</div>
                <div className="text-[11px] text-slate-500 mt-1">EMB 브레이크, 스마트팩토리 로봇</div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50 flex justify-end">
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
