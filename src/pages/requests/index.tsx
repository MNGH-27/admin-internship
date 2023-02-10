import React from "react";

//SVG
import { ReactComponent as ArrowDown } from "./../../assets/icons/svg/arrow-down.svg";

//component
import TableWrapper from "../../components/common/tableWrapper";
import RequestItem from "../../components/pages/requests/requestItem";

const tableHeader = [
  {
    title: "#",
    style: "col-span-1 text-center",
  },
  {
    title: "نام",
    style: "col-span-2 text-center",
  },
  {
    title: "نام خانوادگی",
    style: "col-span-2 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "ترم ورود به دانشگاه",
    style: "col-span-2 text-center",
  },
  {
    title: "درخواست",
    style: "col-span-2 text-center",
  },
];

const listItem = [
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    enterDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    enterDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    enterDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    enterDate: 1398,
  },
];

const Request: React.FC = () => {
  const genarateList = () => {
    return listItem.map((item, index) => (
      <RequestItem key={index} data={item} index={index} />
    ));
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-16">
      <div className="shadow-[0_2px_28px_0px_rgba(203,209,232,0.15)] bg-white p-7 rounded-3xl w-full">
        <div className="flex items-center justify-start gap-2">
          <span className="text-[#2A3042]">داشبورد</span>
          <ArrowDown className="rotate-90 text-[#4F5468]" />
          <span className="text-[#9FA5BB]">درخواست ها</span>
        </div>
      </div>
      <TableWrapper minSize={`min-w-[900px]`} tableHeader={tableHeader}>
        {genarateList()}
      </TableWrapper>
    </div>
  );
};

export default Request;
