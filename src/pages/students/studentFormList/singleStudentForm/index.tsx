import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

const SingleStudentForm: React.FC = () => {
  return (
    <div className="my-20 flex items-start justify-center flex-col gap-10 ">
      <div>
        <p className="text-2xl font-semibold flex items-center justify-start gap-2">
          <span className="text-[#101114]">دانشجویان</span>
          <span className="text-[#5F5F61]">نام دانشجو</span>
        </p>
        <span className="text-xs text-[#5F5F61]">
          نام دانشجو به شماره دانشجویی شماره دانشجو در ترم سرترم فرم های ذیل را
          برای تایید شدن پر کرده است.
        </span>
      </div>
      <div className="grid grid-cols-4 gap-5 w-full">
        <Link
          to={`/students/form/singleform?fromNumber=form_2&stNumber=398123111`}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">فرم شماره 2</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">فرم شروع کارآموزی</span>
            <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
              بررسی نشده{" "}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
        <Link
          to={`/students/form/singleform?fromNumber=form_3&stNumber=398123111`}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">فرم شماره 3</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">فرم ارزیابی کارآموز</span>
            <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
              بررسی نشده{" "}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
        <Link
          to={`/students/form/singleform?fromNumber=form_4&stNumber=398123111`}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">فرم شماره 4</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">فرم ارزیابی محل کارآموزی</span>
            <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
              بررسی نشده{" "}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
        <Link
          to={`/students/form/singleform?fromNumber=form_week&stNumber=398123111`}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">گزارش هفتگی</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">فرم گزارش های هفتگی</span>
            <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
              بررسی نشده{" "}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
        <Link
          to={`/students/form/singleform?fromNumber=form_final&stNumber=398123111`}
          className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
        >
          <span className="text-[#101114] font-bold">نامه اتمام کارآموزی</span>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">فرم نامه اتمام کارآموزی</span>
            <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
              بررسی نشده{" "}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#4C526D]">توضیحات:</span>
            <span className="text-[#5F5F61]">وجود ندارد.</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SingleStudentForm;
