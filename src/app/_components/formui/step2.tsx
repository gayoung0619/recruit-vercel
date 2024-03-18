import React, {useEffect, useState} from "react";
import { UseFormRegister } from "react-hook-form";

type StepProps = {
  setHasAttachedFiles: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<any>;
};

type FileInputProps = {
  label: string;
  id: string;
  onSelectFile: (file: File | null) => void;
  register: UseFormRegister<any>;
};

const FileInput: React.FC<FileInputProps> = ({ label, id , onSelectFile, register }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    onSelectFile(file);
  };

  const registerObj = register(id);

  return (
      <div className="">
        <p className="f-title1 mb-[0.8333vw] mobile:mb-[0.5rem]">{label}</p>
        <label htmlFor={id} className="flex items-center justify-center px-[0.8333vw] border-[1px] border-main rounded-[0.6250vw] f-body text-main w-[15.8854vw] h-[2.9167vw] min-w-[10rem] min-h-[2.5rem]">
          첨부하기
        </label>
        <input
            type="file"
            id={id}
            className="hidden"
            accept=".pdf"
            {...registerObj}
            onChange={(e) => {
              handleFileChange(e);
              registerObj.onChange(e);
            }}
            
        />
        {selectedFile && (
            <div className="attached-file mt-[0.8333vw] px-[0.8333vw] flex items-center justify-start bg-gray-100 rounded-[0.6250vw] f-body text-gray-500 w-[15.8854vw] h-auto min-w-[10rem] min-h-[2.5rem] mobile:mt-[0.5rem]">
              <img alt="파일아이콘" src="/icon/icon_file.svg" className="w-[1.2500vw] h-[1.2500vw] min-w-[16px] min-h-[16px]" />
              <p className="break-all ml-[0.188vw]">{selectedFile.name}</p>
            </div>
        )}
      </div>
  );
};

const Step2: React.FC<StepProps> = ({ register, setHasAttachedFiles }) => {
  const [introFile, setIntroFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  // 파일이 첨부되었을 때 호출되는 함수
  const handleFileAttach = () => {
    if (introFile || resumeFile) {
      setHasAttachedFiles(true);
    } else {
      setHasAttachedFiles(false);
    }
  };

  // 파일이 첨부되었을 때 상태 변수 업데이트
  useEffect(() => {
    handleFileAttach();
  }, [introFile, resumeFile]);

  return (
      <div className="mt-[6.0417vw] mobile:mt-[3rem]">
        <div className="flex justify-center gap-x-[1.0417vw]">
          <FileInput label="자기소개서" id="fileIntro" onSelectFile={setIntroFile} register={register} />
          <FileInput label="이력서" id="fileResume" onSelectFile={setResumeFile} register={register} />
        </div>
        <div className="mt-[3.7500vw] mobile:mt-[2.5rem]">
          <p className="text-center text-gray-500 f-title2">
            파일 형식은 (pdf)로 제출해 주세요.
            <br />
            이력서나 자기소개가 없을 경우 건너뛰신 후 다음 단계에서 작성 부탁드립니다.
          </p>
        </div>
      </div>
  );
};

export default Step2;
