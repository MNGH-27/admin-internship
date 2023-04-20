import React, { useState } from "react";

//component
import AddAndEditFacultyModal from "../addAndEditFacultyModal";

//svg
import { ReactComponent as DeleteSvg } from "./../../../../../assets/icons/svg/user-remove.svg";
import { ReactComponent as EditSvg } from "./../../../../../assets/icons/svg/user-edit.svg";

//interface
import { facultiesListItemType } from "../../../../../types";
import DeleteFacultyModal from "../deleteFacultyModal";
interface FacultyCardProps {
  index: number;
  singleFaculty: facultiesListItemType;
}

const FacultyCard: React.FC<FacultyCardProps> = ({ index, singleFaculty }) => {
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <tr className="w-full font-medium grid grid-cols-12 text-center py-5 border-b">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-3">{singleFaculty.name}</td>
        <td className="col-span-8 flex items-center justify-end gap-5 mx-3">
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
        <AddAndEditFacultyModal
          isShow={isShowEditModal}
          modalType="edit"
          onCloseModal={() => setIsShowEditModal(false)}
          data={singleFaculty}
        />
      )}
      {isShowDeleteModal && (
        <DeleteFacultyModal
          isShow={isShowDeleteModal}
          data={singleFaculty}
          onCloseModal={() => setIsShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default FacultyCard;
