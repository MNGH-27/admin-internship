import React, { useState } from "react";

//moment
import moment from "moment-jalaali";

//react router dom
import { useNavigate } from "react-router-dom";

//toast
import { toast } from "react-toastify";

//hooks
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";

//cookies
import { useCookies } from "react-cookie";

//service
import {
  RejectSingleForm,
  VerifySingleForm,
} from "../../../../../../services/student";

//component
import TableWrapper from "../../../../../common/tableWrapper";
import LoadingButton from "../../../../../common/loadingBtn";
//svg
import { ReactComponent as TickSvg } from "./../../../../../../assets/icons/svg/tick-square.svg";

//interface

import { typeForm_3 } from "../../../../../../types/studentForm";
interface StudentForm3Props {
  data: typeForm_3;
}

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

const StudentForm3: React.FC<StudentForm3Props> = ({ data }) => {
  moment.loadPersian({ usePersianDigits: true });

  const navigate = useNavigate();

  const [searchParams] = useCustomSearchParams();

  const [cookies] = useCookies(["token"]);

  const [rejectBtnLoading, setRejectBtnLoading] = useState(false);
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);

  const asyncRejectStudentForm3 = async () => {
    setRejectBtnLoading(true);
    try {
      const response = await RejectSingleForm({
        token: cookies.token,
        formStage: "form3",
        id: searchParams.studentId,
      });
      if (response.status === 200) {
        toast.success("دانشجو با موفقیت رد شد");
        navigate(`/students/form/${searchParams.studentId}`);
      } else {
        toast.error("رد کردن دانشجو ناموفق بود");
      }
    } catch (error) {
      console.log("error");
    }
    setRejectBtnLoading(false);
  };

  const asyncVerifyStudentForm3 = async () => {
    setVerifyBtnLoading(true);
    try {
      const response = await VerifySingleForm({
        token: cookies.token,
        formStage: "form3",
        id: searchParams.studentId,
      });
      if (response.status === 200) {
        toast.success("دانشجو با موفقیت تایید شد");
        navigate(`/students/form/${searchParams.studentId}`);
      } else {
        toast.error("تایید کردن دانشجو ناموفق بود");
      }
    } catch (error) {
      console.log("error");
    }
    setVerifyBtnLoading(false);
  };

  const generateTraineeEvaluation = () => {
    return data.student_evaluations.map((signleStudentEvaluation, index) => (
      <tr
        key={index}
        className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]"
      >
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-3">{signleStudentEvaluation.name}</td>
        <td className="col-span-2 mx-auto">
          {+signleStudentEvaluation.value === 4 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {+signleStudentEvaluation.value === 3 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {+signleStudentEvaluation.value === 2 && <TickSvg />}
        </td>
        <td className="col-span-2 mx-auto">
          {+signleStudentEvaluation.value === 1 && <TickSvg />}
        </td>
      </tr>
    ));
  };

  const generateFinalTraineeEvaluation = () => {
    return data.final_evaluation.map((singleFinaleEval, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-2">{index + 1}</td>
        <td className="col-span-8">{singleFinaleEval.title}</td>
        <td className="col-span-2 mx-auto">{singleFinaleEval.grade}</td>
      </tr>
    ));
  };

  return (
    <>
      <div className="flex flex-col mb-16 gap-5">
        <p className="text-[#5F5F61]">
          کارآموز{" "}
          <span className="text-black font-medium">
            {data.student?.first_name + " " + data.student?.last_name}
          </span>{" "}
          با شماره دانشجویی{" "}
          <span className="text-black font-medium">
            {data.student?.student_number}
          </span>{" "}
          در دانشکده{" "}
          <span className="text-black font-medium">
            {data.student?.faculty_name}
          </span>{" "}
          در مقطع تحصیلی کارشناسی و در شرکت{" "}
          <span className="text-black font-medium">{data.company.name}</span> که
          تاریخ شروع کارآموزی :{" "}
          <span className="text-black font-medium">
            {moment(data.student.internship_start_date).format("jYYYY/jMM/jDD")}
          </span>
          و تاریخ پایان کارآموزی :{" "}
          <span className="text-black font-medium">
            {" "}
            {moment(data.student.internship_finish_date).format(
              "jYYYY/jMM/jDD"
            )}
          </span>
          بود، برای تایید فرستاده شده است،که اطلاعات بیشتر به شرح ذیل است:
        </p>
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">نام شرکت:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.name}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">نوع شرکت:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.type}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">شماره تماس:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.phone_number}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">کد پستی:</span>
            <span className="text-[#222124] font-medium">
              {data.company?.postal_code}
            </span>
          </div>
          <div className="sm:col-span-2 flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">آدرس:</span>
            <span className="text-[#222124] font-medium">
              {data.company.address}
            </span>
          </div>
        </div>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">
              نام و نام خانوادگی سرپرست کارآموزی:
            </span>
            <span className="text-[#222124] font-medium">
              {data.industry_supervisor?.full_name}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">سمت: </span>
            <span className="text-[#222124] font-medium">
              {data.industry_supervisor?.position}
            </span>
          </div>
          <div className="flex items-start justify-start gap-3">
            <span className="text-[#5F5F61]">تاریخ شروع کارآموزی:</span>
            <span className="text-[#222124] font-medium">
              {moment(data.student.internship_start_date).format(
                "jYYYY/jMM/jDD"
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="min-w-[900px]"
          tableHeader={traineeEvaluationHeader}
          hasPagination={false}
        >
          {generateTraineeEvaluation()}
        </TableWrapper>
        <div className="flex items-center justify-start gap-7">
          <p className="flex items-center gap-2">
            <span className="text-[#5F5F61]">جمع کل : </span>
            <span className="text-[#101114]">{data.total_grade}</span>
          </p>
          {/* <p className="flex items-center gap-2">
            <span className="text-[#5F5F61]">به حروف :</span>
            <span className="text-[#101114]">بیست</span>
          </p> */}
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          ارزشیابی نهایی کارآموزی{" "}
        </span>
        <TableWrapper
          minSize="min-w-[900px]"
          tableHeader={finalInternshipEvaluationHeader}
          hasPagination={false}
        >
          {generateFinalTraineeEvaluation()}
        </TableWrapper>
      </div>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <LoadingButton
          isLoading={rejectBtnLoading}
          onClickHandler={asyncRejectStudentForm3}
          hoverBgColor="#E73F3F"
          mainBgColor="#FCEAEA"
          paddingClass="px-6 py-3"
        >
          رد فرم شماره 3
        </LoadingButton>
        <LoadingButton
          isLoading={verifyBtnLoading}
          onClickHandler={asyncVerifyStudentForm3}
          mainBgColor="#EBF1FD"
          hoverBgColor="#2080F6"
          paddingClass="px-6 py-3"
        >
          تایید فرم شماره 3
        </LoadingButton>
      </div>
    </>
  );
};

export default StudentForm3;
