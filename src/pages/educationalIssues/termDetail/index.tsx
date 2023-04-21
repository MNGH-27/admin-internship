import React, { useEffect, useState, useRef } from "react";

//react router dom
import { useLocation, Link } from "react-router-dom";

//hooks
import { useCustomSearchParams } from "../../../hooks/useCustomSearchParams";

//cookies
import { useCookies } from "react-cookie";

//service
import { GetAllEducationalTerms } from "../../../services/educationalIssues";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import LoadingLayout from "../../../components/common/loadingLayout";
import DetailTermLoadingCard from "../../../components/pages/educationalIssues/termDetail/detailTermLoadingCard";
import TermDetailCard from "../../../components/pages/educationalIssues/termDetail/termDetailCard";

//SVG
import { ReactComponent as SearchSvg } from "./../../../assets/icons/svg/search-normal.svg";

//interface
import { typeMeta } from "../../../types";
import { typeTermsListItem } from "../../../types/terms";

interface typeTermData {
  isLoading: boolean;
  data?: typeTermsListItem[];
  meta?: typeMeta;
}

//staticData
const tableHeader = [
  { title: "ردیف", style: "col-span-1" },
  { title: "نام", style: "col-span-3" },
  { title: "تاریخ شروع", style: "col-span-2" },
  { title: "تاریخ پایان", style: "col-span-2" },
  { title: "تعداد دانشجو", style: "col-span-2" },
  { title: "تعداد استاد", style: "col-span-2" },
];

const TermsDetail = () => {
  const searchFeildContainer = useRef<HTMLInputElement | null>(null);

  const [searchParams, setSearchParams] = useCustomSearchParams();

  const [cookies] = useCookies(["token"]);

  const location = useLocation();

  const [terms, setTerms] = useState<typeTermData>({
    isLoading: false,
  });

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

    if (terms.isLoading === false) {
      asyncGetAllTerms(location.search.substring(1));
    }
  }, [location]);

  const asyncGetAllTerms = async (filter: string = ""): Promise<void> => {
    setTerms({
      isLoading: true,
    });

    try {
      const response = await GetAllEducationalTerms({
        token: cookies.token,
        filter,
      });
      if (response.status === 200) {
        setTerms({
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

    setTerms((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  const generateList = () => {
    if (!terms.data) return;

    return terms.data.map((singleTerm, index) => (
      <TermDetailCard key={index} index={index} singleTerm={singleTerm} />
    ));
  };

  const loadingCard = () => {
    return <DetailTermLoadingCard />;
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
        <p className="text-3xl font-semibold">لیست سر ترم ها</p>
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
        meta={terms.meta}
      >
        <LoadingLayout
          isLoading={terms.isLoading}
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

export default TermsDetail;
