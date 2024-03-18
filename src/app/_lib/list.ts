type MissionItem = {
  image: string;
  imageMo: string;
  title: string;
  text: string;
};

type HowItem = {
  image: string,
  text1: string,
  title: string,
  text2: string
}

type HistoryText = string;
type HistoryItem = {
  year: string,
  title: string,
  text: HistoryText[]
}

type CultureItem = {
  image: string;
  text: string;
}

type TeamItem = {
  image: string;
  text1: string;
  text2: string;
}

type OrganizationCulItem = {
  subtitle: string;
  title: string;
  image1: string;
  image2: string;
  text1: string;
  text2: string;
}

type WaitingItem = {
  image: string;
  title: string;
  text: string;
}

type GoodItem = {
  image: string;
  title: string;
  text: string;
}

export const missionList: MissionItem[] =  [
  {
    image: "/icon/icon_mission1.png",
    imageMo: "/icon/icon_mission1-mo.png",
    title: "정보의 사용성",
    text: "대학생들의 필요와 요구를 고려하여, 정보를 쉽게 사용할 수 있는 서비스를 개발 제공합니다."
  },
  {
    image: "/icon/icon_mission2.png",
    imageMo: "/icon/icon_mission2-mo.png",
    title: "정보의 사용성",
    text: "대학생들의 필요와 요구를 고려하여, 정보를 쉽게 사용할 수 있는 서비스를 개발/제공합니다."
  },
  {
    image: "/icon/icon_mission3.png",
    imageMo: "/icon/icon_mission3-mo.png",
    title: "정보의 접근성",
    text: "다양한 플랫폼과 서비스를 통해 모든 대학생들이 필요한 정보에 쉽게 접근할 수 있도록 지원합니다."
  }
]

export const howList: HowItem[] =  [
  {
    image: '/images/intro-how1.jpg',
    text1: "우리는 다양성을 존중하고 함께 성장하는 팀입니다.",
    title: "We Are One Team",
    text2: '"서로 다른 경험과 전문성을 존중하며 하나의 팀으로 협력합니다. 우리는 서로를 존중하고 배우며 성장합니다.”'
  },
  {
    image: '/images/intro-how2.jpg',
    text1: "우리는 새로운 가능성을 탐구하며 끊임없이 혁신합니다.",
    title: "We Always Challenge",
    text2: '"서로 다른 경험과 전문성을 존중하며 하나의 팀으로 협력합니다. 우리는 서로를 존중하고 배우며 성장합니다.”'
  },
  {
    image: '/images/intro-how3.jpg',
    text1: "우리는 명확한 목표를 향해 달려갑니다.",
    title: "We Know Why",
    text2: '"우리는 목적을 분명히 알고 있습니다. 우리의 노력은 뚜렷한 비전을 향해 일관되게 나아갑니다.”'
  }
]

export const historyList: HistoryItem[] =  [
  {
    year: '2023',
    title: 'AI, Big Data 고도화',
    text: [
        "‧ 100억 벨류 Pre Series A 투자 유치 (신용보증기금, 탭엔젤파트너스)",
        "‧ 중소기업벤처부 ‘팁스(TIPS)’ 선정",
        "‧ 한국산업단지공단 ‘산업단지 오픈이노베이션’ 선정",
        "‧ 한국콘텐츠진흥원 ‘콘텐츠엑셀러레이팅 지원사업’ 선정",
        "‧ 중소기업벤처부 ‘중소기업 스마트서비스 지원사업’ 선정",
        "‧ 중소벤처기업 ‘벤처기업’ 인증",
        "‧ ‘주식회사 에이비이엠랩’ 법인 전환",
    ]
  },
  {
    year: '2022',
    title: '대학생 대상 플랫폼 전문화',
    text: [
      "‧ 고려대학교 ‘초기창업패키지’ 선정",
      "‧ 고려대학교 ‘초기창업패키지 최우수 기업’ 선정",
      "‧ 연세대학교 ‘캠퍼스타운 지원사업’ 선정",
      "‧ 한국데이터산업진흥원 ‘데이터바우처 상위 20%’ 선정",
      "‧ 중소기업벤처부 ‘중소기업 스마트서비스 지원사업’ 선정",
      "‧ 전국 150개 대학교 MOU 협약",
      "‧ 한국철도공사(KORAIL) MOU",
    ]
  },
  {
    year: '2021',
    title: '대학생 대상 온/오프라인 복합 프로모션 전문화',
    text: [
      "‧ 연세대학교 ‘캠퍼스타운 지원사업’ 선정",
      "‧ 연세대학교 ‘Grow-up 학생창업팀’ 선정",
      "‧ 동의대학교 ‘이노폴리스캠퍼스 스타트업 지원사업’ 선정",
      "‧ 한국데이터산업진흥원 ‘데이터바우처 지원사업’ 선정"
    ]
  },
  {
    year: '2020',
    title: '대학생 대상 서비스 분야 확대',
    text: [
      "‧ 라이브그룹 ‘청년지원사업’ 선정",
      "‧ 전국 대학교 120개 MOU 협약",
      "‧ 한국공인회계사회 ‘창업기업서비스 바우처 지원사업’ 선정",
      "‧ 고용노동부 ‘청년 디지털 일자리 지원사업’ 선정"
    ]
  },
  {
    year: '2019',
    title: 'ABM 설립',
    text: []
  }
]

