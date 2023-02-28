import React from "react";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import PreregestrationStudentItem from "../../../components/pages/students/preregestration/preregestrationStudentItem";
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
    style: "col-span-1 text-center",
  },
  {
    title: "شماره دانشجویی",
    style: "col-span-2 text-center",
  },
  {
    title: "نام شرکت",
    style: "col-span-1 text-center",
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
    title: "واحد های پاس شده",
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
    companyName: "رایادرس",
    passedUnit: 111,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    companyName: "رایادرس",
    passedUnit: 111,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    companyName: "رایادرس",
    passedUnit: 111,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    companyName: "رایادرس",
    passedUnit: 111,
  },
  {
    name: "علی",
    lastName: "الهیارلو",
    stNumber: 3981231111,
    faculty: "کامپیوتر",
    term: "پنجم",
    companyName: "رایادرس",
    passedUnit: 111,
  },
];

const StudentPreregestration: React.FC = () => {
  const genarateList = () => {
    return listItem.map((item, index) => (
      <PreregestrationStudentItem key={index} index={index} data={item} />
    ));
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader title="پیش ثبت نام ها" hasSubLink={true} />

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

export default StudentPreregestration;
