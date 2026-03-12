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
    id: 'greece-athena-go',
    title: '그리스 Athena.go',
    shortDescription: '그리스 교통 플랫폼 Athena.go iOS/Android 앱 개발',
    fullDescription: '그리스 아테네의 교통 서비스 플랫폼 Athena.go의 iOS 및 Android 앱을 개발했습니다. 대중교통 노선 검색, 실시간 운행 정보, 교통카드 연동 등 아테네 시민과 관광객을 위한 통합 모빌리티 서비스를 제공합니다.',
    category: 'mobile',
    client: 'Athena.go (그리스)',
    year: '2024-현재',
    technologies: ['iOS', 'Android', 'Swift', 'Kotlin'],
    features: [
      'iOS/Android 네이티브 앱 개발',
      '대중교통 노선 검색',
      '실시간 운행 정보 제공',
      '교통카드 연동',
      '다국어 지원'
    ],
    thumbnail: '🇬🇷',
    images: []
  },
  {
    id: 'busan-smart-city',
    title: '부산 스마트시티',
    shortDescription: '부산 스마트시티 통합 플랫폼 개발',
    fullDescription: '부산 스마트시티 프로젝트의 통합 플랫폼을 개발했습니다. 도시 데이터 수집·분석, 시민 서비스 앱, 관제 시스템 등을 구축하여 교통, 환경, 안전 등 다양한 도시 서비스를 스마트하게 연결하는 플랫폼을 제공합니다.',
    category: 'system',
    client: '부산광역시',
    year: '2024-현재',
    technologies: ['Server', 'Android', 'iOS', 'IoT', 'Data Platform'],
    features: [
      '스마트시티 통합 플랫폼 구축',
      '도시 데이터 수집 및 분석',
      '시민 서비스 앱 개발',
      '관제 시스템 연동',
      '교통·환경·안전 서비스 통합'
    ],
    thumbnail: '🏙️',
    images: []
  },
  {
    id: 'denti-i',
    title: '덴티아이 모바일앱 & 웹',
    shortDescription: '어린이 치과주치의 플랫폼 iOS/Android 앱 및 웹 개발',
    fullDescription: '덴티아이는 어린이 치아 건강을 한눈에 관리할 수 있는 치과주치의 플랫폼입니다. 병원 방문 전 모바일 문진표 작성, 검진 결과 통보서 리포트, 구강건강 교육 콘텐츠 등 종합적인 구강 관리 기능을 제공하는 iOS/Android 앱과 웹 서비스를 개발했습니다.',
    category: 'mobile',
    client: '카이아이컴퍼니',
    year: '2022-현재',
    technologies: ['iOS', 'Android', 'Web', 'REST API'],
    features: [
      '덴티아이 경기 모바일앱(iOS, aOS) 개발',
      '검진유형 자격검사 및 교육과 검진 안내',
      '구강검사 결과 조회 업데이트',
      '모바일 문진표 작성 기능',
      '통보서 리포트 및 교육 콘텐츠'
    ],
    thumbnail: '🦷',
    images: [],
    badge: '진행 중'
  },
  {
    id: 'lgu-membership',
    title: 'LGU+ 멤버십 앱',
    shortDescription: 'LGU+ 멤버십 앱 iOS/Android 개발',
    fullDescription: 'LGU+ 멤버십 앱의 iOS 및 Android 버전을 개발했습니다. 휴대폰 소액결제, 메인화면 개발, 마이 멤버십 화면, 내 지갑 기능 등 멤버십 서비스의 핵심 기능을 구현하여 편의점, 쇼핑, 영화, 푸드, 교통 등 다양한 할인 혜택을 제공합니다.',
    category: 'mobile',
    client: 'LGU+',
    year: '2022-현재',
    technologies: ['iOS', 'Android', 'Native'],
    features: [
      'iOS, aOS 네이티브 앱 개발',
      '휴대폰 소액결제 기능',
      '메인화면 및 마이 멤버십 화면 개발',
      '내 지갑 기능 구현',
      '편의점·쇼핑·영화·교통 할인 연동'
    ],
    thumbnail: '📱',
    images: [],
    badge: '진행 중'
  },
  {
    id: 'sk-energy-muffin-truck',
    title: 'SK에너지 머핀트럭',
    shortDescription: 'SK에너지 머핀트럭 상용차 운송 서비스 앱 개발',
    fullDescription: 'SK에너지 머핀트럭 서비스의 Android 앱과 프론트엔드를 개발했습니다. 상용차 고객을 위한 운송업무 처리, 세무장부 서비스, 실적관리 등 모든 운송 관련 서비스를 하나의 앱에서 제공하며, 운송료 확인 및 미요청 건 관리, 지도 기반 배차 기능을 포함합니다.',
    category: 'mobile',
    client: 'SK에너지',
    year: '2022-현재',
    technologies: ['Android', 'Server', 'Frontend', 'Map API'],
    features: [
      '안드로이드 앱 개발',
      '프론트엔드 개발',
      '운송업무 처리 서비스',
      '세무장부 서비스 지원',
      '실적관리 및 지도 기반 배차'
    ],
    thumbnail: '🚛',
    images: []
  },
  {
    id: 'kyobo-mydata',
    title: '교보증권 MyData 서비스',
    shortDescription: '교보증권 MyData iOS 앱 및 웹서비스 개발',
    fullDescription: '교보증권의 MyData 서비스를 위한 iOS 앱과 웹서비스를 개발했습니다. 자산 및 계좌 현황 조회, 통합인증, 커뮤니티, 비금융자산 관리 등의 기능을 구현하여 고객이 자신의 금융 데이터를 한곳에서 통합 관리할 수 있도록 했습니다.',
    category: 'mobile',
    client: '교보증권',
    year: '2022-현재',
    technologies: ['iOS', 'Web', 'MyData API', 'Swift'],
    features: [
      'iOS 네이티브 앱 개발',
      '자산 및 계좌 현황 조회',
      'MyData 웹 서비스 개발',
      '통합인증 및 커뮤니티 기능',
      '비금융자산 관리'
    ],
    thumbnail: '💹',
    images: []
  },
  {
    id: 'skt-spam-filtering',
    title: 'SKT 스팸 필터링 서비스',
    shortDescription: 'SK텔레콤 T스팸필터링 서비스 유지보수 및 운영',
    fullDescription: 'SK텔레콤의 T스팸필터링 서비스의 알고리즘 유지보수 및 운영을 담당하고 있습니다. 번호, 문장, 문자열 차단, 이미지, URL 차단 알고리즘을 개발하고 T스팸필터링앱 연동, WAP 연동 기능, Android/iOS 지원을 통해 사용자를 스팸으로부터 보호합니다.',
    category: 'system',
    client: 'SK텔레콤',
    year: '2021-현재',
    technologies: ['Android', 'iOS', 'Algorithm', 'WAP'],
    features: [
      'SKT 스팸필터링 알고리즘 유지보수',
      '번호·문장·문자열·이미지·URL 차단',
      'T스팸필터링앱 연동',
      'WAP 연동 기능',
      'Android/iOS 지원'
    ],
    thumbnail: '🛡️',
    images: [],
    badge: '운영 중'
  },
  {
    id: 'wemakeprice-travel',
    title: '위메프 여행·공연 IT 시스템',
    shortDescription: '위메프 여행, 공연 IT 시스템 개발 및 운영',
    fullDescription: '위메프 여행 및 공연 서비스의 backend/frontend/admin 시스템을 개발·운영하고 있습니다. 제주 실시간 렌터카 서비스, 메인 화면 동적 구성, 세종문화회관 API 연동 등 Vue.js와 Spring Boot 프레임워크를 활용하여 여행·공연 통합 플랫폼을 구축했습니다.',
    category: 'web',
    client: '위메프',
    year: '2021-현재',
    technologies: ['Vue.js', 'Spring Boot', 'Server', 'REST API'],
    features: [
      '위메프 여행 backend/frontend/admin 개발',
      '제주 실시간 렌터카 서비스',
      '메인 화면 동적 구성 서비스',
      '위메프 공연 세종문화회관 연동',
      '예약/결제 기능 개발'
    ],
    thumbnail: '✈️',
    images: []
  },
  {
    id: 'kb-next-liveon',
    title: 'KB국민은행 NEXT 리브온',
    shortDescription: 'KB국민은행 MSA 기반 NEXT 리브온 구축(고도화)',
    fullDescription: 'KB국민은행의 MSA 기반 NEXT 리브온 서비스를 구축 및 고도화했습니다. FAN머니 오픈(결제, 충전, 보내기, 받기, 조르기), 더치페이, FAN 선불 교통카드 등 다양한 금융 서비스의 backend/frontend 개발을 수행했습니다.',
    category: 'system',
    client: 'KB국민은행',
    year: '2020-2021',
    technologies: ['Server', 'MSA', 'Backend', 'Frontend'],
    features: [
      'FAN머니 결제·충전·보내기·받기·조르기',
      '더치페이 기능 개발',
      'FAN 선불 교통카드 개발',
      'backend/frontend 개발',
      'MSA 아키텍처 기반 구축'
    ],
    thumbnail: '🏦',
    images: [],
    badge: '금융'
  },
  {
    id: 'hyundai-dm-system',
    title: '현대자동차 DM System',
    shortDescription: '현대자동차 Device Management System(AVN, 제어기) 개발',
    fullDescription: '현대자동차의 AVN(Audio Video Navigation) 및 제어기를 위한 Device Management System을 Spring/Java로 개발했습니다. Portal 연동 인터페이스 솔루션, 단말 파일 등록 연동, CDN 서버 연동 등 차량 소프트웨어 관리를 위한 서버 시스템을 구축했습니다.',
    category: 'system',
    client: '현대자동차',
    year: '2017-2021',
    technologies: ['Spring', 'Java', 'CDN', 'Portal'],
    features: [
      'Spring/Java 기반 DM 시스템 개발',
      'Portal 연동 인터페이스 솔루션',
      '단말 파일 등록 연동',
      'CDN 서버 파일 다운로드 연동',
      'FOTA 서비스 및 패키지 관리'
    ],
    thumbnail: '🚗',
    images: [],
    badge: '자동차'
  },
  {
    id: 'ahnlab-prima-v3',
    title: '안랩 Prima & V3 Mobile',
    shortDescription: '안랩 개인정보 관리 앱 및 V3 Mobile 서비스 개발',
    fullDescription: '안랩의 PriMa(Privacy Manager) 앱과 V3 Mobile 서비스를 개발했습니다. Prima는 디바이스 취약점 검사, 소셜 미디어 보안, 보안 메모, 이미지 검사, 모자이크 기능을 제공하며, V3 Mobile은 비밀번호 관리, 갤러리 숨김, 분실 기기 제어, 보안 브라우저 등 종합 보안 서비스를 iOS/Android로 제공합니다.',
    category: 'mobile',
    client: '안랩',
    year: '2016-2021',
    technologies: ['Android', 'iOS', 'Server', 'Security SDK'],
    features: [
      '디바이스 취약점 검사 및 해결',
      '소셜 미디어 보안 설정 관리',
      '보안 메모 암호화 및 OCR 기능',
      '비밀번호 관리 및 갤러리 숨김',
      '분실 기기 위치 확인 및 원격 제어'
    ],
    thumbnail: '🔒',
    images: [],
    badge: '보안'
  },
  {
    id: 'tmoney-go',
    title: '티머니 go',
    shortDescription: '티머니 go 통합 모빌리티 앱 개발 및 운영',
    fullDescription: '티머니 go 앱의 iOS/Android 개발 및 운영을 담당하고 있습니다. 따릉이·씽씽 대여, 대중교통/따릉이 경로검색, 마일리지 적립/환급, FAN 충전 연동 등 통합 모빌리티 서비스를 제공하며, 사용자가 다양한 교통수단을 하나의 앱에서 이용할 수 있도록 구현했습니다.',
    category: 'mobile',
    client: 'LG CNS / 티머니',
    year: '2019-현재',
    technologies: ['iOS', 'Android', 'Map API', 'Payment'],
    features: [
      '따릉이·씽씽 대여 서비스',
      '대중교통/따릉이 경로검색',
      '마일리지 적립 및 환급',
      'FAN 충전 연동',
      '통합 모빌리티 플랫폼'
    ],
    thumbnail: '🚇',
    images: [],
    badge: '모빌리티'
  },
  {
    id: 'tmap-parking',
    title: 'T map 주차 플랫폼',
    shortDescription: 'T map 주차 플랫폼 iOS 앱 고도화 개발 및 운영',
    fullDescription: 'T map 주차 플랫폼의 iOS 앱 고도화 및 운영을 수행했습니다. 주차 현황 상세 구현, 주차장 상세 구현, 쿠폰 변경 적용, 주차장 지도 표시 최적화 등을 개발하고 Jenkins/Fastlane을 이용한 빌드/배포 자동화를 구축했습니다.',
    category: 'mobile',
    client: 'SKT / SK플래닛',
    year: '2020-2021',
    technologies: ['iOS', 'Swift', 'Jenkins', 'Fastlane', 'Map SDK'],
    features: [
      '주차 현황 상세 구현',
      '주차장 상세 및 쿠폰 적용',
      '주차장 지도 표시 최적화',
      'Jenkins/Fastlane 빌드/배포 자동화',
      '종일권·월정기권 결제 시스템'
    ],
    thumbnail: '🅿️',
    images: []
  },
  {
    id: 'shinhancard-fan',
    title: '신한카드 FAN(앱카드)',
    shortDescription: '신한카드 FAN 앱카드 서비스 개발 및 운영',
    fullDescription: '신한카드 FAN 앱카드의 서버 개발 및 유지보수를 담당했습니다. 실시간 마케팅, 더치페이 신규 오픈, FAN머니 신규 오픈, 선불하기 수정개발 등을 수행하고, 이후 Android/iOS 네이티브 앱 개발(신한 판)까지 확장하여 신용카드 관리, QR코드, 바코드 결제, 생체인증 등을 구현했습니다.',
    category: 'system',
    client: '신한카드',
    year: '2017-2020',
    technologies: ['Server', 'Android', 'iOS', 'Payment', 'Biometric'],
    features: [
      '실시간 마케팅 개발',
      '더치페이·FAN머니 신규 개발',
      'QR코드·바코드 결제',
      '생체인증 로그인 시스템',
      'FAN클럽·포인트·금융 서비스'
    ],
    thumbnail: '💳',
    images: [],
    badge: '핀테크'
  }
]

export const categories = [
  { id: 'all', name: '전체', icon: '📋' },
  { id: 'mobile', name: '모바일 앱', icon: '📱' },
  { id: 'ai', name: 'AI/ML', icon: '🤖' },
  { id: 'system', name: '시스템', icon: '⚙️' },
  { id: 'web', name: '웹', icon: '🌐' }
]
