import React, { useState } from "react";

//hook
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";

//cookies
import { useCookies } from "react-cookie";

//react-router-dom
import { useNavigate } from "react-router-dom";

//toast
import { toast } from "react-toastify";

//moment
import moment from "moment-jalaali";

//service
import {
  RejectSingleForm,
  VerifySingleForm,
} from "../../../../../../services/student";

//component
import LoadingButton from "../../../../../common/loadingBtn";

//interface
import { typeFormFinishInternship } from "../../../../../../types/studentForm";

interface StudentFormFinalProps {
  data: typeFormFinishInternship;
}

const StudentFormFinal: React.FC<StudentFormFinalProps> = ({ data }) => {
  moment.loadPersian({ usePersianDigits: true });

  //navigate
  const navigate = useNavigate();
  //cookie
  const [cookies] = useCookies(["token"]);
  //useSearchParams (custome hook)
  const [searchParams] = useCustomSearchParams();

  const [rejectBtnLoading, setRejectBtnLoading] = useState(false);
  const [verifyBtnLoading, setVerifyBtnLoading] = useState(false);

  const asyncRejectStudentFormFinish = async () => {
    setRejectBtnLoading(true);
    try {
      const response = await RejectSingleForm({
        token: cookies.token,
        formStage: "finish_internship",
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

  const asyncVerifyStudentFormFinish = async () => {
    setVerifyBtnLoading(true);
    try {
      const response = await VerifySingleForm({
        token: cookies.token,
        formStage: "finish_internship",
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

  return (
    <>
      <div className="w-full text-[#101114] font-semibold flex flex-col items-start gap-3 mb-16">
        <p>
          <span>شماره:</span>
        </p>
        <p>
          <span>تاریخ:</span>
        </p>
        <p>
          <span>پیوست:</span>
        </p>
      </div>
      <div className="text-xl font-semibold text-[#101114]">
        <p className="mb-3">دانشگاه تربیت دبیر شهید رجایی</p>
        <p>موضوع: گواهی انجام کارآموزی آقای {data.full_name}</p>
      </div>
      <p className="mt-7 mb-16 text-lg text-[#5F5F61]">
        با سلام <br />
        بازگشت به نامه شماره {data.letter_name} مورخ{" "}
        {moment(data.letter_date).format("jYYYY/jMM/jDD")} بدینوسیله گواهی می
        شود جناب آقای {data.full_name} به شماره دانشجویی {data.student_number}{" "}
        از تاریخ {moment(data.internship_start_date).format("jYYYY/jMM/jDD")}{" "}
        لغایت {moment(data.internship_finish_date).format("jYYYY/jMM/jDD")} به
        مدت {data.duration} ساعت دوره کارآموزی خود را در شرکت {data.company} با
        موفقیت گذرانده است. <br />
        این گواهی بنا به درخواست نامبرده جهت ارائه به آن دانشگاه صادر گردیده و
        فاقد هرگونه اعتبار دیگری است.
      </p>
      <p className="flex flex-col items-end justify-center text-center my-36 text-xl text-[#101114]">
        <span className="font-semibold mb-4">{data.internship_supervisor}</span>
        <span>سرپرست کارآموزی در صنعت</span>
      </p>
      <div className="flex items-center justify-end gap-5 w-full mb-10">
        <LoadingButton
          isLoading={rejectBtnLoading}
          onClickHandler={asyncRejectStudentFormFinish}
          hoverBgColor="#E73F3F"
          mainBgColor="#FCEAEA"
          paddingClass="px-6 py-3"
        >
          رد نامه اتمام اتمام کارآموزی
        </LoadingButton>
        <LoadingButton
          isLoading={verifyBtnLoading}
          onClickHandler={asyncVerifyStudentFormFinish}
          mainBgColor="#EBF1FD"
          hoverBgColor="#2080F6"
          paddingClass="px-6 py-3"
        >
          تایید نامه اتمام کارآموزی
        </LoadingButton>
      </div>
    </>
  );
};

export default StudentFormFinal;
