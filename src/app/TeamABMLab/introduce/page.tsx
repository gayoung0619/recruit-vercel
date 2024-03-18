'use client';
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import React, { useState, useEffect, useRef } from "react";
import { historyList, howList, missionList } from "@/app/_lib/list";

const IntroPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionAni = useRef<HTMLDivElement>(null);
  const sectionTop = sectionAni.current ? sectionAni.current.offsetTop - 300 : 0;

  const handleScroll = () => {
    setScrollY(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div>
        <section className="dark-content relative text-white w-full">
          <div className="w-full h-full absolute z-[-1]">
            <div className="mobile:hidden bg-[url('/images/teamabm-introduce.jpg')] bg-cover bg-no-repeat bg-top w-full h-full bg-fixed"></div>
            <div className="hidden mobile:block bg-[url('/images/teamabm-introduce-mo.jpg')] bg-cover bg-no-repeat bg-top w-full h-full"></div>
          </div>
          <div className="max-layout">
            <Breadcrumb/>
            <div className="section-layout pb-[4.7396vw] mobile:pt-[1rem] mobile:pb-[3.6875rem]">
              <h2 className="f-h2 circle title-circle">Mission</h2>
              <h1 className="f-h1 font-bold pt-[0.5729vw]">개인과 사회의 행복</h1>
              <p className="f-heading pt-[1.2500vw] mobile:pt-[1rem]">주식회사 에이비엠랩의 미션은 AI 혁신과 빅데이터를 통해 정보의 불균형을 해소하고<br className="mobile:hidden"/> 대학생과 사회의 행복을
                찾아주는 것입니다.
              </p>
              <ul className="flex justify-between gap-x-[1.0417vw] mt-[2.5000vw] mobile:flex-col mobile:gap-y-2 mobile:mt-[2.5rem]">
                {missionList.map((list, index) => (
                    <li key={index} className="box-blur flex-1 px-[1.6667vw] py-[0.8333vw] mobile:flex mobile:items-center mobile:p-4">
                      <img alt="아이콘" src={list.image} className="w-[5.2083vw] h-[5.2083vw] mt-[1.0156vw] mobile:hidden"/>
                      <div className="hidden mobile:flex justify-center min-w-[80px] min-h-[80px] mobile:mr-4">
                        <img alt="모바일아이콘" src={list.imageMo}/>
                      </div>
                      <div className="">
                        <h3 className="f-heading-small">{list.title}</h3>
                        <p className="f-list pt-[0.4167vw] pb-[1.0417vw] mobile:pt-2 mobile:pb-0">{list.text}</p>
                      </div>
                    </li>
                ))}
              </ul>
              <p className="f-title1 text-center mt-[1.2500vw] mobile:mt-4">대학생 대상 프로모션을 시작으로, 애플리케이션 출시까지 필요와 요구를 고려한 플랫폼과 서비스를
                제공하며,<br className="mobile:hidden"/> 다양한 분야에서 더 나은 삶을 살 수 있도록 끊임없이 지원합니다.</p>
            </div>
          </div>
        </section>
        <section className="white-content">
          <div className="max-layout">
            <div className="section-layout">
              <p className="f-title1 text-main">How?</p>
              <h1 className="f-h1 font-bold mobile:font-medium">우리만의 방식</h1>
              <ul className="flex justify-between gap-x-[1.0417vw] mt-[2.0833vw] mobile:mt-4 mobile:flex-col mobile:gap-y-6">
                {howList.map((list, index) => (
                    <li key={index} className="flex-1 text-center">
                      <img alt="how이미지" src={list.image} className="rounded-lg mobile:w-full mobile:h-[6.25rem] mobile:object-cover"/>
                      <p className="f-list mt-[1.2500vw] mobile:mt-2">{list.text1}</p>
                      <h3 className="f-heading text-gray-800 font-bold">{list.title}</h3>
                      <p className="f-list mt-[0.8333vw] text-gray-500 mobile:mt-2">{list.text2}</p>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className="max-layout section-layout pb-[1.9792vw]
          mobile:pb-[1.625rem]">
            <p className="f-title1 text-main">Growth goals</p>
            <h1 className="f-h1 font-bold mobile:font-medium">이렇게 성장하고자 해요</h1>
            <p className="f-title1 mt-[0.8333vw] text-gray-500 mobile:mt-4">팀원이 동반 성장할 수 있는 회사, 팀원이 목표를 실현할 수 있는 회사가 되고자 합니다.<br/>우리의
              비전은 모든 대학생들이 사용하는 필수 라이프 스타일 플랫폼으로 거듭나는 것입니다.</p>
          </div>
          <div className="dark-content text-center py-[3.9583vw] text-white bg-[url('/images/intro-growth-bg.png')] bg-gray-800 bg-cover bg-no-repeat bg-top mobile:py-10">
            <h1 className="f-72 font-bold">Achieve,<br className="hidden mobile:block"/> be Bold,<br className="hidden mobile:block"/> and make it<br className="hidden mobile:block"/> Memorable</h1>
            <p className="f-heading-small mt-[0.5208vw] mobile:mt-4">목표를 향해 나아가며, 도전을 두려워하지 않고,<br className="hidden mobile:block"/> 모든 순간을 의미 있고 기억에 남는 경험으로 만들어라</p>
          </div>
        </section>
        <section id="sectionAni" ref={sectionAni} className="white-content max-layout">
          <div className="section-layout py-[6.2500vw] mobile:py-[5.1875rem]">
            <p className="f-title1 text-main">History</p>
            <h1 className="f-h1 font-bold mobile:font-medium">이렇게 성장했어요.</h1>
            <p className="f-list mt-[0.8333vw] text-gray-500 mobile:mt-4">3명에서 출발한 에이비엠랩이 어느덧 22명의 팀원을 꾸려 함께 업무하고 있어요.</p>
            <div className="flex items-end relative text-white mt-[2.0833vw] h-[36.4583vw] mobile:h-[11.25rem] mobile:mt-6">
              <div className={`fade-circle shrink-0 text-[2.5000vw] mobile:text-[0.76875rem] bg-[#C8CFE8] ${scrollY > sectionTop ? 'fade-in-1' : ''}`}>3명
              </div>
              <div className={`fade-circle text-[3.7500vw] mobile:text-[1.153125rem] bg-[#8FABEA] ${scrollY > sectionTop ? 'fade-in-2' : ''}`}>12명
              </div>
              <div className={`fade-circle text-[5.0000vw] mobile:text-[1.5375rem] bg-[#2C6DFF] ${scrollY > sectionTop ? 'fade-in-3' : ''}`}>22명
              </div>
            </div>
          </div>
        </section>
        <section className="dark-content section-layout pt-[12.6563vw] pb-[10.9375vw] bg-[url('/images/intro-history-bg.jpg')] bg-cover bg-no-repeat bg-top w-full mobile:pt-[5rem] mobile:pb-[8.375rem
        ]">
          <div className="max-layout text-white">
            <h1 className="f-h1">제휴 마케팅에서 시작해 대학생 대상 플랫폼까지<br/>비즈니스 모델을 다양화하며 수익을 창출하고 있습니다.</h1>
            <div className="flex flex-col gap-y-[7.2917vw] mt-[5.4167vw] mobile:mt-12">
              {historyList.map((list, index) => (
                  <dl key={index} className="flex flex-row mobile:flex-col">
                    <dt>
                      <span className="sticky top-[92px] text-[5.2083vw] opacity-[0.3] font-extrabold mr-[4.3750vw] mobile:text-[3rem]">{list.year}</span>
                    </dt>
                    <dd className="pt-[1.2500vw] mobile:pl-4">
                      <p className="f-h2 font-bold pt-[0.8854vw] pseudo before:w-[2px] before:h-[3.7500vw] before:left-[-2.5000vw] before:top-[0.4688vw] before:bg-[rgba(255,255,255,0.3)] mobile:before:w-[4px] mobile:before:h-[40px] mobile:before:left-[-13px]">{list.title}</p>
                      <ul className="f-title1 mt-[1.2500vw] mobile:mt-4">
                        {list.text.map((textItem, textIndex) => (
                            <li key={textIndex}>{textItem}</li>
                        ))}
                      </ul>
                    </dd>
                  </dl>
              ))}
            </div>
          </div>
        </section>
      </div>
  )
}
export default IntroPage;