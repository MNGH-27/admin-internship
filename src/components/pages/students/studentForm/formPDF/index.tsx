import React, { useRef } from "react";

//react to pdf
import ReactToPrint from "react-to-print";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import Form2PDF from "./form2PDF";
//interface
import { typeForm_2 } from "../../../../../types/studentForm";

interface Form2PDFProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  formStage: string;
  data: any;
}

const FormPDF: React.FC<Form2PDFProps> = ({
  isShowModal,
  onCloseModal,
  formStage,
  data,
}) => {
  const formContainer = useRef<HTMLDivElement>(null);

  return (
    <ModalWrapper isShowedModal={isShowModal} onCloseModal={onCloseModal}>
      <Form2PDF data={data} />
      {formContainer && (
        <ReactToPrint
          trigger={() => <button>Print this!</button>}
          content={() => formContainer.current}
        />
      )}
    </ModalWrapper>
  );
};

export default FormPDF;
