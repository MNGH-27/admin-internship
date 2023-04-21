import React from "react";

//moment
import moment from "moment-jalaali";

//interface
import { typeTermsListItem } from "../../../../../types/terms";
import { Link } from "react-router-dom";

interface TermDetailCardProps {
  index: number;
  singleTerm: typeTermsListItem;
}

const TermDetailCard: React.FC<TermDetailCardProps> = ({
  index,
  singleTerm,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  return (
    <>
      <tr className="w-full grid grid-cols-12 gap-5 py-5 border-b text-center">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-3">{singleTerm.name}</td>
        <td className="col-span-2">
          {moment(singleTerm.start_date).format("jYYYY/jMM/jDD")}
        </td>
        <td className="col-span-2">
          {moment(singleTerm.end_date).format("jYYYY/jMM/jDD")}
        </td>
        <td className="col-span-2 flex flex-col items-center justify-center gap-1.5">
          {singleTerm.students}
          <Link
            to={`/educational-issues/terms-detail/student/${singleTerm.id}`}
          >
            مشاهده لیست
          </Link>
        </td>
        <td className="col-span-2 flex flex-col items-center justify-center gap-1.5">
          {singleTerm.masters}
          <Link to={`/educational-issues/terms-detail/master/${singleTerm.id}`}>
            مشاهده لیست
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TermDetailCard;
