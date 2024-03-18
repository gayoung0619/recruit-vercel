type SubMenuItem = {
  label: string;
  link: string;
};

type MenuItem = {
  label: string;
  link: string;
  subMenu: SubMenuItem[];
};
export const menu: MenuItem[] =  [
  {
    label: 'Team ABMLab',
    link: '/TeamABMLab',
    subMenu: [
      { label: '회사소개', link: '/TeamABMLab/introduce' },
      { label: '팀문화', link: '/TeamABMLab/culture' },
      { label: '인사제도', link: '/TeamABMLab/personnalsystem' },
    ],
  },
  {
    label: 'People',
    link: '/People',
    subMenu: [{ label: '업무소개', link: '/People' }],
  },
  {
    label: 'Apply',
    link: '/Apply',
    subMenu: [
      { label: '채용프로세스', link: '/Apply/process' },
      { label: '채용 공고', link: '/Apply/notice' },
    ],
  },
  {
    label: 'FAQ',
    link: '/Faq',
    subMenu: [{ label: '자주하는 질문', link: '/Faq' }],
  },
]
