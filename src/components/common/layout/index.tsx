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
    <div>
      <header className="mt-6">
        <div className="shadow-[0_4px_16px_0px_rgba(79,84,104,0.42)] rounded-md p-5 max-w-7xl mx-auto">
          <div className="flex items-center justify-end sm:justify-between">
            <div className="text-[#8B91A7] font-medium w-fit flex items-center justify-between sm:justify-center gap-2 sm:gap-5 md:gap-10">
              <img className="w-10 h-10" src={Logo} alt="logo" />
              <span>خانه</span>
              <span className="px-4 py-2 rounded-md bg-[#F6F7F8] text-[#101114]">
                دانشجو
              </span>
              <span>اساتید</span>
              <span>شرکت ها</span>
              <span>مسائل آموزشی</span>
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
      <div className="max-w-7xl mx-auto px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
