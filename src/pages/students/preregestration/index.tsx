import React, { useEffect, useState } from "react";
// useCookies
import { useCookies } from "react-cookie";
// react-router
import { useLocation, useSearchParams } from "react-router-dom";
//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";
//component
import LoadingLayout from "../../../components/common/loadingLayout";
import TableWrapper from "../../../components/common/tableWrapper";
import InitialRegestrationLoadingItem from "../../../components/pages/students/initialregestration/initialRegestrationLoadingItem";
import PreregestrationStudentItem from "../../../components/pages/students/preregestration/preregestrationStudentItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";
//services
import { GetPereregestrationStudents } from "../../../services/student";
// types
import {
  typeMeta,
  entranceYearsListItemType,
  facultiesListItemType,
  typeSinglePreRegestration,
} from "../../../types";

interface typePreregestrationData {
  isLoading: boolean;
  headerData?: {
    entranceYear: entranceYearsListItemType[];
    faculties: facultiesListItemType[];
  };
  meta?: typeMeta;
  student?: typeSinglePreRegestration[];
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
    style: "col-span-1 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "نام شرکت",
    style: "col-span-1 text-center",
  },
  {
    title: "دانشکده",
    style: "col-span-2 text-center",
  },
  {
    title: "ترم",
    style: "col-span-1 text-center",
  },
  {
    title: "واحد های پاس شده",
    style: "col-span-1 text-center",
  },
  {
    title: "جزئیات",
    style: "col-span-2 text-center",
  },
];

const StudentPreregestration: React.FC = () => {
  const [cookies] = useCookies(["token"]);

  const [searchParams, setSearchParams] = useCustomSearchParams();

  const location = useLocation();

  const [preRegestrationData, setPreregestrationData] =
    useState<typePreregestrationData>({
      isLoading: false,
    });

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

    if (
      preRegestrationData.isLoading === false &&
      location.search.substring(1).length > 0
    ) {
      aysncGetPereregestrationStudents(location.search.substring(1));
    }
  }, [location]);

  const aysncGetPereregestrationStudents = async (
    filter: string = ""
  ): Promise<void> => {
    setPreregestrationData({
      isLoading: true,
    });
    try {
      const response = await GetPereregestrationStudents({
        filter,
        token: cookies.token,
      });

      if (response.status === 200) {
        setPreregestrationData({
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
    setPreregestrationData((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };
  const genarateList = () => {
    if (!preRegestrationData.student) return;

    if (preRegestrationData.student.length === 0) {
      return (
        <p className="text-red-600 text-lg font-semibold text-center">
          لیست خالی است
        </p>
      );
    }
    return preRegestrationData.student.map((item, index) => (
      <PreregestrationStudentItem
        key={index}
        index={index}
        data={item}
        refreshList={aysncGetPereregestrationStudents}
      />
    ));
  };

  const loadingCard = () => {
    return <InitialRegestrationLoadingItem />;
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader
        isLoading={preRegestrationData.isLoading}
        entranceYears={preRegestrationData.headerData?.entranceYear}
        facultiesList={preRegestrationData.headerData?.faculties}
        numberOfStudnet={preRegestrationData?.meta?.total_records}
        title="پیش ثبت نام ها"
        hasSubLink={true}
      />

      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        hasPagination={true}
        meta={preRegestrationData.meta}
      >
        <LoadingLayout
          isLoading={preRegestrationData.isLoading}
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

export default StudentPreregestration;
