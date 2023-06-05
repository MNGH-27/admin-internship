import React from "react";

//component
import ModalWrapper from "../../../common/modalWrapper";

//interface
import { typeCompanyListItem } from "../../../../types/companyType";
interface CompanyDescModalProps {
  isShowModal: boolean;
  onCloseModalHandler: () => void;
  company: typeCompanyListItem;
}

const CompanyDescModal: React.FC<CompanyDescModalProps> = ({
  isShowModal,
  onCloseModalHandler,
  company,
}) => {
  return (
    <ModalWrapper
      onCloseModal={onCloseModalHandler}
      isShowedModal={isShowModal}
    >
      <div>
        <p className="text-xl mb-7">
          مشاهده ی اطلاعات بیشتر شرکت{" "}
          <span className="font-semibold">{company.company_name}</span>
        </p>
        <div className="flex gap-5 flex-col w-full">
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">رئیس شرکت</span>
            <span className="">{company.company_boss_name}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شماره تلفن</span>
            <span className="">{company.company_phone}</span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شماره ثبت شرکت</span>
            <span className="">
              {company.company_registry
                ? company.company_registry
                : "مقداری یافت نشد"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">شناسه شرکت</span>
            <span className="">
              {" "}
              {company.company_number
                ? company.company_number
                : "مقداری یافت نشد"}
            </span>
          </div>
          <div className="flex items-center justify-between gap-1.5 font-medium">
            <span className="text-gray-400">نمره شرکت</span>
            <span className="">
              {" "}
              {company.company_grade
                ? company.company_grade
                : "مقداری یافت نشد"}
            </span>
          </div>
          <div className="flex flex-col items-start justify-between gap-1.5 font-medium max-w-[500px]">
            <span className="text-gray-400">توضیحات شرکت</span>
            <span className="">
              {company.caption ? company.caption : "مقداری یافت نشد"}
            </span>
          </div>
        </div>
        <button
          onClick={onCloseModalHandler}
          className="px-7 py-2 rounded-md border-2 mt-10"
        >
          خروج
        </button>
      </div>
    </ModalWrapper>
  );
};

export default CompanyDescModal;
