import React from "react";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//component
import RejectStudentModal from "../rejectStudentModal";

interface StudetItemProps {
  index: number;
  data: {
    name: string;
    lastName: string;
    stNumber: number;
    faculty: string;
    term: string;
    nlCode: number;
    phoneCode: string;
  };
}

const StudentItem: React.FC<StudetItemProps> = ({ data, index }) => {
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
      <tr className="grid grid-cols-12 w-full py-6 border-b-2 border-[#F6F6F6] text-[#5F5F61]">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{data.name}</td>
        <td className="col-span-1">{data.lastName}</td>
        <td className="col-span-2">{data.stNumber}</td>
        <td className="col-span-1">{data.faculty}</td>
        <td className="col-span-1">{data.term}</td>
        <td className="col-span-2">{data.nlCode}</td>
        <td className="col-span-1">{data.phoneCode}</td>
        <td className="col-span-2 flex items-center justify-end gap-2">
          {studentItemAction()}
        </td>
      </tr>
      {/* <RejectStudentModal /> */}
    </>
  );
};

export default StudentItem;
