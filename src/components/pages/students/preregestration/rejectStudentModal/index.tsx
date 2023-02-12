import React from "react";

//component
import ModalWrapper from "../../../../common/modalWrapper";

//svg
import { ReactComponent as CloseSvg } from "./../../../../assets/icons/svg/close-circle.svg";

const RejectStudentModal: React.FC = () => {
  return (
    <ModalWrapper
      isShowedModal={true}
      onCloseModal={() => {
        console.log("hello world");
      }}
    >
      <div className="flex flex-col items-start justify-center gap-3">
        <button>
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
            className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] w-full border-2 border-[#E6E6E6] rounded-xl min-h-[100px] max-h-[200px] text-sm placeholder:text-xs p-2 outline-none"
            placeholder="توضیحات . . ."
            name="reject"
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          <button className="px-4 py-2 rounded-md text-white bg-[#E73F3F] border-2 border-[#E73F3F] hover:text-[#E73F3F] hover:bg-white duration-200">
            رد کردن
          </button>
          <button className="shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] px-4 py-2 rounded-md border-2 border-[#E6E6E6] hover:bg-[#E6E6E6] duration-200">
            بستن
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default RejectStudentModal;
