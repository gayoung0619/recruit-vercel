import React from "react";
type TabListProps = {
  activeTab: string; // 또는 해당 탭 데이터 타입에 맞는 타입 지정
  handleTabClick: (tab: string) => void; // 또는 해당 핸들러의 타입에 맞는 타입 지정
  dataList: string[]; // 또는 해당 데이터의 타입에 맞는 타입 지정
}

export const TabList: React.FC<TabListProps> = ({ activeTab, handleTabClick, dataList }) => {
  return (
      <ul className="max-layout flex gap-x-[0.4167vw] items-center px-[2.9167vw]">
        {dataList.map((data) => (
            <li key={data}
                className={`tab text-gray-500 break-keep f-title1 px-[1.2500vw] py-[0.4167vw] ${activeTab === data ? 'active' : null}`}>
              <button onClick={() => handleTabClick(data)}>{data}</button>
            </li>
        ))}
      </ul>
  )
}