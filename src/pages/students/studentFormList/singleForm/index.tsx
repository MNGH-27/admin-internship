import React, { useState, useEffect } from "react";

//hooks
import { useCustomSearchParams } from "../../../../hooks/useCustomSearchParams";

//cookie
import { useCookies } from "react-cookie";

//service
import { GetStudentForm } from "../../../../services/student";

//component
import SingleFormContextHeader from "../../../../components/pages/students/studentForm/singleForms/singleFormContextHeader";
import StudentForm2 from "../../../../components/pages/students/studentForm/singleForms/studentForm2";
import StudentForm3 from "../../../../components/pages/students/studentForm/singleForms/studentForm3";
import StudentForm4 from "../../../../components/pages/students/studentForm/singleForms/studentForm4";
import StudentFormFinal from "../../../../components/pages/students/studentForm/singleForms/studentFormFinal";
import SingleFormWeeklyReport from "../../../../components/pages/students/studentForm/singleForms/singleFormWeeklyReports";

import LoadingLayout from "../../../../components/common/loadingLayout";

import FormPDF from "../../../../components/pages/students/studentForm/formPDF";

//interface
import {
  typeStudentForm,
  typeForm_2,
  typeForm_3,
  typeForm_4,
  typeFormWeeklyReport,
  typeFormFinishInternship,
} from "../../../../types/studentForm";
import { Link } from "react-router-dom";

const SingleForm: React.FC = () => {
  //cookie
  const [cookies] = useCookies(["token"]);

  //custom useSearchParams
  const [searchParam] = useCustomSearchParams();

  const [form, setForm] = useState<typeStudentForm>({
    isLoading: false,
    hasHeader: false,
  });
  // const [isShowPDFModal, setIsShowPdfModal] = useState(false);

  useEffect(() => {
    if (
      searchParam.formType === "form2" ||
      searchParam.formType === "form3" ||
      searchParam.formType === "form4" ||
      searchParam.formType === "weekly_reports" ||
      searchParam.formType === "finish_internship"
    ) {
      setForm({
        isLoading: true,
        hasHeader: true,
      });
      asyncGetStudentFrom();
    }
  }, []);

  const asyncGetStudentFrom = async () => {
    //check if studentId don't be null
    if (!searchParam.studentId) {
      return;
    }

    try {
      const response = await GetStudentForm({
        token: cookies.token,
        formStage: searchParam.formType,
        id: +searchParam.studentId,
      });

      if (response.status === 200) {
        setForm((prevState) => ({
          ...prevState,
          data: { ...response.data.data },
          meta: { ...response.data.meta },
        }));
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }

    setForm((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const generateFormTitle = (): string => {
    switch (searchParam.formType) {
      case "form2":
        return "فرم شماره 2 ( فرم شروع کارآموزی)";
      case "form3":
        return "فرم شماره 3 ( فرم ارزشیابی دانشجو توسط سرپرست کارآموزی)";
      case "form4":
        return "فرم شماره 4 ( فرم ارزشیابی محل کارآموزی توسط دانشجو)";
      case "weekly_reports":
        return "گزارش هفتگی توسط دانشجو";
      case "finish_internship":
        return "نامه اتمام کارآموزی";
      default:
        return "هنوز نزدم";
    }
  };

  const generateFormHandler = () => {
    if (!form.data) {
      return;
    }

    if (searchParam.formType === "form2") {
      const form2Data = form.data as typeForm_2;
      return <StudentForm2 data={form2Data} />;
    } else if (searchParam.formType === "form3") {
      const form3Data = form.data as typeForm_3;
      return <StudentForm3 data={form3Data} />;
    } else if (searchParam.formType === "form4") {
      const form4Data = form.data as typeForm_4;
      return <StudentForm4 data={form4Data} />;
    } else if (searchParam.formType === "weekly_reports") {
      const formWeeklyReportData = form.data as typeFormWeeklyReport;
      return <SingleFormWeeklyReport data={formWeeklyReportData} />;
    } else {
      const formFinishInternShip = form.data as typeFormFinishInternship;
      return <StudentFormFinal data={formFinishInternShip} />;
    }
  };

  return (
    <>
      <LoadingLayout loadingClass="my-32" isLoading={form.isLoading}>
        <SingleFormContextHeader
          formStatus={form.data?.status}
          title={generateFormTitle()}
        />
        {generateFormHandler()}
      </LoadingLayout>
    </>
  );
};

export default SingleForm;
