import React from "react";
//pdf
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import Form2PDF from "./form2PDF";
//interface
import { typeForm_2 } from "../../../../../types/studentForm";

interface Form2PDFProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  formStage: string;
  data: typeForm_2;
}

const FormPDF: React.FC<Form2PDFProps> = ({
  isShowModal,
  onCloseModal,
  formStage,
  data,
}) => {
  return (
    <ModalWrapper isShowedModal={isShowModal} onCloseModal={onCloseModal}>
      <PDFViewer>
        <Form2PDF data={data} />
      </PDFViewer>
      <PDFDownloadLink
        document={<Form2PDF data={data} />}
        fileName="somename.pdf"
      >
        {({ blob, url, loading, error }) =>
          loading ? `Loading document... ${error}  ` : "Download now!"
        }
      </PDFDownloadLink>
    </ModalWrapper>
  );
};

export default FormPDF;
