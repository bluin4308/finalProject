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
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        >
          All clothes
        </NavLink>
        <NavLink
          to="jeans"
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        >
          Jeans
        </NavLink>
        <NavLink
          to="jackets"
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        >
          Jackets
        </NavLink>
        <NavLink
          to="sale"
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        >
          Sale
        </NavLink>
        <NavLink
          to="new"
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        >
          New
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive
              ? "my-2 font-bold transition hover:font-bold"
              : " my-2 transition hover:font-bold"
          }
        ></NavLink>
      </div>
    </div>
  );
};

export default Navigation;
