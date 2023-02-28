import React, { useRef, useState } from "react";

//searchParams
import { useCustomSearchParams } from "../../../../hooks/useCustomSearchParams";

//SVG
import { ReactComponent as NotesSvg } from "./../../../../assets/icons/svg/note-2.svg";
import { ReactComponent as FailedSvg } from "./../../../../assets/icons/svg/forbidden-2.svg";
import { ReactComponent as SettingSvg } from "./../../../../assets/icons/svg/setting-5.svg";
import { ReactComponent as SearchSvg } from "./../../../../assets/icons/svg/search-normal.svg";
import { ReactComponent as ReturnSvg } from "./../../../../assets/icons/svg/arrow-circle-right.svg";

//interface

import { entranceYearsListItemType } from "../../../../types";
interface StudentHeaderProps {
  title: string;
  hasSubLink: boolean;
  isLoading?: boolean;
  entranceYears?: entranceYearsListItemType[];
  numberOfStudnet?: number;
}

const StudentHeader: React.FC<StudentHeaderProps> = ({
  title,
  hasSubLink,
  entranceYears,
  isLoading,
  numberOfStudnet,
}) => {
  const searchFieldContainer = useRef<HTMLInputElement | null>(null);

  const [searchParams, setSearchParams] = useCustomSearchParams();

  const [selectContainer, setSelectContainer] =
    useState<entranceYearsListItemType>({
      entrance_year: "",
    });

  const onSetSearchParamsHandler = () => {
    /*
     * *check entranceYear =>
     * *in default value it is null check it won't be null
     */
    if (selectContainer.entrance_year !== null) {
      //it is not null => search faculty id too
      setSearchParams({
        ...searchParams,
        page: 1,
        search: searchFieldContainer.current?.value,
        entrance_year: selectContainer.entrance_year,
      });
    } else {
      //faculty id is null , we don't search it
      setSearchParams({
        ...searchParams,
        page: 1,
        search: searchFieldContainer.current?.value,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-5 w-full">
      <div className="flex items-start justify-between flex-col lg:flex-row gap-y-5 w-full">
        <div className="flex flex-col items-start justify-center gap-4">
          {searchParams.verified == 0 ? (
            <>
              <div className="flex items-center gap-2">
                <span className="text-[#101114] text-2xl font-semibold">
                  {title}
                </span>
                <span
                  className={`${
                    isLoading ? "scale-0" : "scale-1"
                  } duration-200 relative bottom-5 text-[#2080F6] text-xs font-semibold px-2 py-1 rounded-xl bg-[#EBF1FD]`}
                >
                  {numberOfStudnet} دانشجو
                </span>
              </div>
              <span className="text-[#5F5F61] text-xs">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.
              </span>
            </>
          ) : searchParams.verified == 1 ? (
            <span className="text-[#101114] text-2xl font-semibold">
              دانشجو های تایید شده{" "}
            </span>
          ) : (
            <span className="text-[#101114] text-2xl font-semibold">
              دانشجو های رد شده
            </span>
          )}
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row gap-5 w-full sm:w-fit">
          {hasSubLink &&
            (searchParams.verified != 0 ? (
              <button
                onClick={() =>
                  setSearchParams({
                    verified: 0,
                  })
                }
                className="py-3 px-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
              >
                <ReturnSvg />
                بازگشت
              </button>
            ) : (
              <>
                <button
                  onClick={() =>
                    setSearchParams({
                      verified: 1,
                    })
                  }
                  className="py-3 px-5 rounded-md flex items-center justify-start gap-2 text-white bg-[#2080F6] border-2 border-[#2080F6] hover:bg-white hover:text-[#2080F6] duration-200"
                >
                  <NotesSvg />
                  دانشجو های تایید شده
                </button>
                <button
                  onClick={() =>
                    setSearchParams({
                      verified: 2,
                    })
                  }
                  className="py-3 px-5 rounded-md flex items-center justify-start gap-2 shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] text-[#222124] border-2 border-[#E6E6E6] hover:bg-[#E6E6E6] duration-200"
                >
                  <FailedSvg />
                  دانشجو های رد شده
                </button>
              </>
            ))}
        </div>
      </div>
      <div className="w-full my-3">
        <div className="flex items-center justify-start text-[#5F5F61] w-full">
          <SettingSvg />
          <p>مرتب سازی براساس:</p>
        </div>
        <div className="flex items-end justify-start gap-5 mt-5">
          <div className="flex flex-col items-start gap-2">
            <label className="text-[#8B91A7] text-xs">سال ورود</label>

            {isLoading ? (
              <div className="w-60 h-11 bg-gray-400 animate-pulse rounded-md"></div>
            ) : (
              <select
                value={JSON.stringify(selectContainer)}
                onChange={(e) => setSelectContainer(JSON.parse(e.target.value))}
                className="w-60 p-2 rounded-lg border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)]"
              >
                <option value={JSON.stringify({ entrance_year: "" })}>
                  مشاهده همه
                </option>
                {entranceYears?.map((entranceYearitem, index) => (
                  <option key={index} value={JSON.stringify(entranceYearitem)}>
                    {entranceYearitem.entrance_year}
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
    </div>
  );
};

export default StudentHeader;
