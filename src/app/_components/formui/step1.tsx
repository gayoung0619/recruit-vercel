import React from "react";
import { UseFormRegister } from "react-hook-form";

type StepProps = {
  register: UseFormRegister<any>;
};

type TextInputProps = {
  label: string;
  id: string;
  placeholder: string;
  register: UseFormRegister<any>; // Adjust the type based on your specific setup
  type: string;
  pattern?: RegExp;
  required?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, placeholder, register, type, required, pattern }) => {
  return (
      <div className="flex items-center">
        <label htmlFor={id} className="min-w-[10.25rem] f-title1 pl-[1.2500vw] py-[1.2500vw] tablet:min-w-[5rem] tablet:pl-0 tablet:py-[0.9375rem]">
          {label}
        </label>
        <input
            type={type}
            id={id}
            placeholder={placeholder}
            className="flex-1 f-title2 px-[0.8333vw] py-[1.2500vw] tablet:px-[0.75rem] tablet:py-[0.9375rem] border-b-[0.0625rem] border-gray-200 focus:outline-none focus:border-blue-40"
            {...register(id, { required, pattern })}
        />
      </div>
  );
};

const Step1:React.FC<StepProps> = ({ register }) => {
  return (
      <div className="mt-[3.9583vw] mobile:mt-[2.5rem]">
        {/* Name Input */}
        <TextInput
            label="이름"
            id="name"
            placeholder="성함을 입력해 주세요."
            register={register}
            type="text"
            required
        />

        {/* Email Input */}
        <TextInput
            label="이메일"
            id="email"
            placeholder="원서 접수 확인 메일을 받으실 이메일 주소를 입력해 주세요."
            register={register}
            type="email"
            pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
            required
        />

        {/* Phone Number Input */}
        <TextInput
            label="전화번호"
            id="phoneNumber"
            placeholder="연락 가능한 전화번호를 입력해 주세요."
            register={register}
            type="tel"
            required
        />
      </div>
  );
};

export default Step1;