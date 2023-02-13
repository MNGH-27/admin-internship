import React from "react";

//svg
import { ReactComponent as ArrowBackSvg } from "./../../../../../../assets/icons/svg/arrow-circle-right.svg";
import { ReactComponent as ArrowDownSvg } from "./../../../../../../assets/icons/svg/arrow-down-circle.svg";

// interface
interface SingleFormContextHeaderProps {
  hasUserDetail: boolean;
  title: string;
}

const SingleFormContextHeader: React.FC<SingleFormContextHeaderProps> = ({
  hasUserDetail,
  title,
}) => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <button className="self-end py-2 px-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200">
        <ArrowBackSvg />
        بازگشت
      </button>
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
              کارآموز علی الهیارلو با شماره دانشجویی 3981231008 در رشته تحصیلی
              کامپیوتر_نرم افزار در مقطع تحصیلی کارشناسی با معرفی نامه شماره
              01/2325 در مورخ 1401/04/21 برای تایید فرستاده شده است،که اطلاعات
              بیشتر به شرح ذیل است:
            </p>
            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">نام شرکت:</span>
                <span className="text-[#222124]">لورم ایپسوم متن ساختگی</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">نوع شرکت:</span>
                <span className="text-[#222124]">لورم ایپسوم متن ساختگی</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">شماره تماس:</span>
                <span className="text-[#222124]">091200000000</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">کد پستی:</span>
                <span className="text-[#222124]">58126583658</span>
              </div>
              <div className="sm:col-span-2 flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">آدرس:</span>
                <span className="text-[#222124]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </span>
              </div>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">
                  نام و نام خانوادگی سرپرست کارآموزی:
                </span>
                <span className="text-[#222124]">لورم ایپسوم متن ساختگی</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">سمت: </span>
                <span className="text-[#222124]">لورم ایپسوم متن ساختگی</span>
              </div>
              <div className="flex items-start justify-start gap-3">
                <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
                <span className="text-[#222124]">1401/04/21</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleFormContextHeader;
