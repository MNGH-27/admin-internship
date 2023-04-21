import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//component
import Layout from "./components/common/layout";

import StudentsList from "./pages/students";
import StudentInitialRegestration from "./pages/students/initialregestration";
import StudentPreregestration from "./pages/students/preregestration";
import StudentFormList from "./pages/students/studentFormList";
import SingleStudentForm from "./pages/students/studentFormList/singleStudentForm";
import SingleForm from "./pages/students/studentFormList/singleForm";

import Master from "./pages/master";
import AddAndEditMaster from "./pages/master/addandEditMaster";

import EducationalIssue from "./pages/educationalIssues";
import Faculties from "./pages/educationalIssues/faculties";
import Terms from "./pages/educationalIssues/terms";

import TermsDetail from "./pages/educationalIssues/termDetail";
import DetailTermStudentList from "./pages/educationalIssues/termDetail/detailTermStudents";
import DetailTermMaster from "./pages/educationalIssues/termDetail/detailTermMaster";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<StudentsList />} path="/students" />
          <Route
            element={<StudentInitialRegestration />}
            path="/students/initialregestration"
          />
          <Route
            element={<StudentPreregestration />}
            path="/students/preregestration"
          />
          <Route element={<StudentFormList />} path="/students/form" />
          <Route element={<SingleStudentForm />} path="/students/form/:id" />
          <Route element={<SingleForm />} path="/students/form/singleform" />

          <Route element={<Master />} path="/teachers" />
          <Route element={<AddAndEditMaster />} path="/teachers/singlemaster" />

          <Route element={<EducationalIssue />} path="/educational-issues" />
          <Route element={<Faculties />} path="/educational-issues/faculties" />
          <Route element={<Terms />} path="/educational-issues/terms" />

          <Route
            element={<TermsDetail />}
            path="/educational-issues/terms-detail"
          />
          <Route
            element={<DetailTermStudentList />}
            path="/educational-issues/terms-detail/student/:id"
          />
          <Route
            element={<DetailTermMaster />}
            path="/educational-issues/terms-detail/master/:id"
          />

          <Route element={<Dashboard />} path="/" />
        </Route>
      </Routes>
    </div>
  );
}

const Dashboard: React.FC = () => {
  return (
    <div>
      <p>this is dashboard</p>
    </div>
  );
};

export default App;
