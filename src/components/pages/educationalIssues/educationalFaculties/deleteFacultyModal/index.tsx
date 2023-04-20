import React, { useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { useNavigate } from "react-router-dom";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingButton from "../../../../common/loadingBtn";

//service
import { DeleteFaculty } from "../../../../../services/educationalIssues";

//interface
import { facultiesListItemType } from "../../../../../types";
import { toast } from "react-toastify";

interface DeleteFacultyModalProps {
  isShow: boolean;
  onCloseModal: () => void;
  data: facultiesListItemType;
}

const DeleteFacultyModal: React.FC<DeleteFacultyModalProps> = ({
  isShow,
  data,
  onCloseModal,
}) => {
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onDeleteFacultyHandler = async () => {
    setIsLoading(true);
    try {
      const response = await DeleteFaculty({
        token: cookies.token,
        id: data.id,
      });

      if (response.status === 200) {
        navigate("/educational-issues/faculties");
        toast.success("دانشکده با موفقیت حذف شد");
      } else {
        toast.error("حذف کردن دانشکده ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <ModalWrapper
      modalClass="sm:w-2/3 lg:w-1/3"
      isShowedModal={isShow}
      onCloseModal={onCloseModal}
    >
      <p className="text-lg font-medium">
        آیا از حذف <span className="font-semibold">" {data.name} "</span>{" "}
        اطمینان دارید ؟
      </p>
      <div className="mt-5 mb-2 flex items-center justify-end gap-5">
        <LoadingButton
          onClickHandler={onDeleteFacultyHandler}
          paddingClass="px-4 py-2"
          mainBgColor="#FCEAEA"
          hoverBgColor="#E73F3F"
          isLoading={isLoading}
        >
          حذف کردن
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

export default DeleteFacultyModal;
