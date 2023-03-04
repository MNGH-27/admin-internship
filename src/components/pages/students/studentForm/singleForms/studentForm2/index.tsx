import React, { useState } from "react";
//moment
import moment from "moment-jalaali";
//react router dom
import { useNavigate } from "react-router-dom";
//component
import TableWrapper from "../../../../../common/tableWrapper";
import LoadingButton from "../../../../../common/loadingBtn";
//cookie
import { useCookies } from "react-cookie";
//hooks
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";
//service
import { RejectForm2, VerifyForm2 } from "../../../../../../services/student";

//interface
import { typeForm_2 } from "../../../../../../types/studentForm";
import { toast } from "react-toastify";

//interface
interface studentForm2Props {
  data: typeForm_2;
}
//staticData
const schaduleOfAttendanceListHeader = [
  {
    title: "روز / ساعت",
    style: "col-span-4",
  },
  {
    title: "صبح",
    style: "col-span-4",
  },
  {
    title: "بعد از ظهر",
    style: "col-span-4",
  },
];

const studentPerformanceHeader = [
  {
    title: "#",
    style: "col-span-2",
  },
  {
    title: "تاریخ",
    style: "col-span-2",
  },
  {
    title: "ساعت",
    style: "col-span-2",
  },
  {
    title: "فعالیت در دست اجرا",
    style: "col-span-6",
  },
];
const StudentForm2: React.FC<studentForm2Props> = ({ data }) => {
  moment.loadPersian({ usePersianDigits: true });
  //navigate
  const navigate = useNavigate();
  //cookie
  const [cookies] = useCookies(["token"]);
  //useSearchParams (custome hook)
  const [searchParams] = useCustomSearchParams();

  const [rejectBtnLoading, setRejectBtnLoading] = useState(false);
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);

  const asyncRejectStudentForm2 = async () => {
    setRejectBtnLoading(true);
    try {
      const response = await RejectForm2({
        token: cookies.token,
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

  const asyncVerifyStudentForm2 = async () => {
    setVerifyBtnLoading(true);
    try {
      const response = await VerifyForm2({
        token: cookies.token,
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

  const generateSchaduleAttandance = () => {
    if (data?.form2) {
      return data.form2.schedule_table.map((scahdualTitle, index) => {
        const dayName = Object.keys(scahdualTitle)[0];

        return (
          <tr
            key={index}
            className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] font-semibold border-b-2 border-[#F6F6F6]"
          >
            <td className="col-span-4 ">{dayName}</td>
            <td className="col-span-4 flex items-center justify-center gap-1">
              <span>{scahdualTitle[dayName].ms}</span>-
              <span>{scahdualTitle[dayName].me}</span>
            </td>
            <td className="col-span-4 flex items-center justify-center gap-1">
              <span>{scahdualTitle[dayName].ee}</span>-
              <span>{scahdualTitle[dayName].es}</span>
            </td>
          </tr>
        );
      });
    }
  };

  const generateStudentPerformance = () => {
    return data.reports.map((reportsItem, index) => {
      return (
        <tr
          key={index}
          className="w-full text-center py-5 grid grid-cols-12 text-[#5F5F61] border-b-2 border-[#F6F6F6]"
        >
          <td className="col-span-2 ">{index + 1}</td>
          <td className="col-span-2">
            {moment(reportsItem.data).format("jYYYY/jMM/jDD")}
          </td>
          <td className="col-span-2">
            {moment(reportsItem.data).format("hh:mm")}
          </td>
          <td className="col-span-6 truncate">{reportsItem.desc}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-start gap-10 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={schaduleOfAttendanceListHeader}
          hasPagination={false}
        >
          {generateSchaduleAttandance()}
        </TableWrapper>
      </div>

      <div className="w-full flex flex-col items-start gap-10 mb-16">
        <span className="text-lg font-semibold text-[#101114]">
          برنامه زمانی حضور در محل کارآموزی
        </span>
        <TableWrapper
          minSize="900px"
          tableHeader={studentPerformanceHeader}
          hasPagination={false}
        >
          {generateStudentPerformance()}
        </TableWrapper>
      </div>

      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <LoadingButton
          isLoading={rejectBtnLoading}
          onClickHandler={asyncRejectStudentForm2}
          hoverBgColor="#E73F3F"
          mainBgColor="#FCEAEA"
          paddingClass="px-6 py-3"
        >
          رد فرم شماره 2
        </LoadingButton>
        <LoadingButton
          isLoading={verifyBtnLoading}
          onClickHandler={asyncVerifyStudentForm2}
          mainBgColor="#EBF1FD"
          hoverBgColor="#2080F6"
          paddingClass="px-6 py-3"
        >
          تایید فرم شماره 2
        </LoadingButton>
      </div>
    </>
  );
};

export default StudentForm2;
