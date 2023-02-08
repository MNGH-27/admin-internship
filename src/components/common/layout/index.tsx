import React from "react";

//react-router-dom
import { Outlet } from "react-router-dom";

//svg
import { ReactComponent as HomeSvg } from "./../../../assets/icons/svg/home-2.svg";
import { ReactComponent as RequestSvg } from "./../../../assets/icons/svg/mirroring-screen.svg";
import { ReactComponent as StudentsSvg } from "./../../../assets/icons/svg/people.svg";
import { ReactComponent as MassagingSvg } from "./../../../assets/icons/svg/sms.svg";
import { ReactComponent as ArrowDown } from "./../../../assets/icons/svg/arrow-down.svg";

//image
import UserTempPic from "./../../../assets/pictures/temp/Ellipse 31.png";

type PropType = {};

const Layout: React.FC<PropType> = () => {
  return (
    <div>
      <header className="flex items-center justify-end sm:justify-between bg-transparent sm:bg-[#2A3042] shadow-none sm:shadow-[0_4px_16px_0px_rgba(79,84,104,0.42)] text-white p-5">
        <div className="sm:relative fixed bottom-0 right-0 left-0 bg-[#2A3042] shadow-[0_4px_16px_0px_rgba(79,84,104,0.42)] sm:shadow-none w-full p-2 sm:p-0 sm:w-fit flex items-center justify-between sm:justify-center gap-2 sm:gap-5 md:gap-10">
          <div className="flex items-center justify-center flex-col gap-1 after:block after:duration-200 after:bg-[#D5A419] after:w-0 hover:after:w-full after:h-0.5 after:rounded-md">
            <span className="flex items-center justify-center text-xs sm:text-base gap-1 sm:gap-3">
              <HomeSvg className="w-5" />
              داشبورد
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-1 after:block after:bg-[#D5A419] after:w-full after:h-0.5 after:rounded-md">
            <span className="flex items-center justify-center text-xs sm:text-base gap-1 sm:gap-3">
              <RequestSvg className="w-5" />
              درخواست ها
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-1 after:block after:duration-200 after:bg-[#D5A419] after:w-0 hover:after:w-full after:h-0.5 after:rounded-md">
            <span className="flex items-center justify-center text-xs sm:text-base gap-1 sm:gap-3">
              <StudentsSvg className="w-5" />
              کارآموزها
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-1 after:block after:duration-200 after:bg-[#D5A419] after:w-0 hover:after:w-full after:h-0.5 after:rounded-md">
            <span className="flex items-center justify-center text-xs sm:text-base gap-1 sm:gap-3">
              <MassagingSvg className="w-5" />
              مکاتبات
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 text-[#9FA5BB] sm:text-white">
          <img
            src={UserTempPic}
            alt="user icon"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-[#292D32] sm:text-white">علی الهیارلو</span>
          <ArrowDown />
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
