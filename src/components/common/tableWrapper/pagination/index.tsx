import React from "react";

//interface
import { typeMeta } from "../../../../types";

interface TablePaginationProps {
  meta: typeMeta;
}

const TablePagination: React.FC<TablePaginationProps> = ({ meta }) => {
  console.log("meta : ", meta);

  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-sm text-[#5F5F61]">
        نشان دادن{" "}
        <span className="text-[#222124] font-medium">
          {meta.current_page * meta.per_page - meta.per_page + 1}
        </span>{" "}
        از
        <span className="text-[#222124] font-medium">
          {meta.current_page * meta.per_page < meta.total_records
            ? meta.current_page * meta.per_page
            : meta.total_records}
        </span>{" "}
        از
        <span className="text-[#222124] font-medium">
          {meta.total_records}
        </span>{" "}
        نتیجه
      </p>
      <div className="flex items-center justify-center gap-5">
        <button
          className={`${
            meta.current_page === 1 ? "opacity-50" : "hover:bg-[#E6E6E6]"
          } px-3 py-2 border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] rounded-xl text-sm duration-200 text-[#222124]`}
        >
          قبلی
        </button>
        <button
          className={`${
            meta.current_page === meta.total_pages
              ? "opacity-50"
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
