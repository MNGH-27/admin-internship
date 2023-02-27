import React, { useEffect, useState } from "react";
//react router dom
import { useLocation } from "react-router-dom";
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
//interface
import { typeSingleInitialRegestration, typeMeta } from "../../../types";

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

  const [isLoading, setIsLoading] = useState(true);
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
    //on search for course after filtering data,
    //check if we have any search params
    if (location.search.length > 0) {
      asyncGetInitialPreregStudentsList(location.search.substring(1));
    } else {
      //we don't have any search params => empty search
      asyncGetInitialPreregStudentsList("");
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
        setInitialRegestration([...response.data.data]);
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
          <StudentItem
            key={index}
            index={index}
            data={item}
            refreshList={asyncGetInitialPreregStudentsList}
          />
        ))
      );
  };

  const loadingCard = () => {
    return <InitialRegestrationLoadingItem />;
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader
        title="ثبت نام اولیه ها"
        subLink="initialregestration"
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
