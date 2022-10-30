import React, { useState } from "react";
import ClothCard from "../ClothCard";

const CategoryLayout = (props) => {
  return props.data.map((item, index) => <ClothCard key={index} {...item} />);
};

export default CategoryLayout;
