import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";

type TabListSwiperProps = {
  activeTab: string; // 또는 해당 탭 데이터 타입에 맞는 타입 지정
  handleTabClick: (tab: string) => void; // 또는 해당 핸들러의 타입에 맞는 타입 지정
  dataList: string[]; // 또는 해당 데이터의 타입에 맞는 타입 지정
}
export const TabListSwiper:React.FC<TabListSwiperProps> = ({ activeTab, handleTabClick, dataList }) => {
  return (
      <Swiper slidesPerView={'auto'} className="tabSwiper px-[1rem]">
        {dataList.map((data) => (
            <SwiperSlide key={data} className={`tab text-gray-500 break-keep f-title1 px-[1.1rem] py-[0.25rem] ${activeTab === data? 'active' : null }`}>
              <button onClick={() => handleTabClick(data)}>{data}</button>
            </SwiperSlide>
        ))}
      </Swiper>
  )
}