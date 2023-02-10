import React, { FC, ReactNode } from "react";

//interface
interface TableWrapperProps {
  children?: ReactNode;

  tableHeader: {
    style: string;
    title: string;
  }[];

  minSize: string;
}

const TableWrapper: FC<TableWrapperProps> = ({
  minSize,
  tableHeader,
  children,
}) => {
  return (
    <div className="overflow-x-auto w-full shadow-[0_2px_28px_0px_rgba(203,209,232,0.15)] bg-white rounded-3xl">
      <div className={`${minSize}`}>
        <table className="flex flex-col w-full p-5">
          <thead className="bg-[#e5f0ff26] p-2 text-[#2A3042] mb-7">
            <tr className="grid grid-cols-12 w-full">
              {tableHeader.map((header, headerIndex) => (
                <th key={headerIndex} className={`${header.style}`}>
                  {header.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="flex flex-col gap-7">{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWrapper;
