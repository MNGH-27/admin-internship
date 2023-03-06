import React from "react";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//component
import RejectStudentModal from "../rejectStudentModal";

//interface
import { typeSinglePreRegestration } from "../../../../../types";
interface StudetItemProps {
  index: number;
  data: typeSinglePreRegestration;
}

const PreregestrationStudentItem: React.FC<StudetItemProps> = ({
  data,
  index,
}) => {
  const [searchParams] = useSearchParams();

  const studentItemAction = () => {
    if (!searchParams.get("studentStatus")) {
      return (
        <>
          <button className="text-[#2080F6] bg-[#EBF1FD] hover:bg-[#2080F6] hover:text-[#EBF1FD] duration-200 px-3 p-1 rounded-md">
            تایید{" "}
          </button>
          <button className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md">
            رد
          </button>
          <button className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md">
            توضیحات{" "}
          </button>
        </>
      );
    } else if (searchParams.get("studentStatus") === "approved") {
      return (
        <button className="text-[#01A63E] bg-[#E8F6ED] hover:bg-[#01A63E] hover:text-[#E8F6ED] duration-200 px-3 p-1 rounded-md">
          تایید شده{" "}
        </button>
      );
    } else {
      return (
        <>
          <button className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md">
            توضیحات{" "}
          </button>
          <button className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md">
            رد
          </button>
        </>
      );
    }
  };

  return (
    <>
      <tr className="grid grid-cols-12 w-full py-6 border-b-2 border-[#F6F6F6] text-[#5F5F61] text-center">
        <td className="col-span-1">{data.id}</td>
        <td className="col-span-1">{data.name ? data.name : "ثبت نشده"}</td>
        <td className="col-span-1">
          {data.last_name ? data.last_name : "ثبت نشده"}
        </td>
        <td className="col-span-2">
          {data.student_number ? data.student_number : "ثبت نشده"}
        </td>
        <td className="col-span-1">
          {data.company ? data.company : "ثبت نشده"}
        </td>
        <td className="col-span-2">
          {data.faculty ? data.faculty : "ثبت نشده"}
        </td>
        <td className="col-span-1">
          {data.entrance_year ? data.entrance_year : "ثبت نشده"}
        </td>
        <td className="col-span-1">
          {data.passed_units ? data.passed_units : "ثبت نشده"}
        </td>
        <td className="col-span-2 flex items-center justify-around flex-wrap gap-x-2 gap-y-4">
          {studentItemAction()}
        </td>
      </tr>
      {/* <RejectStudentModal /> */}
    </>
  );
};

export default PreregestrationStudentItem;
