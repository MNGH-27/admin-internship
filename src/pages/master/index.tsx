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
//interface
import { typeMasterList } from "../../types/masterType";
import { typeMeta } from "../../types";
interface typeMasterData {
  isLoading: boolean;
  data?: typeMasterList[];
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
          data: [...response.data.data],
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
    return data.data?.map((singleMaster, index) => (
      <tr className="grid grid-cols-12 w-full text-center py-5 border-b">
        <td className="col-span-1">{index + 1}</td>
        <td className="col-span-1">{singleMaster.first_name}</td>
        <td className="col-span-2">{singleMaster.last_name}</td>
        <td className="col-span-2">{singleMaster.national_code}</td>
        <td className="col-span-2">{singleMaster.faculty}</td>
        <td className="col-span-2">{singleMaster.phone}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="my-10">
        <span className="text-2xl font-semibold">
          لیست اساتید کارآموزی دانشگاه
        </span>
        <div className="my-10 flex items-center justify-between w-full">
          <span>فیلتر. . . </span>
          <Link
            to={"/teachers/add"}
            className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 duration-200 text-lg px-7 py-3 rounded-md"
          >
            اضافه کردن استاد
          </Link>
        </div>
      </div>
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
