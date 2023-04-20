import React, { useEffect, useRef } from "react";

//component
import ModalWrapper from "../../../../../common/modalWrapper";
import LoadingButton from "../../../../../common/loadingBtn";

//svg
import { ReactComponent as CloseSvg } from "./../../../../../../assets/icons/svg/close-circle.svg";

//interface
interface typeRejectModal {
  isShow: boolean;
  isBtnLoading: boolean;
  hasDesc?: boolean;
  desc?: string;
}

interface rejectStudentModalProps {
  closeModalHandler: (reqCondition?: boolean, detail?: string) => void;
  rejectData: typeRejectModal;
  stNumber: number;
}

const RejectFormModal: React.FC<rejectStudentModalProps> = ({
  closeModalHandler,
  rejectData,
  stNumber,
}) => {
  const textboxContainer = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (rejectData.hasDesc && textboxContainer.current && rejectData.desc) {
      textboxContainer.current.value = rejectData.desc;
    }
  }, []);

  return (
    <ModalWrapper isShowedModal={true} onCloseModal={() => closeModalHandler()}>
      <div className="flex flex-col items-start justify-center gap-3">
        <button onClick={() => closeModalHandler()}>
          <CloseSvg />
        </button>
        <span className="text-[#222124] text-xl font-semibold">
          رد کردن دانشجو برای فرم شماره 2
        </span>
        <span className="text-[#5F5F61] text-xs">
          آیا از رد کردن دانشجو به شماره دانشجویی {stNumber} مطمئن هستید؟
        </span>
        <div className="flex flex-col items-start justify-center gap-2 w-full my-3">
          <label className="text-[#5F5F61] text-xs">علت رد دانشجو</label>
          <textarea
            ref={textboxContainer}
            disabled={rejectData.hasDesc}
            className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] w-full border-2 border-[#E6E6E6] rounded-xl min-h-[100px] max-h-[200px] text-sm placeholder:text-xs p-2 outline-none"
            placeholder="توضیحات . . ."
            name="reject"
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          {!rejectData.hasDesc && (
            <LoadingButton
              onClickHandler={() =>
                closeModalHandler(true, textboxContainer.current?.value)
              }
              paddingClass="px-4 py-2"
              mainBgColor="#FCEAEA"
              hoverBgColor="#E73F3F"
              isLoading={rejectData.isBtnLoading}
            >
              رد کردن
            </LoadingButton>
          )}
          <button
            onClick={() => closeModalHandler()}
            className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] px-4 py-2 rounded-md border-2 border-[#E6E6E6] hover:bg-[#E6E6E6] duration-200"
          >
            بستن
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default RejectFormModal;
