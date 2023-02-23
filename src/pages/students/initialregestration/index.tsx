import React, { useEffect, useState } from "react";

//cookie
import useCookies from "react-cookie/cjs/useCookies";
//component
import TableWrapper from "../../../components/common/tableWrapper";
import StudentItem from "../../../components/pages/students/initialregestration/initialregestrationStudentItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";

//service
import { GetInitialPreregestrationStundets } from "../../../services/student";

//interface
import { typeSingleInitialRegestration, typeMeta } from "../../../types";

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

const StudentInitialRegestration: React.FC = () => {
  const [cookies] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState<typeMeta>({
    current_page: 0,
    per_page: 0,
    total_pages: 0,
    total_records: 0,
  });
  const [initialRegestration, setInitialRegestration] =
    useState<typeSingleInitialRegestration[]>();

  useEffect(() => {
    asyncGetInitialPreregStudentsList();
  }, []);

  const asyncGetInitialPreregStudentsList = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const response = await GetInitialPreregestrationStundets({
        token: cookies.token,
      });
      //check response status
      if (response.status === 200) {
        //fetch data successfully
        setInitialRegestration([...response.data.data]);
        setMeta({ ...response.data.meta });
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // const genarateList = () => {
  //   return listItem.map((item, index) => (
  //     <StudentItem key={index} index={index} data={item} />
  //   ));
  // };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader
        title="ثبت نام اولیه ها"
        subLink="initialregestration"
        hasSubLink={true}
      />

      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        hasPagination={true}
      >
        {/* {genarateList()} */}
      </TableWrapper>
    </div>
  );
};

export default StudentInitialRegestration;
