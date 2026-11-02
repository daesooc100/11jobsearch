import { JobPosting } from '../types/job';

export const INITIAL_JOBS: JobPosting[] = [
  {
    id: 'hkmc-sdv-001',
    title: '차량 제어 도메인 컨트롤러(DCU) 임베디드 SW 개발',
    company: '현대자동차',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'HYUNDAI',
    companyDescription: '글로벌 톱3 자동차 제조사로 스마트 모빌리티 솔루션 프로바이더로 도약하고 있습니다.',
    roleCategory: 'sw_sdv',
    roleCategoryLabel: '차량SW / SDV',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (화성/남양)',
    detailedAddress: '경기도 화성시 남양읍 현대연구소로 150 (남양연구소)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~7년',
    employmentType: '정규직',
    salaryEstimated: '7,200만 ~ 9,500만원 (성과급 별도)',
    deadline: '2026-11-25',
    isUrgent: true,
    isFeatured: true,
    techStack: ['C/C++', 'AUTOSAR Adaptive', 'CAN/LIN/Ethernet', 'ISO 26262', 'RTOS', 'Vector CANoe'],
    department: 'SDV본부 차량제어SW개발팀',
    summary: 'SDV(Software Defined Vehicle) 시대를 선도할 차세대 고성능 제어기 기반 차량 핵심 제어 로직 및 통신 소프트웨어 아키텍처를 설계합니다.',
    responsibilities: [
      '차세대 통합 도메인 컨트롤러(DCU)용 AUTOSAR Adaptive 플랫폼 포팅 및 미들웨어 최적화',
      '차량 내 이더넷(SOME/IP, DoIP) 및 고속 CAN FD 기반 분산 제어 통신 스택 개발',
      '기능안전(ISO 26262 ASIL-D) 표준 기반 제어 소프트웨어 아키텍처 설계 및 FMEA 검증',
      '실차 및 HiLS(Hardware-in-the-Loop Simulation) 환경에서의 SW 통합 검증 및 디버깅'
    ],
    requirements: [
      '컴퓨터공학, 전자/전기공학, 제어계측 등 유관 학사 이상',
      '임베디드 C/C++ 개발 실무 경력 3년 이상',
      'AUTOSAR (Classic 또는 Adaptive) 기반 상용 양산 프로젝트 경험',
      '차량 통신 프로토콜(CAN, LIN, Ethernet) 분석 및 패킷 디버깅 능력'
    ],
    preferred: [
      'ISO 26262 기능안전 프로세스 인증 경험자 또는 전문가 자격 보유자',
      'QNX, Linux 기반 차량용 OS 커널 튜닝 및 BSP 포팅 경험',
      'Vector Tool(CANoe, CANalyzer, DaVinci Configurator) 숙련자'
    ],
    benefits: [
      '차량 구매 지원 (근속연수별 최대 30% 할인)',
      '남양연구소 출퇴근 통근버스 서울/경기 전역 운행',
      '사내 어린이집 및 종합 건강검진 지원',
      '자율 시차출퇴근제 (유연근무제)'
    ],
    viewsCount: 1420,
    bookmarksCount: 284,
    createdAt: '2026-10-28',
    applicationUrl: 'https://talent.hyundai.com'
  },
  {
    id: 'mobis-adas-002',
    title: '자율주행 인지 센서퓨전(카메라·라이다·레이다) 알고리즘 연구원',
    company: '현대모비스',
    companyCategory: 'Tier-1',
    companyCategoryLabel: '부품사 Tier-1',
    companyLogoText: 'MOBIS',
    companyDescription: '미래 모빌리티 핵심 기술인 전동화, 자율주행, IVI를 주도하는 글로벌 부품 기업입니다.',
    roleCategory: 'adas_autonomous',
    roleCategoryLabel: '자율주행 / ADAS',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (용인/마북)',
    detailedAddress: '경기도 용인시 기흥구 마북로240번길 17-2 (기술연구소)',
    experienceLevel: 'junior',
    experienceLabel: '경력 2년 이상 / 석·박사 우대',
    employmentType: '정규직',
    salaryEstimated: '7,000만 ~ 9,200만원',
    deadline: '2026-11-20',
    isUrgent: true,
    isFeatured: true,
    techStack: ['C++', 'Python', 'PyTorch', 'ROS2', 'Kalman Filter', 'Point Cloud', 'TensorRT'],
    department: '미래모빌리티연구소 자율주행선행개발실',
    summary: '레벨 3/4 도심 자율주행을 위한 이종 센서(Front/Corner Radar, LiDAR, Surround Camera) 실시간 퓨전 및 트래킹 알고리즘을 개발합니다.',
    responsibilities: [
      '복합 환경(야간/우천/안개) 하 카메라-레이다-라이다 다중 객체 검출 및 상태 추정 알고리즘 개발',
      'Extended Kalman Filter, Hungarian Algorithm 기반 멀티 타겟 트래킹(MOT) 파이프라인 최적화',
      '차량용 임베디드 AI NPU 칩셋(NVIDIA Orin / Ambarella) 타겟 신경망 양자화 및 경량화(TensorRT)',
      'PG(Proving Ground) 실차 주행 데이터 수집 및 실패 케이스 정밀 분석'
    ],
    requirements: [
      '컴퓨터비전, 로보틱스, 인공지능, 제어공학 관련 전공 석사 이상 혹은 이에 준하는 실무 경력',
      'C++를 활용한 실시간 알고리즘 최적화 및 상용화 역량',
      '다중 센서 캘리브레이션 및 포인트클라우드/이미지 처리 프로젝트 경험'
    ],
    preferred: [
      '자율주행 경진대회 입상자 또는 관련 탑티어 학회(CVPR, ICCV, IROS, ICRA) 논문 게재자',
      'ISO 21448(SOTIF) 의도된 기능의 안전성 가이드라인 이해',
      '실차 주행 테스트 및 데이터 로깅 파이프라인 구축 유경험자'
    ],
    benefits: [
      '자기계발비 연 200만원 지원',
      '복지포인트 및 사내 피트니스 센터 완비',
      '대학원 진학 및 해외 학회 참석 지원'
    ],
    viewsCount: 1890,
    bookmarksCount: 342,
    createdAt: '2026-10-30',
    applicationUrl: 'https://recruit.mobis.co.kr'
  },
  {
    id: 'lgensol-bat-003',
    title: '차세대 원통형 46시리즈 배터리 셀 공정 및 생산기술 엔지니어',
    company: 'LG에너지솔루션',
    companyCategory: 'Battery',
    companyCategoryLabel: '배터리/전장',
    companyLogoText: 'LG ES',
    companyDescription: '글로벌 전기차 배터리 시장을 선도하는 고에너지밀도 이차전지 전문 기업입니다.',
    roleCategory: 'battery_ev',
    roleCategoryLabel: '배터리 / 전동화',
    regionCategory: 'chungcheong',
    regionCategoryLabel: '충청 (청주/오창)',
    detailedAddress: '충청북도 청주시 청원구 오창읍 과학산업2로 29 (오창 에너지플랜트)',
    experienceLevel: 'entry',
    experienceLabel: '신입 / 경력 1~3년',
    employmentType: '정규직',
    salaryEstimated: '5,600만 ~ 7,500만원 (인센티브 별도)',
    deadline: '2026-11-28',
    isUrgent: false,
    isFeatured: true,
    techStack: ['CAD/CATIA', 'PLC', 'Minitab', '스마트팩토리', '코팅/와인딩 공정', '열해석'],
    department: '원통형배터리 생산기술센터 공정혁신팀',
    summary: '글로벌 완성차 메이커에 탑재되는 차세대 46-Series 고용량 원통형 배터리 양산 라인의 초격차 공정 품질 및 수율 향상을 담당합니다.',
    responsibilities: [
      '극판 공정(믹싱, 코팅, 롤프레싱, 슬리팅) 고속화 조건 최적화 및 불량 분석',
      '원통형 4695 셀 조립(와인딩, 탭 웰딩, 캔 인서트) 자동화 설비 공정 셋업',
      'FMEA 기반 양산 라인 수율 저해요인 발굴 및 통계적 공정관리(SPC) 수행',
      '신규 글로벌 기가팩토리 라인 셋업 표준화 및 해외 기술 전수'
    ],
    requirements: [
      '화학공학, 신소재공학, 기계공학, 산업공학 등 관련 전공 학사 이상',
      '이차전지 제조 공정 또는 유관 정밀 제조 산업에 대한 기본 지식 보유자',
      '신입 또는 양산 제조 라인 엔지니어링 경력 1~3년'
    ],
    preferred: [
      '원통형 또는 파우치형 리튬이온 배터리 셀 제조 경험자',
      '공정 분석 툴(Minitab, JMP) 활용 및 식스시그마(GB/BB) 자격증 보유자',
      '어학 우수자 (글로벌 공장 협업 가능한 비즈니스 영어)'
    ],
    benefits: [
      '오창 사택/기숙사 제공 및 통근버스 운행',
      '주거안정 대출 지원 제도',
      'LG 패밀리 계열사 임직원 할인몰 제공'
    ],
    viewsCount: 1650,
    bookmarksCount: 215,
    createdAt: '2026-10-25',
    applicationUrl: 'https://careers.lg.com'
  },
  {
    id: '42dot-sdv-004',
    title: 'Autonomous Vehicle OS Platform & E/E Middleware Engineer',
    company: '포티투닷 (42dot)',
    companyCategory: 'SDV_Mobility',
    companyCategoryLabel: '모빌리티/SDV 테크',
    companyLogoText: '42dot',
    companyDescription: '현대차그룹의 글로벌 소프트웨어 센터로 SDV OS와 자율주행 플랫폼을 구축합니다.',
    roleCategory: 'sw_sdv',
    roleCategoryLabel: '차량SW / SDV',
    regionCategory: 'seoul',
    regionCategoryLabel: '서울 (강남 테헤란로)',
    detailedAddress: '서울특별시 강남구 테헤란로 152 (강남파이낸스센터) & 판교오피스',
    experienceLevel: 'junior',
    experienceLabel: '경력 3년 이상',
    employmentType: '정규직',
    salaryEstimated: '8,000만 ~ 1억 2,000만원 (스톡옵션 협의)',
    deadline: '상시채용',
    isUrgent: false,
    isFeatured: true,
    techStack: ['Rust', 'Modern C++', 'Linux Kernel', 'DDS', 'gRPC', 'CI/CD', 'Docker'],
    department: 'SDV OS Platform Core Architecture Group',
    summary: '하드웨어 중심의 차량 구조를 클라우드 네이티브 아키텍처로 전환하는 차세대 차량 통합 운영체제(AOS)와 미들웨어를 개발합니다.',
    responsibilities: [
      '차량 내 고성능 컴퓨트 유닛(HPC) 기반 미들웨어 프레임워크(DDS/Zero-Copy IPC) 설계',
      '실시간 제어와 인포테인먼트가 공존하는 가상화(Hypervisor) 환경 리눅스 커널 최적화',
      '차량 기능 OTA(Over-The-Air) 무중단 롤링 업데이트 파이프라인 개발',
      '센서 및 액추에이터 추상화 계층(HAL) 표준화 인터페이스 정의'
    ],
    requirements: [
      '리눅스 환경 C++17/20 또는 Rust 프로그래밍 능숙자',
      '멀티스레딩, 네트워크 통신 소켓 프로그래밍, IPC 메커니즘에 대한 깊은 이해',
      '임베디드 리눅스 또는 분산 시스템 아키텍처 실무 경험'
    ],
    preferred: [
      'SOME/IP, ROS2, Zenoh, FastDDS 등 모빌리티/로보틱스 통신 미들웨어 프로젝트 경험',
      '오픈소스 커널 기여 경험 또는 Yocto 프로젝트 기반 커스텀 OS 빌드 경험',
      '차량 E/E(전기/전자) 시스템 구조에 대한 열정'
    ],
    benefits: [
      '주 2회 원격근무(하이브리드 워크)',
      '최고급 맥북 프로 또는 고성능 리눅스 워크스테이션 제공',
      '점심/저녁 식대 전액 지원 및 무제한 스낵바',
      '자율 복장 및 수평적 호칭 문화'
    ],
    viewsCount: 2210,
    bookmarksCount: 489,
    createdAt: '2026-10-31',
    applicationUrl: 'https://42dot.ai/careers'
  },
  {
    id: 'hlmando-chassis-005',
    title: '차세대 전동식 통합 브레이크(IDB/EMB) 샤시 제어 로직 설계',
    company: 'HL만도',
    companyCategory: 'Tier-1',
    companyCategoryLabel: '부품사 Tier-1',
    companyLogoText: 'HL MANDO',
    companyDescription: '전 세계 완성차에 자율주행 및 샤시 전동화 부품(제동, 조향, 현가)을 공급하는 최고 수준의 기술 기업입니다.',
    roleCategory: 'chassis_body',
    roleCategoryLabel: '샤시 / 차체 / 의장',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (성남/판교)',
    detailedAddress: '경기도 성남시 분당구 판교역로 146번길 20 (넥스트엠 판교 R&D센터)',
    experienceLevel: 'junior',
    experienceLabel: '경력 4~8년',
    employmentType: '정규직',
    salaryEstimated: '6,800만 ~ 8,800만원',
    deadline: '2026-11-23',
    isUrgent: true,
    isFeatured: false,
    techStack: ['MATLAB/Simulink', 'Model-Based Design', 'C', '샤시제어', 'ESP/ABS', 'dSPACE HiLS'],
    department: '브레이크BU 제어시스템선행개발팀',
    summary: '유압 파이프라인을 완전히 배제하고 모터로 각 바퀴를 직접 제어하는 미래 순수 전동 브레이크(EMB: Electro-Mechanical Brake) 제어로직을 개발합니다.',
    responsibilities: [
      '전동식 브레이크 액추에이터 제어 알고리즘(위치/토크/클램핑 포스 피드백 제어) 모델링',
      'Matlab/Simulink 기반 제어 로직 MBD(Model Based Design) 설계 및 자동 코드 생성',
      '차량 동역학 제어(ESC, ABS, 회생제동 협조제어) 연동 시뮬레이션 및 튜닝',
      '동계 가혹 시험(스웨덴/뉴질랜드 혹한기 시험장) 실차 평가 대응 및 데이터 분석'
    ],
    requirements: [
      '기계공학, 제어계측, 메카트로닉스, 미래자동차학 학사 이상',
      'Matlab/Simulink를 활용한 제어로직 개발 실무 4년 이상',
      '모터 제어(BLDC/PMSM) 또는 유압/샤시 제어 시스템 지식'
    ],
    preferred: [
      '기능안전 ISO 26262 Part 6 소프트웨어 개발 프로세스 경험자',
      'dSPACE, Typhoon HiLS 환경에서의 실시간 시뮬레이션 경험',
      '차량 동역학 소프트웨어(CarSim, CarMaker) 능숙자'
    ],
    benefits: [
      '판교역 인접 최첨단 R&D 빌딩',
      '유연근무제 및 리프레시 휴가 지원',
      '차량 구입 보조금 및 자녀 학자금 지원'
    ],
    viewsCount: 1120,
    bookmarksCount: 176,
    createdAt: '2026-10-27',
    applicationUrl: 'https://mando.recruiter.co.kr'
  },
  {
    id: 'samsungsdi-bat-006',
    title: '전고체 배터리(All Solid State) 고체전해질 양산화 기술 개발',
    company: '삼성SDI',
    companyCategory: 'Battery',
    companyCategoryLabel: '배터리/전장',
    companyLogoText: 'SAMSUNG SDI',
    companyDescription: '초격차 기술력으로 친환경 에너지와 첨단 소재의 미래를 열어가는 삼성그룹 핵심 계열사입니다.',
    roleCategory: 'battery_ev',
    roleCategoryLabel: '배터리 / 전동화',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (수원/기흥)',
    detailedAddress: '경기도 수원시 영통구 삼성로 130 (삼성전자 수원사업장 SDI 연구동)',
    experienceLevel: 'senior',
    experienceLabel: '경력 5년 이상 / 박사 학위자',
    employmentType: '정규직',
    salaryEstimated: '8,500만 ~ 1억 2,500만원 (삼성 OPI 별도)',
    deadline: '2026-12-05',
    isUrgent: false,
    isFeatured: true,
    techStack: ['황화물계 고체전해질', 'XRD/SEM', 'EIS 임피던스분석', 'Dry Room', '셀 안전성'],
    department: '연구소 차세대배터리사업화추진팀',
    summary: '꿈의 배터리로 불리는 전고체 배터리(ASB) 파일럿 라인 검증 및 상용 양산 공정 메커니즘을 규명하고 수율을 확보합니다.',
    responsibilities: [
      '황화물계 고체전해질 대량 합성 공정 레시피 개발 및 입도/분산성 제어',
      '고체전해질-양극 복합재 슬러리 무용매 건식 전극 코팅 공정 연구',
      '충방전 사이클 시 계면 저항 증가 메커니즘 규명 및 덴드라이트 형성 억제 기술 개발',
      '완성차 OEM 납품용 프로토타입 파우치 셀 성능 및 가혹 조건 안전성 평가'
    ],
    requirements: [
      '재료공학, 무기화학, 응용화학, 에너지공학 석/박사 학위 소지자',
      '이차전지 또는 고체이온전도체 연구/개발 경력 5년 이상',
      '전기화학 분석 툴(Cycler, Solartron EIS, 광학/전자현미경) 심층 분석 능력'
    ],
    preferred: [
      '국내외 배터리사 또는 연구기관 전고체 셀 제작 프로젝트 주도 경험자',
      '양극/음극 건식 전극 기술 및 무음극(Anode-less) 기술 이해 보유자'
    ],
    benefits: [
      '삼성 최고 수준의 성과 인센티브 (OPI/TAI)',
      '수원/기흥 및 서울권 셔틀버스 상시 지원',
      '사내 최고급 의료시설 및 종합건강검진 지원'
    ],
    viewsCount: 2340,
    bookmarksCount: 388,
    createdAt: '2026-10-29',
    applicationUrl: 'https://www.samsungcareers.com'
  },
  {
    id: 'kia-pbv-007',
    title: 'PBV(목적기반차량) 글로벌 비즈니스 솔루션 및 상품 전략 기획',
    company: '기아 (Kia)',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'KIA',
    companyDescription: '지속 가능한 모빌리티 솔루션을 제공하며 혁신적인 디자인과 PBV 생태계를 선도하는 글로벌 자동차 기업입니다.',
    roleCategory: 'planning_strategy',
    roleCategoryLabel: '기획 / 사업 / 전략',
    regionCategory: 'seoul',
    regionCategoryLabel: '서울 (양재동 본사)',
    detailedAddress: '서울특별시 서초구 헌릉로 12 (기아 양재동 본사)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~6년',
    employmentType: '정규직',
    salaryEstimated: '6,800만 ~ 8,900만원',
    deadline: '2026-11-22',
    isUrgent: true,
    isFeatured: false,
    techStack: ['B2B Fleet 전략', '모빌리티 서비스 기획', 'FMS', '시장조사', '데이터분석', '영어 커뮤니케이션'],
    department: 'PBV사업부 비즈니스솔루션기획팀',
    summary: '전기차 전용 플랫폼 기반의 PBV(PV5, PV7 등) 차량 라인업과 연계된 글로벌 B2B 플릿(Fleet) 관제 서비스 및 비즈니스 모델을 기획합니다.',
    responsibilities: [
      '글로벌 물류/택시/모빌리티 사업자(Uber, CJ대한통운 등) 니즈 분석 및 맞춤형 PBV 컨버전 사양 기획',
      '차량 데이터 기반 FMS(Fleet Management System) API 연동 비즈니스 패키지 상품화',
      '북미/유럽 친환경 상용차 시장 규제 분석 및 진출 타깃 세그먼트 전략 수립',
      '소프트웨어/하드웨어 파트너사와의 제휴 협력 체계 구축'
    ],
    requirements: [
      '학사 이상, 상경계열, 산업공학, 모빌리티 유관 전공 우대',
      '모빌리티 서비스 기획, 전략 컨설팅, 자동차 B2B 영업기획 경력 3년 이상',
      '비즈니스 영어 회화 및 영문 문서 작성 원활자 (글로벌 바이어 미팅 필수)'
    ],
    preferred: [
      '커넥티드카 FMS 서비스 런칭 또는 물류 IT 플랫폼 기획 유경험자',
      'SQL, Python 등 비즈니스 데이터 추출 및 분석 역량'
    ],
    benefits: [
      '양재동 사옥 역세권 셔틀 운영',
      '신차 할인 혜택 및 연차 사용 100% 장려',
      '통신비 지원 및 복지카드 지급'
    ],
    viewsCount: 1310,
    bookmarksCount: 204,
    createdAt: '2026-10-26',
    applicationUrl: 'https://career.kia.com'
  },
  {
    id: 'hyundai-factory-008',
    title: '울산 EV 메가팩토리 로봇 자동화 공정 및 스마트 제조기술 엔지니어',
    company: '현대자동차',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'HYUNDAI',
    companyDescription: '신설 울산 전기차 전용 공장의 첨단 로봇 지능화 제조 라인을 운영 및 구축합니다.',
    roleCategory: 'manufacturing_qa',
    roleCategoryLabel: '생산기술 / 제조 / 품질',
    regionCategory: 'yeongnam',
    regionCategoryLabel: '영남 (울산 공장)',
    detailedAddress: '울산광역시 북구 염포로 700 (현대자동차 울산공장 스마트EV 생산센터)',
    experienceLevel: 'junior',
    experienceLabel: '경력 2~6년',
    employmentType: '정규직',
    salaryEstimated: '7,000만 ~ 9,300만원',
    deadline: '2026-12-02',
    isUrgent: false,
    isFeatured: true,
    techStack: ['산업용 다관절 로봇', 'PLC 프로그래밍', '디지털 트윈', '비전 검사', '스마트팩토리', 'MES'],
    department: '생산기술본부 스마트팩토리설계실',
    summary: '인간과 로봇이 협업하는 차세대 전기차 조립 라인의 로봇 모션 제어, 비전 AI 결함 검출, 디지털 트윈 라인 시뮬레이션을 구현합니다.',
    responsibilities: [
      '스마트 제조 라인 산업용 로봇(현대로보틱스, KUKA, FANUC) 티칭 및 셀 오프라인 시뮬레이션',
      'PLC 및 센서 네트워크와 생산 정보 시스템(MES) 간 실시간 통신 인터페이스 연동',
      '배터리 팩 안착 및 전동화 구동계 조립 비전 가이드 시스템 정확도 튜닝',
      '공정 병목 구간 사이클 타임(Tact Time) 단축 및 설비 종합 효율(OEE) 극대화'
    ],
    requirements: [
      '기계공학, 전기전자, 메카트로닉스 등 이공계열 학사 이상',
      '자동차 조립 라인 또는 정밀 기계 설비 셋업 경력 2년 이상',
      '산업용 로봇 프로그래밍 및 PLC 제어 경험 필수'
    ],
    preferred: [
      'Siemens Process Simulate, Tecnomatix 등 라인 시뮬레이션 툴 활용 능력자',
      '스마트공장 데이터 수집(OPC-UA, MQTT) 구축 경험',
      '국가기술자격증(메카트로닉스기사, 전기기사, 일반기계기사) 보유자'
    ],
    benefits: [
      '울산 현대차 사택 아파트 제공 또는 주거 정착금 지원',
      '사내 건강관리센터 및 수영장/골프연습장 무료 이용',
      '자녀 대학 학자금 전액 지원'
    ],
    viewsCount: 1780,
    bookmarksCount: 265,
    createdAt: '2026-10-31',
    applicationUrl: 'https://talent.hyundai.com'
  },
  {
    id: 'bosch-powertrain-009',
    title: '차량 전동화 eAxle 인버터 제어 소프트웨어 엔지니어 (Software Calibration)',
    company: '보쉬 코리아 (Bosch)',
    companyCategory: 'Global',
    companyCategoryLabel: '외국계 모빌리티',
    companyLogoText: 'BOSCH',
    companyDescription: '전 세계 1위 글로벌 자동차 부품 및 전장 시스템 기술을 공급하는 독일계 모빌리티 테크 기업입니다.',
    roleCategory: 'sw_sdv',
    roleCategoryLabel: '차량SW / SDV',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (용인)',
    detailedAddress: '경기도 용인시 기흥구 용구대로 2461번길 9 (한국로버트보쉬 본사 기술센터)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3년 이상',
    employmentType: '정규직',
    salaryEstimated: '6,700만 ~ 9,000만원',
    deadline: '2026-11-19',
    isUrgent: true,
    isFeatured: false,
    techStack: ['INCA', 'C/C++', '모터 제어(FOC)', '인버터', 'CANape', 'Vector', 'ASAM MCD'],
    department: 'Electrified Motion Control Engineering',
    summary: '차세대 800V SiC(탄화규소) 인버터 기반 전기 구동 유닛(eAxle)의 모터 자속 기준 제어(FOC) 및 실차 소프트웨어 캘리브레이션을 수행합니다.',
    responsibilities: [
      '영구자석 동기모터(PMSM) 구동을 위한 벡터 제어(Field Oriented Control) 튜닝 및 약계자 제어',
      'ETAS INCA, CANape를 활용한 다이나모 시험 및 실차 가속/감속 드라이브빌리티 캘리브레이션',
      '인버터 과전류, 과전압, 과열 보호 로직 개발 및 열악 환경 안전 정지 페일세이프(Fail-Safe) 구현',
      '독일 본사 R&D 엔지니어링 팀과의 주기적 기술 화상 미팅 및 공동 솔루션 개발'
    ],
    requirements: [
      '전기/전자공학, 제어공학 전공 학사 이상',
      '모터 인버터 제어 또는 파워트레인 캘리브레이션 3년 이상 유경험자',
      '비즈니스 영어 능통자 (독일 본사 및 해외 연구소와 일상 협업 가능)'
    ],
    preferred: [
      'ETAS INCA, Vector CANape 활용 능숙자',
      'SiC 전력반도체 특성 및 스위칭 제어 알고리즘 이해자',
      '글로벌 자동차 부품사 또는 모터 개발사 경력'
    ],
    benefits: [
      '선택적 근로시간제 및 주 2일 재택근무',
      '글로벌 보쉬 해외 파견 및 교환 근무 프로그램 기회',
      '원어민 1:1 어학교육비 전액 지원'
    ],
    viewsCount: 1450,
    bookmarksCount: 228,
    createdAt: '2026-10-24',
    applicationUrl: 'https://www.bosch.co.kr/careers'
  },
  {
    id: 'stradvision-sdv-010',
    title: '딥러닝 기반 임베디드 차량 비전 인지 엔진 (SVNet) 최적화 엔지니어',
    company: '스트라드비젼 (StradVision)',
    companyCategory: 'SDV_Mobility',
    companyCategoryLabel: '모빌리티/SDV 테크',
    companyLogoText: 'STRADVISION',
    companyDescription: '글로벌 유수 OEM 차량 수백만 대에 탑재된 초경량 딥러닝 기반 첨단 운전자 보조 시스템(ADAS) 소프트웨어 전문 기업입니다.',
    roleCategory: 'adas_autonomous',
    roleCategoryLabel: '자율주행 / ADAS',
    regionCategory: 'seoul',
    regionCategoryLabel: '서울 (강남구/포항)',
    detailedAddress: '서울특별시 강남구 테헤란로 501 브이플렉스 7층',
    experienceLevel: 'any',
    experienceLabel: '신입 / 경력 무관',
    employmentType: '정규직',
    salaryEstimated: '5,500만 ~ 8,500만원',
    deadline: '2026-12-10',
    isUrgent: false,
    isFeatured: false,
    techStack: ['C/C++', 'CUDA', 'ARM NEON', '양자화(Quantization)', 'Deep Learning', 'Tegra/TI/Renesas SoC'],
    department: 'Core Algorithm Deployment Lab',
    summary: '제한된 연산 리소스를 가진 차량용 SoC(TI, Renesas, Qualcomm)에서 딥러닝 객체 검출 모델이 60fps 이상으로 동작하도록 최적화합니다.',
    responsibilities: [
      '딥러닝 모델(차선, 차량, 보행자, 도로 표지판 감지)의 INT8/FP16 저비트 양자화 파이프라인 개발',
      'ARM NEON 어셈블리 및 타깃 DSP/NPU 전용 벡터 인스트럭션 기반 커널 최적화',
      '오토사(AUTOSAR) 래퍼 인터페이스 개발 및 타겟 평가 보드 벤치마크 툴 작성',
      '글로벌 티어원 고객사 납품용 SDK 패키징 및 기술 문서 작성'
    ],
    requirements: [
      'C/C++ 프로그래밍 언어에 대한 탁월한 이해와 디버깅 능력',
      '컴퓨터 구조, 메모리 계층 구조 및 캐시 최적화 원리에 대한 지식',
      '딥러닝 기본 프레임워크(PyTorch, ONNX) 활용 능력'
    ],
    preferred: [
      '임베디드 타겟 보드(Raspberry Pi, Jetson, TI TDA4) 최적화 프로젝트 경험',
      'SIMD 명령어 튜닝 또는 GPU 쉐이더/CUDA 개발 경험자',
      '알고리즘 문제해결 대회(PS/BOJ) 고득점자'
    ],
    benefits: [
      '자율 출퇴근 및 완전 자율 복장',
      '점심 및 저녁 식대 100% 실비 지원',
      '최신 개발 장비 풀세트(4K 듀얼 모니터, 고급 의자)'
    ],
    viewsCount: 1610,
    bookmarksCount: 290,
    createdAt: '2026-10-27',
    applicationUrl: 'https://stradvision.com/careers'
  },
  {
    id: 'hyundai-crash-011',
    title: '전기차 전용 플랫폼 실차 충돌 안전 및 승객 보호 시스템 안전평가 연구원',
    company: '현대자동차',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'HYUNDAI',
    companyDescription: '글로벌 안전 평가(IIHS TSP+, Euro NCAP 5-Star)를 휩쓰는 세계 최고 수준의 충돌 안전 시험 센터입니다.',
    roleCategory: 'rd_testing',
    roleCategoryLabel: 'R&D / 시험평가',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (화성/남양)',
    detailedAddress: '경기도 화성시 남양읍 현대연구소로 150 (안전시험동 충돌시험장)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~8년',
    employmentType: '정규직',
    salaryEstimated: '7,300만 ~ 9,600만원',
    deadline: '2026-11-27',
    isUrgent: false,
    isFeatured: false,
    techStack: ['LS-DYNA', '실차 충돌 시험', '더미(Dummy) 계측', 'NCAP 규제', '초고장력강/알루미늄', '초고속카메라'],
    department: 'R&D본부 차량안전개발센터 실차안전시험팀',
    summary: '차세대 대형 전기 SUV 및 고전압 배터리 팩 파손 방지를 위한 정면, 측면, 옵셋 실차 충돌 시험을 주관하고 승객 상해를 최소화합니다.',
    responsibilities: [
      'Euro NCAP, US IIHS 최신 충돌 규제 대응 실차 충돌 시험 프로토콜 기획 및 계측 셋업',
      '충돌 시험용 인체 모형(THOR 더미, WorldSID) 센서 캘리브레이션 및 상해치 데이터 분석',
      '비선형 유한요소해석(LS-DYNA) 해석 결과와 실차 계측 데이터(로드셀, 가속도계) 상관관계 검증',
      '에어백 전개 타이밍 맵핑 및 차체 하부 고전압 배터리 변형량 세이프티 마진 확보'
    ],
    requirements: [
      '기계공학, 자동차공학, 항공우주공학 학사 이상',
      '차량 충돌 안전 시험 또는 CAE 구조 해석 실무 경력 3년 이상',
      '글로벌 충돌 안전 법규(FMVSS, ECE, NCAP) 지식'
    ],
    preferred: [
      'LS-DYNA, Primer, HyperMesh 능숙자',
      '실차 시험 센서 로깅 툴(DEWESoft, Kyowa) 취급 유경험자',
      '초고장력 강판, 핫스탬핑 및 복합소재 차체 특성 이해자'
    ],
    benefits: [
      '남양연구소 최고 수준의 R&D 시설 및 연구장려수당',
      '주거안정 저리 대출 지원',
      '사내 체육관, 수영장, 한식/양식/샐러드 카페테리아'
    ],
    viewsCount: 1540,
    bookmarksCount: 198,
    createdAt: '2026-10-29',
    applicationUrl: 'https://talent.hyundai.com'
  },
  {
    id: 'kgm-chassis-012',
    title: '신차 전기 SUV 차체 구조 설계 및 NVH 정숙성 개발',
    company: 'KG모빌리티',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'KGM',
    companyDescription: '정통 SUV 헤리티지와 미래 친환경 모빌리티 기술을 결합하여 새로운 역사를 써내려가는 완성차 기업입니다.',
    roleCategory: 'chassis_body',
    roleCategoryLabel: '샤시 / 차체 / 의장',
    regionCategory: 'gyeonggi_etc',
    regionCategoryLabel: '경기 기타 (평택)',
    detailedAddress: '경기도 평택시 동삭로 455-12 (KG모빌리티 본사 디자인/연구소)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~7년',
    employmentType: '정규직',
    salaryEstimated: '6,200만 ~ 8,000만원',
    deadline: '2026-11-30',
    isUrgent: false,
    isFeatured: false,
    techStack: ['CATIA V5', '차체 BIW 설계', 'NVH 소음진동', '구조강성 해석', '프레스/용접 검토'],
    department: '기술연구소 차체설계팀',
    summary: '차세대 패밀리 전기 SUV의 차체 골격(BIW: Body in White) 경량화 설계와 로드 노이즈, 모터 고주파 소음을 차단하는 NVH 설계를 전담합니다.',
    responsibilities: [
      'CATIA V5를 이용한 언더바디 및 상부 차체 모듈 3D 형상 모델링 및 2D 양산 도면 출도',
      '배터리 장착부 비틀림 강성 확보 및 알루미늄 다이캐스팅 부품 결합 구조 검토',
      '풍절음, 노면음, 모터 감속기 피칭 소음 저감을 위한 흡차음 패키지 사양 최적화',
      '프레스 성형성 및 차체 공장 자동화 로봇 용접 타점 간섭 유효성 검토'
    ],
    requirements: [
      '기계공학, 자동차공학 전공 학사 이상',
      'CATIA를 활용한 차체 또는 의장 부품 설계 실무 경력 3년 이상',
      '차체 제조 공법(스팟용접, 구조용 접착제, 롤포밍)에 대한 이해'
    ],
    preferred: [
      'EV 전용 플랫폼 배터리 케이스 탑재 차체 개발 경험자',
      'NVH 주행 소음 시험 및 계측 분석 경험자',
      '평택 인근 거주자 우대'
    ],
    benefits: [
      '임직원 차량 할인 혜택',
      '사내 식당 삼식 무료 지원',
      '평택역 통근버스 및 서울 주요 거점 버스 운행'
    ],
    viewsCount: 980,
    bookmarksCount: 142,
    createdAt: '2026-10-23',
    applicationUrl: 'https://www.kg-mobility.com'
  },
  {
    id: 'skon-bms-013',
    title: '고전압 배터리 관리 시스템(BMS) 제어 알고리즘 및 기능안전 검증',
    company: 'SK온 (SK On)',
    companyCategory: 'Battery',
    companyCategoryLabel: '배터리/전장',
    companyLogoText: 'SK on',
    companyDescription: '고품질 하이니켈 파우치 및 각형 배터리로 글로벌 완성차의 전동화 여정을 함께하는 글로벌 배터리 리더입니다.',
    roleCategory: 'battery_ev',
    roleCategoryLabel: '배터리 / 전동화',
    regionCategory: 'chungcheong',
    regionCategoryLabel: '충청 (서산 공장)',
    detailedAddress: '충청남도 서산시 대산읍 명지1로 180 (SK온 서산 배터리공장 R&D센터)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~7년',
    employmentType: '정규직',
    salaryEstimated: '7,000만 ~ 9,500만원',
    deadline: '2026-11-24',
    isUrgent: true,
    isFeatured: true,
    techStack: ['SOC/SOH/SOP 알고리즘', 'BMS HiLS', 'C/Simulink', '열폭주 예측 AI', 'ISO 26262', 'CAN FD'],
    department: 'BMS개발실 알고리즘선행팀',
    summary: '배터리의 수명(SOH), 충전량(SOC), 가용출력(SOP)을 초정밀 추정하고, 열폭주 이상 징후를 선제 감지하는 지능형 BMS 알고리즘을 개발합니다.',
    responsibilities: [
      '칼만 필터 및 전기화학 임피던스 분광법(EIS) 기반 실시간 배터리 파라미터 식별 로직 구현',
      '급속 충전 제어 시 리튬 석출 방지를 위한 가변 전류 맵핑 및 열관리 알고리즘 설계',
      'BMS HiLS(Hardware-in-the-Loop Simulation) 장비를 활용한 가혹 결함 주입 테스트(Fault Injection)',
      'ISO 26262 ASIL-C/D 수준의 기능안전 소프트웨어 아키텍처 및 안전 메커니즘 문서화'
    ],
    requirements: [
      '전기전자, 컴퓨터공학, 화학공학, 제어공학 전공 학사 이상',
      'BMS 제어 로직 개발 또는 임베디드 제어 시스템 개발 경력 3년 이상',
      '리튬이온 배터리 전기화학적 특성 및 등가회로 모델(ECM) 이해'
    ],
    preferred: [
      '글로벌 OEM 규격 만족 BMS 양산 개발 경험',
      '머신러닝 기반 배터리 상태 예측 모델 임베디드 포팅 경험',
      'Vector vTESTstudio 및 dSPACE 제어 툴 숙련자'
    ],
    benefits: [
      '서산 기숙사 1인 1실 무상 제공 및 주말 셔틀버스(서울/수도권) 지원',
      'SK그룹 복지 패키지(베네피아 복지포인트, 워커힐 호텔 할인)',
      '의료비 지원 및 자녀 학자금 지원'
    ],
    viewsCount: 1720,
    bookmarksCount: 277,
    createdAt: '2026-10-28',
    applicationUrl: 'https://skon.recruiter.co.kr'
  },
  {
    id: 'autoever-cloud-014',
    title: '커넥티드카 클라우드 데이터 파이프라인 & 차량 원격 제어 백엔드 엔지니어',
    company: '현대오토에버',
    companyCategory: 'SDV_Mobility',
    companyCategoryLabel: '모빌리티/SDV 테크',
    companyLogoText: 'AUTOEVER',
    companyDescription: '차량 소프트웨어 플랫폼(mobilgene)과 모빌리티 클라우드 인프라를 총괄하는 모빌리티 테크 솔루션 프로바이더입니다.',
    roleCategory: 'sw_sdv',
    roleCategoryLabel: '차량SW / SDV',
    regionCategory: 'seoul',
    regionCategoryLabel: '서울 (강남구 삼성동)',
    detailedAddress: '서울특별시 강남구 테헤란로 510 루첸타워 & 의왕 IT센터',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~6년',
    employmentType: '정규직',
    salaryEstimated: '6,600만 ~ 8,700만원',
    deadline: '2026-12-08',
    isUrgent: false,
    isFeatured: false,
    techStack: ['Java/Spring Boot', 'Kafka', 'Kubernetes', 'AWS/GCP', 'PostgreSQL', 'MQTT'],
    department: '차량클라우드개발실 커넥티드플랫폼팀',
    summary: '전 세계 천만 대 이상의 현대/기아/제네시스 차량에서 초당 수십만 건 유입되는 원격 텔레매틱스 데이터 처리 및 모바일 원격 제어 API를 개발합니다.',
    responsibilities: [
      '대용량 차량 텔레매틱스 이벤트(시동, 공조, 도어락, 위치) 스트리밍 파이프라인(Kafka) 설계',
      'Spring Boot 기반 고가용성 마이크로서비스(MSA) 아키텍처 개발 및 쿠버네티스 오케스트레이션',
      '차량 단말-클라우드 간 경량 IoT 프로토콜(MQTT, CoAP) 통신 게이트웨이 성능 튜닝',
      '장애 복구(DR) 자동화 및 무중단 배포(Blue-Green) 시스템 운영'
    ],
    requirements: [
      '백엔드 시스템 개발 실무 경력 3년 이상',
      'Java/Kotlin 및 Spring Boot 프레임워크에 대한 깊은 이해',
      '대용량 트래픽 분산 처리 및 RDBMS/NoSQL 최적화 경험'
    ],
    preferred: [
      '커넥티드카, IoT, 위치기반 서비스(LBS) 개발 유경험자',
      '클라우드(AWS, Azure, GCP) 인프라 구축 및 쿠버네티스 실무 경험',
      '대규모 동시 접속 환경 성능 병목 진단 및 튜닝 능력자'
    ],
    benefits: [
      '재택근무 주 2회 선택 가능',
      '복지포인트 연 300만원 지급',
      '현대차그룹 차량 구매 할인 혜택'
    ],
    viewsCount: 1490,
    bookmarksCount: 231,
    createdAt: '2026-10-30',
    applicationUrl: 'https://hyundai-autoever.recruiter.co.kr'
  },
  {
    id: 'continental-adas-015',
    title: '차량용 77GHz 밀리미터파 고성능 레이다(Radar) RF 하드웨어 엔지니어',
    company: '콘티넨탈 오토모티브 코리아',
    companyCategory: 'Global',
    companyCategoryLabel: '외국계 모빌리티',
    companyLogoText: 'CONTINENTAL',
    companyDescription: '미래 안전 주행을 이끄는 독일 콘티넨탈 그룹의 한국 첨단 연구 거점입니다.',
    roleCategory: 'adas_autonomous',
    roleCategoryLabel: '자율주행 / ADAS',
    regionCategory: 'gyeonggi_etc',
    regionCategoryLabel: '경기 기타 (이천 R&D센터)',
    detailedAddress: '경기도 이천시 사음동 335 (콘티넨탈 기술연구소)',
    experienceLevel: 'senior',
    experienceLabel: '경력 5년 이상',
    employmentType: '정규직',
    salaryEstimated: '7,500만 ~ 9,800만원',
    deadline: '2026-11-26',
    isUrgent: false,
    isFeatured: false,
    techStack: ['RF 회로설계', '77GHz FMCW Radar', 'EMC/EMI', 'Altium/Cadence', '네트워크분석기', '안테나설계'],
    department: 'Autonomous Mobility BU Radar Hardware Lab',
    summary: '차세대 첨단 자율주행 차량에 탑재되는 초고주파 77GHz 전방 장거리 레이다(LRR) 및 코너 레이다의 초소형 RF 안테나/회로 보드를 설계합니다.',
    responsibilities: [
      '77GHz FMCW 밀리미터파 대역 다중 채널 송수신 안테나 패턴 및 초고주파 RF 프론트엔드 설계',
      '차량 전장 EMC(전자기 적합성) 및 ESD 내성 검증, 전자파 노이즈 필터링 최적화',
      '고온/저온 가혹 환경 및 진동 조건 하에서의 RF 송수신 특성(SNR, 위상 노이즈) 평가',
      '글로벌 칩셋 벤더(NXP, Infineon)와의 기술 스펙 분석 및 레이다 신호 무결성(SI) 시뮬레이션'
    ],
    requirements: [
      '전자공학, 전파공학, 무선통신공학 학사 이상',
      'RF 회로 설계 및 고주파 계측기(스펙트럼 분석기, VNA) 운용 경력 5년 이상',
      '차량용 전자파 적합성(CISPR 25) 규격 이해'
    ],
    preferred: [
      '차량용 레이다 센서 모듈 양산 런칭 경험',
      'CST, HFSS 등 3D 전자기장 시뮬레이션 툴 활용 능력자',
      '글로벌 영어 소통 원활자'
    ],
    benefits: [
      '탄력근무제 및 금요일 패밀리데이 조기 퇴근',
      '기숙사 제공 및 통근버스(서울 잠실, 분당, 수원) 운행',
      '연차 외 유급 질병휴가 및 의료비 실손보험'
    ],
    viewsCount: 1040,
    bookmarksCount: 162,
    createdAt: '2026-10-22',
    applicationUrl: 'https://www.continental.com/careers'
  },
  {
    id: 'renault-hybrid-016',
    title: '차세대 하이브리드 E-TECH 파워트레인 품질 관리 및 양산 신뢰성 평가',
    company: '르노코리아 (Renault Korea)',
    companyCategory: 'OEM',
    companyCategoryLabel: '완성차 OEM',
    companyLogoText: 'RENAULT',
    companyDescription: '오로라 프로젝트를 필두로 국내외 시장에서 친환경 하이브리드 및 전동화 돌풍을 일으키는 완성차 기업입니다.',
    roleCategory: 'manufacturing_qa',
    roleCategoryLabel: '생산기술 / 제조 / 품질',
    regionCategory: 'yeongnam',
    regionCategoryLabel: '영남 (부산 공장)',
    detailedAddress: '부산광역시 강서구 르노삼성대로 61 (르노코리아 부산공장)',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~6년',
    employmentType: '정규직',
    salaryEstimated: '6,400만 ~ 8,300만원',
    deadline: '2026-12-01',
    isUrgent: false,
    isFeatured: false,
    techStack: ['품질보증 QA', '파워트레인 검사', 'APQP/PPAP', 'CMM 3차원측정', '공정능력지수 Cpk'],
    department: '차량품질본부 구동계품질보증팀',
    summary: '신차 중형 하이브리드 SUV의 E-TECH 듀얼 모터 파워트레인 조립 공정의 초도 품질 확보 및 협력사 부품 품질 문제를 해결합니다.',
    responsibilities: [
      '하이브리드 변속기(클러치리스 멀티모드 기어박스) 조립 라인 완성품 품질 검사 공정 표준화',
      '신차 개발 단계별 APQP(사전제품품질기획) 관리 및 PPAP(생산부품승인절차) 승인',
      '필드 클레임 및 라인 불량 발생 시 8D 리포트 작성 및 근본 원인(Root-cause) 대책 수립',
      '프랑스 르노 본사 품질 기술 센터와 글로벌 품질 기준 동기화'
    ],
    requirements: [
      '기계공학, 금속/재료, 산업공학 등 이공계 학사 이상',
      '자동차 또는 기계 부품 품질 보증(QA/QC) 경력 3년 이상',
      '도면 해독 능력 및 기하공차(GD&T) 지식 보유자'
    ],
    preferred: [
      '하이브리드 또는 전기차 전동화 파워트레인 품질 경험',
      '품질경영기사 자격증 소지자',
      '영어 회화 가능자 (글로벌 르노 엔지니어와 협업)'
    ],
    benefits: [
      '부산 시내 전역 통근버스 운행',
      '신차 구입 특별 임직원 할인 (최대 25%)',
      '사내 피트니스, 치과 및 건강검진 센터 운영'
    ],
    viewsCount: 1190,
    bookmarksCount: 185,
    createdAt: '2026-10-27',
    applicationUrl: 'https://renault.recruiter.co.kr'
  },
  {
    id: 'vueron-lidar-017',
    title: '라이다(LiDAR) 포인트클라우드 기반 3D 실시간 인지 알고리즘 엔지니어',
    company: '뷰런테크놀로지 (Vueron)',
    companyCategory: 'SDV_Mobility',
    companyCategoryLabel: '모빌리티/SDV 테크',
    companyLogoText: 'VUERON',
    companyDescription: '오직 하나의 라이다 센서만으로 미국 캘리포니아 및 한국 고속도로 자율주행 면허를 획득한 라이다 인지 소프트웨어 전문 테크 기업입니다.',
    roleCategory: 'adas_autonomous',
    roleCategoryLabel: '자율주행 / ADAS',
    regionCategory: 'seoul',
    regionCategoryLabel: '서울 (성수동 IT밸리)',
    detailedAddress: '서울특별시 성동구 아차산로 113 성수빌딩 5층',
    experienceLevel: 'any',
    experienceLabel: '신입 / 경력 무관',
    employmentType: '정규직',
    salaryEstimated: '5,800만 ~ 9,000만원 (스톡옵션 부여)',
    deadline: '상시채용',
    isUrgent: false,
    isFeatured: true,
    techStack: ['C++', 'PCL(Point Cloud Library)', 'ROS/ROS2', '3D Object Detection', 'CUDA', 'PointNet'],
    department: 'Autonomous Perception Team',
    summary: '차세대 라이다 센서로부터 들어오는 3D 포인트 클라우드 데이터를 실시간으로 세그멘테이션하고 동적 장애물을 3차원 바운딩 박스로 인식하는 알고리즘을 개발합니다.',
    responsibilities: [
      '3D LiDAR Point Cloud 기반 딥러닝 객체 검출(CenterPoint, PointPillars) 알고리즘 연구 및 파이프라인 개발',
      '지면 추출(Ground Removal), 노이즈 필터링, 포인트 클러스터링 실시간 C++ 엔진 개발',
      '자율주행 셔틀 및 스마트 인프라(ITS) 모니터링 시스템 탑재용 경량화 모델 최적화',
      '글로벌 완성차 및 라이다 센서 제조사(Innoviz, Hesai 등)와의 필드 테스트 수행'
    ],
    requirements: [
      '컴퓨터공학, 로봇공학, 전자공학 학사 이상 (석박사 우대)',
      'Modern C++ 프로그래밍 능숙자 및 Linux 환경 개발 경험자',
      '3차원 공간 기하학, 선형대수학 및 좌표계 변환에 대한 깊은 수학적 이해'
    ],
    preferred: [
      'PCL(Point Cloud Library), OpenCV, Open3D 능숙자',
      '라이다 기반 SLAM 또는 센서 융합 프로젝트 경험',
      '실차 자율주행 플랫폼 구동 경험'
    ],
    benefits: [
      '자유로운 자율출퇴근제 (코어타임 없음)',
      '성수 핫플 맛집 점심/저녁 식대 무제한 지원',
      '최고 사양 연구용 GPU 워크스테이션 제공',
      '세미나 및 컨퍼런스 참가비 100% 지원'
    ],
    viewsCount: 1870,
    bookmarksCount: 312,
    createdAt: '2026-10-31',
    applicationUrl: 'https://vueron.org/careers'
  },
  {
    id: 'hyundai-transys-018',
    title: 'EV 감속기 및 일체형 전동화 구동 시스템(e-Powertrain) 구조 기구 설계',
    company: '현대트랜시스',
    companyCategory: 'Tier-1',
    companyCategoryLabel: '부품사 Tier-1',
    companyLogoText: 'TRANSYS',
    companyDescription: '전동화 파워트레인 감속기 및 프리미엄 스마트 시트를 양산하는 현대차그룹 핵심 파워트레인 전문 기업입니다.',
    roleCategory: 'chassis_body',
    roleCategoryLabel: '샤시 / 차체 / 의장',
    regionCategory: 'gyeonggi_south',
    regionCategoryLabel: '경기 남부 (화성)',
    detailedAddress: '경기도 화성시 남양읍 현대연구소로 150 현대트랜시스 파워트레인연구소',
    experienceLevel: 'junior',
    experienceLabel: '경력 3~7년',
    employmentType: '정규직',
    salaryEstimated: '6,700만 ~ 8,900만원',
    deadline: '2026-11-29',
    isUrgent: false,
    isFeatured: false,
    techStack: ['기어설계 (KISSsoft)', 'CATIA V5', 'EV 감속기', '열유체 해석', '베어링 하중해석', 'NVH'],
    department: '전동화설계실 감속기선행설계팀',
    summary: '초고속 모터(20,000rpm 이상)와 결합되는 차세대 소형 고효율 2단 EV 감속기 및 차동기어 기구 구조를 설계합니다.',
    responsibilities: [
      'KISSsoft, Romax를 활용한 전기차 감속기 기어 치형(Micro-geometry) 설계 및 접촉 해석',
      '감속기 케이스 하우징 경량 박육화 설계 및 베어링 반력 구조 강도 검토',
      '오일 루브리케이션 및 기어 휠 교반 저항 감소를 위한 오일 순환 패스 유동 해석',
      '전기차 실내로 유입되는 고주파 기어 와인(Gear Whine) 소음 개선 및 내구성 내구 시험 평가'
    ],
    requirements: [
      '기계공학 계열 전공 학사 이상',
      '변속기, 감속기 또는 기어 구동 장치 설계 경력 3년 이상',
      'CATIA 3D 모델링 및 2D 도면 작성 역량'
    ],
    preferred: [
      'KISSsoft, Romax Designer 등 기어 트레인 전문 해석 프로그램 사용자',
      '전기차 감속기 양산 개발 프로젝트 경험자',
      '금속 열처리 및 기어 정밀 가공(호빙, 연삭) 공정 이해자'
    ],
    benefits: [
      '통근버스 운행 (수도권 주요 노선)',
      '사내 복지기금 지원 및 주택자금 융자 지원',
      '현대차그룹 차량 구입 할인 혜택'
    ],
    viewsCount: 1110,
    bookmarksCount: 164,
    createdAt: '2026-10-26',
    applicationUrl: 'https://hyundai-transys.recruiter.co.kr'
  }
];

