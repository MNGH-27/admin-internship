import React, { useEffect, useState } from "react";
//react router dom
import { Link, useLocation } from "react-router-dom";

//cookie
import useCookies from "react-cookie/cjs/useCookies";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentItem from "../../../components/pages/students/initialregestration/initialregestrationStudentItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";
import LoadingLayout from "../../../components/common/loadingLayout";
import InitialRegestrationLoadingItem from "../../../components/pages/students/initialregestration/initialRegestrationLoadingItem";

//service
import { GetInitialRegestrationStundets } from "../../../services/student";

//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";

//svg
import { ReactComponent as ArrowBackSvg } from "./../../../assets/icons/svg/arrow-down.svg";

//interface
import {
  typeSingleInitialRegestration,
  typeMeta,
  entranceYearsListItemType,
} from "../../../types";

const tableHeader = [
  {
    title: "#",
    style: "col-span-1 text-center",
  },
  {
    title: "نام",
    style: "col-span-1 text-center",
  },
  {
    title: "نام خانوادگی",
    style: "col-span-1 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "سال ورود",
    style: "col-span-1 text-center",
  },
  {
    title: "شماره ملی",
    style: "col-span-2 text-center",
  },
  {
    title: "شماره تلفن",
    style: "col-span-2 text-center",
  },
];

const StudentInitialRegestration: React.FC = () => {
  //cookies
  const [cookies] = useCookies(["token"]);

  //useLocation
  const location = useLocation();

  //useCustomeSearchParams
  const [searchParams, setSearchParams] = useCustomSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [entranceYears, setEntranceYears] = useState<
    entranceYearsListItemType[]
  >([]);
  const [meta, setMeta] = useState<typeMeta>({
    current_page: 0,
    per_page: 0,
    total_pages: 0,
    total_records: 0,
  });
  const [initialRegestration, setInitialRegestration] = useState<
    typeSingleInitialRegestration[] | []
  >();

  //set vatified value to 0 as not determined in mounting component
  useEffect(() => {
    setSearchParams({
      verified: 0,
    });
  }, []);

  //call on searchParam changes
  useEffect(() => {
    //on search for course after filtering data,
    //check if we have any search params

    //checking that a request has not already been made

    if (isLoading === false && location.search.substring(1).length > 0) {
      asyncGetInitialPreregStudentsList(location.search.substring(1));
    }
  }, [location]);

  const asyncGetInitialPreregStudentsList = async (
    filter: string = ""
  ): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetInitialRegestrationStundets({
        filter,
        token: cookies.token,
      });

      //check response status
      if (response.status === 200) {
        //fetch data successfully
        setInitialRegestration([...response.data.data.students]);
        setEntranceYears([...response.data.data.entrance_years]);
        setMeta({ ...response.data.meta });
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const genarateList = () => {
    //check initial regestration not to be undefined
    if (initialRegestration !== undefined)
      return (
        initialRegestration.length !== 0 &&
        initialRegestration.map((item, index) => (
          <StudentItem key={index} index={index} data={item} />
        ))
      );
  };

  const loadingCard = () => {
    return <InitialRegestrationLoadingItem />;
  };

  return (
    <div className="mb-16 flex items-center justify-center flex-col gap-5">
      <Link
        to={"/students"}
        className="my-5 flex items-center self-start text-white px-4 py-2 bg-blue-700 border-2 border-blue-700 hover:bg-white hover:text-blue-700 duration-200 rounded-md"
      >
        <ArrowBackSvg className="-rotate-90" />
        بازگشت
      </Link>
      <StudentHeader
        title="ثبت نام اولیه ها"
        isLoading={isLoading}
        entranceYears={entranceYears}
        numberOfStudnet={meta.total_records}
        hasSubLink={true}
      />
 
      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        meta={meta}
        hasPagination={true}
      >
        <LoadingLayout
          isLoading={isLoading}
          hasCard={true}
          Card={loadingCard}
          repetitionsNumber={5}
        >
          {genarateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default StudentInitialRegestration;
