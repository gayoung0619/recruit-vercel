type TypeItem = string;
type PreferenceItem = string;
type RequireItem = string;
type ResponsibilitiesItem = string;
type DetailItem = {
  subtitle: string,
  responsibilities: ResponsibilitiesItem[],
  require: RequireItem[],
  preference: PreferenceItem[],
  period: string,
  qualification: string,
  place: string,
  type: TypeItem[]
}
type NoticeInfoItem = {
  id: string,
  label: string,
  link: string,
  position: string,
  title: string,
  team: string,
  detail : DetailItem
}
export const noticeInfo: NoticeInfoItem[] = [
  {
    id: '1',
    label: '마케팅팀',
    link: '',
    position: '신입',
    title: 'Graphic Designer',
    team: '마케팅팀/팀원',
    detail: {
      subtitle: '영업/제휴업무',
      responsibilities: [
          "기업 / 대학교 대상 대학생 마케팅 제휴 홍보",
          "기존 거래처 관리 및 제휴사 발굴",
          "자사 앱서비스 B2B 제휴 및 관리 영업"
      ],
      require: [
          "4년제 대학 졸업 이상",
          "경력 1년 이상",
          "원활한 커뮤니케이션 가능자"
      ],
      preference: [
          "기업제휴 영업 경력자",
          "대학생 마케팅 / 기획 업무 경력자"
      ],
      period: '2023년 1월 1일 ~ 2024년 3월 13일',
      qualification: '1년 이상 경력',
      place: '서울(강남)',
      type: [
          "정규직 전환형 인턴(3개월 수습 기간 후 정규직 전환)",
          "정규직 연봉: 회사 내규에 따름"
      ]
    }
  },
  {
    id: '2',
    label: '개발팀',
    link: '',
    position: '경력',
    title: '개발업무',
    team: '개발팀',
    detail: {
      subtitle: '영업/제휴업무',
      responsibilities: [
        "기업 / 대학교 대상 대학생 마케팅 제휴 홍보",
        "기존 거래처 관리 및 제휴사 발굴",
        "자사 앱서비스 B2B 제휴 및 관리 영업"
      ],
      require: [
        "4년제 대학 졸업 이상",
        "경력 1년 이상",
        "원활한 커뮤니케이션 가능자"
      ],
      preference: [
        "기업제휴 영업 경력자",
        "대학생 마케팅 / 기획 업무 경력자"
      ],
      period: '2023년 1월 1일 ~ 2024년 3월 31일',
      qualification: '1년 이상 경력',
      place: '서울(강남)',
      type: [
        "정규직 전환형 인턴(3개월 수습 기간 후 정규직 전환)",
        "정규직 연봉: 회사 내규에 따름"
      ]
    }
  },
  {
    id: '3',
    label: '기획팀',
    link: '',
    position: '경력',
    title: '기획업무',
    team: '기획팀/팀장',
    detail: {
      subtitle: '영업/제휴업무',
      responsibilities: [
        "기업 / 대학교 대상 대학생 마케팅 제휴 홍보",
        "기존 거래처 관리 및 제휴사 발굴",
        "자사 앱서비스 B2B 제휴 및 관리 영업"
      ],
      require: [
        "4년제 대학 졸업 이상",
        "경력 1년 이상",
        "원활한 커뮤니케이션 가능자"
      ],
      preference: [
        "기업제휴 영업 경력자",
        "대학생 마케팅 / 기획 업무 경력자"
      ],
      period: '2023년 1월 1일 ~ 2024년 3월 31일',
      qualification: '1년 이상 경력',
      place: '서울(강남)',
      type: [
        "정규직 전환형 인턴(3개월 수습 기간 후 정규직 전환)",
        "정규직 연봉: 회사 내규에 따름"
      ]
    }
  },
]