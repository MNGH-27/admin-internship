import React, { ReactNode } from "react";

//component
import TablePagination from "./pagination";

//interface
import { typeMeta } from "../../../types";
interface TableWrapperProps {
  children: ReactNode;

  tableHeader: {
    style: string;
    title: string;
  }[];

  minSize: string;

  //this is optional => Cuz pagination is optional in some table
  hasPagination: boolean;
  meta?: typeMeta;
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  minSize,
  tableHeader,
  hasPagination,
  children,
  meta,
}) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full mb-8">
        <div className={`${minSize}`}>
          <table className="flex flex-col w-full">
            <thead className="bg-[#F6F6F6] py-5 text-[#8B91A7] text-sm font-light">
              <tr className="grid grid-cols-12 w-full">
                {tableHeader.map((header, headerIndex) => (
                  <th key={headerIndex} className={`${header.style}`}>
                    {header.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="flex flex-col">{children}</tbody>
          </table>
        </div>
      </div>
      {hasPagination && meta !== undefined && <TablePagination meta={meta} />}
    </div>
  );
};

export default TableWrapper;
