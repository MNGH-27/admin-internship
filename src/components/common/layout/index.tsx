import React from "react";

//react-router-dom
import { Outlet } from "react-router-dom";

//svg

import { ReactComponent as NotificationSvg } from "./../../../assets/icons/svg/notification-bing.svg";
import { ReactComponent as SearchSvg } from "./../../../assets/icons/svg/search-normal.svg";

//image
import UserTempPic from "./../../../assets/pictures/temp/Ellipse 31.png";
import Logo from "./../../../assets/pictures/image/logo.png";

type PropType = {};

const Layout: React.FC<PropType> = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mt-6 mx-5">
        <div className="shadow-[0_4px_16px_0px_rgba(79,84,104,0.42)] rounded-md p-5 mx-auto">
          <div className="flex items-center justify-end sm:justify-between">
            <div className="text-[#8B91A7] font-medium w-fit flex items-center justify-between sm:justify-center gap-2 sm:gap-5">
              <img className="w-10 h-10" src={Logo} alt="logo" />
              <span className="px-4 py-2 rounded-md border-2 border-transparent hover:border-[#F6F7F8] duration-200">
                خانه
              </span>
              <span className="px-4 py-2 rounded-md bg-[#F6F7F8] text-[#101114]">
                دانشجو
              </span>
              <span className="px-4 py-2 rounded-md border-2 border-transparent hover:border-[#F6F7F8] duration-200">
                اساتید
              </span>
              <span className="px-4 py-2 rounded-md border-2 border-transparent hover:border-[#F6F7F8] duration-200">
                شرکت ها
              </span>
              <span className="px-4 py-2 rounded-md border-2 border-transparent hover:border-[#F6F7F8] duration-200">
                مسائل آموزشی
              </span>
            </div>
            <div className="flex items-center justify-center gap-5 text-[#6C7389]">
              <SearchSvg />
              <NotificationSvg />
              <img
                src={UserTempPic}
                alt="user icon"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="mx-5">
        <Outlet />
      </div>
      <div className="flex items-center justify-between mx-5 py-5 border-t-2 border-[#EEEEF2] text-xs">
        <p className="text-[#4C526D] ">
          کاربر عزیز ، <span className="text-red-700">علی الهیارلو</span> خوش
          آمدید.
        </p>
        <div className="flex items-center justify-center">
          <p className="px-5 border-l-2 border-[#EEEEF2]">
            <span className="text-[#101114] font-semibold mx-2">تاریخ:</span>
            <span>دوشنبه - 3 شهریور 1401</span>
          </p>
          <p className="px-5">22:06:03</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
