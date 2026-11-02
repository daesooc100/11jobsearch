export type RoleCategory =
  | 'all'
  | 'sw_sdv'
  | 'adas_autonomous'
  | 'battery_ev'
  | 'chassis_body'
  | 'manufacturing_qa'
  | 'planning_strategy'
  | 'rd_testing';

export type RegionCategory =
  | 'all'
  | 'seoul'
  | 'gyeonggi_south'
  | 'gyeonggi_etc'
  | 'chungcheong'
  | 'yeongnam'
  | 'honam'
  | 'remote';

export type ExperienceLevel = 'all' | 'entry' | 'junior' | 'senior' | 'any';

export type CompanyCategory = 'all' | 'OEM' | 'Tier-1' | 'Battery' | 'SDV_Mobility' | 'Global';

export type ApplicationStatus = 'none' | 'saved' | 'applied' | 'document_pass' | 'interview' | 'final_pass';

export interface JobPosting {
  id: string;
  title: string;
  company: string;
  companyCategory: 'OEM' | 'Tier-1' | 'Battery' | 'SDV_Mobility' | 'Global';
  companyCategoryLabel: string;
  companyLogoText: string;
  companyDescription: string;
  
  roleCategory: RoleCategory;
  roleCategoryLabel: string;
  
  regionCategory: RegionCategory;
  regionCategoryLabel: string;
  detailedAddress: string;
  
  experienceLevel: ExperienceLevel;
  experienceLabel: string;
  
  employmentType: '정규직' | '계약직' | '채용연계형 인턴';
  salaryEstimated: string;
  
  deadline: string; // YYYY-MM-DD or '상시채용'
  isUrgent?: boolean;
  isFeatured?: boolean;
  
  techStack: string[];
  department: string;
  summary: string;
  
  responsibilities: string[];
  requirements: string[];
  preferred: string[];
  benefits: string[];
  
  viewsCount: number;
  bookmarksCount: number;
  createdAt: string;
  applicationUrl: string;
}

export interface FilterState {
  searchQuery: string;
  roleCategory: RoleCategory;
  regionCategory: RegionCategory;
  experienceLevel: ExperienceLevel;
  companyCategory: CompanyCategory;
  employmentType: string;
  sortBy: 'deadline' | 'newest' | 'popular' | 'salary';
}

export interface UserApplication {
  jobId: string;
  status: ApplicationStatus;
  updatedAt: string;
  notes?: string;
}
