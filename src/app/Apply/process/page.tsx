'use client';
import React from "react";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import {Autoplay, EffectFade, Pagination} from "swiper/modules";
import {noticeInfo} from "@/app/_lib/notice";
SwiperCore.use([EffectFade, Pagination, Autoplay]);
import 'swiper/css';
import {calculateDaysLeft} from "@/app/_utils/getDday";
import Link from "next/link";


const processPage = () => {
  const process:string[] = [
      "입사 지원",
      "서류 전형",
      "전화 면접",
      "대면 면접",
      "최종 합격"
  ];

  return (
      <div>
        <section className="dark-content relative text-white w-full h-[100vh] mobile:h-full">
          <div className="w-full h-full absolute z-[-1]">
            <div className="bg-[url('/images/apply-process.jpg')] bg-cover bg-no-repeat bg-top w-full h-full bg-fixed"></div>
          </div>
          <div className="max-layout h-full flex flex-col justify-between">
            <div className="flex justify-between items-start mobile:flex-col" >
              <Breadcrumb/>
              <Swiper
                  loop={false}
                  direction={'vertical'}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="processSwiper box-blur w-[70%] h-[3.5417vw] min-h-[2.875rem] mt-[6.875vw] tablet:mt-[6rem] rounded-[0.375rem] mobile:mt-[0.875rem] mobile:w-[100%]">
                  {noticeInfo.map((list) => (
                    <>
                      <SwiperSlide className="flex items-center px-[1rem]">
                        <div className="flex items-center">
                          <div className="bg-blue-20 rounded-[100px] text-main f-caption leading-[1.8750vw] w-[3.7500vw] h-[1.8750vw] min-w-[2.625rem] min-h-[1.375rem] text-center tablet:leading-[1.375rem]">{list.position}</div>
                          <div className="flex flex-wrap items-center ml-[0.8333vw] mobile:ml-[0.5rem]">
                            <span className="f-title1 mr-[0.8333vw] mobile:mr-[0.5rem]">{list.title}</span>
                            <span className="f-body">{list.team}</span>
                          </div>
                        </div>
                        <div className="f-title1 text-main ml-[1rem] whitespace-nowrap">{calculateDaysLeft(list.detail.period)}</div>
                      </SwiperSlide>
                    </>
                  ))}
              </Swiper>
            </div>

            <div className="pb-[4.1667vw] mobile:pb-[1.25rem] mobile:pt-[3.1875rem]">
              <h2 className="f-h2 circle title-circle">Welcome!</h2>
              <div className="flex justify-between items-end">
                <h1 className="f-h1 font-bold pt-[0.5729vw] mobile:font-medium">주저 말고 지원하세요</h1>
                <Link href="/Apply/notice" className="mobile:hidden flex justify-center w-[9.2708vw] h-[3.4375vw] min-h-[2.5rem] bg-main text-white f-title1 rounded-[6.25rem]">
                  <button>채용공고</button>
                </Link>
              </div>
              <ul className="grid grid-cols-5 gap-[1.0417vw] mt-[2.0833vw] mobile:grid-cols-1 mobile:gap-y-2 mobile:mt-[1.0625rem]">
                {process.map((list, index) => (
                    <li key={index}
                        className="flex items-center justify-center box-blur min-h-[7.5rem] mobile:min-h-[3.75rem]">
                    <span className="f-heading leading-[6.2500vw] text-center pseudo before:bg-[url('/icon/icon_arrow.svg')] before:bg-cover before:right-[-2.0833vw] before:top-[2.2396vw] before:w-[1.6667vw] before:h-[1.6667vw] mobile:leading-[3.75rem] mobile:w-[100%] mobile:before:w-[1.5rem] mobile:before:h-[1.5rem] mobile:before:right-[0.25rem] mobile:before:top-[1.1875rem]">{list}</span>
                    </li>
                ))}
              </ul>
              <Link href="/Apply/notice" className="hidden mobile:flex justify-center w-[100%] h-[2.625rem] mt-[1rem] bg-main text-white f-title1 rounded-[6.25rem]">
                <button>채용공고</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}
export default processPage;