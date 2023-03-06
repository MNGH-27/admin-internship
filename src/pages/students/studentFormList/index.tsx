import React, { useState, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//react-router-dom
import { useLocation, Link } from "react-router-dom";

//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentFormListItem from "../../../components/pages/students/studentForm/studentFormListItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";
import LoadingLayout from "../../../components/common/loadingLayout";
import FormListLoadingItem from "../../../components/pages/students/studentForm/formlistLoadingItem";
//service
import { GetStudentsFormList } from "../../../services/student";
//Svg
import { ReactComponent as ArrowBackSvg } from "./../../../assets/icons/svg/arrow-down.svg";
//interface
import { typeSingleStudentForm } from "../../../types";
import {
  typeMeta,
  entranceYearsListItemType,
  facultiesListItemType,
} from "../../../types";

interface typefromlist {
  isLoading: boolean;
  headerData?: {
    entranceYear: entranceYearsListItemType[];
    faculties: facultiesListItemType[];
  };
  meta?: typeMeta;
  student?: typeSingleStudentForm[];
}

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
    style: "col-span-2 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "دانشکده",
    style: "col-span-2 text-center",
  },
  {
    title: "سال ورود به دانشگاه",
    style: "col-span-2 text-center",
  },
  {
    title: "جزئیات",
    style: "col-span-2 text-center",
  },
];

const StudentFormList: React.FC = () => {
  const location = useLocation();

  const [cookies] = useCookies(["token"]);

  const [data, setData] = useState<typefromlist>({
    isLoading: false,
  });

  const [searchParam, setSearchParams] = useCustomSearchParams();

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

    if (data.isLoading === false && location.search.substring(1).length > 0) {
      asyncGetStudentsFromList(location.search.substring(1));
    }
  }, [location]);

  const asyncGetStudentsFromList = async (
    filter: string = ""
  ): Promise<void> => {
    setData({
      isLoading: true,
    });
    try {
      const response = await GetStudentsFormList({
        token: cookies.token,
        filter,
      });
      if (response.status === 200) {
        setData({
          isLoading: true,
          headerData: {
            entranceYear: [...response.data.data.entrance_years],
            faculties: [...response.data.data.faculties],
          },
          meta: {
            ...response.data.meta,
          },
          student: [...response.data.data.students],
        });
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setData((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const genarateList = () => {
    if (data?.student) {
      return data.student.map((item, index) => (
        <StudentFormListItem key={index} index={index} data={item} />
      ));
    }
  };

  return (
    <div className="my-10 flex items-center justify-center flex-col gap-5">
      <Link
        to={`/students`}
        className="self-start py-2 px-5 my-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
      >
        <ArrowBackSvg className="-rotate-90" />
        بازگشت
      </Link>
      <StudentHeader
        numberOfStudnet={data?.meta?.total_records}
        isLoading={data.isLoading}
        title="فرم ها"
        hasSubLink={false}
        entranceYears={data.headerData?.entranceYear}
        facultiesList={data.headerData?.faculties}
      />

      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        hasPagination={true}
        meta={data?.meta}
      >
        <LoadingLayout
          isLoading={data.isLoading}
          hasCard={true}
          repetitionsNumber={5}
          Card={() => <FormListLoadingItem />}
        >
          {genarateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default StudentFormList;
