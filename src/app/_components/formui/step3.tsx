import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { TextareaHTMLAttributes } from 'react';
import { TextInput } from "@/app/_components/formui/step1";
type StepProps = {
  register: UseFormRegister<any>;
};
type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  id: string;
  placeholder: string;
  cols: number | undefined;
  rows: number | undefined;
  maxLength: number;
  register: UseFormRegister<any>; // Adjust the type based on your specific setup
}
type placeholderProps = {
  placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, placeholder, register, rows, cols, maxLength }) => {
  const [currentLength, setCurrentLength] = useState(0);
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setCurrentLength(value.length);
  };

  return (
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label htmlFor={id}
                 className="min-w-[10.25rem] f-title1 pl-[1.2500vw] py-[1.2500vw] tablet:min-w-[5rem] tablet:pl-0 tablet:py-[0.9375rem]">
            {label}
          </label>
          <textarea
              id={id}
              cols={cols}
              rows={rows}
              maxLength={1000}
              placeholder={placeholder}
              className="flex-1 f-title2 px-[0.8333vw] py-[1.2500vw] tablet:px-[0.75rem] tablet:py-[0.9375rem] border-b-[0.0625rem] border-gray-200 focus:outline-none focus:border-blue-40"
              {...register(id)}
              onInput={handleInput}
          />
        </div>
        <div className="text-gray-300 f-title2 text-right">
          {`(${currentLength}/1000)`}
        </div>
      </div>
  );
};

const Step3: React.FC<StepProps> = ({ register }) => {
  return (
      <div className="mt-[3.9583vw] mobile:mt-[2.5rem]">
        {/* 자기소개 */}
        <TextArea
            label="자기소개"
            id="intro"
            placeholder="(이력서를 첨부하지 않았을 경우에만) 간단하게 자신을 소개해주세요"
            cols={30}
            rows={5}
            maxLength={1000}
            register={register}
        />

        {/* 강점 */}
        <TextArea
            label="자신의 강점"
            id="strength"
            placeholder="(이력서를 첨부하지 않았을 경우에만) 핵심 역량이나 주요 프로젝트 성과를 작성해 주세요."
            cols={30}
            rows={5}
            maxLength={1000}
            register={register}
        />

        {/* 연봉 */}
        <div className="relative">
          <TextInput
              label="연봉 정보"
              id="annualSalary"
              placeholder="최근 직장의 연봉을 입력해주세요."
              register={register}
              type="number"
          />
          <div className="absolute right-0 bottom-[50%] translate-y-[50%] text-gray-800 f-title2 text-right">만원</div>
        </div>
      </div>
  );
};

export default Step3;