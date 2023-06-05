import React, { useEffect, useState } from "react";

//react router dom
import { useLocation, Link } from "react-router-dom";

//useCookies
import { useCookies } from "react-cookie";

//service
import { GetCompanyList } from "../../services/company";

//component
import TableWrapper from "../../components/common/tableWrapper";
import LoadingLayout from "../../components/common/loadingLayout";
import CompanyListHeader from "../../components/pages/company/companyListHeader";
import CompanyLoadingItem from "../../components/pages/company/companyItemCardLoadingCard";
import CompanyItemCard from "../../components/pages/company/companyItemCard";

//interface
import { typeCompanyListItem } from "../../types/companyType";
import { typeMeta, facultiesListItemType } from "../../types";

interface typeCompanyData {
  isLoading: boolean;
  company?: typeCompanyListItem[];
  faculties?: facultiesListItemType[];
  meta?: typeMeta;
}

const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: "نام شرکت",
    style: "col-span-3",
  },
  {
    title: "رئیس شرکت",
    style: "col-span-2",
  },
  {
    title: "تلفن",
    style: "col-span-2",
  },
  {
    title: "شماره ثبت",
    style: "col-span-2",
  },
  //   {
  //     title: "شناسه شرکت",
  //     style: "col-span-2",
  //   },
  //   {
  //     title: "نمره شرکت",
  //     style: "col-span-1",
  //   },
];

const Company = () => {
  const [cookies] = useCookies(["token"]);

  const location = useLocation();

  const [data, setData] = useState<typeCompanyData>({
    isLoading: false,
  });

  //call on searchParam changes
  useEffect(() => {
    //on search for course after filtering data,
    //check if we have any search params

    //checking that a request has not already been made

    if (data.isLoading === false) {
      asyncGetCompanyList(location.search.substring(1));
    }
  }, [location]);

  const asyncGetCompanyList = async (filter: string = ""): Promise<void> => {
    setData({
      isLoading: true,
    });

    try {
      const response = await GetCompanyList({
        token: cookies.token,
        filter,
      });

      if (response.status === 200) {
        setData({
          isLoading: true,
          //   faculties: [...response.data.data.faculties],
          company: [...response.data.data],
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
    return data.company?.map((singleCompany, index) => (
      <CompanyItemCard key={index} data={singleCompany} index={index} />
    ));
  };

  return (
    <div className="my-20">
      <CompanyListHeader
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
          Card={() => <CompanyLoadingItem />}
          repetitionsNumber={5}
        >
          {generateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default Company;
