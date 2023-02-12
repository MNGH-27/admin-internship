import React from "react";

interface StudetItemProps {
  index: number;
  data: {
    name: string;
    lastName: string;
    stNumber: number;
    faculty: string;
    term: string;
    entryDate: number;
  };
}

const FormStudentItem: React.FC<StudetItemProps> = ({ data, index }) => {
  return (
    <>
      <tr className="grid grid-cols-12 w-full py-6 border-b-2 border-[#F6F6F6] text-[#5F5F61]">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{data.name}</td>
        <td className="col-span-2">{data.lastName}</td>
        <td className="col-span-2">{data.stNumber}</td>
        <td className="col-span-1">{data.faculty}</td>
        <td className="col-span-1">{data.term}</td>
        <td className="col-span-2">{data.entryDate}</td>
        <td className="col-span-2 flex items-center justify-around flex-wrap gap-2">
          <button className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md">
            توضیحات{" "}
          </button>
        </td>
      </tr>
      {/* <RejectStudentModal /> */}
    </>
  );
};

export default FormStudentItem;
