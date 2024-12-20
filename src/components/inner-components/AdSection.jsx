import React from "react";
import FlashSaleCounter from "./FlashSaleCounter";
import { assets } from "../../assets/images/assets";

const AdSection = () => {
  return (
    <>
      <section className="ad-section pt-100">
        <div className="container">
          <div className="ad-sec-inner">
            <div className="content-wrapper wrapper">
              <div className="tag">Categories</div>
              <div className="title">
                <h1>Enhance Your Music Experience</h1>
              </div>
              <FlashSaleCounter targetDate="2024-12-31T23:59:59" />
              <button
                style={{ background: "#00ff66" }}
                className="primary-btn"
                type="button"
              >
                <span>Buy now</span>
              </button>
            </div>
            <div className="image-wrapper wrapper">
                <img className="ad-image" src={assets.adImage} alt="ad-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdSection;
