import React, { useState } from "react";

//cookies
import { useCookies } from "react-cookie";
//react toastify
import { toast } from "react-toastify";
//react-router-dom
import { useNavigate } from "react-router-dom";
//hooks
import { useCustomSearchParams } from "../../../../../hooks/useCustomSearchParams";
//services
import {
  PutVarifyStudentInitialRegestration,
  PutUnVarifyStudentInitialRegestration,
} from "../../../../../services/student";

//component
import RejectStudentModal from "../rejectStudentModal";
import LoadingButton from "../../../../common/loadingBtn";
//interface
import { typeSingleInitialRegestration } from "../../../../../types";
interface StudetItemProps {
  index: number;
  data: typeSingleInitialRegestration;
}

const StudentItem: React.FC<StudetItemProps> = ({ data, index }) => {
  const [isVarifyBtnLoading, setisVarifyBtnLoading] = useState(false);
  const [isUnVarifyBtnLoading, setisUnVarifyBtnLoading] = useState(false);

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  const [searchParams] = useCustomSearchParams();
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);

  const asyncVarifyStudnet = async () => {
    setisVarifyBtnLoading(true);
    try {
      const response = await PutVarifyStudentInitialRegestration({
        token: cookies.token,
        student_id: data.id,
      });

      if (response.status === 200) {
        //varify student successfully , refresh list
        toast.success("دانشجو با موفقیت تایید شد");
        navigate(0);
      } else {
        toast.error("تایید دانشجو موفقیت آمیز نبود");
      }
    } catch (error) {
      console.log(error);
    }
    setisVarifyBtnLoading(false);
  };

  const onCloseModalHandler = (
    reqCondition: boolean = false,
    detail?: string
  ) => {
    //check reqConditon
    if (!reqCondition) {
      //reqCondition is false => just closing modal
      setIsShowDeleteModal(false);
      return;
    }

    //reqCondition is 1 , check detail be undefined
    if (detail !== undefined) {
      //detail is undefined =>  unvarify student
      asycnRejectStudent(detail);
    }
  };

  const asycnRejectStudent = async (detail: string) => {
    setisUnVarifyBtnLoading(true);
    try {
      const response = await PutUnVarifyStudentInitialRegestration({
        token: cookies.token,
        student_id: data.id,
        detail,
      });

      if (response.status === 200) {
        //student unvarify successfully , refresh- list
        toast.success("دانشجو با موفقیت رد شد");
        navigate(0);
      } else {
        toast.error("رد دانشجو موفقیت آمیز نبود");
      }
    } catch (error) {
      console.log(error);
    }
    setisUnVarifyBtnLoading(false);
  };

  const studentItemAction = () => {
    if (searchParams.verified == 0) {
      return (
        <>
          <LoadingButton
            onClickHandler={() => asyncVarifyStudnet()}
            mainBgColor="#EBF1FD"
            hoverBgColor="#2080F6"
            isLoading={isVarifyBtnLoading}
            paddingClass="px-3 py-1"
          >
            تایید
          </LoadingButton>
          <button
            onClick={() => setIsShowDeleteModal(true)}
            className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md"
          >
            رد
          </button>
        </>
      );
    } else if (searchParams.verified == 1) {
      return (
        <span className="text-[#01A63E] bg-[#E8F6ED] hover:bg-[#01A63E] hover:text-[#E8F6ED] duration-200 px-3 p-1 rounded-md">
          تایید شده{" "}
        </span>
      );
    } else {
      return (
        <>
          <span className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md">
            توضیحات{" "}
          </span>
          <span className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md">
            رد
          </span>
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
        <td className="col-span-1">{data.entrance_year}</td>
        <td className="col-span-2">{data.national_code}</td>
        <td className="col-span-2">{data.phone_number}</td>
        <td className="col-span-2 flex items-center justify-around gap-2">
          {studentItemAction()}
        </td>
      </tr>
      {isShowDeleteModal && (
        <RejectStudentModal
          isLoading={isUnVarifyBtnLoading}
          closeModalHandler={onCloseModalHandler}
        />
      )}
    </>
  );
};

export default StudentItem;
