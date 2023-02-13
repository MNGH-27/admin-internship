import React from "react";

//component
import TableWrapper from "../../../../../common/tableWrapper";

//svg
import { ReactComponent as TickSvg } from "./../../../../../../assets/icons/svg/tick-square.svg";

const traineeEvaluationIndustryHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "عوامل ارزیابی",
    style: "col-span-7 ",
  },
  {
    title: "عالی ( 2.5 )",
    style: "col-span-1",
  },
  {
    title: "خوب ( 2 )",
    style: "col-span-1",
  },
  {
    title: "متوسط ( 1.5 )",
    style: "col-span-1",
  },
  {
    title: "ضعیف ( 0.5 )",
    style: "col-span-1",
  },
];

const traineeEvaluationIndustryList = [
  {
    title: "استفاده از توان علمی در انجام کارهای علمی",
    value: 2.5,
  },
  {
    title: "استعداد و علاقه به فراگیری",
    value: 2,
  },
  {
    title: "سرعت و دقت در انجام وظایف محوله",
    value: 2,
  },
  {
    title: "کارآفرین بودن،خلاقیت و نوآوری",
    value: 2.5,
  },
  {
    title: "پشتکار و پیگیری وظایف و امور محوله",
    value: 1.5,
  },
  {
    title: "حضور به موقع در محل کارآموزی و نظم در کارها",
    value: 2.5,
  },
  {
    title: "هماهنگی و همکاری با جمع",
    value: 2,
  },
  {
    title: "رعایت شئون اسلامی",
    value: 0.5,
  },
];

const StudentForm4: React.FC = () => {
  const generateTraineeEvaluation = () => {
    return traineeEvaluationIndustryList.map((item, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-7 text-right">{item.title}</td>
        <td className="col-span-1 mx-auto">
          {item.value === 2.5 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {item.value === 2 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {item.value === 1.5 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {item.value === 0.5 && <TickSvg />}
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={traineeEvaluationIndustryHeader}
          hasPagination={false}
        >
          {generateTraineeEvaluation()}
        </TableWrapper>
      </div>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          اعلام نظر مبسوط دانشجو از محل کارآموزی
        </span>
        <p className="min-h-[250px] p-8 rounded-lg bg-[#F6F6F6] border-2 border-[#E0E0E0] text-[#222124]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#5F5F61]">تاریخ امضای کارآموز:</span>
          <span className="text-[#222124]">1401/06/15</span>
        </p>
      </div>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <button className="px-6 py-3 font-medium rounded-lg border-2 border-transparent text-[#E73F3F] bg-[#FCEAEA] hover:text-[#FCEAEA] hover:bg-[#E73F3F] duration-200">
          رد فرم شماره 4
        </button>
        <button className="px-6 py-3 font-medium rounded-lg text-white border-2 border-[#1650CF] bg-[#1650CF] hover:text-[#1650CF] hover:bg-white duration-200">
          تایید فرم شماره 4
        </button>
      </div>
    </>
  );
};

export default StudentForm4;
