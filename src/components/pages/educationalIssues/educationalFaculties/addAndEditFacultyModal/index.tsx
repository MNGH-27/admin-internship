import React, { useState, useRef, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { useNavigate } from "react-router-dom";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingButton from "../../../../common/loadingBtn";

//service
import {
  CreatNewFaculty,
  EditFaculty,
} from "../../../../../services/educationalIssues";

//interface
import { facultiesListItemType } from "../../../../../types";
import { toast } from "react-toastify";

interface AddAndEditFacultyModalProps {
  isShow: boolean;
  onCloseModal: () => void;
  modalType: "add" | "edit";
  data?: facultiesListItemType;
}

const AddAndEditFacultyModal: React.FC<AddAndEditFacultyModalProps> = ({
  isShow,
  data,
  modalType,
  onCloseModal,
}) => {
  const inputContainer = useRef<HTMLInputElement>(null);

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{
    name?: "";
  }>({});

  useEffect(() => {
    if (data && inputContainer.current) {
      inputContainer.current.value = data.name;
    }
  }, [data]);

  const onClickHandler = async () => {
    setIsLoading(true);

    if (modalType === "add") {
      await asyncCreateNewFaculty();
    } else {
      await asyncEditModal();
    }

    setIsLoading(false);
  };

  const asyncCreateNewFaculty = async () => {
    if (!inputContainer.current) return;

    try {
      const response = await CreatNewFaculty({
        token: cookies.token,
        name: inputContainer.current.value,
      });

      if (response.status === 200) {
        navigate("/educational-issues/faculties");
        toast.success("دانشکده با موفقیت اضافه شد");
      } else {
        setError({
          ...response.data.message,
        });
        toast.error("اضافه کردن دانشکده ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const asyncEditModal = async () => {
    //check if we have data and input don't be null(in initailize value)
    if (!inputContainer.current || !data) return;

    try {
      const response = await EditFaculty({
        token: cookies.token,
        name: inputContainer.current.value,
        id: data?.id,
      });

      if (response.status === 200) {
        navigate("/educational-issues/faculties");
        toast.success("دانشکده با موفقیت ویرایش شد");
      } else {
        setError({
          ...response.data.message,
        });
        toast.error("ویرایش کردن دانشکده ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrapper
      modalClass="sm:w-2/3 lg:w-1/3"
      isShowedModal={isShow}
      onCloseModal={onCloseModal}
    >
      <p className="text-lg font-medium mb-6">نام دانشکده را وارد کنید</p>
      <div>
        <input
          ref={inputContainer}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              onClickHandler();
            }
          }}
          className={`placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full`}
          placeholder="نام دانشکده را وارد کنید . . ."
        />
        {error.name && (
          <span className="text-sm text-red-700 font-medium">{error.name}</span>
        )}
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

export default AddAndEditFacultyModal;
