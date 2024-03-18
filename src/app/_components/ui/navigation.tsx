'use client';
import React, { useState } from "react";
import Link from "next/link";
import { menu } from "@/app/_lib/menu";
import { usePathname } from 'next/navigation'

const Navigation: React.FC = () => {
  const [isDepth2Visible, setIsDepth2Visible] = useState(false);
  const pathname = usePathname();
  const pathnameSlice = "/" + pathname.split('/')[1];

  const handleMenuEnter = () => {
    setIsDepth2Visible(true);
  }

  const handleMenuLeave = () => {
    setIsDepth2Visible(false);
  }

  return (
      <nav className="flex justify-end w-full h-[4.7917vw] absolute top-0 right-0 z-[998]">
        <div className="after-element absolute top-full left-0 w-full bg-gray-150 transition-height duration-300 ease-in-out " style={{
          height: isDepth2Visible ? "9.3750vw" : "0",
          minHeight: isDepth2Visible ? "7.188rem" : "0"
        }}></div>
        <ul className="depth1 flex items-center w-full max-layout justify-end text-center" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
          {menu.map((menuItem) => (
              <li
                  key={menuItem.label}
                  className="menu1 min-w-[7.0833vw] flex items-center justify-center h-full relative px-6 f-header-title">
                <p className={`relative ${pathnameSlice === menuItem.link ? 'circle' : ''} before:w-[4px] before:h-[4px] before:top-[3px] before:right-[-5px]`}>{menuItem.label}</p>
                <ul className="depth2 flex flex-col pt-[0.8333vw] pb-[1.6667vw] w-full h-[9.3750vw] absolute top-full left-1/2 transform -translate-x-1/2"
                    style={{
                      visibility: isDepth2Visible ? 'visible' : 'hidden',
                      opacity: isDepth2Visible ? 1 : 0,
                      transition: 'visibility 0.2s, opacity 0.2s linear',
                    }}>
                  {menuItem.subMenu.map((subMenuItem) => (
                      <li key={subMenuItem.label} className="py-2 transition-opacity duration-200 ease-in-out hover:text-main">
                        <Link href={subMenuItem.link}>{subMenuItem.label}</Link>
                      </li>
                  ))}
                </ul>
              </li>
          ))}
        </ul>
      </nav>
  );
}

export default Navigation;