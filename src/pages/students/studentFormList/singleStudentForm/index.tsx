import React, { useState, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//component
import LoadingLayout from "../../../../components/common/loadingLayout";

//service
import { GetSingleStudentsForm } from "../../../../services/student";
//Svg
import { ReactComponent as ArrowBackSvg } from "./../../../../assets/icons/svg/arrow-down.svg";
//interface
interface formObjectType {
  student: { full_name: string; student_number: number; entrance_year: string };
  finish_internship: { status: number };
  form2: { status: number };
  form3: { status: number };
  form4: { status: number };
  weekly_reports: { status: number };
}

type formFieldType =
  | "finish_internship"
  | "form2"
  | "form3"
  | "form4"
  | "weekly_reports";

const SingleStudentForm: React.FC = () => {
  const { id } = useParams();
  const [cookies] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(false);
  const [forms, setForms] = useState<formObjectType>();

  useEffect(() => {
    asyncGetSingleStudentForm();
  }, []);

  const asyncGetSingleStudentForm = async () => {
    //check id to be not undefined
    if (id === undefined) return;

    setIsLoading(true);

    try {
      const response = await GetSingleStudentsForm({
        id: +id,
        token: cookies.token,
      });

      //check resposne
      if (response.status === 200) {
        setForms({
          ...response.data.data,
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  const generateFormItems = () => {
    if (forms !== undefined) {
      return Object.keys(forms).map((formItem, index) => {
        const formFeildWithType = formItem as formFieldType;
        if (formItem !== "student") {
          return (
            <Link
              key={index}
              to={`/students/form/singleform?formType=${formFeildWithType}&studentId=${id}`}
              className={`${
                forms !== undefined &&
                forms[formFeildWithType].status === 0 &&
                "pointer-events-none"
              } flex flex-col items-center md:items-start justify-center gap-3 border-2 hover:border-[#4C526D] border-[#EEEEF2] rounded-md px-6 py-5 shadow-[0px_1px_2px_0px_rgba(24,24,28,0.04)] hover:shadow-[0px_1px_6px_0px_rgba(24,24,28,0.04)] duration-200 transition-all`}
            >
              <span className="text-[#101114] font-bold">
                {findFormTitle(formFeildWithType)}
              </span>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4C526D]">
                  {findFormDetail(formFeildWithType)}
                </span>
                <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
                  {findFormStatusShower(formFeildWithType)}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#4C526D]">توضیحات:</span>
                <span className="text-[#5F5F61]">وجود ندارد.</span>
              </div>
            </Link>
          );
        }
      });
    }
  };

  const findFormTitle = (formFeild: formFieldType) => {
    switch (formFeild) {
      case "form2":
        return "فرم شماره 2";
      case "form3":
        return "فرم شماره 3";
      case "form4":
        return "فرم شماره 4";
      case "weekly_reports":
        return "گزارش هفتگی";
      case "finish_internship":
        return "نامه اتمام کارآموزی";
    }
  };

  const findFormDetail = (formFeild: formFieldType) => {
    switch (formFeild) {
      case "form2":
        return "فرم شماره 2";
      case "form3":
        return "فرم ارزیابی کارآموز";
      case "form4":
        return "فرم ارزیابی محل کارآموزی";
      case "weekly_reports":
        return "فرم گزارش های هفتگی";
      case "finish_internship":
        return "فرم نامه اتمام کارآموزی";
    }
  };

  const findFormStatusShower = (formFeild: formFieldType) => {
    //check if form is undefined
    if (forms === undefined) return;

    const values = +forms[formFeild].status;

    switch (values) {
      case 0:
        return "موجود نیست";
      case 1:
        return "بررسی نشده";
      case 2:
        return "تایید شده";
      case 3:
        return "رد شده";
    }
  };

  return (
    <div className="my-20 flex items-start justify-center flex-col gap-10 ">
      <Link
        to={"/students/form"}
        className="flex items-center self-start text-white px-4 py-2 bg-blue-700 border-2 border-blue-700 hover:bg-white hover:text-blue-700 duration-200 rounded-md"
      >
        <ArrowBackSvg className="-rotate-90" />
        بازگشت
      </Link>
      <div>
        <p className="text-2xl font-semibold flex items-center justify-start gap-2">
          <span className="text-[#101114]">دانشجویان</span>
          <span className="text-[#5F5F61]">{forms?.student.full_name}</span>
        </p>
        <span className="text-xs text-[#5F5F61]">
          {forms?.student.full_name} به شماره دانشجویی{" "}
          {forms?.student.student_number} ورودی {forms?.student.entrance_year}{" "}
          فرم های ذیل را برای تایید شدن پر کرده است.
        </span>
      </div>
      <LoadingLayout isLoading={isLoading}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {generateFormItems()}
        </div>
      </LoadingLayout>
    </div>
  );
};

export default SingleStudentForm;
