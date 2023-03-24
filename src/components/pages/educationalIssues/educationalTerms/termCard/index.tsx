import React, { useState } from "react";

//moment
import moment from "moment-jalaali";

//component
import AddAndEditTermModal from "../addAndEditTermModal";
import DeleteTermModal from "../deleteTermModal";
//svg
import { ReactComponent as DeleteSvg } from "./../../../../../assets/icons/svg/user-remove.svg";
import { ReactComponent as EditSvg } from "./../../../../../assets/icons/svg/user-edit.svg";

//interface
import { typeTermsListItem } from "../../../../../types/terms";

interface TermCardProps {
  index: number;
  singleTerm: typeTermsListItem;
}

const TermCard: React.FC<TermCardProps> = ({ index, singleTerm }) => {
  moment.loadPersian({ usePersianDigits: true });

  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
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
        <td className="col-span-2">{singleTerm.students}</td>
        <td className="col-span-2 flex items-center justify-around gap-3">
          <button
            onClick={() => setIsShowDeleteModal(true)}
            className="text-red-700 hover:text-red-800 duration-200"
          >
            <DeleteSvg />
          </button>
          <button
            onClick={() => setIsShowEditModal(true)}
            className="text-yellow-700 hover:text-yellow-800 duration-200"
          >
            <EditSvg />
          </button>
        </td>
      </tr>
      {isShowEditModal && (
        <AddAndEditTermModal
          isShow={isShowEditModal}
          modalType="edit"
          onCloseModal={() => setIsShowEditModal(false)}
          data={singleTerm}
        />
      )}

      {isShowDeleteModal && (
        <DeleteTermModal
          isShow={isShowDeleteModal}
          data={singleTerm}
          onCloseModal={() => setIsShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default TermCard;