export const cultureList: CultureItem[] =  [
  {
    image: "/icon/icon_culture1.png",
    text: "업무 현황은 신속하게, 핵심을 담아 공유합니다."
  },
  {
    image: "/icon/icon_culture2.png",
    text: "우리에게 필요한 새로운 기능이나 서비스의 개선을 주체적으로 제안합니다."
  },
  {
    image: "/icon/icon_culture3.png",
    text: "팀 간에 시너지 발휘를 위하여, 동료와 긍정적으로 대화를 나눕니다."
  },
  {
    image: "/icon/icon_culture4.png",
    text: "협업을 요청할 때는 업무의 목적, 요청사항, 구체적으로 전달합니다."
  },
  {
    image: "/icon/icon_culture5.png",
    text: "구성원 사이에서 나의 역할과, 함께 달성해야 할 목표를 끊임없이 고민합니다."
  },
  {
    image: "/icon/icon_culture6.png",
    text: "명료한 의사결정과 빠른 실행으로 유의미한 결과를 만듭니다."
  },
  {
    image: "/icon/icon_culture7.png",
    text: "모든 고민은 사용자 경헙에서 시작하여 사용자에게 높은 가치를 제공합니다."
  },
  {
    image: "/icon/icon_culture1.png",
    text: "나의 선택이 팀에 어떤 영향을 미칠지 충분히 고려합니다."
  }
]

export const teamList: TeamItem[] =  [
  {
    image: "/icon/icon_profile1.png",
    text1: "원활한 업무를 위하여 팀원들과의 소통을 중요시해요",
    text2: "맡은 분야에 대한 목표를 정하고, 그 결과를 직접 만듭니다. 나이와 경력보다 좋은 아이디어와 열정, 실행을 통한 결과를 믿습니다!"
  },
  {
    image: "/icon/icon_profile2.png",
    text1: "뚜렷한 목표를 가진 팀원들과 함께하기 때문에 확신을 가지고 업무할 수 있어요",
    text2: "같은 방향을 바라보고 있기 때문에 빠르게 적응하고 소속감을 느낄 수 있어요 "
  },
  {
    image: "/icon/icon_profile1.png",
    text1: "모두가 본인 업무의 책임자이며, 서로를 존중해요!",
    text2: "맡은 분야에 대한 목표를 정하고, 그 결과를 직접 만듭니다. 나이와 경력보다 좋은 아이디어와 열정, 실행을 통한 결과를 믿습니다!"
  },
  {
    image: "/icon/icon_profile1.png",
    text1: "최대의 효율을 낼 수 있도록 지원해요!",
    text2: "출퇴근 시간 조정, 유동적인 업무 환경이 조성되어 있어 가장 좋아하는 일을 몰두하여 진행할 수 있어요! "
  },
]

