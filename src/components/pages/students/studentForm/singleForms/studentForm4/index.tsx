import React, { useState } from "react";

//react-router-dom
import { useNavigate } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

//hook
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";

//react-toast
import { toast } from "react-toastify";

//moment
import moment from "moment-jalaali";

//component
import TableWrapper from "../../../../../common/tableWrapper";
import LoadingButton from "../../../../../common/loadingBtn";
//service
import {
  RejectSingleForm,
  VerifySingleForm,
} from "../../../../../../services/student";

//svg
import { ReactComponent as TickSvg } from "./../../../../../../assets/icons/svg/tick-square.svg";

//interface
import { typeForm_4 } from "../../../../../../types/studentForm";
interface typeStudentForm4Props {
  data: typeForm_4;
}

const traineeEvaluationIndustryHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "عوامل ارزیابی",
    style: "col-span-7 ",
  },
  {
    title: "عالی ( 2.5 )",
    style: "col-span-1",
  },
  {
    title: "خوب ( 2 )",
    style: "col-span-1",
  },
  {
    title: "متوسط ( 1.5 )",
    style: "col-span-1",
  },
  {
    title: "ضعیف ( 0.5 )",
    style: "col-span-1",
  },
];

const StudentForm4: React.FC<typeStudentForm4Props> = ({ data }) => {
  moment.loadPersian({ usePersianDigits: true });

  const navigate = useNavigate();

  const [searchParams] = useCustomSearchParams();

  const [cookies] = useCookies(["token"]);

  const [rejectBtnLoading, setRejectBtnLoading] = useState(false);
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);

  const asyncRejectStudentForm4 = async () => {
    setRejectBtnLoading(true);
    try {
      const response = await RejectSingleForm({
        token: cookies.token,
        formStage: "form4",
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

  const asyncVerifyStudentForm4 = async () => {
    setVerifyBtnLoading(true);
    try {
      const response = await VerifySingleForm({
        token: cookies.token,
        formStage: "form4",
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
    return data.evaluations.map((singleEvaluation, index) => (
      <tr className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-7 text-right">{singleEvaluation.option}</td>
        <td className="col-span-1 mx-auto">
          {+singleEvaluation.value === 4 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {+singleEvaluation.value === 3 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {+singleEvaluation.value === 2 && <TickSvg />}
        </td>
        <td className="col-span-1 mx-auto">
          {+singleEvaluation.value === 1 && <TickSvg />}
        </td>
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
            {moment(data.student.internship_start_date).format("jYYYY/jMM/jDD")}
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
          minSize="min-w-[1200px]"
          tableHeader={traineeEvaluationIndustryHeader}
          hasPagination={false}
        >
          {generateTraineeEvaluation()}
        </TableWrapper>
      </div>
      <div className="w-full flex flex-col items-start gap-7 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          اعلام نظر مبسوط دانشجو از محل کارآموزی
        </span>
        <p className="min-h-[250px] min-w-full p-8 rounded-lg bg-[#F6F6F6] border-2 border-[#E0E0E0] text-[#222124]">
          {data.comment}
        </p>
        <p className="flex items-center gap-2">
          <span className="text-[#5F5F61]">تاریخ امضای کارآموز:</span>
          <span className="text-[#222124]">1401/06/15</span>
        </p>
      </div>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <LoadingButton
          isLoading={rejectBtnLoading}
          onClickHandler={asyncRejectStudentForm4}
          hoverBgColor="#E73F3F"
          mainBgColor="#FCEAEA"
          paddingClass="px-6 py-3"
        >
          رد فرم شماره 4
        </LoadingButton>
        <LoadingButton
          isLoading={verifyBtnLoading}
          onClickHandler={asyncVerifyStudentForm4}
          mainBgColor="#EBF1FD"
          hoverBgColor="#2080F6"
          paddingClass="px-6 py-3"
        >
          تایید فرم شماره 4
        </LoadingButton>
      </div>
    </>
  );
};

export default StudentForm4;
