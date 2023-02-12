import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//component
import Layout from "./components/common/layout";

import StudentsList from "./pages/students";
import StudentInitialRegestration from "./pages/students/initialregestration";
import StudentPreregestration from "./pages/students/preregestration";
import StudentForm from "./pages/students/studentForm";
import SingleStudentForm from "./pages/students/studentForm/singleStudentForm";
import "./App.css";

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
          <Route element={<StudentForm />} path="/students/form" />
          <Route element={<SingleStudentForm />} path="/students/form/:id" />
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
