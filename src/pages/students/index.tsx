import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

const Students: React.FC = () => {
  return (
    <div className="my-20 flex items-start justify-center flex-col gap-5 ">
      <span className="text-[#101114] text-2xl font-semibold">دانشجویان</span>
      <div className="grid grid-cols-3 gap-5">
        <Link
          to={"/students/initialregestration"}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">ثبت نام اولیه ها</span>
          <div className="text-xs font-semibold">
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#E73F3F]">21</span>
              <span className="text-[#4C526D]">دانشجو تایید نشده</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#E73F3F]">35</span>
              <span className="text-[#4C526D]">دانشجو تایید شده</span>
            </p>
          </div>
        </Link>
        <Link
          to={"/students/preregestration"}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">پیش ثبت نام ها</span>
          <div className="text-xs font-semibold">
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#E73F3F]">21</span>
              <span className="text-[#4C526D]">دانشجو تایید نشده</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#E73F3F]">35</span>
              <span className="text-[#4C526D]">دانشجو تایید شده</span>
            </p>
          </div>
        </Link>
        <Link
          to={"/students/form"}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">فرم ها</span>
          <div className="text-xs font-semibold flex flex-col items-start justify-center">
            <span className="text-[#4C526D]">فرم شماره دو ، سه ، چهار</span>
            <span className="text-[#4C526D]">تایید گزارش هفتگی</span>
            <span className="text-[#4C526D]">نامه تمام کارآموزی</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Students;
