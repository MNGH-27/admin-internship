import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import LoadingLayout from "../../../components/common/loadingLayout";

//component
import TableWrapper from "../../../components/common/tableWrapper";
import InitialRegestrationLoadingItem from "../../../components/pages/students/initialregestration/initialRegestrationLoadingItem";
import PreregestrationStudentItem from "../../../components/pages/students/preregestration/preregestrationStudentItem";
import StudentHeader from "../../../components/pages/students/studentsHeader";
import { GetPereregestrationStudents } from "../../../services/student";
import { typeMeta, typeSinglePreRegestration } from "../../../types";

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
    style: "col-span-2 text-center",
  },
  {
    title: "ترم",
    style: "col-span-1 text-center",
  },
  {
    title: "واحد های پاس شده",
    style: "col-span-1 text-center",
  },
  {
    title: "جزئیات",
    style: "col-span-2 text-center",
  },
];

const listItem = [
  {
    data: {
      id: 1,
      first_name: "حسن علی",
      last_name: "آبروریز",
      student_number: "3981231020",
      faculty: {
        id: 1,
        faculty_name: "دانشکده کامپیوتر",
      },
      degree: {
        id: 1,
        degree: "کارشناسی",
      },
      passed_units: 85,
      semester: "نیم سال اول",
      academic_year: 1401,
      master: {
        id: 1,
        name: "زهرا شیرمحمدی",
      },
      company: {
        id: 1,
        company_name: "مه پویا",
      },
      internship: {
        id: 1,
        internship_type: "کارآموزی در صنعت و شرکت دولتی",
      },
    },
  },
];

const StudentPreregestration: React.FC = () => {
  // cookie
  const [cookies] = useCookies(["token"]);

  // location
  const location = useLocation();
  // loading
  const [loading, setLoading] = useState(true);

  const [meta, setMeta] = useState<typeMeta>({
    current_page: 0,
    per_page: 0,
    total_pages: 0,
    total_records: 0,
  });

  // const [preRegestration, setPreRegestration] = useState<
  //   typeSinglePreRegestration[] | []
  // >();

  const [preRegestration, setPreRegestration] = useState<
    typeSinglePreRegestration[]
  >([]);

  useEffect(() => {
    if (location.search.length > 0) {
      aysncGetPereregestrationStudents(location.search.substring(1));
    } else {
      aysncGetPereregestrationStudents("");
    }
  }, [location]);

  const aysncGetPereregestrationStudents = async (
    filter: string = ""
  ): Promise<void> => {
    setLoading(true);
    try {
      const response = await GetPereregestrationStudents({
        filter,
        token: cookies.token,
      });

      if (response.status === 200) {
        setPreRegestration([...response.data.data.students]);
        setMeta({ ...response.data.meta });
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  console.log(preRegestration);
  const genarateList = () => {
    return preRegestration.map((item, index) => (
      <PreregestrationStudentItem key={index} index={index} data={item} />
    ));
  };

  const loadingCard = () => {
    return <InitialRegestrationLoadingItem />;
  };

  return (
    <div className="my-20 flex items-center justify-center flex-col gap-5">
      <StudentHeader
        title="پیش ثبت نام ها"
        subLink="preregestration"
        hasSubLink={true}
      />
      <TableWrapper
        minSize={`min-w-[900px]`}
        tableHeader={tableHeader}
        hasPagination={true}
      >
        <LoadingLayout
          isLoading={loading}
          hasCard={true}
          Card={loadingCard}
          repetitionsNumber={5}
        >
          {genarateList()}
        </LoadingLayout>
      </TableWrapper>
    </div>
  );
};

export default StudentPreregestration;
