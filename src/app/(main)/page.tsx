'use client';
import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import { slideData } from '@/app/_lib/slide'
import 'swiper/css';
import 'swiper/css/effect-fade';
import Arrow from "@/app/_components/icons/arrow";
import {noticeInfo} from "@/app/_lib/notice";
import Link from "next/link";
export default function Main() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(slideData.length);
  const newcomerItems = noticeInfo.filter((item) => item.position === '신입');
  const ExperiencedItems = noticeInfo.filter((item) => item.position === '경력');
  const internItems = noticeInfo.filter((item) => item.position === '인턴');
  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex + 1);
    setTotalSlides(swiper.slides.length);
  };

  SwiperCore.use([EffectFade, Pagination, Autoplay]);
  return (
    <div className="swiper-container relative dark-content">
      <Swiper
          modules={[Pagination]}
          effect="fade" // Set the transition effect to fade
          pagination={{
            clickable: true,
            el: '.swiper-pagination',  // Specify your custom pagination element
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
          }}
        >
        {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="h-auto w-full">
                <div className="relative pt-[calc(1080/1920*100%)] mobile:hidden">
                  <Image
                      src={slide.image}
                      alt=" "
                      fill
                      className='abosolute'
                  />
                </div>
                <div className="relative pt-[calc(640/360*100%)] hidden mobile:block">
                  <Image
                      src={slide.imageMo}
                      alt=" "
                      fill
                      className='abosolute object-cover'
                      />
                </div>
                
                <div className="absolute top-1/2 translate-y-[-40%] left-1/2 translate-x-[-50%] max-layout w-full text-white font-semibold">
                  <h1 className="relative circle before:w-[2.9167vw] mobile:before:w-[28px] before:h-[2.9167vw] mobile:before:h-[28px] before:top-[-0.7813vw] before:left-[-1.5625vw] before:z-[-1] f-main-title break-keep">
                    {slide.title.map((txt, index) => (
                        <Fragment key={index}>
                          {txt}
                          {index < slide.title.length - 1 && <br/>}
                        </Fragment>
                    ))}
                  </h1>
                  <p className="f-main-subtitle mt-4 mobile:mt-2 font-normal">{slide.subtitle}</p>
                  <div className="pt-[7.3958vw]">
                    <h1 className="f-heading">채용중인 공고</h1>
                    <div className="pt-[1.2500vw]">
                      <ul className="flex gap-2 mobile:grid mobile:grid-cols-2 mobile:max-w-[328px]">
                        <Link href='/Apply/notice'>
                          <li className="flex flex-col justify-between mobile:col-span-2 h-[10.8854vw] w-[12.1354vw] mobile:h-32 mobile:max-w-[160px] mobile:w-full bg-white/[.24] rounded p-[1.2500vw] mobile:p-[1rem]">
                            <div className="flex justify-between items-center">
                              <strong className="f-cnt_txt">신입채용</strong>
                              <Arrow/>
                            </div>
                            <p className="text-right f-cnt_txt2">{newcomerItems.length}건</p>
                          </li>
                        </Link>
                        <Link href='/Apply/notice'>
                          <li className="flex flex-col justify-between h-[10.8854vw] w-[12.1354vw] mobile:h-32 mobile:max-w-[160px] mobile:w-full bg-white/[.24] rounded p-[1.2500vw] mobile:p-[1rem]">
                            <div className="flex justify-between items-center">
                              <strong className="f-cnt_txt">경력채용</strong>
                              <Arrow/>
                            </div>
                            <p className="text-right f-cnt_txt2">{ExperiencedItems.length}건</p>
                          </li>
                        </Link>
                        <Link href='/Apply/notice'>
                          <li className="flex flex-col justify-between h-[10.8854vw] w-[12.1354vw] mobile:h-32 mobile:max-w-[160px] mobile:w-full bg-white/[.24] rounded p-[1.2500vw] mobile:p-[1rem]">
                            <div className="flex justify-between items-center">
                              <strong className="f-cnt_txt">인턴   채용</strong>
                              <Arrow/>
                            </div>
                            <p className="text-right f-cnt_txt2">{internItems.length}건</p>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        ))}
        <div
            className="swiper-controller max-layout w-full flex gap-x-4 justify-end absolute left-[50%] translate-x-[-50%] bottom-[8.3333vw] z-10 mobile:max-w-[328px] mobile:p-0 mobile:left-[16px] mobile:translate-x-0 mobile:translate-y-0 mobile:gap-x-2">
          <div className="swiper-pagination">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="text-sm mobile:text-[10px]">
            <span className="text-white">
              {String(activeIndex).padStart(2, '0')}
            </span>
            <span className="text-gray-400">
              /{String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </div>
      </Swiper>
    </div>
  );
}
