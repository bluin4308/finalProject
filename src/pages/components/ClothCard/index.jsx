import React from "react";

const ClothCard = (props) => {
  return (
    <div className="basis-200px">
      <img
        className="w-[100px]"
        src={props.featuredImage.node.sourceUrl}
        alt={props.featuredImage.node.title}
      />
      <p className="text-xs">{props.title}</p>
      <p>{props.customFields.price}</p>
    </div>
  );
};

export default ClothCard;
