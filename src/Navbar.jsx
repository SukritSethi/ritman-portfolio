import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/media/ritmanlogo.png";

const Navbar = () => {
  return (
    <div className=" w-full h-16 bg-white flex justify-between">
      <NavLink
        className={({ isActive }) =>
          isActive ? "h-16" : "h-16"
        }
        to="/"
      >
        <div className="h-16 pl-2">
          <img src={logo} className=" object-cover w-40 h-16" alt="" />
        </div>
      </NavLink>

      <div className="flex justify-center pr-20">
        <NavLink
          to="/team"
          className={({ isActive }) => {
            return isActive ? "underline" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
            Team
          </div>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => {
            return isActive ? "underline" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
            Projects
          </div>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => {
            return isActive ? "underline" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer hover:text-blue-main hover:underline">
            Services
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => {
            return isActive ? "underline decoration-red-main" : "";
          }}
        >
          <div className="mx-5 mt-5 hover:cursor-pointer text-red-main decoration-red-main hover:underline">
            Contact us
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
