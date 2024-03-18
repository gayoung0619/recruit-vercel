import Link from "next/link";
import LogoK from "@/app/_components/icons/logo_K";

const Footer = () => {
  return (
    <footer className="py-[4.1667rem] mobile:py-10 bg-gray-0">
      <div className="max-layout">
        <LogoK />
        <div className="flex items-end justify-between text-gray-500 mt-[4.1667rem] tablet:flex-col tablet:items-start tablet:mt-14">
          <div className="pr-3">
            <p className="text-neutral-700 font-semibold f-footer-title">주식회사 에이비엠랩(ABMLAB CORP.)</p>
            <address className="f-footer-text font-light mt-4">
              <p className="inline-block mr-8 tablet:block">대표이사: 황의윤</p>
              <p className="inline-block tablet:block mobile:mt-2">사업자등록번호 820-87-03095</p>
              <p className="mt-1 mobile:mt-2">서울: (06059) 서울특별시 강남구 선릉로133길 4, 아이큐박스 3층, 에이비엠랩</p>
              <p className="mt-1 mobile:mt-2">대구: (41934) 대구광역시 중구 약령길 83, 3층, 에이비엠랩</p>
            </address>
          </div>
          <div className="text-right tablet:text-left">
            <Link href="/Privacy"><p className="f-footer-strong font-bold tablet:mt-4 mobile:mt-8">개인정보 처리방침</p></Link>
            <p className="f-footer-text2 font-light mt-2 tablet:mt-1">&copy; Copyright ABM DESIGN LAB All Rights Reserved <br className="hidden tablet:block"/> @ 2014-2023 ABM DESIGN LAB</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
