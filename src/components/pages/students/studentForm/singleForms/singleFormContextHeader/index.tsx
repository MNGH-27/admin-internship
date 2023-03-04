import React from "react";

//useSearchParams
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";

//moment
import moment from "moment-jalaali";

//svg
import { ReactComponent as ArrowBackSvg } from "./../../../../../../assets/icons/svg/arrow-circle-right.svg";
import { ReactComponent as ArrowDownSvg } from "./../../../../../../assets/icons/svg/arrow-down-circle.svg";

// interface
import { typeForm_2 } from "../../../../../../types/studentForm";
import { Link } from "react-router-dom";
interface SingleFormContextHeaderProps {
  hasUserDetail: boolean;
  headerData?: typeForm_2;
  title: string;
}

const SingleFormContextHeader: React.FC<SingleFormContextHeaderProps> = ({
  hasUserDetail,
  headerData,
  title,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const [searchParams] = useCustomSearchParams();

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <Link
        to={`/students/form/${searchParams.studentId}`}
        className="self-end py-2 px-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
      >
        <ArrowBackSvg />
        بازگشت
      </Link>
      <div className="w-full flex flex-col items-start justify-center gap-7 mb-16">
        <div className="flex items-center justify-start w-full gap-2">
          <span className="text-[#101114] text-xl font-semibold">{title}</span>
          <button className="px-5 py-1 border-2 border-[#0081FB] flex items-center justify-center gap-1 text-white bg-[#0081FB] hover:text-[#0081FB] hover:bg-white duration-200 rounded-full">
            <ArrowDownSvg />
            دانلود فرم
          </button>
        </div>
        {hasUserDetail && (
          <>
            <p className="text-[#5F5F61]">
              کارآموز{" "}
              <span className="text-black font-medium">
                {headerData?.student?.first_name +
                  " " +
                  headerData?.student?.last_name}
              </span>{" "}
              با شماره دانشجویی{" "}
              <span className="text-black font-medium">
                {headerData?.student?.faculty_name}
              </span>{" "}
              در رشته تحصیلی
              <span className="text-black font-medium">
                {headerData?.student?.faculty_name}
              </span>{" "}
              در مقطع تحصیلی کارشناسی با معرفی نامه شماره{" "}
              <span className="text-black font-medium">
                {headerData?.form2.introduction_letter_number}
              </span>{" "}
              در مورخ{" "}
              <span className="text-black font-medium">
                {moment(headerData?.form2.created_at).format("jYYYY/jMM/jDD")}
              </span>{" "}
              برای تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
            </p>
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">نام شرکت:</span>
                <span className="text-[#222124] font-medium">
                  {headerData?.company?.name}
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">نوع شرکت:</span>
                <span className="text-[#222124] font-medium">
                  {headerData?.company?.type}
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">شماره تماس:</span>
                <span className="text-[#222124] font-medium">
                  {headerData?.company?.phone_number}
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">کد پستی:</span>
                <span className="text-[#222124] font-medium">
                  {headerData?.company?.postal_code}
                </span>
              </div>
              <div className="sm:col-span-2 flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">آدرس:</span>
                <span className="text-[#222124] font-medium">
                  {headerData?.company.address}
                </span>
              </div>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">
                  نام و نام خانوادگی سرپرست کارآموزی:
                </span>
                <span className="text-[#222124] font-medium">
                  {headerData?.industry_supervisor?.full_name}
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">سمت: </span>
                <span className="text-[#222124] font-medium">
                  {headerData?.industry_supervisor?.position}
                </span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
                <span className="text-[#222124] font-medium">
                  {moment(headerData?.form2.created_at).format("jYYYY/jMM/jDD")}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleFormContextHeader;
