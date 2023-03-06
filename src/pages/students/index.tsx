import React, { useState, useEffect } from "react";

//react-router-dom
import { Link } from "react-router-dom";
//service
import { GetStudentBasicData } from "../../services/student";
//cookie
import useCookies from "react-cookie/cjs/useCookies";
//toastify
import { toast } from "react-toastify";
//component
import LoadingLayout from "../../components/common/loadingLayout";

const Students: React.FC = () => {
  const [cookies] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(true);
  const [userStatus, setUserStatus] = useState<{
    initReg_verified: number;
    initReg_unverified: number;
    preReg_verified: number;
    preReg_unverified: number;
  }>({
    initReg_verified: 0,
    initReg_unverified: 0,
    preReg_verified: 0,
    preReg_unverified: 0,
  });

  useEffect(() => {
    asycnGetStudentBasicData();
  }, []);

  const asycnGetStudentBasicData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetStudentBasicData({ token: cookies.token });

      if (response.status === 200) {
        //data fetched
        setUserStatus({
          ...response.data.data.counters,
        });
      } else {
        //occure error
        toast.error("داده ها دریافت شد");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-16 mx-10 xl:mx-5">
      <h2 className="text-[#101114] text-3xl font-semibold mb-10 text-center md:text-right">
        دانشجویان
      </h2>
      <LoadingLayout isLoading={isLoading}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link
            to={"/students/initialregestration"}
            className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
          >
            <span className="text-[#101114] font-semibold text-2xl mb-2">
              ثبت نام اولیه ها
            </span>
            <div className="font-semibold text-lg">
              <p className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#52A86E]">
                  {userStatus.initReg_unverified}
                </span>

                <span className="text-[#4C526D]">دانشجو تایید شده</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#E73F3F]">
                  {userStatus.initReg_verified}
                </span>
                <span className="text-[#4C526D]">دانشجو های رد شده</span>
              </p>
            </div>
          </Link>
          <Link
            to={"/students/preregestration"}
            className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
          >
            <span className="text-[#101114] font-semibold text-2xl mb-2">
              پیش ثبت نام ها
            </span>
            <div className="font-semibold text-lg">
              <p className="flex items-center justify-center gap-2 mb-2">
                <span className="text-[#52A86E]">
                  {userStatus.preReg_unverified}
                </span>
                <span className="text-[#4C526D]">دانشجو تایید شده</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#E73F3F]">
                  {userStatus.preReg_verified}
                </span>
                <span className="text-[#4C526D]">دانشجو های رد شده</span>
              </p>
            </div>
          </Link>
          <Link
            to={"/students/form"}
            className="flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
          >
            <span className="text-[#101114] font-semibold text-2xl mb-2">
              فرم ها
            </span>
            <div className="font-semibold flex flex-col items-start justify-center gap-y-3">
              <span className="text-[#4C526D]">فرم شماره دو ، سه ، چهار</span>
              <span className="text-[#4C526D]">تایید گزارش هفتگی</span>
              <span className="text-[#4C526D]">نامه تمام کارآموزی</span>
            </div>
          </Link>
        </div>
      </LoadingLayout>
    </div>
  );
};

export default Students;
