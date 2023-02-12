import React from "react";

//SVG
import { ReactComponent as ArrowDown } from "./../../assets/icons/svg/arrow-down.svg";

//component
import TableWrapper from "../../components/common/tableWrapper";
import StudentItem from "../../components/pages/students/studentItem";

const tableHeader = [
  {
    title: "#",
    style: "col-span-1 text-center",
  },
  {
    title: "نام",
    style: "col-span-1 text-center",
  },
  {
    title: "نام خانوادگی",
    style: "col-span-1 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "دانشکده",
    style: "col-span-1 text-center",
  },
  {
    title: "ترم",
    style: "col-span-1 text-center",
  },
  {
    title: "شماره ملی",
    style: "col-span-2 text-center",
  },
  {
    title: "شماره تلفن",
    style: "col-span-1 text-center",
  },
];

const listItem = [
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    nlCode: 2790897654,
    phoneCode: "09038802635",
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    nlCode: 2790897654,
    phoneCode: "09038802635",
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    nlCode: 2790897654,
    phoneCode: "09038802635",
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    nlCode: 2790897654,
    phoneCode: "09038802635",
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    nlCode: 2790897654,
    phoneCode: "09038802635",
  },
];

const StudentsList: React.FC = () => {
  const genarateList = () => {
    return listItem.map((item, index) => (
      <StudentItem key={index} index={index} data={item} />
    ));
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-16">
      <TableWrapper minSize={`min-w-[900px]`} tableHeader={tableHeader}>
        {genarateList()}
      </TableWrapper>
    </div>
  );
};

export default StudentsList;
