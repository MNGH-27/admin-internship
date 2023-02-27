import React, { useRef } from "react";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingButton from "../../../../common/loadingBtn";
//svg
import { ReactComponent as CloseSvg } from "./../../../../../assets/icons/svg/close-circle.svg";

//interface
interface rejectStudentModalProps {
  closeModalHandler: (reqCondition?: boolean, detail?: string) => void;
  isLoading: boolean;
}

const RejectStudentModal: React.FC<rejectStudentModalProps> = ({
  closeModalHandler,
  isLoading,
}) => {
  const textboxContainer = useRef<HTMLTextAreaElement>(null);

  return (
    <ModalWrapper isShowedModal={true} onCloseModal={() => closeModalHandler()}>
      <div className="flex flex-col items-start justify-center gap-3">
        <button onClick={() => closeModalHandler()}>
          <CloseSvg />
        </button>
        <span className="text-[#222124] text-xl font-semibold">
          رد کردن دانشجو
        </span>
        <span className="text-[#5F5F61] text-xs">
          آیا از رد کردن دانشجو به شماره دانشجویی 3981231008 مطمئن هستید؟
        </span>
        <div className="flex flex-col items-start justify-center gap-2 w-full my-3">
          <label className="text-[#5F5F61] text-xs">علت رد دانشجو</label>
          <textarea
            ref={textboxContainer}
            className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] w-full border-2 border-[#E6E6E6] rounded-xl min-h-[100px] max-h-[200px] text-sm placeholder:text-xs p-2 outline-none"
            placeholder="توضیحات . . ."
            name="reject"
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          <LoadingButton
            onClickHandler={() =>
              closeModalHandler(true, textboxContainer.current?.value)
            }
            // buttonClass="text-white"
            paddingClass="px-4 py-2"
            mainBgColor="#E73F3F"
            hoverBgColor="#fff"
            isLoading={isLoading}
          >
            رد کردن
          </LoadingButton>
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

export default RejectStudentModal;
