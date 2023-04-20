import React, { useEffect, useState } from "react";

//cookies
import { useCookies } from "react-cookie";

//modal
import ModalWrapper from "../../../../common/modalWrapper";
import LoadingLayout from "../../../../common/loadingLayout";

//service
import { GetStudentPreRegestrationDescription } from "../../../../../services/student";
import { toast } from "react-toastify";

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

  const [description, setDescription] = useState<{
    isLoading: boolean;
    data: any;
  }>({
    isLoading: true,
    data: {},
  });

  useEffect(() => {
    asyncGetDescription();
  }, []);

  const asyncGetDescription = async () => {
    setDescription({
      isLoading: true,
      data: {},
    });
    try {
      const response = await GetStudentPreRegestrationDescription({
        student_id: studentId,
        token: cookies.token,
      });

      if (response.status === 200) {
        toast.success("دریافت دیتا موفقیت آمیز بود");
        setDescription({
          isLoading: true,
          data: { ...response.data.data },
        });
      } else {
        toast.error("دریافت دیتا با مشکل موجه شده");
      }
    } catch (error) {
      console.log(error);
    }
    setDescription((prevData) => ({
      ...prevData,
      isLoading: false,
    }));
  };

  return (
    <ModalWrapper isShowedModal={isShow} onCloseModal={onCloseModal}>
      <LoadingLayout isLoading={description.isLoading}>
        <div className="flex flex-col items-start justify-center gap-7">
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold">مشخصات کارآموز</span>
            <p className="">
              <span className="font-medium text-lg">
                {description.data.first_name}
              </span>{" "}
              <span className="font-medium text-lg">
                {description.data.last_name}
              </span>{" "}
              با شماره دانشجویی{" "}
              <span className="font-medium text-lg">
                {description.data.student_number}
              </span>{" "}
              از{" "}
              <span className="font-medium text-lg">
                {description.data.faculty?.faculty_name}
              </span>{" "}
              با مدرک{" "}
              <span className="font-medium text-lg">
                {description.data.degree?.degree}
              </span>{" "}
              <span className="font-medium text-lg">
                {description.data.passed_units}
              </span>{" "}
              واحد را گذرانده است و در خواست اخذ درس با استاد{" "}
              <span className="font-medium text-lg">
                {description.data.master?.name}
              </span>{" "}
              را دارد
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <span className="text-lg font-semibold">مشخصات کارآموزی</span>
            <p>
              نوع کارآموزی :{" "}
              <span className="font-medium text-lg">
                {description.data.internship?.internship_type}
              </span>
            </p>

            <div className="flex items-center justify-start flex-wrap gap-x-3 gap-y-1">
              <p>
                نام شرکت :{" "}
                <span className="font-medium text-lg">
                  {description.data.company?.name}
                </span>
              </p>
              <p>
                شماره شرکت :{" "}
                <span className="font-medium text-lg">
                  {description.data.company?.number}
                </span>
              </p>
              <p>
                شماره پستی :{" "}
                <span className="font-medium text-lg">
                  {description.data.company?.postal_code}
                </span>
              </p>
              <p>
                نوع شرکت :{" "}
                <span className="font-medium text-lg">
                  {description.data.company?.type}
                </span>
              </p>
              <p>
                آدرس شرکت :{" "}
                <span className="font-medium text-lg">
                  {description.data.company?.address}
                </span>
              </p>
            </div>
          </div>
          <button
            onClick={onCloseModal}
            className="px-8 py-2 border-2 border-gray-400 rounded-md hover:bg-gray-400 duration-200 hover:text-white"
          >
            بستن
          </button>
        </div>
      </LoadingLayout>
    </ModalWrapper>
  );
};

export default ModalDescriptionPreregestration;
