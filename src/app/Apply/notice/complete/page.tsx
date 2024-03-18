const Page = () => {
  return (
      <div className="flex flex-col justify-center items-center max-layout py-[11.2500vw] mobile:py-[5rem]">
        <img alt="완료 아이콘" src="/icon/icon_complete.png" className="w-[8.3333vw] h-[8.3333vw] mobile:w-[5rem] mobile:h-[5rem]" />
        <h1 className="text-gray-800 text-center f-h1 font-bold mt-[2.0833vw] mobile:mt-[1.5rem]">지원해 주셔서 감사합니다!</h1>
        <p className="text-center mt-[0.8333vw] f-title2 mobile:mt-[0.5rem]">
          지원서를 신중히 검토 후, 면접 마감 후 일주일 이내에 회신드리겠습니다.<br /> 다시 한번 귀한 시간 내어 주셔서 감사합니다.
        </p>
      </div>
  )
}
export default Page;