import React from "react";

//react-router-dom
import { Routes, Route } from "react-router-dom";

//component
import Layout from "./components/common/layout";

import Request from "./pages/requests";

// import React from 'react';
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Request />} path="/requests" />
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
