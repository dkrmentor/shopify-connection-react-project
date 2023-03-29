import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./blogs";


const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </Router>
  );
};

export default Routers;