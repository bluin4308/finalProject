import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout, ProductPage, NotFoundPage } from "../pages";
import { SaleBanner } from "../pages/components";
import { GET_ITEMS } from "../apollo";

// const HOC = (Comp) => {
//   return (props) => {
//     <Comp {...props} />;
//   };
// };

// const Sale = HOC(ProductPage);

const Sale = (props) => {
  return <ProductPage {...props} />;
};

const Jeans = (props) => {
  return <ProductPage {...props} />;
};

const AllClothes = (props) => {
  return <ProductPage {...props} />;
};

const Jackets = (props) => {
  return <ProductPage {...props} />;
};

const New = (props) => {
  return <ProductPage {...props} />;
};

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SaleBanner />} />
        <Route
          path="sale"
          element={
            <Sale title="Sale" query={GET_ITEMS} tag={{ tag: ["sale"] }} />
          }
        />
        <Route
          path="jeans"
          element={
            <Jeans title="Jeans" query={GET_ITEMS} tag={{ tag: ["jeans"] }} />
          }
        />
        <Route
          path="all"
          element={
            <AllClothes
              title="All clothes"
              query={GET_ITEMS}
              tag={{ tag: [""] }}
            />
          }
        />
        <Route
          path="jackets"
          element={
            <Jackets
              title="Jackets"
              query={GET_ITEMS}
              tag={{ tag: ["jacket"] }}
            />
          }
        />
        <Route
          path="new"
          element={
            <New title="New clothes" query={GET_ITEMS} tag={{ tag: ["new"] }} />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
