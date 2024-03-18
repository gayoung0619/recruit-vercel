type Title = string[];

type SlideData = {
  id: number;
  title: Title;
  subtitle: string;
  image: string;
  imageMo: string
};

export const slideData: SlideData[] = [
  {
    id: 1,
    title: ["구성원이 함께", "행복한 회사"],
    subtitle: 'A company where members are happy together',
    image: '/images/main1.jpg',
    imageMo: '/images/main1-mo.jpg'
  },
  {
    id: 2,
    title: ["개인과 회사가", "함께 성장하는 곳"],
    subtitle: 'A place where individuals and the company grow together',
    image: '/images/main2.jpg',
    imageMo: '/images/main2-mo.jpg'
  },
  {
    id: 3,
    title: ["뚜렷한 목표로", "하나되어 나아가는 곳"],
    subtitle: 'A place where we unite with a clear goal and move forward together',
    image: '/images/main3.jpg',
    imageMo: '/images/main3-mo.jpg'
  }
];