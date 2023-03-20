import React from "react";

//component
import ModalWrapper from "../../../common/modalWrapper";
import LoadingButton from "../../../common/loadingBtn";
//interfaces
import { typeMasterList } from "../../../../types/masterType";

interface DeleteMasterModalProps {
  isShowModal: boolean;
  onCloseModalHandler: (reqCondition?: boolean, _id?: number) => void;
  master: typeMasterList;
  isBtnLoading: boolean;
}

const DeleteMasterModal: React.FC<DeleteMasterModalProps> = ({
  isShowModal,
  onCloseModalHandler,
  master,
  isBtnLoading,
}) => {
  return (
    <ModalWrapper
      isShowedModal={isShowModal}
      onCloseModal={() => onCloseModalHandler(false)}
    >
      <span>
        آیا از حذف استاد{" "}
        <span className="font-medium">
          "{`${master.first_name} ${master.last_name}`}"
        </span>{" "}
        مطمئن هستید ؟{" "}
      </span>
      <div className="mt-8 flex items-center justify-center gap-5">
        <LoadingButton
          onClickHandler={() => onCloseModalHandler(true, master.id)}
          paddingClass="px-4 py-2"
          mainBgColor="#FCEAEA"
          hoverBgColor="#E73F3F"
          isLoading={isBtnLoading}
        >
          حذف
        </LoadingButton>

        <button
          onClick={() => onCloseModalHandler(false)}
          className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] px-4 py-2 rounded-md border-2 border-[#E6E6E6] hover:bg-[#E6E6E6] duration-200"
        >
          بستن
        </button>
      </div>
    </ModalWrapper>
  );
};

export default DeleteMasterModal;
