import React, { useEffect, useState } from "react";

//react router dom
import { useNavigate } from "react-router-dom";
//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";
//cookeis
import { useCookies } from "react-cookie";

//services
import { GetFacultiesList } from "../../../services/faculties";
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
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

interface typeFacultyData {
  data?: facultiesListItemType[];
  isLoading: boolean;
}

interface typeDataSchema {
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  personal_code: string;
  phone_number: string;
  faculty: facultiesListItemType;
}

interface typeErrorSchema {
  first_name: string;
  last_name: string;
  email: string;
  national_code: string;
  personal_code: string;
  phone_number: string;
  faculty_id: string;
}

const AddAndEditMaster = () => {
  const navigate = useNavigate();

  const [cookeis] = useCookies(["token"]);

  const [searchParam] = useCustomSearchParams();

  //initial dataSchema values
  const [dataSchema, setDataSchema] = useState<typeDataSchema>({
    first_name: "",
    last_name: "",
    email: "",
    national_code: "",
    personal_code: "",
    phone_number: "",
    faculty: {
      id: 0,
      name: "",
    },
  });

  const [error, setError] = useState<typeErrorSchema>({
    first_name: "",
    last_name: "",
    email: "",
    national_code: "",
    personal_code: "",
    phone_number: "",
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
      if (!searchParam.master_id) {
        toast.error("شماره دانشجویی وارد نشده");
        navigate("/teachers");
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
      const response = await GetFacultiesList({
        token: cookeis.token,
      });

      if (response.status === 200) {
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
        ////

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
      first_name: "",
      last_name: "",
      email: "",
      national_code: "",
      personal_code: "",
      phone_number: "",
      faculty_id: "",
    });

    setIsLoadingAddBtn(true);

    if (searchParam.status === "edit") await asyncEditMaster();
    else await asyncCreateNewMaster();

    setIsLoadingAddBtn(false);
  };

  const asyncCreateNewMaster = async () => {
    try {
      const response = await CreateNewMaster({
        token: cookeis.token,
        ...dataSchema,
      });

      if (response.status === 200) {
        toast.success("استاد با موفقیت اضافه شد");
        navigate("/teachers");
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
      const response = await EditMaster({
        token: cookeis.token,
        ...dataSchema,
        id: searchParam.master_id,
      });

      if (response.status === 200) {
        toast.success("استاد با موفقیت ویرایش شد");
        navigate("/teachers");
      } else {
        toast.error("ویرایش استاد استاد ناموفق بود");
        setError({
          ...response.data.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-start w-full gap-3 my-16">
        <Link
          to={"/teachers"}
          className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 px-7 py-2 text-lg font-semibold rounded-md mb-5"
        >
          بازگشت
        </Link>
        <span className="text-2xl font-semibold">اضافه کردن استاد جدید</span>
        <span className="text-lg font-medium">
          برای اضافه کردن اطلاعات مورد هر نیاز هر استاد را وارد کنید{" "}
        </span>
      </div>
      <div className="grid grid-cols-12 gap-y-6 sm:gap-y-10 sm:gap-x-10">
        <AdminInput
          title="نام"
          value={dataSchema.first_name}
          setDataHandler={onSetDataShcemaHandler}
          target="first_name"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.first_name}
          placeholder="نام خود را وارد کنید . . . "
        />
        <AdminInput
          title="نام خانوادگی"
          value={dataSchema.last_name}
          setDataHandler={onSetDataShcemaHandler}
          target="last_name"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.last_name}
          placeholder="نام خانوادگی خود را وارد کنید . . ."
        />
        <AdminInput
          title="ایمیل"
          value={dataSchema.email}
          setDataHandler={onSetDataShcemaHandler}
          target="email"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.email}
          placeholder="ایمیل خود را وارد کنید . . ."
        />
        <AdminInput
          title="کدملی"
          value={dataSchema.national_code}
          setDataHandler={onSetDataShcemaHandler}
          target="national_code"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.national_code}
          placeholder="کدملی خود را وارد کنید . . ."
        />
        <AdminInput
          title="شماره تلفن"
          value={dataSchema.phone_number}
          setDataHandler={onSetDataShcemaHandler}
          target="phone_number"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.phone_number}
          placeholder="شماره تلفن خود را وارد کنید . . ."
        />
        <AdminInput
          title="کد پرسنلی"
          value={dataSchema.personal_code}
          setDataHandler={onSetDataShcemaHandler}
          target="personal_code"
          containerClass="col-span-12 sm:col-span-6 lg:col-span-4"
          error={error.personal_code}
          placeholder="کدپرسنلی خود را وارد کنید . . ."
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
                  onSetDataShcemaHandler("faculty", JSON.parse(e.target.value))
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

export default AddAndEditMaster;
