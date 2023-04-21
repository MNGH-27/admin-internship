//component

import { Link } from "react-router-dom";

const EducationalIssue = () => {
  return (
    <div className="mt-16 mx-10 xl:mx-5">
      <h2 className="text-[#101114] text-3xl font-semibold mb-10 text-center md:text-right">
        مسائل اموزشی
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Link
          to={"/educational-issues/faculties"}
          className="flex flex-col items-center md:items-start justify-between gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <p className="text-3xl font-semibold mb-5">دانشکده ها</p>
          <p className="text-gray-400 font-medium">
            مشاهده ی لیست دانشکده ها ، اضافه کردن دانشکده ، ویرایش و حذف دانشکده
          </p>
        </Link>
        <Link
          to={"/educational-issues/terms"}
          className="flex flex-col items-center md:items-start justify-between gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <p className="text-3xl font-semibold mb-5">سر ترم</p>
          <p className="text-gray-400 font-medium">
            مشاهده سرترم ها ، اضافه کردن سر ترم{" "}
          </p>
        </Link>
        <Link
          to={"/educational-issues/terms-detail"}
          className="flex flex-col items-center md:items-start justify-between gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all"
        >
          <p className="text-3xl font-semibold mb-5">اطلاعات ترم</p>
          <p className="text-gray-400 font-medium">
            مشاهده ی اطلاعات مربوط به هر ترم همراه با جزئیات{" "}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default EducationalIssue;
