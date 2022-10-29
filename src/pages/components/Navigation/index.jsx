import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="basis-1/5 text-center font-montserrat">
      <NavLink to="/">
        <h1 className="pt-4 text-3xl font-bold uppercase tracking-widest">
          Logo
        </h1>
      </NavLink>
      <div className="mt-8 flex flex-col">
        <NavLink
          to="all"
          className={
            "my-2 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        >
          All clothes
        </NavLink>
        <NavLink
          to="jeans"
          className={
            "my-2 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        >
          Jeans
        </NavLink>
        <NavLink
          to="jackets"
          className={
            "my-2 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        >
          Jackets
        </NavLink>
        <NavLink
          to="sale"
          className={
            "my-2 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        >
          Sale
        </NavLink>
        <NavLink
          to="new"
          className={
            "my-4 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        >
          New
        </NavLink>
        <NavLink
          to=""
          className={
            "my-4 transition hover:font-bold " +
            (({ isActive }) => (isActive ? "font-bold" : " "))
          }
        ></NavLink>
      </div>
    </div>
  );
};

export default Navigation;
