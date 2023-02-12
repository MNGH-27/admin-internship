import React, { ReactNode } from "react";

//interface
interface TableWrapperProps {
  children?: ReactNode;

  tableHeader: {
    style: string;
    title: string;
  }[];

  minSize: string;
}

const TableWrapper: React.FC<TableWrapperProps> = ({
  minSize,
  tableHeader,
  children,
}) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto w-full mb-8">
        <div className={`${minSize}`}>
          <table className="flex flex-col w-full">
            <thead className="bg-[#F6F6F6] py-5 text-[#8B91A7] text-sm font-light mb-7">
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
      <div className="flex items-center justify-between w-full">
        <p className="text-sm text-[#5F5F61]">
          نشان دادن <span className="text-[#222124] font-medium">1</span> از
          <span className="text-[#222124] font-medium">6</span> از
          <span className="text-[#222124] font-medium">100</span> نتیجه
        </p>
        <div className="flex items-center justify-center gap-5">
          <button className="px-3 py-2 border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] rounded-xl text-sm hover:bg-[#E6E6E6] duration-200 text-[#222124]">
            قبلی
          </button>
          <button className="px-3 py-2 border-2 border-[#E6E6E6] shadow-[0_1px_2px_0px_rgba(24,24,28,0.04)] rounded-xl text-sm hover:bg-[#E6E6E6] duration-200 text-[#222124]">
            بعدی
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableWrapper;
