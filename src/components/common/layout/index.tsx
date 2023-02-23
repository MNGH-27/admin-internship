import React, { useEffect, useState } from "react";

//axios
import axios from "axios";

//react-router-dom
import { Outlet, Link, useLocation } from "react-router-dom";

//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//svg
import { ReactComponent as NotificationSvg } from "./../../../assets/icons/svg/notification-bing.svg";
import { ReactComponent as SearchSvg } from "./../../../assets/icons/svg/search-normal.svg";
import { ReactComponent as Menu } from "./../../../assets/icons/svg/menu.svg";

//image
import UserTempPic from "./../../../assets/pictures/temp/Ellipse 31.png";
import Logo from "./../../../assets/pictures/image/logo.png";

type PropType = {};

const headerRoute = [
  {
    name: "home",
    value: "خانه",
    path: "/",
  },
  {
    name: "students",
    value: "دانشجو",
    path: "/students",
  },
  {
    name: "teachers",
    value: "اساتید",
    path: "/teachers",
  },
  {
    name: "compony",
    value: "شرکت ها",
    path: "/compony",
  },
  {
    name: "Educational issues",
    value: "مسائل آموزشی",
    path: "/educational-issues",
  },
];
const Layout: React.FC<PropType> = () => {
  const [routes, setRoute] = useState("");
  let location = useLocation();

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  return (
    <>
      {/* header */}
      <header className="border-b-2 border-b-[#EEEEF2] shadow-[0_3px_4px_0px_rgba(24,24,28,0.03)]">
        <div className="py-3 lg:py-5 mx-auto max-w-7xl px-5 xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-14">
              <button type="button" className="lg:hidden ">
                <Menu className="text-[#6C7389] w-7 h-7" />
              </button>
              <div className="w-10 h-10 lg:block hidden">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="lg:flex items-center gap-x-2 hidden">
                {headerRoute.map((route, index) => (
                  <li
                    className="px-4 py-1 transition-all duration-200"
                    key={index}
                  >
                    <Link
                      to={route.path}
                      className={`${
                        route.path === routes
                          ? "bg-[#F6F7F8] text-[#101114] font-semibold px-4 py-1 rounded-md"
                          : "bg-white text-[#8B91A7]"
                      }`}
                    >
                      {route.value}
                    </Link>
                  </li>
                ))}
              </ul>
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
      {/* content body */}
      <main className="max-w-7xl mx-auto min-h-screen my-5">
        <Outlet />
      </main>

      {/* footer */}
      <footer className="border-t-2 border-[#EEEEF2] shadow-[0_-1px_2px_0px_rgba(24,24,28,0.04)]">
        <div className="max-w-7xl py-5 px-3 xl:px-0 flex md:flex-row flex-col gap-y-5 items-center justify-between mx-auto">
          <p className="text-[#5F5F61] text-sm leading-6">
            کاربر عزیز ، <span className="text-[#E73F3F]">علی الهیارلو</span>{" "}
            خوش آمدید.
          </p>
          <div className="flex items-center justify-center">
            <p className="px-5 md:border-l-2 md:border-[#EEEEF2] text-sm leading-6">
              <span className="text-[#101114] font-semibold ml-2">تاریخ:</span>
              <span className="text-[#5F5F61] ">دوشنبه - 3 شهریور 1401</span>
            </p>
            <p className="px-5 text-[#5F5F61] hidden md:block">22:06:03</p>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Layout;
