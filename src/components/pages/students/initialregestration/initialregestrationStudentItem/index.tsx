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
  GetInitialRegestrationRegectInfo,
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

interface typeRejectModal {
  isShow: boolean;
  isLoading: boolean;
  hasDesc?: boolean;
  desc?: string;
}

const StudentItem: React.FC<StudetItemProps> = ({ data, index }) => {
  const [isVarifyBtnLoading, setisVarifyBtnLoading] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);

  const [rejectModal, setRejectModal] = useState<typeRejectModal>();

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

  const onCloseModalHandler = async (
    reqCondition: boolean = false,
    detail?: string,
    status?: "reject" | "verify"
  ) => {
    //check reqConditon
    if (!reqCondition) {
      //reqCondition is false => just closing modal
      setRejectModal({
        isShow: false,
        isLoading: false,
      });
      return;
    }

    //reqCondition is 1 , check detail be undefined
    if (detail && status) {
      //config rejectModal to loading button in modal and make modal open
      setRejectModal({
        isLoading: true,
        isShow: true,
      });

      //check status of request
      if (status === "reject") {
        //status is reject , call reject function
        await asycnRejectStudent(detail);
      } else {
        //status is verify , vall verify function
        await asyncVarifyStudnet();
      }

      setRejectModal({
        isShow: false,
        isLoading: false,
      });
    }
  };

  const asycnRejectStudent = async (detail: string) => {
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
  };

  const asynGetRejectInformation = async () => {
    setIsShowRejectModal(true);
    try {
      const response = await GetInitialRegestrationRegectInfo({
        token: cookies.token,
        student_id: data.id,
      });

      if (response.status === 200) {
        setRejectModal({
          isShow: true,
          isLoading: false,
          desc: response.data.message,
          hasDesc: true,
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsShowRejectModal(false);
  };

  const studentItemAction = () => {
    if (searchParams.verified == 1) {
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
            onClick={() =>
              setRejectModal({
                isShow: true,
                isLoading: false,
              })
            }
            className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md"
          >
            رد
          </button>
        </>
      );
    } else if (searchParams.verified == 2) {
      return (
        <>
          <span className="text-[#01A63E] bg-[#E8F6ED] hover:bg-[#01A63E] hover:text-[#E8F6ED] duration-200 px-3 p-1 rounded-md">
            تایید شده
          </span>
          <button
            onClick={() =>
              setRejectModal({
                isShow: true,
                isLoading: false,
              })
            }
            className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md"
          >
            رد
          </button>
        </>
      );
    } else {
      return (
        <>
          <LoadingButton
            onClickHandler={() => asynGetRejectInformation()}
            mainBgColor="#FFF0D8"
            hoverBgColor="#F4A118"
            isLoading={isShowRejectModal}
            paddingClass="px-3 py-1"
          >
            توضیحات
          </LoadingButton>
          <span className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md">
            رد شده
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
      {rejectModal?.isShow && (
        <RejectStudentModal
          stNumber={data.student_number}
          rejectData={rejectModal}
          closeModalHandler={onCloseModalHandler}
        />
      )}
    </>
  );
};

export default StudentItem;