export const ROLE_CATEGORIES = [
  { id: 'all', label: '직무 전체', count: 18 },
  { id: 'sw_sdv', label: '차량SW / SDV', count: 5 },
  { id: 'adas_autonomous', label: '자율주행 / ADAS', count: 4 },
  { id: 'battery_ev', label: '배터리 / 전동화', count: 4 },
  { id: 'chassis_body', label: '샤시 / 차체 / 의장', count: 3 },
  { id: 'manufacturing_qa', label: '생산기술 / 품질', count: 2 },
  { id: 'planning_strategy', label: '기획 / 전략 / 사업', count: 1 },
  { id: 'rd_testing', label: 'R&D / 안전·시험평가', count: 1 }
];

export const REGION_CATEGORIES = [
  { id: 'all', label: '전국 전체', count: 18 },
  { id: 'seoul', label: '서울 (강남/서초/성수)', count: 4 },
  { id: 'gyeonggi_south', label: '경기 남부 (화성·남양/판교/용인/수원)', count: 7 },
  { id: 'gyeonggi_etc', label: '경기 기타 / 인천 (평택/이천/송도)', count: 2 },
  { id: 'chungcheong', label: '충청 (청주/오창/서산/천안)', count: 2 },
  { id: 'yeongnam', label: '영남 (울산 메가팩토리/창원/부산)', count: 3 },
  { id: 'honam', label: '호남 (광주 친환경산단)', count: 0 },
  { id: 'remote', label: '원격 / 하이브리드', count: 2 }
];

