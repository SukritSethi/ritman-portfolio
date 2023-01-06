import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Team from "./Team";
import Projects from "./Projects";
import Services from "./Services";
import ContactUs from "./ContactUs";

const App = () => {
  return (
    <>
    <div className="absolute top-0 z-index h-full w-full bg-beige-main flex">
      <div className="w-1/6 border border-black"></div>  
      <div className="w-1/6 border border-black"></div>  
      <div className="w-1/6 border border-black"></div>  
      <div className="w-1/6 border border-black"></div>  
      <div className="w-1/6 border border-black"></div>  
      <div className="w-1/6 border border-black"></div>  
    </div>
      <Navbar className="z-10" />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        {/* <Route path='/*' element={<Error/>} /> */}
      </Routes>
    </>
  );
};

export default App;
