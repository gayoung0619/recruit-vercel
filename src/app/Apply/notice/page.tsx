'use client'
import React, { useState, useEffect } from "react";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { tabList } from "@/app/_lib/tabcontent";
import { noticeInfo } from "@/app/_lib/notice";
import Link from "next/link";
import { calculateDaysLeft } from '@/app/_utils/getDday';
import { TabList } from "@/app/_components/ui/tablist";
import { TabListSwiper } from "@/app/_components/ui/tablist-swiper";
import 'swiper/css';
const NoticePage = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const modifiedTabList = ["전체", ...tabList];
  const [filteredContent, setFilteredContent] = useState(noticeInfo);
  const [isPC, setIsPC] = useState(false);
  useEffect(() => {
    // 클라이언트 측에서만 실행되도록
    if (typeof window !== 'undefined') {
      setIsPC(window.innerWidth > 768);
    }
  }, []);
  const handleTabClick = (tabData: string) => {
    setActiveTab(tabData);
    setFilteredContent(tabData === "전체" ? noticeInfo : noticeInfo.filter((item) => item.label === tabData));
  }

  return (
      <div className="pb-[3.7500vw] mobile:pb-0">
        <section className="dark-content relative text-white w-full h-[20.6250vw] max-h-[24.75rem] min-h-[14.5625rem]">
          <div className="w-full h-full absolute z-[-1]">
            <div className="bg-[url('/images/apply-notice.jpg')] bg-cover bg-no-repeat bg-center w-full h-full"></div>
          </div>
          <div className="max-layout">
            <Breadcrumb/>
            <h1 className="f-h1 font-bold mobile:font-medium absolute left-[50%] top-[50%] translate-x-[-50%] mobile:top-[58%]">채용 공고</h1>
          </div>
        </section>

        <section className="white-content">
          <div className="px-[1.6667vw] py-[4.1667vw] mobile:pb-[7.75rem] mobile:px-0 mobile:pt-[1.5rem]">
            {isPC? (
                <TabList dataList={modifiedTabList} activeTab={activeTab} handleTabClick={handleTabClick} />
            ) : (
                <TabListSwiper dataList={modifiedTabList} activeTab={activeTab} handleTabClick={handleTabClick} />
            )}
            <div className="max-layout mt-[1.6667vw] mobile:mt-[0.75rem]">
              {filteredContent.length > 0? (
                  filteredContent.map((list) =>
                      <Link
                          href={calculateDaysLeft(list.detail.period) === "마감" ? "" : `/Apply/notice/${list.id}`}
                          key={list.id}
                            className={`tab-content mt-[2.5000vw] mobile:mt-[1.6875rem]`}>
                        <div className="h-[4.3750vw] min-h-[3.375rem] px-[1.6667vw] flex justify-between items-center gap-y-[0.5rem] mobile:px-[1rem] mobile:gap-y-[0.25rem] hover:bg-gray-100">
                          <div className="flex items-center">
                            <div className="bg-blue-20 rounded-[100px] text-main f-caption leading-[1.8750vw] w-[3.7500vw] h-[1.8750vw] min-w-[2.625rem] min-h-[1.375rem] text-center tablet:leading-[1.375rem]">{list.position}
                            </div>
                            <div className="flex flex-wrap items-center ml-[0.8333vw] mobile:ml-[0.5rem]">
                              <span className="f-title1 mr-[0.8333vw] mobile:mr-[0.5rem]">{list.title}</span>
                              <span className="f-body">{list.team}</span>
                            </div>
                          </div>
                          <div className="f-title1 text-main ml-[1rem] whitespace-nowrap">{calculateDaysLeft(list.detail.period)}</div>
                        </div>
                      </Link>)
              ) : (
                  <div className="text-center text-gray-400 f-title1 mt-[8.3333vw] mb-[4.1667vw] mobile:mt-[4.75rem] mobile:mb-0">아쉽지만 채용중인 공고가 없습니다.</div>
              )}
            </div>
          </div>
        </section>
      </div>
  )
}
export default NoticePage;