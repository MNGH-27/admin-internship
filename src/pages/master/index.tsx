import React, { useEffect, useState } from "react";

//react router dom
import { useLocation, Link } from "react-router-dom";

//useCookies
import { useCookies } from "react-cookie";

//service
import { GetMastersList } from "../../services/masters";

//component
import TableWrapper from "../../components/common/tableWrapper";
import LoadingLayout from "../../components/common/loadingLayout";
import MasterLoadingItem from "../../components/pages/master/masterLoadingItem";
import MasterListHeader from "../../components/pages/master/masterListHeader";
import MasterItem from "../../components/pages/master/masterItem";
//interface
import { typeMasterList } from "../../types/masterType";
import { typeMeta, facultiesListItemType } from "../../types";
interface typeMasterData {
  isLoading: boolean;
  master?: typeMasterList[];
  faculties?: facultiesListItemType[];
  meta?: typeMeta;
}

const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "نام",
    style: "col-span-1",
  },
  {
    title: "نام خانوادگی",
    style: "col-span-2",
  },
  {
    title: "کد ملی",
    style: "col-span-2",
  },
  {
    title: "دانشکده",
    style: "col-span-2",
  },
  {
    title: "شماره تلفن",
    style: "col-span-2",
  },
  {
    title: "تعداد دانشجو",
    style: "col-span-1",
  },
];

const Master = () => {
  const [cookies] = useCookies(["token"]);

  const location = useLocation();

  const [data, setData] = useState<typeMasterData>({
    isLoading: false,
  });

  //call on searchParam changes
  useEffect(() => {
    //on search for course after filtering data,
    //check if we have any search params

    //checking that a request has not already been made

    if (data.isLoading === false) {
      asyncGetInitialPreregStudentsList(location.search.substring(1));
    }
  }, [location]);

  const asyncGetInitialPreregStudentsList = async (
    filter: string = ""
  ): Promise<void> => {
    setData({
      isLoading: true,
    });

    try {
      const response = await GetMastersList({
        token: cookies.token,
        filter,
      });

      if (response.status === 200) {
        setData({
          isLoading: true,
          master: [...response.data.data.master],
          faculties: [...response.data.data.faculties],
          meta: { ...response.data.meta },
        });
      }
    } catch (error) {
      console.log(error);
    }
    setData((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const generateList = () => {
    return data.master?.map((singleMaster, index) => (
      <MasterItem key={index} data={singleMaster} index={index} />
    ));
  };

  return (
    <div className="my-20">
      <MasterListHeader
        isLoading={data.isLoading}
        facultiesList={data.faculties}
      />

      <TableWrapper
        hasPagination={true}
        meta={data.meta}
        minSize="min-w-[900px]"
        tableHeader={tableHeader}
      >
        <LoadingLayout
          isLoading={data.isLoading}
          hasCard={true}
          Card={() => <MasterLoadingItem />}
          repetitionsNumber={5}
        >
          {generateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default Master;
