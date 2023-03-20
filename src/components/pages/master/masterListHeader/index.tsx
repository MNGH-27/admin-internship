import React, { useRef, useState } from "react";

//react router dom
import { Link } from "react-router-dom";

//hooks
import { useCustomSearchParams } from "../../../../hooks/useCustomSearchParams";

//svg
import { ReactComponent as SearchSvg } from "./../../../../assets/icons/svg/search-normal.svg";
import { ReactComponent as SettingSvg } from "./../../../../assets/icons/svg/setting-5.svg";

//interface
import { facultiesListItemType } from "../../../../types";

interface MasterListHeaderProps {
  isLoading?: boolean;
  facultiesList?: facultiesListItemType[];
}

const MasterListHeader: React.FC<MasterListHeaderProps> = ({
  facultiesList,
  isLoading,
}) => {
  const searchFieldContainer = useRef<HTMLInputElement | null>(null);

  const [searchParams, setSearchParams] = useCustomSearchParams();

  const [facultiesIntranceContainer, setfacultiesIntranceContainer] =
    useState<facultiesListItemType>({
      id: 0,
      name: "",
    });

  const onSetSearchParamsHandler = () => {
    /*
     * *check entranceYear =>
     * *in default value it is null check it won't be null
     */

    if (facultiesIntranceContainer.name === "") {
      //it is not null => search faculty id too
      setSearchParams({
        ...searchParams,
        page: 1,
        search: searchFieldContainer.current?.value,
        faculty: "",
      });
    } else {
      //faculty id is null , we don't search it
      setSearchParams({
        ...searchParams,
        page: 1,
        search: searchFieldContainer.current?.value,
        faculty: facultiesIntranceContainer.id,
      });
    }
  };

  return (
    <div className="my-10">
      <span className="text-2xl font-semibold">
        لیست اساتید کارآموزی دانشگاه
      </span>
      <div className="my-10 flex items-center justify-between w-full">
        <div className="my-3">
          <div className="flex items-center justify-start text-[#5F5F61] w-full">
            <SettingSvg />
            <p>مرتب سازی براساس:</p>
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-start gap-5 mt-5">
            <div className="flex flex-col items-start gap-2">
              <label className="text-[#8B91A7] text-xs">دانشکده</label>

              {isLoading ? (
                <div className="w-60 h-11 bg-gray-400 animate-pulse rounded-md"></div>
              ) : (
                <select
                  value={JSON.stringify(facultiesIntranceContainer)}
                  onChange={(e) =>
                    setfacultiesIntranceContainer(JSON.parse(e.target.value))
                  }
                  className="w-60 p-2 rounded-lg border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
                >
                  <option value={JSON.stringify({ name: "", id: 0 })}>
                    مشاهده همه
                  </option>
                  {facultiesList?.map((facultiesItem, index) => (
                    <option key={index} value={JSON.stringify(facultiesItem)}>
                      {facultiesItem.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#8B91A7] text-xs">جستجو </label>
              <input
                ref={searchFieldContainer}
                className="w-full p-2 placeholder:text-sm rounded-lg border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
                placeholder="جستجو دانشجو . . ."
              />
            </div>
            <button
              onClick={onSetSearchParamsHandler}
              className="px-6 py-2 flex items-center justify-center gap-2 rounded-xl bg-[#2080F6] text-white border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
            >
              <SearchSvg />
              جستجو
            </button>
          </div>
        </div>
        <Link
          to={"/teachers/singlemaster?status=add"}
          className="bg-blue-700 text-white hover:text-blue-700 hover:bg-white border-2 border-blue-700 duration-200 text-lg px-7 py-3 rounded-md"
        >
          اضافه کردن استاد
        </Link>
      </div>
    </div>
  );
};

export default MasterListHeader;
