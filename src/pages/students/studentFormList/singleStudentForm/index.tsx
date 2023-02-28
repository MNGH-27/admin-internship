import { type } from "os";
import React, { useState, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react-router-dom
import { Link, useParams } from "react-router-dom";

//service
import { GetSingleStudentsForm } from "../../../../services/student";

//interface
interface formObjectType {
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

  const [forms, setForms] = useState<formObjectType>();

  useEffect(() => {
    asyncGetSingleStudentForm();
  }, []);

  const asyncGetSingleStudentForm = async () => {
    //check id to be not undefined
    if (id === undefined) return;

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
  };

  const generateFormItems = () => {
    if (forms !== undefined) {
      return Object.keys(forms).map((formItem, index) => {
        return (
          <Link
            key={index}
            to={`/students/form/singleform?fromNumber=form_2&stNumber=398123111`}
            className="px-10 py-6 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] flex flex-col items-start justify-center gap-5 border-2 border-[#EEEEF2] rounded-md"
          >
            <span className="text-[#101114] font-bold">
              {findFormTitle(formItem)}
            </span>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#4C526D]">{findFormDetail(formItem)}</span>
              <span className="text-[#5F5F61] bg-[#F6F6F6] rounded-md px-2 py-1">
                {/* {findFormStatusShower(formItem)} */}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#4C526D]">توضیحات:</span>
              <span className="text-[#5F5F61]">وجود ندارد.</span>
            </div>
          </Link>
        );
      });
    }
  };

  const findFormTitle = (formFeild: string) => {
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

  const findFormDetail = (formFeild: string) => {
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

  const findFormStatusShower = (formFeild: string) => {
    //check if form is undefined
    if (forms === undefined) return;

    // const values = forms[formFeild].status;

    // switch (values) {
    //   case 0:
    //     return "موجود نیست";
    //   case 1:
    //     return "بررسی نشده";
    //   case 2:
    //     return "رد شده";
    //   case 3:
    //     return "تایید شده";
    // }
  };

  return (
    <div className="my-20 flex items-start justify-center flex-col gap-10 ">
      <div>
        <p className="text-2xl font-semibold flex items-center justify-start gap-2">
          <span className="text-[#101114]">دانشجویان</span>
          <span className="text-[#5F5F61]">نام دانشجو</span>
        </p>
        <span className="text-xs text-[#5F5F61]">
          نام دانشجو به شماره دانشجویی شماره دانشجو در ترم سرترم فرم های ذیل را
          برای تایید شدن پر کرده است.
        </span>
      </div>
      <div className="grid grid-cols-4 gap-5 w-full">{generateFormItems()}</div>
    </div>
  );
};

export default SingleStudentForm;
