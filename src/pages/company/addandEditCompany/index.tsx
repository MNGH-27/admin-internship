import React, { useEffect, useState } from "react";

//react toastify
import { toast } from "react-toastify";
//react router dom
import { useNavigate, Link } from "react-router-dom";
//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";
//cookeis
import { useCookies } from "react-cookie";

//services
import { GetFacultiesList } from "../../../services/faculties";
import { CreateNewCompany } from "../../../services/company";

import {
  CreateNewMaster,
  GetSingleMasterEdit,
  EditMaster,
} from "../../../services/masters";

//component
import LoadingButton from "../../../components/common/loadingBtn";
import AdminInput from "../../../components/common/input";
//interface
import { facultiesListItemType } from "../../../types";

interface typeFacultyData {
  data?: facultiesListItemType[];
  isLoading: boolean;
}

interface typeDataSchema {
  //company types
  company_name: string;
  company_number: string;
  company_registry_code: string;
  company_phone: string;
  company_address: string;
  company_category: string;
  company_postal_code: string;
  company_type: string;

  //comapny supervisor types
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  username: string;
  phone_number: string;
  faculty: facultiesListItemType;
}

interface typeErrorSchema {
  //company types
  company_name: string;
  company_number: string;
  company_registry_code: string;
  company_phone: string;
  company_address: string;
  company_category: string;
  company_postal_code: string;
  company_type: string;

  //comapny supervisor types
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  username: string;
  phone_number: string;
  faculty_id: string;
}

