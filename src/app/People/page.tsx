'use client';
import React, {Fragment, useEffect, useRef, useState} from "react";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { tabContentList, tabList } from "@/app/_lib/tabcontent";
import { TabList } from "@/app/_components/ui/tablist";
import { TabListSwiper } from "@/app/_components/ui/tablist-swiper";
import 'swiper/css';
const PeoplePage = () => {
  const [activeTab, setActiveTab] = useState('경영지원팀');
  const handleTabClick = (tabData: string) => {
    setActiveTab(tabData);
  }
  const [isPC, setIsPC] = useState(false);
  useEffect(() => {
    // 클라이언트 측에서만 실행되도록
    if (typeof window !== 'undefined') {
      setIsPC(window.innerWidth > 768);
    }
  }, []);
  return (
      <div className="pb-[3.7500vw] mobile:pb-0">
        <section className="dark-content relative text-white w-full min-h-[24.75rem] mobile:min-h-[14.5625rem]">
          <div className="w-full h-full absolute z-[-1]">
            <div className="mobile:hidden bg-[url('/images/people.jpg')] bg-no-repeat bg-top w-full h-full bg-fixed"></div>
            <div className="hidden mobile:block bg-[url('/images/people-mo.jpg')] bg-cover bg-no-repeat bg-bottom w-full h-[14.5625rem]"></div>
          </div>
          <div className="max-layout">
            <Breadcrumb/>
            <h1 className="f-h1 font-bold mobile:font-medium absolute left-[50%] top-[50%] translate-x-[-50%] mobile:top-[58%]">업무 소개</h1>
          </div>
        </section>

        <section className="white-content">
          <div className="px-[1.6667vw] py-[4.1667vw] mobile:pb-[7.75rem] mobile:px-0 mobile:pt-[1.5rem]">
            {isPC? (
                <TabList dataList={tabList} activeTab={activeTab} handleTabClick={handleTabClick} />
            ) : (
                <TabListSwiper dataList={tabList} activeTab={activeTab} handleTabClick={handleTabClick} />
            )}
            {tabContentList.map((list) =>
                activeTab === list.tab && (
                    <div key={list.tab} className={`max-layout px-[3.3333vw] tab-content mt-[2.5000vw] mobile:px-[1rem] mobile:mt-[1.6875rem] ${activeTab === list.tab ? 'active' : ''}`}>
                      <div className={`flex items-center justify-center w-full rounded-lg z-[-2] h-[17rem] my-[1.2500vw] mobile:h-[8rem] mobile:min-h-[8rem] pseudo before:w-full before:h-full before:bg-[rgba(0,0,0,.4)] before:z-[-1] before:rounded-lg`} style={{background: `url('${list.image}') no-repeat center / cover`}}>
                        <p className={`f-h2 font-bold text-center px-[1rem] mobile:font-medium mobile:text-white ${isPC ? 'typing' : ''}`}
                           data-content={list.titleBg}>{list.titleBg}</p>
                      </div>
                      <div className="mobile:px-[1rem]">
                        <div className="mt-[2.5000vw] mobile:mt-[2.375rem]">
                        <h2 className="f-h2 text-main font-bold mobile:font-medium mobile:text-wrap">{list.title}</h2>
                          <p className="text-gray-500 f-title1 mt-[0.8333vw] mobile:mt-[0.5rem]">{list.text}</p>
                        </div>
                        <div className="mt-[4.1667vw] mobile:mt-[3rem]">
                          <h3 className="text-gray-700 f-h3 f-heading font-medium mobile:font-normal">{list.subtitle1}</h3>
                          <ul className="mt-[0.8333vw] bg-gray-100 text-gray-600 rounded-[0.4167vw] px-[1.2500vw] py-[1.2500vw] mobile:mt-[0.5rem] mobile:px-[1rem] mobile:py-[1rem] mobile:rounded-[0.25rem]">
                            {list.text1.map((item, index) => (
                                <li key={index}
                                    className="pl-[1.9792vw] leading-[2.2500vw] f-cnt_txt list-pseudo mobile:pl-[1.6875rem] mobile:leading-[1.8rem] mobile:tracking-[-0.1rem]">
                                  {item}
                                </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-[3.3333vw] mobile:mt-[3rem]">
                          <h3 className="text-gray-700 f-h3 f-heading font-medium mobile:font-normal">{list.subtitle2}</h3>
                          <ul className="mt-[0.8333vw] text-gray-600 rounded-[0.4167vw] px-[1.2500vw] mobile:mt-[0.5rem] mobile:px-[1.8125rem] mobile:rounded-[0.25rem]">
                            {list.text2.map((item, index) => (
                                <li key={index}
                                    className="pl-[1.9792vw] leading-[2.2500vw] f-cnt_txt list-pseudo mobile:pl-0 mobile:leading-[1.8rem] mobile:tracking-[-0.1rem] mobile:before:left-[-15px]">
                                  {item}
                                </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-[3.3333vw] mobile:mt-[3rem]">
                          <h3 className="text-gray-700 f-h3 f-heading font-medium mobile:font-normal">{list.subtitle3}</h3>
                          <ul className="mt-[0.8333vw] text-gray-600 rounded-[0.4167vw] px-[1.2500vw] mobile:mt-[0.5rem] mobile:px-[1.8125rem] mobile:rounded-[0.25rem]">
                            {list.text3?.map((item, index) => (
                                <li key={index}
                                    className="pl-[1.9792vw] leading-[2.2500vw] f-cnt_txt list-pseudo mobile:pl-0 mobile:leading-[1.8rem] mobile:tracking-[-0.1rem] mobile:before:left-[-15px]">
                                  {item}
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                )
            )}
          </div>
        </section>
      </div>
  )
}
export default PeoplePage;