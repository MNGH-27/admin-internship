import React from "react";

//interface
interface ModalWrapperProps {
  onCloseModal: () => void;
  modalClass?: string;
  isShowedModal: boolean;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  isShowedModal,
  modalClass,
  onCloseModal,
}) => {
  return (
    <div
      onClick={onCloseModal}
      className="bg-black bg-opacity-30 fixed top-0 right-0 w-full h-full flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${modalClass} ${
          isShowedModal ? "top-0" : "top-7"
        } relative duration-500 bg-white rounded-md p-6 mx-2`}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
