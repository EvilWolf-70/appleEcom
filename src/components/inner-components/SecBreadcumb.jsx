import React from "react";
import BreadcumbBtnArrow from "./BreadcumbBtn";

const SecBreadcumb = ({component1: Component1 , component2: Component2, tag, title }) => {

  return (
    <>
      <div className="breadcumb-h">
          <div className="breadcumb-wrapper">
            <div className="breadcumb-title-part">
              <div className="content">
                <div className="tagline">
                    <div className="shape"></div>
                    <div className="tag">{tag}</div>
                </div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
              </div>
              {Component1 ? <Component1 targetDate="2024-11-31T23:59:59" /> : null}
              {/* <FlashSaleCounter /> */}
            </div>
            <div className="breadcumb-btn-part">
            {Component2 ? <Component2 title="view all" /> : null}
            </div>
          </div>
        
      </div>
    </>
  );
};

export default SecBreadcumb;
