'use client';
import { Fragment, useEffect, useState } from "react";
import Navigation from "./navigation";
import Logo from "@/app/_components/icons/logo";
import MobileMenu from "@/app/_components/ui/mobile-menu";
const Header = () => {
  useEffect(() => {
    const header = document.querySelector('header');

    const updateHeaderStyle = () => {
      const whiteContent = document.querySelector('.white-content');
      const darkContent = document.querySelector('.dark-content');

      if (!header) {
        // header가 null이면 종료
        return;
      }

      // 스크롤이 가장 상단에 도달한 경우
      if (window.scrollY === 0) {
        header?.classList.remove('header-bright', 'header-dark');
        return;
      }

      // whiteContent를 만났을 때
      if (whiteContent && whiteContent.getBoundingClientRect().top < header.clientHeight) {
        header?.classList.add('header-dark');
        header?.classList.remove('header-bright');
      } else if (darkContent && darkContent.getBoundingClientRect().top < header.clientHeight) {
        // darkContent를 만났을 때
        header?.classList.remove('header-dark');
        header?.classList.add('header-bright');
      } else {
        // 스크롤이 중간에 있을 때, 양쪽 클래스를 모두 제거
        header?.classList.remove('header-bright', 'header-dark');
      }
    };

    // 초기 체크: 페이지 로딩 시
    updateHeaderStyle();

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("scroll", updateHeaderStyle);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", updateHeaderStyle);
    };
  }, []);


  return (
    <Fragment>
      {/* PC Header */}
      <header className="header fixed left-0 top-0 w-full z-[1000] h-[4.7917vw] bg-white tablet:hidden">
        <div className="max-layout flex items-center h-full">
          <Logo />
          <Navigation />
        </div>
      </header>
      {/* MO Header */}
      <MobileMenu />
    </Fragment>
  )
}
export default Header;