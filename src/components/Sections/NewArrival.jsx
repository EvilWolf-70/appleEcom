import React from "react";
import SecBreadcumb from "../inner-components/SecBreadcumb";
import { assets } from "../../assets/images/assets";

const NewArrival = () => {
  return (
    <>
      <section className="new-arrival features">
        <div className="container">
          <SecBreadcumb tag="Featured" title="New Arrival" />
          <div className="arrival-wrapper">
            <div className="arrival-item one">
              <div className="content-box">
                <h5 className="title">PlayStation 5</h5>
                <p className="desc">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <a href="#">shop Now</a>
              </div>
              <img
                src={assets.Arrival1}
                alt="Arrival image"
                className="item-img"
              />
            </div>
            <div className="collection-wrapper">
              <div className="arrival-item two">
                <div className="content-box">
                  <h5 className="title">Women’s Collections</h5>
                  <p className="desc">
                    Featured woman collections that give you another vibe.
                  </p>
                  <a href="#">shop Now</a>
                </div>
                <img
                  src={assets.Arrival2}
                  alt="Arrival image"
                  className="item-img"
                />
              </div>
              <div className="inner-collection-wrapper">
                <div className="arrival-item three">
                  <div className="content-box">
                    <h5 className="title">Speakers</h5>
                    <p className="desc">Amazon wireless speakers </p>
                    <a href="#">shop Now</a>
                  </div>
                  <img
                    src={assets.Arrival3}
                    alt="Arrival image"
                    className="item-img"
                  />
                </div>
                <div className="arrival-item three">
                  <div className="content-box">
                    <h5 className="title">Perfume</h5>
                    <p className="desc">GUCCI INTENSE OUD EDP</p>
                    <a href="#">shop Now</a>
                  </div>
                  <img
                    src={assets.Arrival4}
                    alt="Arrival image"
                    className="item-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
