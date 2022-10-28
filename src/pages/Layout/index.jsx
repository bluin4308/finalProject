import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Navigation } from "../components";

const Layout = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="mx-auto w-[90%]">
      <div className="flex font-montserrat">
        <Navigation />
        <div className="basis-4/5">
          <div className="mx-auto">
            <Header title={title} />
            <Outlet context={[setTitle]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
