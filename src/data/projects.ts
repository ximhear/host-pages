export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: 'mobile' | 'ai' | 'system' | 'web'
  client: string
  year: string
  technologies: string[]
  features: string[]
  thumbnail: string
  images: string[]
  badge?: string
}

export const projects: Project[] = [
  {
    id: 'samsung-mobile-solution',
    title: '삼성전자 모바일 솔루션',
    shortDescription: '삼성전자 스마트폰 내장 앱 및 시스템 솔루션 개발',
    fullDescription: '삼성전자와 협력하여 갤럭시 시리즈 스마트폰에 탑재되는 다양한 내장 앱과 시스템 솔루션을 개발했습니다. 안정적인 성능과 사용자 친화적인 UI/UX를 구현하여 수백만 사용자에게 서비스를 제공하고 있습니다.',
    category: 'mobile',
    client: '삼성전자',
    year: '2015-2023',
    technologies: ['Android', 'Java', 'Kotlin', 'C++', 'JNI'],
    features: [
      '네이티브 Android 앱 개발',
      '시스템 레벨 최적화',
      'One UI 통합',
      '하드웨어 연동 솔루션',
      '배터리 효율 최적화'
    ],
    thumbnail: '📱',
    images: [],
    badge: '대표 프로젝트'
  },
  {
    id: 'ahnlab-security-app',
    title: '안랩 보안 솔루션 앱',
    shortDescription: '모바일 보안 솔루션 및 백신 앱 개발',
    fullDescription: '안랩과 협력하여 모바일 보안 솔루션을 개발했습니다. 실시간 악성코드 탐지, 개인정보 보호, 앱 잠금 기능 등 종합적인 보안 기능을 제공하는 앱을 구현했습니다.',
    category: 'mobile',
    client: '안랩',
    year: '2018-2022',
    technologies: ['Android', 'iOS', 'Swift', 'Kotlin', 'Security SDK'],
    features: [
      '실시간 악성코드 스캔',
      '개인정보 보호 기능',
      '앱 잠금 및 권한 관리',
      '네트워크 보안 모니터링',
      '원격 기기 관리'
    ],
    thumbnail: '🛡️',
    images: [],
    badge: '보안 전문'
  },
  {
    id: 'infraware-office-mobile',
    title: '인프라웨어 오피스 모바일',
    shortDescription: '모바일 오피스 문서 뷰어 및 편집기 개발',
    fullDescription: '인프라웨어와 함께 모바일 환경에서 오피스 문서를 완벽하게 열람하고 편집할 수 있는 솔루션을 개발했습니다. Word, Excel, PowerPoint, PDF 등 다양한 포맷을 지원합니다.',
    category: 'mobile',
    client: '인프라웨어',
    year: '2016-2021',
    technologies: ['Android', 'iOS', 'C++', 'OpenGL', 'PDF Engine'],
    features: [
      '다양한 문서 포맷 지원',
      '고속 렌더링 엔진',
      '클라우드 동기화',
      '문서 편집 기능',
      '주석 및 필기 기능'
    ],
    thumbnail: '📄',
    images: []
  },
  {
    id: 'sk-commerce-platform',
    title: 'SK 커머스 플랫폼',
    shortDescription: '대규모 이커머스 모바일 플랫폼 개발',
    fullDescription: 'SK 커머스의 모바일 쇼핑 플랫폼 개발에 참여했습니다. 수백만 사용자를 위한 안정적인 서비스와 매끄러운 쇼핑 경험을 제공하는 앱을 구현했습니다.',
    category: 'mobile',
    client: 'SK 커머스',
    year: '2019-2022',
    technologies: ['React Native', 'TypeScript', 'Node.js', 'AWS'],
    features: [
      '하이브리드 앱 개발',
      '실시간 재고 관리',
      '결제 시스템 통합',
      '개인화 추천 시스템',
      '푸시 알림 서비스'
    ],
    thumbnail: '🛒',
    images: []
  },
  {
    id: 'ai-stock-prediction',
    title: 'AI 주식 예측 서비스',
    shortDescription: '인공지능 기반 주가 예측 및 분석 플랫폼',
    fullDescription: '딥러닝과 머신러닝 기술을 활용한 주식 시장 분석 및 예측 서비스입니다. 실시간 데이터 분석, 패턴 인식, 예측 모델을 통해 투자자들에게 인사이트를 제공합니다.',
    category: 'ai',
    client: '자체 서비스',
    year: '2023-현재',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'React', 'FastAPI', 'AWS'],
    features: [
      'AI 기반 주가 예측 모델',
      '실시간 시장 데이터 분석',
      '빅데이터 기반 트렌드 분석',
      '포트폴리오 최적화 추천',
      '리스크 관리 알림'
    ],
    thumbnail: '📊',
    images: [],
    badge: 'NEW'
  },
  {
    id: 'uk-financial-app',
    title: '영국 금융 서비스 앱',
    shortDescription: '영국 금융기관 모바일 뱅킹 앱 개발',
    fullDescription: '영국 금융기관의 모바일 뱅킹 앱을 개발했습니다. 엄격한 금융 규제 준수와 보안 요구사항을 충족하면서 사용자 친화적인 뱅킹 경험을 제공합니다.',
    category: 'mobile',
    client: 'UK Financial Services',
    year: '2017-2019',
    technologies: ['iOS', 'Swift', 'Security Framework', 'Biometric Auth'],
    features: [
      '생체 인증 로그인',
      '실시간 잔액 조회',
      '국제 송금 서비스',
      'PCI DSS 준수',
      '다국어 지원'
    ],
    thumbnail: '🇬🇧',
    images: [],
    badge: '해외 프로젝트'
  },
  {
    id: 'japan-iot-platform',
    title: '일본 IoT 플랫폼',
    shortDescription: '일본 기업용 IoT 통합 관리 플랫폼',
    fullDescription: '일본 기업을 위한 IoT 기기 통합 관리 플랫폼을 개발했습니다. 수천 개의 센서와 기기를 실시간으로 모니터링하고 관리할 수 있는 시스템입니다.',
    category: 'system',
    client: 'Japan Tech Corp',
    year: '2020-2022',
    technologies: ['React', 'Node.js', 'MQTT', 'InfluxDB', 'Docker'],
    features: [
      '실시간 센서 데이터 수집',
      '대시보드 시각화',
      '이상 감지 알림',
      '기기 원격 제어',
      '데이터 분석 리포트'
    ],
    thumbnail: '🇯🇵',
    images: [],
    badge: '해외 프로젝트'
  },
  {
    id: 'public-service-portal',
    title: '공공 서비스 포털',
    shortDescription: '정부 기관 통합 민원 서비스 포털',
    fullDescription: '정부 기관의 통합 민원 서비스 포털을 개발했습니다. 시민들이 다양한 민원을 온라인으로 쉽게 신청하고 처리 상황을 확인할 수 있는 시스템입니다.',
    category: 'web',
    client: '정부기관',
    year: '2021-2023',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis'],
    features: [
      '통합 인증 시스템',
      '전자 문서 처리',
      '실시간 처리 현황',
      '모바일 연동',
      '접근성 준수 (WCAG)'
    ],
    thumbnail: '🏛️',
    images: []
  },
  {
    id: 'blackberry-enterprise',
    title: 'BlackBerry 기업용 앱',
    shortDescription: 'BlackBerry 플랫폼 기업용 보안 앱 개발',
    fullDescription: 'BlackBerry 플랫폼을 위한 기업용 보안 애플리케이션을 개발했습니다. 기업 데이터 보안과 MDM(Mobile Device Management) 기능을 제공합니다.',
    category: 'mobile',
    client: 'Enterprise Clients',
    year: '2010-2016',
    technologies: ['BlackBerry SDK', 'Java ME', 'BES Integration'],
    features: [
      '기업 이메일 보안',
      'MDM 통합',
      '암호화 메시징',
      '원격 데이터 삭제',
      '정책 관리'
    ],
    thumbnail: '📟',
    images: [],
    badge: '레거시'
  },
  {
    id: 'cross-platform-framework',
    title: '크로스플랫폼 개발 프레임워크',
    shortDescription: 'iOS/Android 통합 개발 프레임워크',
    fullDescription: '하나의 코드베이스로 iOS와 Android 앱을 동시에 개발할 수 있는 자체 프레임워크를 구축했습니다. 개발 효율성을 높이고 유지보수 비용을 절감합니다.',
    category: 'system',
    client: '자체 개발',
    year: '2019-현재',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Native Modules'],
    features: [
      '단일 코드베이스',
      '네이티브 성능',
      '핫 리로드 지원',
      '네이티브 모듈 연동',
      '자동화 빌드 파이프라인'
    ],
    thumbnail: '🔧',
    images: []
  }
]

export const categories = [
  { id: 'all', name: '전체', icon: '📋' },
  { id: 'mobile', name: '모바일 앱', icon: '📱' },
  { id: 'ai', name: 'AI/ML', icon: '🤖' },
  { id: 'system', name: '시스템', icon: '⚙️' },
  { id: 'web', name: '웹', icon: '🌐' }
]
