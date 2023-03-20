import React, { useState } from "react";

//react router dom
import { useNavigate, Link } from "react-router-dom";

//cookies
import { useCookies } from "react-cookie";

//service
import { DeleteMaster } from "../../../../services/masters";

//svg
import { ReactComponent as EditSvg } from "./../../../../assets/icons/svg/user-edit.svg";
import { ReactComponent as DeleteSvg } from "./../../../../assets/icons/svg/user-remove.svg";

//interfaces
import { typeMasterList } from "../../../../types/masterType";
import DeleteMasterModal from "../deleteMasterModal";
import { toast } from "react-toastify";

interface MasterItemProps {
  data: typeMasterList;
  index: number;
}

interface typeDeleteModal {
  isShow: boolean;
  isBtnLoading: boolean;
  data?: typeMasterList;
}

const MasterItem: React.FC<MasterItemProps> = ({ data, index }) => {
  const navigate = useNavigate();

  const [cookies] = useCookies(["token"]);

  const [deleteModal, setDeleteModal] = useState<typeDeleteModal>({
    isShow: false,
    isBtnLoading: false,
  });

  const onCLoseDeleteModalHandler = (
    reqCondition: boolean = false,
    _id?: number
  ) => {
    if (!reqCondition) {
      setDeleteModal({
        isShow: false,
        isBtnLoading: false,
      });
      return;
    }

    if (_id) asyncDeleteMaster(_id);
  };

  const asyncDeleteMaster = async (id: number) => {
    setDeleteModal({
      isShow: true,
      isBtnLoading: true,
    });
    try {
      const response = await DeleteMaster({
        token: cookies.token,
        id,
      });

      if (response.status === 200) {
        toast.success("استاد با موفقیت حذف شد");
        navigate(0);
      } else {
        toast.error("حذف استاد ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
    setDeleteModal({
      isShow: false,
      isBtnLoading: false,
    });
  };

  return (
    <>
      <tr className="grid grid-cols-12 w-full text-center py-5 border-b">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{data.first_name}</td>
        <td className="col-span-2">{data.last_name}</td>
        <td className="col-span-2">{data.national_code}</td>
        <td className="col-span-2">{data.faculty}</td>
        <td className="col-span-2">{data.phone}</td>
        <td className="col-span-1">{data.student_count}</td>
        <td className="col-span-1 flex items-center justify-around gap-2">
          <Link
            to={`/teachers/singlemaster?status=edit&master_id=${data.id}`}
            className="text-yellow-600 hover:text-yellow-800 duration-200"
          >
            <EditSvg />
          </Link>
          <button
            onClick={() =>
              setDeleteModal({
                isShow: true,
                isBtnLoading: false,
              })
            }
            className="text-red-600 hover:text-red-800 duration-200"
          >
            <DeleteSvg />
          </button>
        </td>
      </tr>

      {deleteModal.isShow && (
        <DeleteMasterModal
          isShowModal={deleteModal.isShow}
          master={data}
          onCloseModalHandler={onCLoseDeleteModalHandler}
          isBtnLoading={deleteModal.isBtnLoading}
        />
      )}
    </>
  );
};

export default MasterItem;