const AddAndEditCompany = () => {
  const navigate = useNavigate();

  const [cookeis] = useCookies(["token"]);

  const [searchParam] = useCustomSearchParams();

  //initial dataSchema values
  const [dataSchema, setDataSchema] = useState<typeDataSchema>({
    company_address: "",
    company_category: "",
    company_name: "",
    company_number: "",
    company_phone: "",
    company_postal_code: "",
    company_registry_code: "",
    company_type: "",

    first_name: "",
    last_name: "",
    email: "",
    national_code: "",
    phone_number: "",
    username: "",
    faculty: {
      id: 0,
      name: "",
    },
  });

  const [error, setError] = useState<typeErrorSchema>({
    company_address: "",
    company_category: "",
    company_name: "",
    company_number: "",
    company_phone: "",
    company_postal_code: "",
    company_registry_code: "",
    company_type: "",

    first_name: "",
    last_name: "",
    email: "",
    national_code: "",
    phone_number: "",
    username: "",
    faculty_id: "",
  });

  const [faculty, setFaculty] = useState<typeFacultyData>({
    isLoading: false,
  });

  const [isLoadingAddBtn, setIsLoadingAddBtn] = useState(false);

  useEffect(() => {
    asyncGetfacultiesListHandler();

    //check if status is editing
    if (searchParam.status === "edit") {
      //check if have master_id
      if (!searchParam.company_id) {
        toast.error("شماره دانشجویی وارد نشده");
        navigate("/company");
        return;
      }

      //requesst for single master
      asyncGetSingleMasterEdit();
    }
  }, []);

  const asyncGetfacultiesListHandler = async () => {
    setFaculty({
      isLoading: true,
    });

    try {
      //get faculties list
      const response = await GetFacultiesList({
        token: cookeis.token,
      });
      //check response status
      if (response.status === 200) {
        //set faculties list to data
        setFaculty({
          data: [...response.data.data],
          isLoading: true,
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }

    setFaculty((prevData) => ({
      ...prevData,
      isLoading: false,
    }));
  };

  const asyncGetSingleMasterEdit = async () => {
    try {
      const response = await GetSingleMasterEdit({
        token: cookeis.token,
        id: searchParam.master_id,
      });

      if (response.status === 200) {
        const singleMasterData = response.data.data;

        /**
         * change obj feild name
         * {
         *  faculty{
         *    "faculty_name" => changed to "name"
         * }
         * }
         */
        singleMasterData.faculty["name"] =
          singleMasterData.faculty["faculty_name"];
        delete singleMasterData.faculty["faculty_name"];

        //remove extra data (created_at and updated_at)
        delete singleMasterData.faculty["created_at"];
        delete singleMasterData.faculty["updated_at"];
        ////

        console.log("singleMasterData : ", singleMasterData);

        setDataSchema({
          ...singleMasterData,
        });
      } else {
        //an error occure
        toast.error(
          "دریافت اطلاعات استاد با مشکل مواجه شده لطفا دوباره امتحان کنید"
        );
        navigate("/teachers");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSetDataShcemaHandler = (
    target: string,
    value: string | facultiesListItemType
  ) => {
    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const onClickHandler = async () => {
    //clear error to its initail value
    setError({
      company_address: "",
      company_category: "",
      company_name: "",
      company_number: "",
      company_phone: "",
      company_postal_code: "",
      company_registry_code: "",
      company_type: "",

      first_name: "",
      last_name: "",
      email: "",
      national_code: "",
      phone_number: "",
      username: "",
      faculty_id: "",
    });

    //check if faculty don't be unselected
    if (dataSchema.faculty.id === 0) {
      setError((prevState) => ({
        ...prevState,
        faculty_id: "انتخاب دانشکده الزامی است",
      }));
      return;
    }

    //start loading
    setIsLoadingAddBtn(true);

    if (searchParam.status === "edit") {
      await asyncEditMaster();
    } else {
      await asyncCreateNewMaster();
    }

    setIsLoadingAddBtn(false);
  };

  const asyncCreateNewMaster = async () => {
    try {
      const response = await CreateNewCompany({
        token: cookeis.token,
        faculty_id: dataSchema.faculty.id,
        ...dataSchema,
      });
      if (response.status === 200) {
        toast.success("استاد با موفقیت اضافه شد");
        navigate("/company");
      } else {
        toast.error("اضافه کردن استاد ناموفق بود");
        setError({
          ...response.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const asyncEditMaster = async () => {
    try {
      //   const response = await EditMaster({
      //     token: cookeis.token,
      //     ...dataSchema,
      //     id: searchParam.master_id,
      //   });
      //   if (response.status === 200) {
      //     toast.success("استاد با موفقیت ویرایش شد");
      //     navigate("/teachers");
      //   } else {
      //     toast.error("ویرایش استاد استاد ناموفق بود");
      //     setError({
      //       ...response.data.message,
      //     });
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col items-start w-full gap-3 my-16">
        <Link
          to={"/company"}
          className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 px-7 py-2 text-lg font-semibold rounded-md mb-5"
        >
          بازگشت
        </Link>
        <span className="text-2xl font-semibold">اضافه کردن شرکت جدید</span>
        <span className="text-lg font-medium">
          برای اضافه کردن اطلاعات مورد هر نیاز هر شرکت را وارد کنید{" "}
        </span>
      </div>
      <div>
        <p className="text-xl font-semibold mb-7">اطلاعات شرکت</p>
        <div className="grid grid-cols-12 gap-y-6 sm:gap-y-10 sm:gap-x-10">
          <AdminInput
            title="نام شرکت"
            value={dataSchema.company_name}
            setDataHandler={onSetDataShcemaHandler}
            target="company_name"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_name}
            placeholder="نام شرکت را وارد کنید . . . "
          />
          <AdminInput
            title="تلفن شرکت"
            value={dataSchema.company_phone}
            setDataHandler={onSetDataShcemaHandler}
            target="company_phone"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_phone}
            placeholder="تلفن شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="شماره ثبت شرکت"
            value={dataSchema.company_number}
            setDataHandler={onSetDataShcemaHandler}
            target="company_number"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_number}
            placeholder="شماره ثبت شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="شناسه شرکت"
            value={dataSchema.company_registry_code}
            setDataHandler={onSetDataShcemaHandler}
            target="company_registry_code"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_registry_code}
            placeholder="شناسه شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="کد پستی"
            value={dataSchema.company_postal_code}
            setDataHandler={onSetDataShcemaHandler}
            target="company_postal_code"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_postal_code}
            placeholder="کد پستی را وارد کنید . . ."
          />
          <AdminInput
            title="نوع شرکت"
            value={dataSchema.company_category}
            setDataHandler={onSetDataShcemaHandler}
            target="company_category"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_category}
            placeholder="نوع شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="نوع شرکت"
            value={dataSchema.company_type}
            setDataHandler={onSetDataShcemaHandler}
            target="company_type"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_type}
            placeholder="نوع شرکت را وارد کنید . . ."
          />
        </div>
        <div className="flex flex-col items-start gap-1 my-7">
          <label className="text-lg font-medium">آدرس شرکت</label>
          <textarea
            placeholder="ادرس شرکت را وارد کنید . . . "
            className={`${
              error.company_address ? "border-red-700/70" : ""
            } placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full min-h-[150px] max-h-[00px]`}
            onChange={(e) => onSetDataShcemaHandler("address", e.target.value)}
            value={dataSchema.company_name}
          />
          {error.company_address && (
            <span className="text-sm text-red-700 font-semibold">
              {error.company_address}
            </span>
          )}
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold mb-7">اطلاعات سرپرست شرکت</p>
        <div className="grid grid-cols-12 gap-y-6 sm:gap-y-10 sm:gap-x-10">
          <AdminInput
            title="نام سرپرست"
            value={dataSchema.first_name}
            setDataHandler={onSetDataShcemaHandler}
            target="first_name"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.first_name}
            placeholder="نام شرکت را وارد کنید . . . "
          />
          <AdminInput
            title="نام خانوادگی سرپرست"
            value={dataSchema.last_name}
            setDataHandler={onSetDataShcemaHandler}
            target="last_name"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.last_name}
            placeholder="تلفن شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="ایمیل سرپست"
            value={dataSchema.email}
            setDataHandler={onSetDataShcemaHandler}
            target="email"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.email}
            placeholder="شماره ثبت شرکت را وارد کنید . . ."
          />
          <AdminInput
            title="کدملی سرپرست"
            value={dataSchema.national_code}
            setDataHandler={onSetDataShcemaHandler}
            target="national_code"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.national_code}
            placeholder="کدملی سرپرست را وارد کنید . . ."
          />
          <AdminInput
            title="نام کاربری سرپرست"
            value={dataSchema.username}
            setDataHandler={onSetDataShcemaHandler}
            target="username"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.username}
            placeholder="نام کاربری سرپرست را وارد کنید . . ."
          />
          <AdminInput
            title="تلفن سرپرست"
            value={dataSchema.phone_number}
            setDataHandler={onSetDataShcemaHandler}
            target="phone_number"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.phone_number}
            placeholder="تلفن سرپرست را وارد کنید . . ."
          />
          <AdminInput
            title="نوع شرکت"
            value={dataSchema.company_type}
            setDataHandler={onSetDataShcemaHandler}
            target="company_type"
            containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
            error={error.company_type}
            placeholder="نوع شرکت را وارد کنید . . ."
          />
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col items-start gap-1">
            <label className="text-lg font-medium">دانشکده</label>
            {faculty.isLoading ? (
              <div className="w-full h-11 bg-gray-400 animate-pulse rounded-md"></div>
            ) : (
              <>
                <select
                  value={JSON.stringify(dataSchema.faculty)}
                  onChange={(e) =>
                    onSetDataShcemaHandler(
                      "faculty",
                      JSON.parse(e.target.value)
                    )
                  }
                  className="w-full p-2 rounded-lg border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
                >
                  <option value={JSON.stringify({ name: "", id: 0 })} hidden>
                    یک دانشکده را انتخاب کنید
                  </option>
                  {faculty.data?.map((facultiesItem, index) => (
                    <option key={index} value={JSON.stringify(facultiesItem)}>
                      {facultiesItem.name}
                    </option>
                  ))}
                </select>
                {error.faculty_id && (
                  <span className="text-sm text-red-700 font-semibold">
                    {error.faculty_id}
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <LoadingButton
        buttonClass="mt-16 text-lg font-medium mr-auto"
        onClickHandler={() => onClickHandler()}
        mainBgColor="#EBF1FD"
        hoverBgColor="#2080F6"
        isLoading={isLoadingAddBtn}
        paddingClass="px-5 py-2"
      >
        {searchParam.status === "edit" ? "ویرایش استاد" : "اضافه کردن استاد"}
      </LoadingButton>
    </div>
  );
};

export default AddAndEditCompany;
