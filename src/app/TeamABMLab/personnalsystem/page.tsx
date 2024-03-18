import React from "react";
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import { goodList, waitingList } from "@/app/_lib/list";

const PesonnalSystemPage = () => {
  return (
      <div>
        <section className="dark-content relative text-white w-full">
          <div className="w-full h-full absolute z-[-1]">
            <div
                className="mobile:hidden bg-[url('/images/teamabm-personnalsystem.jpg')] bg-cover bg-no-repeat bg-top w-full h-full bg-fixed"></div>
            <div
                className="hidden mobile:block bg-[url('/images/teamabm-personnalsystem-mo.jpg')] bg-cover bg-no-repeat bg-top w-full h-full"></div>
          </div>
          <div className="max-layout">
            <Breadcrumb/>
            <div className="section-layout pb-[4.7396vw] mobile:pt-[1rem] mobile:pb-[3.6875rem]">
              <h2 className="f-h2 circle title-circle">Waiting for</h2>
              <h1 className="f-h1 font-bold pt-[0.5729vw] mobile:font-medium">소중한 인재를 기다립니다</h1>
              <ul className="grid grid-cols-2 gap-[1.0417vw] mt-[2.5000vw] tablet:grid-cols-2 mobile:grid-cols-1 mobile:gap-y-2 mobile:mt-[1.0625rem]">
                {waitingList.map((list, index) => (
                    <li key={index}
                        className="box-blur flex items-center gap-x-[1.6667vw] flex-1 px-[1.6667vw] py-[1.6667vw] mobile:gap-x-[2rem] mobile:px-[1rem] mobile:py-[1rem]">
                      <img alt="아이콘" src={list.image} className="w-[8.3333vw] h-[8.3333vw] mobile:w-[5rem] mobile:h-[5rem]"/>
                      <div className="">
                        <h3 className="f-heading-small">{list.title}</h3>
                        <p className="f-list pt-[0.4167vw] mobile:pt-[0.5rem]">{list.text}</p>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="white-content max-layout">
          <div className="section-layout py-[8.3333vw] mobile:pt-[5rem] mobile:pb-[7.75rem]">
            <p className="f-title1 text-main">Good!</p>
            <h1 className="f-h1 font-bold mobile:font-medium">이런점이 좋아요!</h1>
            <div className="mt-[4.1667vw] mobile:mt-[2rem]">
              <ul className="grid grid-cols-2 gap-x-[1.0417vw] gap-y-[3.7500vw] gap mobile:grid-cols-1 mobile:gap-y-[2rem]">
                {goodList.map((list, index) => (
                    <li key={index} className="flex gap-x-[2rem] items-center mobile:gap-x-[1rem]">
                      <img src={list.image} alt="복지관련 아이콘" className="w-[9.3750vw] h-[9.3750vw] mobile:w-[5rem] mobile:h-[5rem]" />
                      <div>
                        <h3 className="f-heading text-gray-800 font-medium">{list.title}</h3>
                        <p className="f-list mt-[0.8333vw] text-gray-500 mobile:mt-2">{list.text}</p>
                      </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-[4.1667vw] mobile:py-[5rem]">
          <div className="max-layout">
            <h2 className="f-h2 text-gray-800 font-bold">CAUTION</h2>
            <ul className="f-list mt-[1.6667vw] text-gray-500 leading-[2.0833vw] mobile:mt-[1rem] mobile:leading-[1.75rem]">
              <li>· 국가유공자 및 장애인 등 취업보호 대상자는 관계법령에 따라 우대합니다.</li>
              <li>· 이력서에 기재된 학력 및 경력사항 등 기재 사항이 허위임이 판명될 경우, 합격이 취소될 수 있습니다.</li>
              <li>· 접수 기한이 명시되어 있지 않은 공고는 인재 영입이 완료될 경우 조기 마감될 수 있습니다.</li>
              <li>· 전형 일정 및 결과는 지원자 등록에 기재된 이메일을 통해 안내드립니다.</li>
              <li>· 정규직 입사 시 신입 6개월, 경력 3개월의 수습 기간이 적용되며, 기간제의 경우 근무 개월 수에 따라 1개월 혹은 3개월의 수습 기간이 적용됩니다.</li>
            </ul>
          </div>
        </section>
      </div>
  )
}
export default PesonnalSystemPage;