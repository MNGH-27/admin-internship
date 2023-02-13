import React from "react";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentFormListItem from "../../../components/pages/students/studentForm/studentFormListItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";

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
    style: "col-span-2 text-center",
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
    title: "سال ورود به دانشگاه",
    style: "col-span-2 text-center",
  },
  {
    title: "جزئیات",
    style: "col-span-2 text-center",
  },
];

const listItem = [
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    entryDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    entryDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    entryDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    entryDate: 1398,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    entryDate: 1398,
  },
];

const StudentFormList: React.FC = () => {
  const genarateList = () => {
    return listItem.map((item, index) => (
      <StudentFormListItem key={index} index={index} data={item} />
    ));
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader title="فرم ها" hasSubLink={false} />

      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        hasPagination={true}
      >
        {genarateList()}
      </TableWrapper>
    </div>
  );
};

export default StudentFormList;
