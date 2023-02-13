import React from "react";

//component
import TableWrapper from "../../../../../common/tableWrapper";

//staticData
const schaduleOfAttendanceListHeader = [
  {
    title: "روز / ساعت",
    style: "col-span-4",
  },
  {
    title: "صبح",
    style: "col-span-4",
  },
  {
    title: "بعد از ظهر",
    style: "col-span-4",
  },
];

const studentSchaduleList = [
  {
    day: "شنبه",
    morning: "09:00 تا 01:30",
    afternoon: "01:30 تا 04:30",
  },
  {
    day: "یکشنبه",
    morning: "09:00 تا 01:30",
    afternoon: "01:30 تا 04:30",
  },
  {
    day: "دوشنبه",
    morning: "09:00 تا 01:30",
    afternoon: "01:30 تا 04:30",
  },
  {
    day: "سه شنبه",
    morning: "09:00 تا 01:30",
    afternoon: "01:30 تا 04:30",
  },
  {
    day: "چهارشنبه",
    morning: "09:00 تا 01:30",
    afternoon: "01:30 تا 04:30",
  },
];

const studentPerformanceHeader = [
  {
    title: "#",
    style: "col-span-2",
  },
  {
    title: "تاریخ",
    style: "col-span-2",
  },
  {
    title: "ساعت",
    style: "col-span-2",
  },
  {
    title: "فعالیت در دست اجرا",
    style: "col-span-6",
  },
];

const studentPerformanceList = [
  {
    date: "1401/04/25",
    hour: "09:00",
    activity:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
  },
  {
    date: "1401/04/25",
    hour: "09:00",
    activity:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
  },
  {
    date: "1401/04/25",
    hour: "09:00",
    activity:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
  },
  {
    date: "1401/04/25",
    hour: "09:00",
    activity:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده...",
  },
];

const StudentForm2: React.FC = () => {
  const generateSchaduleAttandance = () => {
    return studentSchaduleList.map((item, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-4 ">{item.day}</td>
        <td className="col-span-4 ">{item.morning}</td>
        <td className="col-span-4 ">{item.afternoon}</td>
      </tr>
    ));
  };

  const generateStudentPerformance = () => {
    return studentPerformanceList.map((item, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-2 ">{index + 1}</td>
        <td className="col-span-2">{item.date}</td>
        <td className="col-span-2">{item.hour}</td>
        <td className="col-span-6 truncate">{item.activity}</td>
      </tr>
    ));
  };

  return (
    <>
      <div className="w-full flex flex-col items-start gap-10 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={schaduleOfAttendanceListHeader}
          hasPagination={false}
        >
          {generateSchaduleAttandance()}
        </TableWrapper>
      </div>

      <div className="w-full flex flex-col items-start gap-10 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={studentPerformanceHeader}
          hasPagination={false}
        >
          {generateStudentPerformance()}
        </TableWrapper>
      </div>

      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <button className="px-6 py-3 font-medium rounded-lg border-2 border-transparent text-[#E73F3F] bg-[#FCEAEA] hover:text-[#FCEAEA] hover:bg-[#E73F3F] duration-200">
          رد فرم شماره 2
        </button>
        <button className="px-6 py-3 font-medium rounded-lg text-white border-2 border-[#1650CF] bg-[#1650CF] hover:text-[#1650CF] hover:bg-white duration-200">
          تایید فرم شماره 2
        </button>
      </div>
    </>
  );
};

export default StudentForm2;
