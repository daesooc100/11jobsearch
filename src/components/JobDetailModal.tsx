import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Building2, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  Bookmark, 
  ExternalLink, 
  Share2, 
  Briefcase, 
  Sparkles, 
  FileText,
  Clock,
  Car,
  ChevronRight
} from 'lucide-react';
import { JobPosting, ApplicationStatus } from '../types/job';

interface JobDetailModalProps {
  job: JobPosting | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (jobId: string) => void;
  applicationStatus: ApplicationStatus;
  onUpdateStatus: (jobId: string, status: ApplicationStatus, notes?: string) => void;
  userNotes?: string;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  applicationStatus,
  onUpdateStatus,
  userNotes = ''
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'interview_guide' | 'my_notes'>('details');
  const [notes, setNotes] = useState(userNotes);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen || !job) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('공고 링크가 클립보드에 복사되었습니다.');
  };

  const handleSaveNotes = () => {
    onUpdateStatus(job.id, applicationStatus === 'none' ? 'saved' : applicationStatus, notes);
    showToast('지원 메모가 저장되었습니다.');
  };

  // Generate role-specific automotive interview insight questions
  const getInterviewPrepQuestions = (job: JobPosting) => {
    if (job.roleCategory === 'sw_sdv') {
      return [
        'AUTOSAR Classic과 Adaptive의 아키텍처 차이점 및 SOA(Service-Oriented Architecture) 기반 차량 통신 설계 경험을 설명해주세요.',
        'SOME/IP 또는 차량용 이더넷 통신 환경에서 실시간성(Real-time)과 패킷 지연(Latency) 문제를 해결한 경험이 있나요?',
        'ISO 26262 ASIL-D 기능안전 소프트웨어 개발 시 FMEA(고장유형 및 영향분석) 및 메모리 분리(Memory Partitioning) 기법을 어떻게 적용했나요?'
      ];
    } else if (job.roleCategory === 'adas_autonomous') {
      return [
        '카메라, 레이다, 라이다 이종 센서 간 캘리브레이션 오차 및 시간 동기화(Time Synchronization) 문제를 어떻게 보정하셨나요?',
        '악천후(우천, 안개, 야간 역광) 조건에서 인지 알고리즘의 오탐(False Positive)과 미탐(False Negative)을 줄이기 위한 기법은?',
        '차량용 임베디드 칩셋(NVIDIA Orin 등)에서 딥러닝 모델의 FPS를 확보하기 위한 양자화(INT8) 및 경량화 노하우를 말씀해주세요.'
      ];
    } else if (job.roleCategory === 'battery_ev') {
      return [
        '급속 충전 시 음극 표면의 리튬 덴드라이트(Lithium Dendrite) 석출 메커니즘과 이를 억제하기 위한 BMS 전류 프로파일 설계 방안은?',
        '배터리 열폭주(Thermal Runaway) 전조 현상을 조기에 감지하기 위한 셀 전압 강하 및 내부 저항 추정 알고리즘을 설명해주세요.',
        '대용량 팩 조립 공정에서 수율 저하를 유발하는 핵심 인자(Critical-to-Quality)와 이를 관리하는 통계적 공정관리(SPC) 경험은?'
      ];
    } else {
      return [
        '차량용 부품 양산 개발 단계(APQP)에서 설계 변경(Engineering Change) 발생 시 일정과 품질을 조율한 경험이 있나요?',
        '실차 시험 및 내구 시험 중 발생한 소음/진동(NVH) 또는 부품 크랙 이슈의 근본 원인(Root-cause) 분석 접근법은?',
        '현대차그룹 또는 글로벌 완성차 표준 규격을 만족하기 위해 협력사 및 유관 부서와 협업한 대표적인 사례는 무엇인가요?'
      ];
    }
  };

  const interviewQuestions = getInterviewPrepQuestions(job);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast alert */}
        {toastMessage && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-slate-900 text-sm">{job.company}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-blue-600">{job.companyCategoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{job.department}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="공고 링크 공유"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => onToggleBookmark(job.id)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                }`}
                title={isBookmarked ? '스크랩 취소' : '공고 스크랩'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-blue-600' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
            {job.title}
          </h2>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-white p-3 rounded-xl border border-slate-200">
            <div>
              <span className="text-slate-400 block mb-0.5">근무 지역</span>
              <span className="font-semibold text-slate-900 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                {job.regionCategoryLabel}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">경력 조건</span>
              <span className="font-semibold text-slate-900 flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                {job.experienceLabel}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">예상 연봉</span>
              <span className="font-semibold text-slate-900 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                {job.salaryEstimated.split('(')[0].trim()}
              </span>
            </div>

            <div>
              <span className="text-slate-400 block mb-0.5">마감일</span>
              <span className="font-semibold text-rose-600 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                {job.deadline}
              </span>
            </div>
          </div>

          {/* Modal Tabs */}
          <div className="flex items-center gap-2 mt-4 pt-2 border-t border-slate-200/60">
            <button
              onClick={() => setActiveTab('details')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'details'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              공고 상세 및 자격요건
            </button>
            <button
              onClick={() => setActiveTab('interview_guide')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeTab === 'interview_guide'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>직무 분석 & 면접 팁</span>
            </button>
            <button
              onClick={() => setActiveTab('my_notes')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                activeTab === 'my_notes'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>지원 관리 & 메모</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: DETAILS */}
          {activeTab === 'details' && (
            <>
              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">포지션 개요</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {job.summary}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">요구 기술 스택 (Tech Stack)</h4>
                <div className="flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono bg-blue-50 text-blue-700 rounded-md border border-blue-100 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">주요 담당 업무</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements & Preferred */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    필수 지원 자격
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    우대 사항
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {job.preferred.map((pref, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-slate-400">·</span>
                        <span>{pref}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Work Location & Commute */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  상세 근무지 및 출퇴근 안내
                </h4>
                <p className="text-xs font-medium text-slate-800 mb-2">
                  {job.detailedAddress}
                </p>
                <div className="text-xs text-slate-600 space-y-1">
                  <div>· <strong>복리후생:</strong> {job.benefits.join(' · ')}</div>
                </div>
              </div>
            </>
          )}

          {/* TAB 2: INTERVIEW GUIDE */}
          {activeTab === 'interview_guide' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                <h4 className="text-sm font-bold text-blue-900 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  자동차 도메인 직무 분석 리포트
                </h4>
                <p className="text-xs text-blue-800 leading-relaxed">
                  본 포지션은 <strong>{job.company}</strong>의 <strong>{job.department}</strong> 소속으로, 
                  특히 <strong>{job.techStack.slice(0, 3).join(', ')}</strong> 실무 활용 능력이 서류 및 면접 합격의 핵심 변수입니다.
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  추천 기술 면접 기출 및 예상 질문
                </h4>
                <div className="space-y-3">
                  {interviewQuestions.map((q, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-white">
                      <div className="text-xs font-bold text-blue-600 mb-1 font-mono">
                        Q0{idx + 1}. 핵심 역량 검증
                      </div>
                      <div className="text-sm font-medium text-slate-900 leading-snug">
                        {q}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <div className="font-bold text-slate-900 mb-1">💡 합격 준비 팁</div>
                <div>· 실차 또는 HiLS 시뮬레이션 환경에서의 트러블슈팅 경험을 수치(성능 n% 개선, 지연시간 단축)로 정리하세요.</div>
                <div>· 기능안전(ISO 26262), 차량 통신(CAN/이더넷), 전동화 배터리 메커니즘 등 도메인 용어를 정확하게 사용하세요.</div>
              </div>
            </div>
          )}

          {/* TAB 3: APPLICATION STATUS & NOTES */}
          {activeTab === 'my_notes' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">
                  지원 진행 상태 관리
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'saved', label: '관심 공고' },
                    { id: 'applied', label: '지원 완료' },
                    { id: 'document_pass', label: '서류 합격' },
                    { id: 'interview', label: '면접 진행중' },
                    { id: 'final_pass', label: '최종 합격' }
                  ].map((st) => (
                    <button
                      key={st.id}
                      onClick={() => onUpdateStatus(job.id, st.id as ApplicationStatus, notes)}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                        applicationStatus === st.id
                          ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {st.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1.5">
                  나만의 전형 메모 (이력서 제출일, 면접 일정, 면접관 질문 기록 등)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="예: 11/15 서류 지원 완료, 제출 포트폴리오 버전 v3.2, 1차 직무면접 예정"
                  rows={5}
                  className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-900"
                />
                <div className="flex justify-end mt-2">
                  <button
                    onClick={handleSaveNotes}
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    메모 저장하기
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 px-6 border-t border-slate-200 bg-white flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            조회수 <span className="font-mono tabular-nums text-slate-700">{job.viewsCount}</span>회 · 
            스크랩 <span className="font-mono tabular-nums text-slate-700">{job.bookmarksCount}</span>명
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onToggleBookmark(job.id)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
              <span>{isBookmarked ? '스크랩 취소' : '공고 스크랩'}</span>
            </button>

            <a
              href={job.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (applicationStatus === 'none' || applicationStatus === 'saved') {
                  onUpdateStatus(job.id, 'applied', notes);
                }
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>원문 공고 지원하기</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
