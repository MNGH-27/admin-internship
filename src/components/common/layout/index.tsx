import React, { useEffect, useState } from "react";

//cookie
import { useCookies } from "react-cookie";

//service
import { GetUserData } from "../../../services/user";

//moment
import moment from "moment-jalaali";

//react-router-dom
import { Outlet, Link, useLocation } from "react-router-dom";

//react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//custom hook
import useClock from "../../../hooks/useClock";

//svg
import { ReactComponent as NotificationSvg } from "./../../../assets/icons/svg/notification-bing.svg";
import { ReactComponent as SearchSvg } from "./../../../assets/icons/svg/search-normal.svg";
import { ReactComponent as Menu } from "./../../../assets/icons/svg/menu.svg";
import { ReactComponent as CloseSvg } from "./../../../assets/icons/svg/x-square.svg";

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
  moment.loadPersian({ usePersianDigits: true });

  const [cookies] = useCookies(["token"]);

  //sidebar handler
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  let location = useLocation();

  const [user, setUser] = useState<{
    first_name: string;
    last_name: string;
  }>({
    first_name: "",
    last_name: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    asycnGetUserData();
  }, []);

  const asycnGetUserData = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserData({ token: cookies.token });
      if (response.status === 200) {
        setUser({
          ...response.data.user,
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const findCurrentRoute = (_route: {
    name: string;
    value: string;
    path: string;
  }): boolean => {
    if (_route.name !== "home") {
      return location.pathname.includes(_route.path);
    } else {
      let inHomePage = true;

      headerRoute.forEach((singleHeader, index) => {
        if (
          location.pathname.includes(singleHeader.path) &&
          singleHeader.name !== "home"
        ) {
          inHomePage = false;
        }
      });

      return inHomePage;
    }
  };

  return (
    <>
      {/* header */}
      <header className="border-b-2 border-b-[#EEEEF2] shadow-[0_3px_4px_0px_rgba(24,24,28,0.03)]">
        <div className=" py-3 lg:py-5 mx-auto max-w-7xl px-5 xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-14">
              <button
                onClick={() => setIsSidebarOpen(true)}
                type="button"
                className="lg:hidden "
              >
                <Menu className="text-[#6C7389] w-7 h-7" />
              </button>
              <div className="w-10 h-10 lg:block hidden">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className={`${
                  isSidebarOpen
                    ? "fixed lg:relative"
                    : "hidden fixed lg:relative"
                } top-0 right-0 w-full h-full`}
              >
                <div
                  onClick={() => setIsSidebarOpen(false)}
                  className="absolute -z-10 w-full h-full bg-black/70 lg:hidden"
                ></div>
                <ul
                  className={`flex flex-col lg:flex-row items-start gap-x-2 gap-y-5 z-10 bg-white w-1/2 lg:w-fit h-full py-10 px-5 lg:p-0`}
                >
                  <button onClick={() => setIsSidebarOpen(false)}>
                    <CloseSvg />
                  </button>
                  {headerRoute.map((route, index) => (
                    <li
                      className="px-4 py-1 transition-all duration-200"
                      key={index}
                    >
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        to={route.path}
                        className={`${
                          findCurrentRoute(route)
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
      <main className="max-w-7xl mx-auto min-h-screen mb- px-5">
        <Outlet />
      </main>

      {/* footer */}
      <footer className="border-t-2 border-[#EEEEF2] shadow-[0_-1px_2px_0px_rgba(24,24,28,0.04)]">
        <div className="max-w-7xl py-5 px-3 xl:px-0 flex md:flex-row flex-col gap-y-5 items-center justify-between mx-auto">
          <div className="flex items-center gap-2 text-[#5F5F61] text-sm leading-6">
            کاربر عزیز ،{" "}
            {isLoading ? (
              <span className="w-16 h-4 bg-gray-400 rounded-md animate-pulse"></span>
            ) : (
              <span className="text-[#E73F3F]">{`${user.first_name} ${user.last_name}`}</span>
            )}{" "}
            خوش آمدید.
          </div>
          <div className="flex items-center justify-center">
            <p className="px-5 md:border-l-2 md:border-[#EEEEF2] text-sm leading-6">
              <span className="text-[#101114] font-semibold ml-2">تاریخ:</span>
              <span className="text-[#5F5F61] ">
                {moment(new Date()).format("dddd - jDD jMMMM jYYYY")}
              </span>
            </p>
            <p className="px-5 text-[#5F5F61] hidden md:block">
              {useClock().time}
            </p>
          </div>
        </div>
      </footer>
      <ToastContainer />
    </>
  );
};

export default Layout;
