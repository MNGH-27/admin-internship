import React, { useRef, useState, useEffect } from "react";

//react router dom
import { useLocation } from "react-router-dom";

//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";

//cookies
import { useCookies } from "react-cookie";

//service
import { GetAllEducationalFacultiesList } from "../../../services/educationalIssues";

//SVG
import { ReactComponent as SearchSvg } from "./../../../assets/icons/svg/search-normal.svg";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import LoadingLayout from "../../../components/common/loadingLayout";
import FacultyCard from "../../../components/pages/educationalIssues/educationalFaculties/facultyCard";
import FacultyCardLoading from "../../../components/pages/educationalIssues/educationalFaculties/facultyLoadingCard";

import AddAndEditFacultyModal from "../../../components/pages/educationalIssues/educationalFaculties/addAndEditFacultyModal";

//interface
import { facultiesListItemType } from "../../../types";
import { typeMeta } from "../../../types";
import { Link } from "react-router-dom";
interface typeFacultyList {
  isLoading: boolean;
  data?: facultiesListItemType[];
  meta?: typeMeta;
}

//static data
const tableHeader = [
  {
    title: "ردیف",
    style: "col-span-1",
  },
  {
    title: "نام دانشکده",
    style: "col-span-3",
  },
];

const Faculties = () => {
  const searchFeildContainer = useRef<HTMLInputElement | null>(null);

  const [searchParams, setSearchParams] = useCustomSearchParams();

  const location = useLocation();

  const [cookies] = useCookies(["token"]);

  const [faculty, setFaculty] = useState<typeFacultyList>({
    isLoading: false,
  });

  const [isShowAddModal, setIsShowAddModal] = useState(false);

  //get searchFeild from searchParam in useEffect
  useEffect(() => {
    //check if searchFeildContainer is validate and if we have name property in searchParam
    if (searchFeildContainer.current && searchParams.name) {
      searchFeildContainer.current.value = searchParams.name;
    }
  }, []);

  //call on searchParam changes
  useEffect(() => {
    //on search for course after filtering data,
    //check if we have any search params

    //checking that a request has not already been made

    if (faculty.isLoading === false) {
      asyncGetAllFaculties(location.search.substring(1));
    }
  }, [location]);

  const asyncGetAllFaculties = async (filter: string = ""): Promise<void> => {
    setFaculty({
      isLoading: true,
    });
    try {
      const response = await GetAllEducationalFacultiesList({
        token: cookies.token,
        filter,
      });

      if (response.status === 200) {
        setFaculty({
          isLoading: true,
          meta: { ...response.data.meta },
          data: [...response.data.data],
        });
      } else {
        //an error occure
      }
    } catch (error) {
      console.log(error);
    }

    setFaculty((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const generateList = () => {
    if (!faculty.data) return;

    return faculty.data.map((singleFaculty, index) => (
      <FacultyCard key={index} index={index} singleFaculty={singleFaculty} />
    ));
  };

  const loadingCard = () => {
    return <FacultyCardLoading />;
  };

  return (
    <div className="my-10">
      <div className="flex flex-col gap-y-5">
        <Link
          to={"/educational-issues"}
          className="w-fit bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 duration-200 text-lg px-7 py-2 rounded-md"
        >
          بازگشت
        </Link>
        <p className="text-3xl font-semibold">لیست دانشکده ها</p>
        <div className="my-5 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-y-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-start gap-5">
            <div className="flex flex-col items-start gap-1">
              <label className="text-lg font-medium">جستجو</label>
              <input
                ref={searchFeildContainer}
                className="placeholder:text-sm p-2 border-2 focus:border-blue-200 duration-200 rounded-md outline-none w-full"
                placeholder={"نام دانشکده . . ."}
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
          <button
            onClick={() => setIsShowAddModal(true)}
            className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 duration-200 text-lg px-7 py-3 rounded-md"
          >
            اضافه کردن دانشکده
          </button>
        </div>
      </div>
      <TableWrapper
        hasPagination={true}
        minSize="min-w-[900px]"
        tableHeader={tableHeader}
        meta={faculty.meta}
      >
        <LoadingLayout
          isLoading={faculty.isLoading}
          Card={loadingCard}
          hasCard={true}
          repetitionsNumber={5}
        >
          {generateList()}
        </LoadingLayout>
      </TableWrapper>
      {isShowAddModal && (
        <AddAndEditFacultyModal
          modalType="add"
          isShow={isShowAddModal}
          onCloseModal={() => setIsShowAddModal(false)}
        />
      )}
    </div>
  );
};

export default Faculties;