export const COMPANY_CATEGORIES = [
  { id: 'all', label: '전체 기업' },
  { id: 'OEM', label: '완성차 OEM' },
  { id: 'Tier-1', label: '부품사 Tier-1' },
  { id: 'Battery', label: '배터리/전장' },
  { id: 'SDV_Mobility', label: '모빌리티/SDV 테크' },
  { id: 'Global', label: '외국계 기업' }
];

export const POPULAR_KEYWORDS = [
  'AUTOSAR',
  '남양연구소',
  '배터리 BMS',
  '자율주행',
  '신입',
  '판교',
  'C++',
  '울산공장',
  'ISO 26262',
  '원격근무'
];

export const INDUSTRY_TRENDS = [
  {
    title: 'SDV 전환 가속화와 차량용 SW 인력 수요 폭증',
    growth: '+44%',
    desc: '기존 기계 제어 중심에서 고성능 도메인 컨트롤러(HPC) 및 중앙 집중형 E/E 아키텍처 도입으로 AUTOSAR Adaptive, Linux 커널, 차량용 이더넷 엔지니어 수요 급증.',
    keySkills: ['AUTOSAR', 'SOME/IP', 'Linux BSP', 'Cybersecurity ISO 21434']
  },
  {
    title: '차세대 46시리즈 원통형 & 전고체 배터리 상용화',
    growth: '+38%',
    desc: '충청(오창/서산) 및 경기 남부를 중심으로 차세대 4695 원통형 셀과 전고체 파일럿 라인 투자가 본격화되며 공정기술 및 BMS 엔지니어 채용 확대.',
    keySkills: ['BMS 알고리즘', '건식 전극', '열폭주 안전설계', '수율 혁신']
  },
  {
    title: '레벨 3+ 자율주행과 엔드투엔드(E2E) AI 인지 융합',
    growth: '+31%',
    desc: '룰 기반 제어에서 파운데이션 모델 기반 End-to-End 자율주행 및 저전력 차량용 NPU 양자화 최적화 분야가 판교 및 강남 테헤란로 스타트업을 중심으로 형성.',
    keySkills: ['Sensor Fusion', 'TensorRT', 'Point Cloud 3D', 'ROS2']
  }
];
