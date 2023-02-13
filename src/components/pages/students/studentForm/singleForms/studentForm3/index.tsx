import React from "react";

//component
import TableWrapper from "../../../../../common/tableWrapper";

//svg
import { ReactComponent as TickSvg } from "./../../../../../../assets/icons/svg/tick-square.svg";

const traineeEvaluationHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "عوامل ارزیابی",
    style: "col-span-3",
  },
  {
    title: "عالی ( 2.5 )",
    style: "col-span-2",
  },
  {
    title: "خوب ( 2 )",
    style: "col-span-2",
  },
  {
    title: "متوسط ( 1.5 )",
    style: "col-span-2",
  },
  {
    title: "ضعیف ( 0.5 )",
    style: "col-span-2",
  },
];

const traineeEvaluationList = [
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

const finalInternshipEvaluationHeader = [
  {
    title: "ردیف",
    style: "col-span-2",
  },
  {
    title: "عوامل ارزیابی",
    style: "col-span-8",
  },
  {
    title: "نمره",
    style: "col-span-2",
  },
];

const finalInternshipEvaluationlist = [
  {
    evaluationFactors: "میانگین ارزشیابی بازدید های استادکارآموزی",
    grade: 20,
  },
  {
    evaluationFactors: "میانگین ارزشیابی بازدید های استادکارآموزی",
    grade: 20,
  },
  {
    evaluationFactors: "میانگین ارزشیابی بازدید های استادکارآموزی",
    grade: 20,
  },
  {
    evaluationFactors: "میانگین ارزشیابی بازدید های استادکارآموزی",
    grade: 20,
  },
  {
    evaluationFactors: "میانگین ارزشیابی بازدید های استادکارآموزی",
    grade: 20,
  },
];

const StudentForm3: React.FC = () => {
  const generateTraineeEvaluation = () => {
    return traineeEvaluationList.map((item, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-3">{item.title}</td>
        <td className="col-span-2 mx-auto">
          {item.value === 2.5 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {item.value === 2 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {item.value === 1.5 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {item.value === 0.5 && <TickSvg />}
        </td>
      </tr>
    ));
  };

  const generateFinalTraineeEvaluation = () => {
    return finalInternshipEvaluationlist.map((item, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-2">{index + 1}</td>
        <td className="col-span-8">{item.evaluationFactors}</td>
        <td className="col-span-2 mx-auto">{item.grade}</td>
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
          tableHeader={traineeEvaluationHeader}
          hasPagination={false}
        >
          {generateTraineeEvaluation()}
        </TableWrapper>
        <div className="flex items-center justify-start gap-7">
          <p className="flex items-center gap-2">
            <span className="text-[#5F5F61]">جمع کل</span>
            <span className="text-[#101114]">20</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#5F5F61]">به حروف :</span>
            <span className="text-[#101114]">بیست</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          ارزشیابی نهایی کارآموزی{" "}
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={finalInternshipEvaluationHeader}
          hasPagination={false}
        >
          {generateFinalTraineeEvaluation()}
        </TableWrapper>
      </div>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <button className="px-6 py-3 font-medium rounded-lg border-2 border-transparent text-[#E73F3F] bg-[#FCEAEA] hover:text-[#FCEAEA] hover:bg-[#E73F3F] duration-200">
          رد فرم شماره 3
        </button>
        <button className="px-6 py-3 font-medium rounded-lg text-white border-2 border-[#1650CF] bg-[#1650CF] hover:text-[#1650CF] hover:bg-white duration-200">
          تایید فرم شماره 3
        </button>
      </div>
    </>
  );
};

export default StudentForm3;
