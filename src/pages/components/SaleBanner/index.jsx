import React, { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const SaleBanner = () => {
  const [title, setTitle] = useOutletContext();

  useEffect(() => {
    setTitle("New arrivals");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <div className="relative mt-1">
      <img
        className="h-auto w-2/3"
        src="https://dsa1mc.wp4.host/wp-content/uploads/2022/10/jeans.jpg"
        alt="Banner"
      />
      <div className="text-section absolute top-0 px-2 py-4 font-normal">
        {/* <p className="text-3xl">New arrivals</p> */}
        <p className="text-xl uppercase">collection 2022</p>
        <NavLink
          to="new"
          className="mt-2 block w-max bg-black p-2 text-white transition hover:bg-white hover:text-black"
        >
          shop now
        </NavLink>
      </div>
    </div>
  );
};

export default SaleBanner;
