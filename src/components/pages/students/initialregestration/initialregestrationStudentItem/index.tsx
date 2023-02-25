import React from "react";

//cookies
import { useCookies } from "react-cookie";

//react-router-dom
import { useSearchParams } from "react-router-dom";

//services
import { PutVarifyStudentInitialRegestration } from "../../../../../services/student";

//component
import RejectStudentModal from "../rejectStudentModal";

//interface
import { typeSingleInitialRegestration } from "../../../../../types";
interface StudetItemProps {
  index: number;
  data: typeSingleInitialRegestration;
}

const StudentItem: React.FC<StudetItemProps> = ({ data, index }) => {
  const [searchParams] = useSearchParams();
  const [cookies] = useCookies(["token"]);

  const asyncVarifyStudnet = async () => {
    try {
      const response = await PutVarifyStudentInitialRegestration({
        token: cookies.token,
        student_id: data.id,
      });

      console.log("response ;", response);
    } catch (error) {
      console.log(error);
    }
  };

  const studentItemAction = () => {
    if (!searchParams.get("studentStatus")) {
      return (
        <>
          <button
            onClick={() => asyncVarifyStudnet()}
            className="text-[#2080F6] bg-[#EBF1FD] hover:bg-[#2080F6] hover:text-[#EBF1FD] duration-200 px-3 p-1 rounded-md"
          >
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
      <tr className="grid grid-cols-12 w-full py-6 border-b-2 border-[#F6F6F6] text-[#5F5F61] text-center">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{data.name}</td>
        <td className="col-span-1">{data.last_name}</td>
        <td className="col-span-2">{data.student_number}</td>
        <td className="col-span-1 truncate">{data.faculty}</td>
        <td className="col-span-1">{data.entrance_year}</td>
        <td className="col-span-2">{data.national_code}</td>
        <td className="col-span-1">{data.phone_number}</td>
        <td className="col-span-2 flex items-center justify-end gap-2">
          {studentItemAction()}
        </td>
      </tr>
      {/* <RejectStudentModal /> */}
    </>
  );
};

export default StudentItem;
