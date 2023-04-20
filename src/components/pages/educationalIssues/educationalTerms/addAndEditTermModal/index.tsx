import React, { useState, useRef, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react toastify
import { toast } from "react-toastify";

//react router dom
import { useNavigate } from "react-router-dom";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingButton from "../../../../common/loadingBtn";
import AdminInput from "../../../../common/input";
import AdminCalendar from "../../../../common/datePicker";
//service
import {
  CreatNewTerm,
  EditTerm,
} from "../../../../../services/educationalIssues";
//interface
import { typeTermsListItem } from "../../../../../types/terms";

interface AddAndEditTermModalProps {
  isShow: boolean;
  onCloseModal: () => void;
  modalType: "add" | "edit";
  data?: typeTermsListItem;
}

interface typeTermDataSchema {
  name: string;
  start_Date: Date | null;
  end_Date: Date | null;
}

const AddAndEditTermModal: React.FC<AddAndEditTermModalProps> = ({
  isShow,
  data,
  modalType,
  onCloseModal,
}) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [dataSchema, setDataSchema] = useState<typeTermDataSchema>({
    end_Date: null,
    start_Date: null,
    name: "",
  });

  const [error, setError] = useState<{
    name?: "";
    start_date?: "";
    end_date?: "";
  }>({});

  useEffect(() => {
    if (data) {
      setDataSchema({
        end_Date: new Date(data.end_date),
        start_Date: new Date(data.start_date),
        name: data.name,
      });
    }
  }, [data]);

  const onClickHandler = async () => {
    setIsLoading(true);

    if (modalType === "add") {
      await asyncCreateNewTerm();
    } else {
      await asyncEditModal();
    }

    setIsLoading(false);
  };

  const asyncCreateNewTerm = async () => {
    try {
      const response = await CreatNewTerm({
        token: cookies.token,
        name: dataSchema.name,
        start_date: dataSchema.start_Date,
        end_date: dataSchema.end_Date,
      });

      if (response.status === 200) {
        navigate("/educational-issues/terms");
        onCloseModal();
        toast.success("سر ترم با موفقیت اضافه شد");
      } else {
        setError({
          ...response.data.message,
        });
        toast.error("اضافه کردن سر ترم ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const asyncEditModal = async () => {
    if (dataSchema.start_Date === null || dataSchema.end_Date === null) {
      toast.error("باید حداقل یک تاریخ را انتخاب کنید");
      return;
    }

    if (!data?.id) {
      toast.error("دانشجو برای ویرایش پیدا نشد");
      return;
    }

    try {
      const response = await EditTerm({
        token: cookies.token,
        name: dataSchema.name,
        start_date: dataSchema.start_Date,
        end_date: dataSchema.end_Date,
        id: data?.id,
      });
      if (response.status === 200) {
        navigate("/educational-issues/terms");
        onCloseModal();
        toast.success("سر ترم با موفقیت ویرایش شد");
      } else {
        setError({
          ...response.data.message,
        });
        toast.error("ویرایش کردن سر ترم ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDataSchemaChangeHandler = (target: string, value: string | Date) => {
    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <ModalWrapper
      modalClass="sm:w-2/3 lg:w-1/2"
      isShowedModal={isShow}
      onCloseModal={onCloseModal}
    >
      <p className="text-lg font-medium mb-6">
        اطلاعات مورد نیاز را برای اضافه کردن سر ترم وارد کنید
      </p>
      <div className="w-full grid grid-cols-12 gap-5">
        <AdminInput
          value={dataSchema.name}
          error={error.name}
          setDataHandler={onDataSchemaChangeHandler}
          title="نام"
          target="name"
          containerClass="col-span-12"
          placeholder="نام سر ترم را وارد کنید . . . "
        />
        <div className="col-span-12 sm:col-span-6">
          <p className="text-sm font-medium mb-1">تاریخ شروع را وارد کنید</p>
          <AdminCalendar
            selectDayHandler={onDataSchemaChangeHandler}
            selectedDay={dataSchema.start_Date}
            target="start_Date"
          />
          {error.start_date && (
            <span className="text-red-700 text-sm font-medium">
              {error.start_date}
            </span>
          )}
        </div>
        <div className="col-span-12 sm:col-span-6">
          <p className="text-sm font-medium mb-1">تاریخ پایان را وارد کنید</p>
          <AdminCalendar
            selectDayHandler={onDataSchemaChangeHandler}
            selectedDay={dataSchema.end_Date}
            target="end_Date"
          />
          {error.end_date && (
            <span className="text-red-700 text-sm font-medium">
              {error.end_date}
            </span>
          )}
        </div>
      </div>
      <div className="mt-5 mb-2 flex items-center justify-end gap-5">
        <LoadingButton
          onClickHandler={onClickHandler}
          paddingClass="px-4 py-2"
          mainBgColor="#EBF1FD"
          hoverBgColor="#2080F6"
          isLoading={isLoading}
        >
          {modalType === "edit" ? "ویرایش کردن" : "اضافه کردن"}
        </LoadingButton>

        <button
          onClick={onCloseModal}
          className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] px-4 py-2 rounded-md border-2 border-[#E6E6E6] hover:bg-[#E6E6E6] duration-200"
        >
          بستن
        </button>
      </div>
    </ModalWrapper>
  );
};

export default AddAndEditTermModal;
