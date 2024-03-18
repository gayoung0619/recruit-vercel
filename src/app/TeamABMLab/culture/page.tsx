'use client';
import React from "react";
import { cultureList, organizationCulList, teamList } from "@/app/_lib/list";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';

import { Grid } from 'swiper/modules';

const culturePage = () => {
  return (
      <div>
        <section className="dark-content relative text-white w-full">
          <div className="w-full h-full absolute z-[-1]">
            <div className="mobile:hidden bg-[url('/images/teamabm-culture.jpg')] bg-cover bg-no-repeat bg-top w-full h-full bg-fixed"></div>
            <div className="hidden mobile:block bg-[url('/images/teamabm-culture-mo.jpg')] bg-cover bg-no-repeat bg-top w-full h-full"></div>
          </div>
          <div className="max-layout">
            <Breadcrumb/>
            <div className="section-layout pb-[4.7396vw] mobile:pt-[1rem] mobile:pb-[3.6875rem]">
              <h2 className="f-h2 circle title-circle">Mission</h2>
              <h1 className="f-h1 font-bold pt-[0.5729vw] mobile:font-medium">에이비엠랩에서 일하는 방법</h1>
              <ul className="grid grid-cols-4 gap-[1.0417vw] mt-[2.5000vw] tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-y-2 mobile:mt-[1.0625rem]">
                {cultureList.map((list, index) => (
                    <li key={index}
                        className="box-blur flex-1 px-[1.6667vw] py-[0.8333vw] mobile:flex mobile:gap-x-[0.5rem] mobile:items-center mobile:px-[1rem] mobile:py-[0.5rem]">
                      <img
                          src={list.image}
                          alt="아이콘"
                          className="w-[5.2083vw] h-[5.2083vw] tablet:w-[8vw] tablet:h-[8vw] mobile:w-[5rem] mobile:h-[5rem]"/>
                      <div className="">
                        <p className="f-list pt-[0.4167vw] pb-[1.0417vw] mobile:py-0">{list.text}</p>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="white-content">
          <div className="overflow-hidden">
            <div className="section-layout">
              <h1 className="max-layout f-h1 font-bold mobile:font-medium">팀원들이 이야기하는<br/>에이비엠랩</h1>
              <Swiper
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                      grid: {
                        rows: 2,
                        fill: "row"
                      }
                    },
                    320: {
                      slidesPerView: "auto",
                      spaceBetween: 20,
                    }
                  }}
                  modules={[Grid]}
                  className="max-layout gridSwiper mt-[4.1667vw] pb-[30px] mobile:mt-[2rem]"
              >
                {teamList.map((list, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex flex-shrink-0 gap-x-[0.8333vw] mobile:flex-col mobile:max-w-[17.5rem]">
                        <img
                            src={list.image}
                            alt="아이콘"
                            className="w-[6.2500vw] h-[6.2500vw] mobile:w-[4.5rem] mobile:h-[4.5rem]"/>
                        <div>
                          <p className="bubble f-cnt_txt text-gray-700 font-medium mobile:mt-[1rem]">{list.text1}</p>
                          <p className="f-list mt-[0.8333vw] pl-[1.6667vw] pr-[0.8333vw] text-gray-500 mobile:mt-[1rem] mobile:px-[1rem]">{list.text2}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="pb-[17.1875vw]">
          {organizationCulList.map((list, index) => (
              <div key={index} className="overflow-hidden">
                <div className="section-layout mobile:pt-[50px]">
                  <div className="max-layout">
                    <p className="f-title1 text-main">{list.subtitle}</p>
                  <h1 className="f-h1 font-bold mobile:font-medium">{list.title}</h1>
                </div>
                <div className="mt-[2.0833vw] mobile:mt-4">
                  <div className="max-layout mobile:p-0 mobile:pb-[20px]">
                    <Swiper
                        className="autoSwiper"
                          breakpoints={{
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 20
                            },
                            320: {
                              slidesPerView: "auto",
                              spaceBetween: 8
                            }
                          }}>
                            <SwiperSlide className="w-[90%] mobile:pl-[1rem]">
                              <img src={list.image1} alt="워크샵이미지"/>
                            </SwiperSlide>
                            <SwiperSlide className="mobile:pr-[1rem]">
                              <img src={list.image2} alt="워크샵이미지"/>
                            </SwiperSlide>
                      </Swiper>
                    </div>
                  <div className="max-layout">
                      <h3 className="f-heading text-gray-800 font-bold break-keep pl-[0.8333vw] mt-[1.6667vw] mobile:px-[1rem] mobile:mt-[0]">{list.text1}</h3>
                      <p className="f-title1 mt-[0.4167vw] text-gray-500 break-keep pl-[0.8333vw] mobile:px-[1rem] mobile:mt-[0.5rem]">{list.text2}</p>
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </section>
      </div>
  )
}
export default culturePage;