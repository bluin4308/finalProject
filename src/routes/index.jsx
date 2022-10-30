import React from "react";
import { Routes, Route } from "react-router-dom";
import { Category, Layout, NotFoundPage } from "../pages";
import { SaleBanner } from "../pages/components";

// Pages list
//    Sale
//    Jeans
//    AllClothes
//    Jackets
//    New
//    <Route path="" element={<Page query={GET_ITEMS} tags={{ tags: [""] }} />}/>

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SaleBanner />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="jeans" element={<Category />} />
      </Route>
    </Routes>
  );
};

export default Routing;
