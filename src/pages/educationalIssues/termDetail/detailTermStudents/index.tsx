import React, { useEffect, useState, useRef } from "react";

//react toastify
import { toast } from "react-toastify";

//moment
import moment from "moment-jalaali";

//cookies
import { useCookies } from "react-cookie";

//react router dom
import { useParams, useLocation, Link } from "react-router-dom";

//hooks
import { useCustomSearchParams } from "../../../../hooks/useCustomSearchParams";

//service
import {
  GetSingleTermStudentsList,
  GetSingleTerm,
} from "../../../../services/educationalIssues";

//component
import TableWrapper from "../../../../components/common/tableWrapper";
import LoadingLayout from "../../../../components/common/loadingLayout";

//svg
import { ReactComponent as SearchSvg } from "./../../../../assets/icons/svg/search-normal.svg";

//interface
import { typeTermsListItem } from "../../../../types/terms";
import { typeMeta } from "../../../../types";

interface typeSingleStudent {
  first_name: string;
  id: number;
  last_name: string;
  national_code: string;
  student_number: number;
}

//staticLost
const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "نام",
    style: "col-span-3",
  },
  {
    title: "نام خانوادگی",
    style: "col-span-3",
  },
  {
    title: "شماره ملی",
    style: "col-span-3",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2",
  },
];

const DetailTermStudentList = () => {
  moment.loadPersian({ usePersianDigits: true });

  const searchFeildContainer = useRef<HTMLInputElement | null>(null);

  //searchParams
  const [searchParams, setSearchParams] = useCustomSearchParams();

  //location
  const location = useLocation();

  //token
  const [cookies] = useCookies(["token"]);

  //get params
  const { id } = useParams();

  const [termData, setTermData] = useState<typeTermsListItem>({
    end_date: new Date(),
    id: 0,
    masters: 0,
    name: "",
    start_date: new Date(),
    students: 0,
  });

  const [student, setStudent] = useState<{
    isLoading: boolean;
    meta?: typeMeta;
    data?: typeSingleStudent[];
  }>({
    isLoading: false,
  });

  useEffect(() => {
    if (id) {
      httpGetStudentsList();
      httpGetSingleTerm();
    }
  }, []);

  //call on searchParam changes
  useEffect(() => {
    //on search for course after filtering data,
    //check if we have any search params

    //checking that a request has not already been made

    if (student.isLoading === false) {
      httpGetStudentsList(location.search.substring(1));
    }
  }, [location]);

  const httpGetStudentsList = async (filter: string = "") => {
    if (!id) return;

    setStudent({
      isLoading: true,
    });

    try {
      const response = await GetSingleTermStudentsList({
        token: cookies.token,
        termId: id,
        filter: filter,
      });

      if (response.status === 200) {
        setStudent({
          isLoading: false,
          data: [...response.data.data],
          meta: { ...response.data.meta },
        });
      } else {
        toast.error("در دریافت دیتا ی دانشجویان مشکلی رخ داده است");
      }
    } catch (error) {
      console.log(error);
    }

    setStudent((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const httpGetSingleTerm = async () => {
    //check if we have id
    if (!id) return;

    try {
      const response = await GetSingleTerm({
        token: cookies.token,
        termId: id,
      });
      if (response.status === 200) {
        setTermData({
          ...response.data.data,
        });
      } else {
        toast.error("دریافت داده ی ترم ناموفق بود");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const generateList = () => {
    if (!student.data) return;

    if (student.data.length !== 0) {
      return student.data.map((singleStudent, index) => (
        <tr
          key={singleStudent.id}
          className="w-full grid grid-cols-12 text-center py-5 border-b gap-5"
        >
          <td className="col-span-1">{index + 1}</td>
          <td className="col-span-3">{singleStudent.first_name}</td>
          <td className="col-span-3">{singleStudent.last_name}</td>
          <td className="col-span-3">{singleStudent.national_code}</td>
          <td className="col-span-2">{singleStudent.student_number}</td>
        </tr>
      ));
    }
  };

  const loadingCard = () => {
    return (
      <tr className="w-full grid grid-cols-12 py-5 border-b gap-5">
        <td className="col-span-1 w-full h-7 bg-gray-400 rounded-md "></td>
        <td className="col-span-3 w-full h-7 bg-gray-400 rounded-md "></td>
        <td className="col-span-3 w-full h-7 bg-gray-400 rounded-md "></td>
        <td className="col-span-3 w-full h-7 bg-gray-400 rounded-md "></td>
        <td className="col-span-2 w-full h-7 bg-gray-400 rounded-md "></td>
      </tr>
    );
  };

  return (
    <div className="my-10">
      <div className="mb-10">
        <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-5">
          <p className="text-3xl font-semibold mb-7">
            لیست دانشجویان ترم {termData.name}
          </p>
          <Link
            className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg border-2 border-blue-700 hover:bg-white hover:text-blue-700 duration-200"
            to={"/educational-issues/terms-detail"}
          >
            بازگشت
          </Link>
        </div>
        <div className="mb-7">
          <p className="text-xl font-medium mb-2">اطلاعات ترم</p>
          <div className="flex items-center justify-start gap-2">
            <span>
              تاریخ شروع : {moment(termData.start_date).format("jYYYY/jMM/jDD")}
            </span>
            <span>
              تاریخ پایان : {moment(termData.end_date).format("jYYYY/jMM/jDD")}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-start gap-5">
          <div className="flex flex-col items-start gap-1">
            <label className="text-lg font-medium">جستجو</label>
            <input
              ref={searchFeildContainer}
              className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
              placeholder={"نام سرترم . . ."}
              type="text"
            />
          </div>
          <button
            onClick={() => {
              setSearchParams({
                name: searchFeildContainer.current?.value,
              });
            }}
            className="px-6 py-2 flex items-center justify-center gap-2 rounded-xl bg-[#2080F6] text-white border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
          >
            <SearchSvg />
            جستجو
          </button>
        </div>
      </div>
      <TableWrapper
        hasPagination={true}
        minSize="min-w-[900px]"
        tableHeader={tableHeader}
        meta={student.meta}
      >
        <LoadingLayout
          isLoading={student.isLoading}
          Card={loadingCard}
          hasCard={true}
          repetitionsNumber={5}
        >
          {generateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default DetailTermStudentList;
