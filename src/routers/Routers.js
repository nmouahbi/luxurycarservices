import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import About1 from "../pages/About1";
import NotFound from "../pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about1" element={<About1 />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
