import React from "react";

//react-router-dom
import { Link } from "react-router-dom";

//interface
import { typeSingleStudentForm } from "../../../../../types";
interface StudetItemProps {
  index: number;
  data: typeSingleStudentForm;
}

const StudentFormListItem: React.FC<StudetItemProps> = ({ data, index }) => {
  return (
    <>
      <tr className="grid grid-cols-12 w-full py-6 border-b-2 border-[#F6F6F6] text-[#5F5F61] text-center">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{data.name}</td>
        <td className="col-span-2">{data.last_name}</td>
        <td className="col-span-2">{data.student_number}</td>
        <td className="col-span-2">{data.faculty}</td>
        <td className="col-span-2">{data.entrance_year}</td>
        {/* <td className="col-span-2">{data.entryDate}</td> */}
        <td className="col-span-2 flex items-center justify-around flex-wrap gap-2">
          <Link
            to={`/students/form/${data.id}`}
            className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md"
          >
            توضیحات{" "}
          </Link>
        </td>
      </tr>
      {/* <RejectStudentModal /> */}
    </>
  );
};

export default StudentFormListItem;
