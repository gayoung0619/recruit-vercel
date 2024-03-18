'use client';
import Breadcrumb from "@/app/_components/ui/breadcrumb";
import React, {useState, useEffect} from "react";
import Step1 from "@/app/_components/formui/step1";
import Step2 from "@/app/_components/formui/step2";
import Step3 from "@/app/_components/formui/step3";
import Step4 from "@/app/_components/formui/step4";
import { useForm, UseFormRegister } from "react-hook-form";
import { fetchData } from "@/app/_lib/fetchdata";
import { transportfile } from "@/app/_utils/TransportFile";
import { useRouter } from "next/navigation";

const NoticeForm = ({
  params: {id},
} : {
  params: {id: string}
}) => {
  const router = useRouter();
  const steps: string[] = [
    "1. 지원자 정보",
    "2. 제출 서류",
    "3. 추가 설문",
    "4. 면접 정보 동의",
  ];
  const isPC = window.innerWidth > 768; // Adjust the width threshold as needed
  const [activeStep, setActiveStep] = useState(0);
  const { handleSubmit, register: formRegister, formState, setValue, watch } = useForm();
  const [hasAttachedFiles, setHasAttachedFiles] = useState<boolean>(false);
  const { isDirty, isValid } = formState;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const onSubmit = async (data: Record<string, any>) => {

    if (data.fileIntro) {
      try {
        const response = await transportfile(data.fileIntro[0]) //비동기
        data.fileIntro = {
          path: response,
          name: data.fileIntro[0].name
        };
      } catch {
        console.error("file upload is failed")
      }
    }

    if (data.fileResume) {
      try {
        const response = await transportfile(data.fileResume[0]) //비동기
        data.fileResume = {
          path: response,
          name: data.fileResume[0].name
        };
      } catch {
        console.error("file upload is failed")
      }
    }

    data.id = id;
    // console.log(data)
    fetchData(data);
    router.push('/Apply/notice/complete');
  };

  // 전체동의 체크박스
  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      // all 필드가 변경되고 변경 유형이 'change'인 경우
      if (name === 'all' && type === 'change') {
        const agreementValue = value[name]; // 'all' 체크박스의 상태에 따라서 true 또는 false 설정
        setValue('requiredAgreement', agreementValue);
        setValue('optionalAgreement', agreementValue);
      }

      // requiredAgreement 또는 optionalAgreement 중 하나가 변경된 경우
      if (name === 'requiredAgreement' || name === 'optionalAgreement') {
        const allValue = value['requiredAgreement'] && value['optionalAgreement']; // 두 필드가 모두 true일 때만 true로 설정

        setValue('all', allValue);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
      <div className="white-content notice_wrap pb-[3.7500vw] mobile:pb-0">
        <section className="max-layout">
          <div className="text-gray-800 pb-[5.2083vw] mobile:pb-[3.5rem]">
            <Breadcrumb/>
            <div className="flex items-end justify-center mobile:flex-col mobile:items-center">
              <h1 className="f-h1 font-bold mobile:font-medium">지원서 작성하기</h1>
            </div>
          </div>
          <div className="applicationForm">
            <ul className="flex justify-between gap-x-[1.0417vw] f-title1 mobile:justify-start mobile:gap-x-[0.25rem]">
              {steps.map((list, index)=> (
                  <li key={list}
                      className={`flex items-center justify-between flex-1 min-w-[1.625rem] text-gray-400 border-b-[0.2083vw] border-gray-200 px-[0.8333vw] pb-[0.6250vw] mobile:flex-none mobile:border-b-[0.125rem] mobile:px-[0.5ren] mobile:pb-[0.375rem] ${
                          index === activeStep ? "active" : ""
                      }`}>
                    {isPC ? <span>{list}</span>: index === activeStep ? <span>{list}</span> : <span>{list.split('.')[0]}</span>}
                    <img
                        alt="화살표아이콘"
                        src="/icon/icon_arrow.svg"
                        className="w-[1.6667vw] h-[1.6667vw] min-w-[1.5rem] min-h-[1.5rem]"/>
                  </li>
              ))}
            </ul>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 0 && <Step1 register={formRegister}/>}
                {activeStep === 1 && <Step2 register={formRegister}  setHasAttachedFiles={setHasAttachedFiles}/>}
                {activeStep === 2 && <Step3 register={formRegister}/>}
                {activeStep === 3 && <Step4 register={formRegister} />}
                <div className="flex justify-end mt-[5.0000vw] mobile:mt-[3.125rem]">
                  {(activeStep === 0 || activeStep === 1 || activeStep === 2) && (
                      <button
                          type="button"
                          className={`flex items-center justify-center bg-gray-300 text-white f-title1 rounded-[6.25rem] py-[0.8333vw] pl-[2.5000vw] pr-[1.6667vw] min-w-[6.75rem] min-h-[3.25rem] ${
                              isDirty && isValid ? "active" : ""
                          }`}
                          disabled={!isDirty || !isValid}
                          onClick={handleNext}
                      >
                        <span>{activeStep === 1? (hasAttachedFiles ? "다음" : "건너뛰기") : "다음"}</span>
                        <img
                            alt="화살표 아이콘"
                            src="/icon/icon_arrow_w.svg"
                            className="w-[1.6667vw] h-[1.6667vw] mobile:w-[24px] mobile:h-[24px]"/>
                      </button>
                  )}
                  {activeStep === 3 && (
                      <button type="submit"
                              className={`flex items-center justify-center bg-gray-300 text-white f-title1 rounded-[6.25rem] py-[0.8333vw] px-[2.5000vw] min-w-[6.75rem] min-h-[3.25rem] ${
                                  isDirty && isValid ? "active" : ""
                              }`}>
                        지원하기
                        <img
                            alt="화살표 아이콘"
                            src="/icon/icon_arrow_w.svg"
                            className="w-[1.6667vw] h-[1.6667vw] mobile:w-[24px] mobile:h-[24px]"/>
                      </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
  )
}
export default NoticeForm;