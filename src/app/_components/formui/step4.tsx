import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type StepProps = {
  register: UseFormRegister<any>;
}

type AccordionSectionProps = {
  label: string,
  register: UseFormRegister<any>;
  registerName: string,
  children: React.ReactNode,
  index: number,
  open: number,
  setOpen: (index: number) => void,
  required?: boolean;
}

const AccordionSection = (
  { 
    label, 
    register, 
    registerName, 
    required, 
    children, 
    index, 
    open, 
    setOpen 
  }: AccordionSectionProps) => {
  const handleAccordionClick = () => {
    setOpen(open === index ? -1 : index);
  };

  return (
      <div className="flex-1">
        <div
            onClick={(e) => {
              if (e !== null && e.target !== null) {
                const element = e.target as Element;
                const isNotMatch = element.matches('input[type="checkbox"]');
                if(!isNotMatch) {
                  handleAccordionClick();
                }
              }
            }}
            className="flex-1 flex items-center justify-between p-[1.2500vw] tablet:px-[0.5rem] tablet:py-[1.313rem]">
          <div className="flex justify-between items-center">
            <input
                type="checkbox"
                {...register(registerName, { required })}
            />
            <label className="f-title2 text-gray-800 ml-[0.5rem]">{label}</label>
          </div>
          <img
              alt="화살표아이콘"
              src="/icon/icon_arrow.svg"
              className={`w-[1.6667vw] h-[1.6667vw] min-w-[1.5rem] min-h-[1.5rem] rotate-90 ${open === index ? 'rotate-[-90deg]' : ''}`}/>
        </div>
        <div className={`accordion_cnt ${open === index ? 'open' : ''}`}>
          <p className="f-body text-gray-500 py-[0.5208vw] px-[2.5000vw] mobile:py-[0.625rem] mobile:px-[2rem]">
            {children}
          </p>
        </div>
      </div>
  );
};

const Step4: React.FC<StepProps> = ({register }) => {
  const [openAccordion, setOpenAccordion] = useState(-1); //-1은 어떤 아코디언도 열지 않음
  return (
      <div className="mt-[3.9583vw] mobile:mt-[2.5rem]">
        <div className="flex items-center px-[1.2500vw] py-[1.2500vw] tablet:px-[0.5rem] tablet:py-[1rem] border-b-[0.0625rem] border-gray-200">
          <input type="checkbox" {...register('all')}/>
          <label className="f-title1 text-gray-800 font-medium ml-[0.5rem]">전체동의</label>
        </div>

        <div className="flex mobile:flex-col">
          <AccordionSection label="개인정보 필수항목 수집 및 이용동의" register={register} required registerName="requiredAgreement" index={0} open={openAccordion} setOpen={setOpenAccordion}>
            주식회사에이비엠랩(이하“회사”라함)은(는)채용 절차 진행을 위하여 귀하의 정보를 수집합니다.<br/>
            1.수집하는 개인정보의 필수항목 <br/>
            •성명,전화번호,이메일<br/>
            2.개인정보처리의 목적<br/>
            •채용관련 안내, 공지사항전달, 채용및 웹사이트 이용 관련 연락, 채용적합성 판단 및 서류심사/면접등의 근거 자료, 인재DB 활용등<br/>
            3.보유기간<br/>
            •접수지원 후 3년간,단 정보주체의 삭제 요청이 있는 경우 지체없이 파기<br/>
            ※회사는 본인이 작성/제출한정보에 한하여 정보를 수집합니다.채용서비스의특성상 민감한 정보 등이 수집될 수 있으니 작성/제출에유의하여 주시기 바랍니다.<br/>
            ※ 귀하는 개인 정보 수집ㆍ이용에대한 동의를 거부할 권리가 있습니다.<br/>
            그러나동의를 거부할 경우 원활한 기업 측으로의 지원자 정보 전달을 진행할 수 없어 본건 서비스에 제한을 받을 수 있습니다.
          </AccordionSection>

          <AccordionSection label="개인정보 선필수항목 수집 및 이용동의" register={register} registerName="optionalAgreement" index={1} open={openAccordion} setOpen={setOpenAccordion}>
            주식회사에이비엠랩(이하“회사”라함)은(는)채용 절차 진행을 위하여 귀하의 정보를 수집합니다.<br/>
            1.수집하는개인정보의 선택항목<br/>
            2.•생년월일,주소,자기소개서,이력서,학력사항,사진,동영상,자격사항,경력사항,포트폴리오,경력기술서,지원 분야,희망연봉,직전 연봉,추천인,지원 경로,기타 본인이 직접 입력하거나 첨부파일을 통하여
            업로드 하는비정형적 정보 중 개인식별 가능성이 있는 정보 (해당 내용에 대하여 각 항목별 동의가 일치하지 않을 경우 해당자료의 처리가 불가능하므로, 직접기재한 사항에 대하여는 선택적 개인정보
            수집 및 이용에 동의하신 것으로 봅니다.수집 및 이용에 동의하지 않으시는 경우 해당 내용을 삭제하여주시기 바랍니다)<br/>
            2.개인정보처리의 목적<br/>
            •채용관련 안내, 공지사항전달, 채용및 웹사이트 이용 관련 연락, 채용적합성 판단 및 서류심사/면접등의 근거 자료, 인재DB 활용등<br/>
            3.보유기간<br/>
            •접수지원 후 3년간,단 정보주체의 삭제 요청이 있는 경우 지체없이 파기<br/>
            ※회사는 본인이 작성/제출한정보에 한하여 정보를 수집합니다. 채용서비스의특성상 민감한 정보 등이 수집될 수 있으니 작성/제출에유의하여 주시기 바랍니다. ※ 귀하는개인 정보 수집ㆍ이용에대한 동의를
            거부할 권리가 있습니다. 그러나동의를 거부할 경우 원활한 기업 측으로의 지원자 정보 전달을 진행할 수 없어 본건 서비스에 제한을 받을 수 있습니다.
          </AccordionSection>
        </div>
      </div>
  )
}
export default Step4;