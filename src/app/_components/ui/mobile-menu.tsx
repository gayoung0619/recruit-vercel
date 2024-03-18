'use client'
import React, { useState, useRef, useEffect, Fragment } from 'react';
import Link from 'next/link';
import { Transition } from '@headlessui/react'
import { menu } from "@/app/_lib/menu";
import Logo from "@/app/_components/icons/logo";
export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const handleMenuTouch = (label: string) => {
    setActiveMenu(label)
  }
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const logoRef = useRef<SVGSVGElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      // 클릭한 엘리먼트가 로고인 경우에는 메뉴를 닫지 않음
      if (target === logoRef.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.classList.add('overflow-hidden'); // Disable scrolling
    } else {
      document.body.classList.remove('overflow-hidden'); // Enable scrolling
    }
  }, [mobileNavOpen]);

  return (
    <Fragment>
      <header className="hidden bg-white tablet:flex w-full items-center justify-between fixed h-14 px-4 z-[1001]"
              style={{ maxWidth: mobileNavOpen ? '500px' : '100%', background: mobileNavOpen ? "transparent" : "#fff"}}>
        <Logo ref={logoRef} />
        {/* Hamburger button */}
        <button
          ref={trigger}
          className={`hamburger ${mobileNavOpen && 'active'}`}
          aria-controls="mobile-nav"
          aria-expanded={mobileNavOpen}
          onClick={(e) => setMobileNavOpen(!mobileNavOpen)}
        >
          <span className="sr-only">{mobileNavOpen? "menu close" : "menu open"}</span>
          {mobileNavOpen? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 18L6 6" stroke="#D1D4D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 6L6 18" stroke="#D1D4D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6H4" stroke="#D1D4D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 12L11 12" stroke="#D1D4D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 18H4" stroke="#D1D4D6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </header>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="fixed top-0 left-0 h-screen w-full max-w-[500px] shadow-xl bg-white z-[1000]"
          enter="transition ease-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <nav className="pt-[136px] px-4">
            <ul className="flex flex-col gap-y-10">
              {menu.map((menuItem) => (
                <li
                  key={menuItem.label}
                  className="flex justify-between f-header-title"
                  onTouchStart={() => handleMenuTouch(menuItem.label)}
                  onMouseEnter={() => handleMenuTouch(menuItem.label)}>
                  <Link href={menuItem.link} className={`f-title font-medium relative before:w-[0.25rem] before:h-[0.25rem] before:right-[-0.375rem] ${activeMenu === menuItem.label ? 'circle' : ''}`}>{menuItem.label}</Link>
                  <ul className="flex flex-col gap-y-4">
                    {menuItem.subMenu.map((subMenuItem)  => (
                      <li key={subMenuItem.label} className="w-[164px] f-header-text text-gray-600 hover:border-b-[1px] border-gray-300 p-1">
                        <Link href={subMenuItem.link} onClick={closeMobileNav}>{subMenuItem.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </Transition>
      </div>
    </Fragment>
  )
}