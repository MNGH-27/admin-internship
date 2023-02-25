import React, { useState, useEffect } from "react";

//cookies
import { useCookies } from "react-cookie";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentFormListItem from "../../../components/pages/students/studentForm/studentFormListItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";

//service
import { GetStudentsFormList } from "../../../services/student";

//interface
import { typeSingleStudentForm } from "../../../types";
import { typeMeta } from "../../../types";
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
    style: "col-span-2 text-center",
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

const StudentFormList: React.FC = () => {
  const [cookies] = useCookies(["token"]);

  const [students, setStudents] = useState<typeSingleStudentForm[]>([]);
  const [meta, setMeta] = useState<typeMeta>();

  useEffect(() => {
    asyncGetStudentsFromList();
  }, []);

  const asyncGetStudentsFromList = async () => {
    try {
      const response = await GetStudentsFormList({ token: cookies.token });
      if (response.status === 200) {
        setStudents([...response.data.data]);
        setMeta({ ...response.data.meta });
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
  };

  const genarateList = () => {
    return students.map((item, index) => (
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
        meta={meta}
      >
        {genarateList()}
      </TableWrapper>
    </div>
  );
};

export default StudentFormList;
