import React from "react";
import SecBreadcumb from "../inner-components/SecBreadcumb";
import Button from "../inner-components/Button";
import Product from "../Products/Product";

const BestSelling = () => {
  return (
    <>
      <section className="best-selling-sec">
        <div className="container">
          <SecBreadcumb tag="This Month" title="Best Selling Products"  component2={Button}/>
          <div className="best-selling-wrapper">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSelling;
