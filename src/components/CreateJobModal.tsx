import React, { useState } from 'react';
import { X, Plus, Building2, CheckCircle2 } from 'lucide-react';
import { JobPosting, RoleCategory, RegionCategory, ExperienceLevel, CompanyCategory } from '../types/job';
import { ROLE_CATEGORIES, REGION_CATEGORIES, COMPANY_CATEGORIES } from '../data/mockJobs';

interface CreateJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddJob: (job: JobPosting) => void;
}

export const CreateJobModal: React.FC<CreateJobModalProps> = ({
  isOpen,
  onClose,
  onAddJob
}) => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [companyCategory, setCompanyCategory] = useState<CompanyCategory>('OEM');
  const [roleCategory, setRoleCategory] = useState<RoleCategory>('sw_sdv');
  const [regionCategory, setRegionCategory] = useState<RegionCategory>('gyeonggi_south');
  const [detailedAddress, setDetailedAddress] = useState('경기도 화성시 남양연구소');
  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>('junior');
  const [experienceLabel, setExperienceLabel] = useState('경력 3~7년');
  const [salaryEstimated, setSalaryEstimated] = useState('7,000만 ~ 9,000만원');
  const [deadline, setDeadline] = useState('2026-12-15');
  const [department, setDepartment] = useState('R&D 선행개발실');
  const [techStackInput, setTechStackInput] = useState('C++, AUTOSAR, CAN, ISO 26262');
  const [summary, setSummary] = useState('');
  const [responsibilitiesInput, setResponsibilitiesInput] = useState('차량 제어기 로직 설계\n실차 시험 및 데이터 분석\n글로벌 표준 사양 대응');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !company.trim()) {
      setErrorMessage('공고 제목과 회사명을 모두 입력해주세요.');
      return;
    }
    setErrorMessage(null);

    const roleCatObj = ROLE_CATEGORIES.find((r) => r.id === roleCategory);
    const regionCatObj = REGION_CATEGORIES.find((r) => r.id === regionCategory);
    const companyCatObj = COMPANY_CATEGORIES.find((c) => c.id === companyCategory);

    const newJob: JobPosting = {
      id: `custom-job-${Date.now()}`,
      title: title.trim(),
      company: company.trim(),
      companyCategory: companyCategory === 'all' ? 'OEM' : companyCategory,
      companyCategoryLabel: companyCatObj?.label || '완성차 OEM',
      companyLogoText: company.slice(0, 4).toUpperCase(),
      companyDescription: `${company} 모빌리티 사업부`,
      roleCategory,
      roleCategoryLabel: roleCatObj?.label || '차량SW / SDV',
      regionCategory,
      regionCategoryLabel: regionCatObj?.label || '경기 남부',
      detailedAddress: detailedAddress.trim() || '경기도 연구소 거점',
      experienceLevel,
      experienceLabel,
      employmentType: '정규직',
      salaryEstimated,
      deadline: deadline || '상시채용',
      isUrgent: false,
      isFeatured: false,
      techStack: techStackInput.split(',').map((s) => s.trim()).filter(Boolean),
      department: department.trim() || '모빌리티 엔지니어링팀',
      summary: summary.trim() || '미래 모빌리티 혁신을 함께할 우수 엔지니어를 모집합니다.',
      responsibilities: responsibilitiesInput.split('\n').map((s) => s.trim()).filter(Boolean),
      requirements: ['관련 전공 학사 이상', '유관 업무 경력 보유자', '원활한 커뮤니케이션 능력'],
      preferred: ['관련 자격증 소지자', '해당 분야 프로젝트 수행 경험자'],
      benefits: ['유연근무제', '통근버스 지원', '차량 할인 혜택'],
      viewsCount: 1,
      bookmarksCount: 0,
      createdAt: '2026-11-01',
      applicationUrl: 'https://recruit.example.com'
    };

    onAddJob(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h2 className="text-base font-bold text-slate-900">
              신규 자동차 채용공고 등록
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 font-medium">
              {errorMessage}
            </div>
          )}
          <div>
            <label className="font-bold text-slate-700 block mb-1">
              공고 제목 *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예: [현대모비스] 차세대 전동화 인버터 제어 SW 개발"
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                기업명 *
              </label>
              <input
                type="text"
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="예: 현대자동차, HL만도, SK온"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                기업 형태
              </label>
              <select
                value={companyCategory}
                onChange={(e) => setCompanyCategory(e.target.value as CompanyCategory)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
              >
                {COMPANY_CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                직무 분야 (Role)
              </label>
              <select
                value={roleCategory}
                onChange={(e) => setRoleCategory(e.target.value as RoleCategory)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
              >
                {ROLE_CATEGORIES.filter((r) => r.id !== 'all').map((r) => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                근무 지역 (Region)
              </label>
              <select
                value={regionCategory}
                onChange={(e) => setRegionCategory(e.target.value as RegionCategory)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
              >
                {REGION_CATEGORIES.filter((r) => r.id !== 'all').map((r) => (
                  <option key={r.id} value={r.id}>{r.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              상세 근무지 주소 / 거점
            </label>
            <input
              type="text"
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
              placeholder="예: 경기도 화성시 남양연구소 또는 판교 알파돔시티"
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">
                경력 구분
              </label>
              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value as ExperienceLevel)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900 cursor-pointer"
              >
                <option value="entry">신입 / 인턴</option>
                <option value="junior">경력 1~7년</option>
                <option value="senior">경력 8년 이상</option>
                <option value="any">경력 무관</option>
              </select>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                예상 연봉
              </label>
              <input
                type="text"
                value={salaryEstimated}
                onChange={(e) => setSalaryEstimated(e.target.value)}
                placeholder="예: 6,800만 ~ 9,000만원"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">
                마감일
              </label>
              <input
                type="text"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="2026-12-15 또는 상시채용"
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              요구 기술 스택 (쉼표로 구분)
            </label>
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              placeholder="C++, AUTOSAR, CAN, ISO 26262, MATLAB"
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              담당 업무 요약
            </label>
            <textarea
              rows={3}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="포지션에 대한 한줄 요약 및 비전을 적어주세요."
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">
              주요 업무 (줄바꿈으로 구분)
            </label>
            <textarea
              rows={3}
              value={responsibilitiesInput}
              onChange={(e) => setResponsibilitiesInput(e.target.value)}
              placeholder="한 줄에 하나씩 주요 업무를 입력해주세요."
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-900"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="px-5 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs cursor-pointer"
            >
              공고 등록 완료
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
