import React, { useEffect, useState } from "react";
//react router dom
import { useLocation, useNavigate } from "react-router-dom";

//cookie
import useCookies from "react-cookie/cjs/useCookies";

//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentItem from "../../../components/pages/students/initialregestration/initialregestrationStudentItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";
import LoadingLayout from "../../../components/common/loadingLayout";
import InitialRegestrationLoadingItem from "../../../components/pages/students/initialregestration/initialRegestrationLoadingItem";

//service
import { GetInitialRegestrationStundets } from "../../../services/student";

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

  //useLocation, useNavigate
  const location = useLocation();
  const navigate = useNavigate();
  //searchParams
  const [searchParam] = useCustomSearchParams();

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

  //call on searchParam changes
  useEffect(() => {
    /**
     * !check searchParams to be correct
     * *searchParam should have verified
     */
    //check status of verified status
    if (
      !searchParam.verified ||
      searchParam.verified > 2 ||
      searchParam.verified < 0
    ) {
      //dont have verified , add verified to route and replace
      navigate("/students/initialregestration?verified=0", { replace: true });
      //exit from useEffect
      return;
    }

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
    if (!initialRegestration) return;

    if (initialRegestration.length === 0) {
      return (
        <p className="text-red-600 text-lg font-semibold text-center">
          لیست خالی است
        </p>
      );
    }
    return initialRegestration.map((item, index) => (
      <StudentItem key={index} index={index} data={item} />
    ));
  };

  const loadingCard = () => {
    return <InitialRegestrationLoadingItem />;
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
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
