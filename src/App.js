import React from "react";
import NavBar from "./components/Layout/NavBar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import JobListings from "./pages/JobListings";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/job-listings" element={<JobListings />} />
      </Routes>
    </>
  );
};

export default App;
