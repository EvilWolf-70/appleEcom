import React from "react";
import { assets } from "../../assets/images/assets";

const ServiceSec = () => {
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="service-wrapper">
            <div className="service-item">
              <img src={assets.ExportServices} alt="service-img" />
              <div className="content">
                <h5 className="title">FREE AND FAST DELIVERY</h5>
                <p className="desc">Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="service-item">
              <img src={assets.ExportServices} alt="service-img" />
              <div className="content">
                <h5 className="title">24/7 CUSTOMER SERVICE</h5>
                <p className="desc">Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="service-item">
              <img src={assets.ExportServices} alt="service-img" />
              <div className="content">
                <h5 className="title">MONEY BACK GUARANTEE</h5>
                <p className="desc">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSec;
