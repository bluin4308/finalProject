import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="basis-1/5 text-center font-montserrat text-3xl font-bold uppercase tracking-widest">
      <NavLink to="/">
        <h1 className="pt-4">Logo</h1>
      </NavLink>
    </div>
  );
};

export default Navigation;
