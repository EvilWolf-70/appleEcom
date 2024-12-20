import React from "react";
import { assets } from "../../assets/images/assets";

const CategoryItem = () => {
  return (
    <>
      <div className="category-item">
        <img
          src={assets.CategoryWatch}
          className="category-image"
          alt="category-img"
        />
        <p className="category-text">SmartWatch</p>
      </div>
    </>
  );
};

export default CategoryItem;
