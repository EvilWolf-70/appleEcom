import React from "react";
import ProductDropDown from "./inner-components/ProductDropDown";
import HomeSlider from "./inner-components/HomeSlider";

const HeroBanner = () => {
  return (
    <>
      <div className="home-banner">
        <div className="container">
          <div className="wrapper-d-flex">
            <ProductDropDown />
            <HomeSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