export const  organizationCulList: OrganizationCulItem[] =  [
  {
    subtitle: 'Organizational culture',
    title: '워크샵',
    image1: '/images/teamabm-organizationcul1.jpg',
    image2: '/images/teamabm-organizationcul2.jpg',
    text1: '업무보다 불편한 워크샵은 그만!',
    text2: '팀원들과 친목을 다질 수 있는 휴식 테마의 자유로운 워크숍을 반기에 한 번씩 다녀오고 있어요. 맛있는 음식과 좋은 경관에서 팀원들과 함께 유대감을 쌓고, 더욱 끈끈한 온 팀이 될 수 있는 시간을 갖습니다! 에이비엠랩 워크숍은 팀원 모두가 기다리는 시간이랍니다.☺️'
  },
  {
    subtitle: 'Organizational culture',
    title: '소모임',
    image1: '/images/teamabm-organizationcul3.jpg',
    image2: '/images/teamabm-organizationcul4.jpg',
    text1: '흥미가 있는 관심사를 보여주세요!',
    text2: '관심사가 비슷한 팀원들이 모여 소모임 활동을 하며 사무실 밖에서도 활기찬 시간을 가져요. 혼자 하기 힘들었던 취미, 다른 사람과 공유하고 싶었던 취미 등 다양한 소모임 운영이 가능합니다. 내가 가지고 있는 취미도 신규 소모임으로 개설할 수 있어요.'
  },
  {
    subtitle: 'Organizational culture',
    title: '생일 축하',
    image1: '/images/teamabm-organizationcul5.jpg',
    image2: '/images/teamabm-organizationcul6.jpg',
    text1: '좋은 날은 팀원과 함께!',
    text2: '에이비엡랩은 매달 첫째 주 수요일에 다 함께 모여 맛있는 케이크도 나누어 먹고, 팀원의 생일을 축하하는 시간을 가져요. 좋은 날을 기념하며 끈끈해지는 동료애는 덤입니다.'
  }
]

export const  waitingList: WaitingItem[] =  [
  {
    image: "/icon/icon_waiting1.png",
    title: "Team Player",
    text: "팀의 성장과 목표 달성을 최우선으로 생각하고 일하는 사람"
  },
  {
    image: "/icon/icon_waiting2.png",
    title: "Motivated",
    text: "일의 의미를 찾고 주어진 기회에 대해 성취하는 것에 의미를 두는 사람"
  },
  {
    image: "/icon/icon_waiting3.png",
    title: "Persistent & Swift",
    text: "문제를 치열하게 해결하고자 하고 압축적으로 고민하여 신속하게 실행하는 사람"
  },
  {
    image: "/icon/icon_waiting4.png",
    title: "Altruistic",
    text: "상대의 입장을 이해하고 사용자의 니즈를 파악하는 것을 중요하게 생각하는 사람"
  }
]

export const  goodList: GoodItem[] =  [
  {
    image: "/icon/icon_good1.png",
    title: "자율근무제 & 조기퇴근제",
    text: "임직원 개인이 업무시간을 정하여 자유롭게 출퇴근을 실시합니다."
  },
  {
    image: "/icon/icon_good2.png",
    title: "장기근속자 포상",
    text: "임직원들의 리프레시를 위해 매 3년 근속 시마다 안식휴가 1개월과 휴가비 200만원을 지원합니다."
  },
  {
    image: "/icon/icon_good3.png",
    title: "교육비",
    text: "팀원의 성장이 팀의 성장임을 알기에 팀원의 성장을 전폭적으로 지원합니다."
  },
  {
    image: "/icon/icon_good4.png",
    title: "건강검진",
    text: "임직원들의 건강관리와 각종 질병 예방을 위해 연 1회 모든 사원의 정밀 건강검진을 전문기관에서 받고 있습니다."
  },
  {
    image: "/icon/icon_good5.png",
    title: "경조금",
    text: "임직원들에게 경조휴가를 부여하고, 회사에서는 축하 또는 조의의 마음을 표하기 위해 경조금, 경조화환 등을 전달합니다 ."
  },
  {
    image: "/icon/icon_good6.png",
    title: "단체 상해보험",
    text: "전 임직원을 대상으로 4대 보험 외에 단체상해보험에 가입하여 각종 상해, 사고, 질병에 대한 위험부담을 최소화할 수 있도록 보장합니다."
  },
  {
    image: "/icon/icon_good7.png",
    title: "소모임 지원",
    text: "관심사가 비슷한 팀원들과 함께 회사 밖에서도 즐거운 시간을 보낼 수 있도록 소모임 활동을 지원합니다."
  },
  {
    image: "/icon/icon_good8.png",
    title: "명절선물 및 단축근무",
    text: "풍요로운 명절 행복한 시간을 위해 단축근무와 감사의 마음을 담은 선물 세트를 보내드려요."
  },
  {
    image: "/icon/icon_good9.png",
    title: "최신식 장비&편리한 위치",
    text: "업무의 생산성을 극대화할 수 있도록 환경을 제공합니다. "
  }
]