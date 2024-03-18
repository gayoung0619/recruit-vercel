'use client';
import React, { useState } from "react";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { fabList, faqContentList } from "@/app/_lib/tabcontent";
const FaqPage = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [filteredContent, setFilteredContent] = useState(faqContentList);
  const handleTabClick = (tabData: string) => {
    setActiveTab(tabData);
    setFilteredContent(tabData === '전체' ? faqContentList : faqContentList.filter((item) => item.tab === tabData));
  }
  const handleAccordionClick = (index: number) => {
    setOpenAccordion(index);
  };
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

        <section className="white-content max-layout">
          <div className="section-layout px-[1.6667vw] py-[4.1667vw] mobile:pb-[7.75rem] mobile:mt-[0.4375rem]">
            <ul className="flex gap-x-[0.4167vw] items-center scroll-custom mobile:gap-x-[0.5rem] mobile:overflow-y-scroll mobile:pb-[0.5rem]">
              {fabList.map((list) => (
                  <li key={list} className={`tab text-gray-500 break-keep f-title1 px-[1.2500vw] py-[0.4167vw] mobile:px-[1rem] mobile:py-[0.375rem] ${activeTab === list? 'active' : null }`}>
                    <button onClick={() => handleTabClick(list)}>{list}</button>
                  </li>
              ))}
            </ul>
            {filteredContent.map((list, index) => (
                <div key={index} className={`tab-content mt-[1.6667vw] mobile:mt-[0.3125rem]`}>
                  <div className="flex flex-col gap-y-[0.4167vw] mobile:gap-y-0 px-[1.6667vw] mobile:pl-[2.25rem] mobile:pr-0">
                    <h3 className={`accordion_btn f-cnt_txt text-blue-600 font-medium pl-[1.2500vw] tablet:pl-[1.5rem] mobile:pl-[1.6667vw] py-[1.2500vw] tablet:py-[1.0625rem] ${openAccordion === index? "open" : "" }`}
                        onClick={() => handleAccordionClick(index)}>
                      {list.title}
                    </h3>
                    <div className={`accordion_cnt ${openAccordion === index? "open" : "" }`}>
                      <p className="f-title2 text-gray-500 pt-[0.3646vw] pr-[2.0833vw] pb-[0.5208vw] pl-[1.3021vw] mobile:pt-[0.5rem] mobile:pr-[1rem] mobile:pb-[1.5rem] mobile:pl-[0.3125rem]">{list.text}</p>
                    </div>
                  </div>
                </div>)
            )}
          </div>
        </section>
      </div>
  )
}
export default FaqPage;