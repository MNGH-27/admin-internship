import React, { useState, useEffect } from "react";

//moment
import moment from "moment-jalaali";

//cookies
import { useCookies } from "react-cookie";

//hook
import { useCustomSearchParams } from "../../../../../../../hooks/useCustomSearchParams";

//service
import { GetSingleWeekOfForm } from "../../../../../../../services/student";

//component
import ModalWrapper from "../../../../../../common/modalWrapper";
import LoadingLayout from "../../../../../../common/loadingLayout";
import TableWrapper from "../../../../../../common/tableWrapper";

//interface
interface SingleWeekModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  weekId: number;
}

const tableHeader = [
  { title: "تاریخ", style: "col-span-2" },
  { title: "توضیح", style: "col-span-8" },
];

const SingleWeekModal: React.FC<SingleWeekModalProps> = ({
  isShowModal,
  onCloseModal,
  weekId,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const [cookies] = useCookies(["token"]);

  const [searchParam] = useCustomSearchParams();

  const [singleWeek, setSingleWeek] = useState<{
    isLoading: boolean;
    reports?: {
      date: Date;
      description: string;
    }[];
  }>({
    isLoading: true,
  });

  useEffect(() => {
    asyncGetSingleWeek();
  }, []);

  const asyncGetSingleWeek = async () => {
    setSingleWeek({
      isLoading: true,
    });
    try {
      const response = await GetSingleWeekOfForm({
        token: cookies.token,
        formId: weekId,
        id: searchParam.studentId,
      });

      if (response.status === 200) {
        setSingleWeek({
          isLoading: true,
          reports: [...response.data.data.reports],
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }

    setSingleWeek((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const generateWeekReport = () => {
    if (!singleWeek.reports) return;

    if (singleWeek.reports.length === 0) {
      return (
        <p className="text-red-700 text-lg font-semibold text-center py-2">
          لیست گزارشات خالی است
        </p>
      );
    }

    return singleWeek.reports.map((singleReport, index) => (
      <tr
        key={index}
        className="grid grid-cols-12 w-full py-2 border-b items-center text-center"
      >
        <td className="col-span-2">
          {moment(singleReport.date).format("jDD jMMMM jYYYY")}
        </td>
        <td className="col-span-8">{singleReport.description}</td>
        <td className="flex items-center justify-center gap-2 text-white">
          <button className="bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700 px-2 py-1 rounded-md text-sm duration-200">
            تایید
          </button>
          <button className="bg-red-700 border-2 border-red-700 hover:bg-white hover:text-red-700 px-2 py-1 rounded-md text-sm duration-200">
            رد
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <ModalWrapper
      modalClass="w-full sm:w-3/4 !p-3"
      isShowedModal={isShowModal}
      onCloseModal={onCloseModal}
    >
      <LoadingLayout isLoading={singleWeek.isLoading}>
        <p className="text-2xl font-semibold mb-6">برنامه هفته ({weekId})</p>
        <TableWrapper
          hasPagination={false}
          tableHeader={tableHeader}
          minSize="min-w-[600px]"
        >
          {generateWeekReport()}
        </TableWrapper>
      </LoadingLayout>
    </ModalWrapper>
  );
};

export default SingleWeekModal;
