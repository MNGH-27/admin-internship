import React, { useState } from "react";
//moment
import moment from "moment-jalaali";
//component
import SingleWeekModal from "./singleWeekModal";
//interface
import { typeFormWeeklyReport } from "../../../../../../types/studentForm";

interface SingleFormWeeklyReportProps {
  data: typeFormWeeklyReport;
}

const SingleFormWeeklyReport: React.FC<SingleFormWeeklyReportProps> = ({
  data,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const [singleWeekModalStatus, setSingleWeekModalStatus] = useState<{
    isShow: boolean;
    formId?: number;
  }>();

  const getSingleWeekStatus = (status: number) => {
    switch (status) {
      case 0:
        return "موجود نیست";
      case 1:
        return "بررسی نشده";
      case 2:
        return "تایید شده";
      case 3:
        return "رد شده";
    }
  };

  return (
    <>
      <div className="flex flex-col mb-16 gap-5">
        <p className="text-[#5F5F61]">
          کارآموز{" "}
          <span className="text-black font-medium">
            {data.student?.first_name + " " + data.student?.last_name}
          </span>{" "}
          با شماره دانشجویی{" "}
          <span className="text-black font-medium">
            {data.student?.student_number}
          </span>{" "}
          در دانشکده{" "}
          <span className="text-black font-medium">
            {data.student?.faculty_name}
          </span>{" "}
          در مقطع تحصیلی کارشناسی و در شرکت{" "}
          <span className="text-black font-medium">{data.company.name}</span> که
          تاریخ شروع کارآموزی :{" "}
          <span className="text-black font-medium">
            {moment(data.student.internship_start_date).format("jYYYY/jMM/jDD")}
          </span>
          و تاریخ پایان کارآموزی :{" "}
          <span className="text-black font-medium">
            {" "}
            {moment(data.student.internship_start_date).format("jYYYY/jMM/jDD")}
          </span>
          بود، برای تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
        </p>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">نام شرکت:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.name}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">نوع شرکت:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.type}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">شماره تماس:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.phone_number}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">کد پستی:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.postal_code}
            </span>
          </div>
          <div className="sm:col-span-2 flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">آدرس:</span>
            <span className="text-[#222124] font-medium">
              {data.company.address}
            </span>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">
              نام و نام خانوادگی سرپرست کارآموزی:
            </span>
            <span className="text-[#222124] font-medium">
              {data.industry_supervisor?.full_name}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">سمت: </span>
            <span className="text-[#222124] font-medium">
              {data.industry_supervisor?.position}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
            <span className="text-[#222124] font-medium">
              {moment(data.student.internship_start_date).format(
                "jYYYY/jMM/jDD"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-10 my-24">
        <span className="text-2xl font-semibold">گزارش های هفتگی دانشجو</span>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5">
          {data.weeks.map((WeekItem, index) => (
            <div
              onClick={() => {
                setSingleWeekModalStatus({
                  isShow: true,
                  formId: WeekItem.id,
                });
              }}
              key={WeekItem.id}
              className="flex flex-col items-center justify-center gap-4 cursor-pointer border rounded-lg p-3 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
            >
              <span className="text-[#101114] font-semibold text-lg">
                هفته {WeekItem.id}
              </span>
              <span className="text-[#5F5F61] text-sm">
                روز شروع کارآموزی{" "}
                {moment(WeekItem.first_day_of_week).format("jYYYY/jMM/jDD")}
              </span>
              <span className="text-[#101114] font-medium">
                وضعیت : {getSingleWeekStatus(WeekItem.status)}
              </span>
              <div className="text-xs text-white flex items-center justify-center flex-wrap gap-1">
                <span className="bg-gray-700/30 px-2 py-1 rounded-md cursor-default">
                  تایید شده : {WeekItem.accepted}
                </span>
                <span className="bg-gray-700/30 px-2 py-1 rounded-md cursor-default">
                  رد شده : {WeekItem.rejected}
                </span>
                <span className="bg-gray-700/30 px-2 py-1 rounded-md cursor-default">
                  بررسی نشده : {WeekItem.not_checked}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 text-white">
                <button className="bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700 px-2 py-1 rounded-md text-sm duration-200">
                  تایید هفته
                </button>
                <button className="bg-red-700 border-2 border-red-700 hover:bg-white hover:text-red-700 px-2 py-1 rounded-md text-sm duration-200">
                  رد هفته
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {singleWeekModalStatus?.isShow && singleWeekModalStatus.formId && (
        <SingleWeekModal
          isShowModal={singleWeekModalStatus?.isShow}
          onCloseModal={() =>
            setSingleWeekModalStatus({
              isShow: false,
            })
          }
          weekId={singleWeekModalStatus.formId}
        />
      )}
    </>
  );
};

export default SingleFormWeeklyReport;
