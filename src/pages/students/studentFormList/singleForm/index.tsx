import React from "react";

//component
import SingleFormContextHeader from "../../../../components/pages/students/studentForm/singleForms/singleFormContextHeader";

import StudentForm2 from "../../../../components/pages/students/studentForm/singleForms/studentForm2";
import StudentForm3 from "../../../../components/pages/students/studentForm/singleForms/studentForm3";
import StudentForm4 from "../../../../components/pages/students/studentForm/singleForms/studentForm4";
import StudentFormFinal from "../../../../components/pages/students/studentForm/singleForms/studentFormFinal";
const SingleForm: React.FC = () => {
  return (
    <>
      <SingleFormContextHeader
        hasUserDetail={false}
        title="فرم شماره 2 ( فرم شروع کارآموزی)"
      />
      {/* <StudentForm2 /> */}
      {/* <StudentForm3 /> */}
      {/* <StudentForm4 /> */}
      <StudentFormFinal />
    </>
  );
};

export default SingleForm;
