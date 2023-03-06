import React from "react";

//useSearchParams
import { useCustomSearchParams } from "../../../../../../hooks/useCustomSearchParams";

//moment
import moment from "moment-jalaali";

//svg
import { ReactComponent as ArrowBackSvg } from "./../../../../../../assets/icons/svg/arrow-circle-right.svg";
import { ReactComponent as ArrowDownSvg } from "./../../../../../../assets/icons/svg/arrow-down-circle.svg";
import { ReactComponent as UserTickSvg } from "./../../../../../../assets/icons/svg/user-tick.svg";
import { ReactComponent as UserRemoveSvg } from "./../../../../../../assets/icons/svg/user-remove.svg";
import { ReactComponent as UserEditSvg } from "./../../../../../../assets/icons/svg/user-edit.svg";

// interface
import { Link } from "react-router-dom";
interface SingleFormContextHeaderProps {
  formStatus?: string;
  title: string;
}

const SingleFormContextHeader: React.FC<SingleFormContextHeaderProps> = ({
  formStatus,
  title,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const [searchParams] = useCustomSearchParams();

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <Link
        to={`/students/form/${searchParams.studentId}`}
        className="self-end py-2 px-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
      >
        <ArrowBackSvg />
        بازگشت
      </Link>
      <div className="w-full flex flex-col items-start justify-center gap-7 mb-16 mt-7">
        <div>
          {formStatus === "3" ? (
            <span className="flex items-center font-semibold gap-2 text-red-700">
              <UserRemoveSvg />
              دانشجو در وضعیت رد شده قرار دارد
            </span>
          ) : formStatus === "2" ? (
            <span className="flex items-center font-semibold gap-2 text-green-700">
              <UserTickSvg />
              دانشجو در وضعیت تایید شده قرار دارد
            </span>
          ) : (
            <span className="flex items-center font-semibold gap-2 text-gray-400">
              <UserEditSvg />
              وضعیت دانشجو مشخص نشده است
            </span>
          )}
        </div>
        <div className="flex items-start sm:items-center justify-start flex-col sm:flex-row w-full gap-2">
          <span className="text-[#101114] text-xl font-semibold">{title}</span>
          <button className="px-5 py-1 border-2 border-[#0081FB] flex items-center justify-center gap-1 text-white bg-[#0081FB] hover:text-[#0081FB] hover:bg-white duration-200 rounded-full">
            <ArrowDownSvg />
            دانلود فرم
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFormContextHeader;
