import React from "react";

// name: "علی",
//     lastName: "الهیارلو",
//     stNumber: 3981231111,
//     faculty: "کامپیوتر",
//     term: "پنجم",
//     nlCode: 2790897654,
//     phoneCode: "09038802635",

//interface StudentItem
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
  return (
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
        <button className="text-[#2080F6] bg-[#EBF1FD] hover:bg-[#2080F6] hover:text-[#EBF1FD] duration-200 px-3 p-1 rounded-md">
          تایید{" "}
        </button>
        <button className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md">
          رد
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
