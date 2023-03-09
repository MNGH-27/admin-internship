import React, { useEffect, useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//modal
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingLayout from "../../../../common/loadingLayout";

//service
import { GetStudentPreRegestrationDescription } from "../../../../../services/student";

//interface
interface DescModalProps {
  isShow: boolean;
  studentId: number;
  onCloseModal: () => void;
}

const ModalDescriptionPreregestration: React.FC<DescModalProps> = ({
  isShow,
  onCloseModal,
  studentId,
}) => {
  const [cookies] = useCookies(["token"]);

  const [description, setDescription] = useState({
    isLoading: true,
    data: {},
  });

  useEffect(() => {
    asyncGetDescription();
  }, []);

  const asyncGetDescription = async () => {
    try {
      const response = await GetStudentPreRegestrationDescription({
        student_id: studentId,
        token: cookies.token,
      });

      console.log("response :", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ModalWrapper isShowedModal={isShow} onCloseModal={onCloseModal}>
      <LoadingLayout isLoading={description.isLoading}>
        <div></div>
      </LoadingLayout>
    </ModalWrapper>
  );
};

export default ModalDescriptionPreregestration;
