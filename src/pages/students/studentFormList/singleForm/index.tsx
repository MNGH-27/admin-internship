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

import LoadingLayout from "../../../../components/common/loadingLayout";

import FormPDF from "../../../../components/pages/students/studentForm/formPDF";

//interface
import { typeStudentForm } from "../../../../types/studentForm";

const SingleForm: React.FC = () => {
  //cookie
  const [cookies] = useCookies(["token"]);

  //custom useSearchParams
  const [searchParam] = useCustomSearchParams();

  const [form, setForm] = useState<typeStudentForm>({
    isLoading: false,
    hasHeader: false,
  });
  const [isShowPDFModal, setIsShowPdfModal] = useState(false);

  useEffect(() => {
    if (
      searchParam.formType === "form2" ||
      searchParam.formType === "form3" ||
      searchParam.formType === "form4"
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
      default:
        return "هنوز نزدم";
    }
  };

  return (
    <>
      <LoadingLayout loadingClass="my-32" isLoading={form.isLoading}>
        <SingleFormContextHeader
          hasUserDetail={form.hasHeader}
          headerData={form.data}
          title={generateFormTitle()}
        />
        {searchParam.formType === "form2" ? (
          form.data && <StudentForm2 data={form.data} />
        ) : searchParam.formType === "form3" ? (
          <StudentForm3 />
        ) : searchParam.formType === "form4" ? (
          <StudentForm4 />
        ) : (
          <StudentFormFinal />
        )}
      </LoadingLayout>
      {isShowPDFModal && form.data && (
        <FormPDF
          isShowModal={isShowPDFModal}
          onCloseModal={() => setIsShowPdfModal(false)}
          data={form.data}
          formStage={searchParam.formType}
        />
      )}
    </>
  );
};

export default SingleForm;
