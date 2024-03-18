'use client'
import React from 'react';
import { menu } from "@/app/_lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Breadcrumbs = () => {
  const pathname = usePathname();
  const depth1 = pathname.split('/')[1];
  // console.log(pathname, depth1)
  const depth2 = () => {
    const matchingSubitem = menu
        .flatMap(item => item.subMenu)
        .find(subitem => pathname.startsWith(subitem.link));

    if (matchingSubitem) {
      return matchingSubitem.label;
    }

    return null;
  };

  return (
      <ul className="breadcrumb pt-[6.8750vw] tablet:pt-[6rem] mobile:pt-[4.5rem] flex gap-x-4 f-title2 text-white">
        <li className="relative after:content-['>'] after:block after:absolute after:right-[-13px] after:bottom-0">
          <Link href="/">홈</Link>
        </li>
        <li className="relative after:content-['>'] after:block after:absolute after:right-[-13px] after:bottom-0">{depth1}</li>
        <li>{depth2()}</li>
      </ul>
  )
}
export default Breadcrumbs;