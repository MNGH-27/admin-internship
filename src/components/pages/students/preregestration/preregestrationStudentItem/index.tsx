import React, { useState } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";
//cookies
import { useCookies } from "react-cookie";
//component
import RejectStudentModal from "../rejectStudentModal";
import LoadingButton from "../../../../common/loadingBtn";
//service
import {
  PutUnVarifyStudentPreRegestration,
  PutVarifyStudentPreRegestration,
} from "../../../../../services/student";
import ModalDescriptionPreregestration from "../descriptionModal";
//hooks
import { useCustomSearchParams } from "../../../../../hooks/useCustomSearchParams";
//interface
import { typeSinglePreRegestration } from "../../../../../types";
import { toast } from "react-toastify";
interface StudetItemProps {
  index: number;
  data: typeSinglePreRegestration;
}

const PreregestrationStudentItem: React.FC<StudetItemProps> = ({
  data,
  index,
}) => {
  const [cookies] = useCookies(["token"]);

  const [searchParams] = useCustomSearchParams();
  const navigate = useNavigate();

  const [isVerifyBtnLoading, setIsVerifyBtnLoading] = useState(false);

  const [rejectModal, setRejectModal] = useState<{
    isShow: boolean;
    student: {
      id: number;
      studentNumber: number;
    };
    isBtnLoading: boolean;
  }>({
    isShow: false,
    student: {
      id: 0,
      studentNumber: 0,
    },
    isBtnLoading: false,
  });

  const [isShowDescModal, setIsShowDescModal] = useState(false);

  const closeRejectModalHandler = (
    reqCondition: boolean = false,
    data?: { id: number; desc: string }
  ) => {
    if (!reqCondition) {
      setRejectModal({
        isShow: false,
        student: {
          id: 0,
          studentNumber: 0,
        },
        isBtnLoading: false,
      });
      return;
    }

    if (!data) return;

    asyncRejectStudentHandler({ desc: data.desc, id: data.id });
  };

  const asyncRejectStudentHandler = async ({
    desc,
    id,
  }: {
    desc: string;
    id: number;
  }) => {
    setRejectModal((prevState) => ({
      ...prevState,
      isBtnLoading: true,
    }));
    try {
      const response = await PutUnVarifyStudentPreRegestration({
        token: cookies.token,
        detail: desc,
        student_id: id,
      });

      if (response.status === 200) {
        toast.success("دانشجو با موفقیت رد شد");
        navigate(0);
      } else {
        toast.error("رد شدن دانشجو ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
    setRejectModal({
      isShow: false,
      student: {
        id: 0,
        studentNumber: 0,
      },
      isBtnLoading: false,
    });
  };

  const asyncVerifyStudent = async () => {
    setIsVerifyBtnLoading(true);
    try {
      const response = await PutVarifyStudentPreRegestration({
        student_id: data.id,
        token: cookies.token,
      });

      if (response.status === 200) {
        toast.success("دانشجو با موفقیت تایید شد");
        navigate(0);
      } else {
        toast.error("تایید شدن دانشجو ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
    setIsVerifyBtnLoading(false);
  };

  const studentItemAction = () => {
    if (+searchParams.verified === 0) {
      return (
        <>
          <LoadingButton
            onClickHandler={() => asyncVerifyStudent()}
            mainBgColor="#EBF1FD"
            hoverBgColor="#2080F6"
            isLoading={isVerifyBtnLoading}
            paddingClass="px-3 py-1"
          >
            تایید{" "}
          </LoadingButton>
          <button
            onClick={() =>
              setRejectModal({
                isShow: true,
                student: {
                  id: data.id,
                  studentNumber: data.student_number,
                },
                isBtnLoading: false,
              })
            }
            className="text-[#E73F3F] bg-[#FCEAEA] hover:bg-[#E73F3F] hover:text-[#FCEAEA] duration-200 px-3 p-1 rounded-md"
          >
            رد
          </button>
          <button
            onClick={() => setIsShowDescModal(true)}
            className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-white px-3 py-1 rounded-md duration-200 "
          >
            توضیحات{" "}
          </button>
        </>
      );
    } else if (+searchParams.verified === 1) {
      return (
        <span className="text-[#01A63E] bg-[#E8F6ED] hover:bg-[#01A63E] hover:text-[#E8F6ED] duration-200 px-3 p-1 rounded-md">
          تایید شده{" "}
        </span>
      );
    } else {
      return (
        <>
          <button className="text-[#F4A118] bg-[#FFF0D8] hover:bg-[#F4A118] hover:text-[#FFF0D8] duration-200 px-3 p-1 rounded-md">
            توضیحات{" "}
          </button>
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
      {rejectModal.isShow && (
        <RejectStudentModal
          isBtnLoading={rejectModal.isBtnLoading}
          isShow={rejectModal.isShow}
          onCloseHandler={closeRejectModalHandler}
          student={rejectModal.student}
        />
      )}
      {isShowDescModal && (
        <ModalDescriptionPreregestration
          isShow={isShowDescModal}
          studentId={data.id}
          onCloseModal={() => setIsShowDescModal(false)}
        />
      )}
    </>
  );
};

export default PreregestrationStudentItem;
