import React from "react";

//customeSearchparams
import { useCustomSearchParams } from "../../../../hooks/useCustomSearchParams";

//interface
import { typeMeta } from "../../../../types";

interface TablePaginationProps {
  meta: typeMeta;
}

const TablePagination: React.FC<TablePaginationProps> = ({ meta }) => {
  const [searchParams, setSearchParams] = useCustomSearchParams();

  //page handler
  const setPageHandler = (action: "next" | "prev" = "next") => {
    //check action status
    if (action === "next") {
      //action is next => one will be added to current_page
      setSearchParams({
        ...searchParams,
        page: +meta.current_page + 1,
      });
    } else {
      //action is next => one will be minus from current_page
      setSearchParams({
        ...searchParams,
        page: +meta.current_page - 1,
      });
    }
  };

  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-sm text-[#5F5F61]">
        نشان دادن
        <span className="text-[#222124] font-medium mx-2">
          {meta.current_page * meta.per_page - meta.per_page + 1}
        </span>
        تا
        <span className="text-[#222124] font-medium mx-2">
          {meta.current_page * meta.per_page < meta.total_records
            ? meta.current_page * meta.per_page
            : meta.total_records}
        </span>
        از
        <span className="text-[#222124] font-medium mx-1">{meta.total_records}</span>
        نتیجه
      </p>
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={() => {
            if (+meta.current_page !== 1) {
              setPageHandler("prev");
            }
          }}
          className={`${
            +meta.current_page === 1
              ? "opacity-50 cursor-default"
              : "hover:bg-[#E6E6E6]"
          } px-3 py-2 border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] rounded-xl text-sm duration-200 text-[#222124]`}
        >
          قبلی
        </button>
        <button
          onClick={() => {
            if (+meta.current_page !== +meta.total_pages) {
              setPageHandler("next");
            }
          }}
          className={`${
            +meta.current_page === +meta.total_pages
              ? "opacity-50 cursor-default"
              : "hover:bg-[#E6E6E6]"
          } px-3 py-2 border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] rounded-xl text-sm duration-200 text-[#222124]`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
};
export default TablePagination;
