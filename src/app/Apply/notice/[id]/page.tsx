import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { noticeInfo } from "@/app/_lib/notice";
import React from "react";
import Link from "next/link";

const NoticePost = ({
  params: {id},
} : {
  params: {id: string}
}) => {
  type UlSectionProps = {
    title: string,
    items: string[]
  }
  type DlSectionProps = {
    title: string,
    content: string | string[]
  }
  const UlSection:React.FC<UlSectionProps> = ({ title, items }) => (
      <ul className="mt-[1.5625vw] px-[0.8333vw] mobile:mt-[1rem] mobile:px-[0.5rem]">
        <h4 className="mb-[0.4167vw] f-title1 text-gray-800 font-medium mobile:mb-[0.5rem]">{title}</h4>
        {items.map((item, index) => (
            <li key={index} className="pl-[1.5104vw] list-pseudo f-title2 text-gray-500 mobile:pl-[1rem]">{item}</li>
        ))}
      </ul>
  );
  const DlItem:React.FC<DlSectionProps> = ({ title, content }) => {
    return (
        <dl className="flex items-center px-[1.2500vw] py-[1.5104vw] border-t-[2px] border-[#EBEEF1] mobile:px-[1rem] mobile:py-[1.5rem] mobile:border-t-[1px]">
          <dt className="f-title1 w-[30%] font-medium">{title}</dt>
          <dd className="f-title2 text-gray-500">
            {Array.isArray(content) ?
                content.map((item, index) => (
                    <p key={index} className="pl-[1.5104vw] list-pseudo f-title2 text-gray-500 mobile:pl-[1rem]">{item}</p>
                ))
                : content}
          </dd>
        </dl>
    );
  };

  return (
      <div className="white-content notice_wrap pb-[3.7500vw] mobile:pb-[4.5rem]">
        {noticeInfo.map((list) => (
            <div key={`${list.id}_${id}`}>
              {id === list.id && <section className="max-layout">
                  <div className="text-gray-800 pb-[5.2083vw] mobile:pb-[3.5rem]">
                      <Breadcrumb/>
                      <div className="flex items-end justify-center mobile:flex-col mobile:items-center">
                          <h1 className="f-h1 font-bold mobile:font-medium">{list.label}</h1>
                          <p className="f-heading ml-[1.2500vw] mobile:ml-0 mobile:mt-[0.5rem]">{list.team}</p>
                      </div>
                  </div>
                  <div className="flex gap-x-[1.0417vw] mobile:flex-col">
                      <div className="flex-1 notice-left border-t-[2px] border-[#EBEEF1] mobile:border-t-[1px]">
                          <div className="p-[1.6667vw] mobile:p-[1rem]">
                              <h3 className="f-heading text-main font-medium">{list.detail.subtitle}</h3>
                              <UlSection title="담당업무" items={list.detail.responsibilities} />
                              <UlSection title="자격요건" items={list.detail.require} />
                              <UlSection title="우대사항" items={list.detail.preference} />
                          </div>
                      </div>

                      <div className="notice-right flex-1 flex flex-col justify-between">
                          <div className="">
                              <DlItem title="모집기간" content={list.detail.period} />
                              <DlItem title="지원자격" content={list.detail.qualification} />
                              <DlItem title="근무지" content={list.detail.place} />
                              <DlItem title="근무형태" content={list.detail.type} />
                          </div>
                          <Link href={`/Apply/notice/${id}/form`} className="flex justify-center items-center w-[100%] h-[3.4375vw] min-h-[2.875rem] bg-main text-white f-title1 rounded-[5.2083vw]">지원하기</Link>
                      </div>
                  </div>

                  <Link href="/Apply/notice" className="flex items-center mt-[6.2500vw] mobile:hidden">
                      <img alt="화살표 아이콘" src="/icon/icon_arrow.svg" className="rotate-180 w-[1.6667vw] h-[1.6667vw]"/>
                      <span className="f-title1 text-gray-500 ml-[0.4167vw] min-w-[1.5rem] min-h-[1.5rem]">공고 더보기</span>
                  </Link>
              </section>}
            </div>
          ))}
      </div>
  )
}
export default NoticePost;