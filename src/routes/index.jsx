import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../pages";
import { SaleBanner } from "../pages/components";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SaleBanner />}></Route>
        {/* <Route path="sale" element={<ProductPage query={gql`query} title="sale" /> */}
        {/* <Route path="jeans" element={<ProductPage query={gql`query} title="jeans" /> */}
        {/* <Route path="jackets" element={<ProductPage query={gql`query} title="jackets" /> */}
        {/* <Route path="shirts" element={<ProductPage query={gql`query} title="shirts" /> */}
      </Route>
      {/* <Route path='*' element={<NotFoundPage />}/> */}
    </Routes>
  );
};

export default Routing;
