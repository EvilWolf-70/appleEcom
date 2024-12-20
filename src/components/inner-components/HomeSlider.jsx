import React from "react";
import { assets } from "../../assets/images/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HomeSlider = () => {
  return (
    <>
      <div className="home-slider">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
            navigation
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
        >
          <SwiperSlide>
            <div className="bg-wrapper">
              <div className="left-content">
                <div className="wrapper-d-flex ">
                  <img src={assets.AppleIcon} alt="apple Icon" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="slide-content">Up to 10% off Voucher</h1>
                <div className="slide-btn">
                  <a href="#">shop Now</a>
                  <img src={assets.BtnArrow} alt="Arrow" />
                </div>
              </div>
              <div className="right-img">
                <img src={assets.Hero_img} alt="Hero Img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-wrapper">
              <div className="left-content">
                <div className="wrapper-d-flex ">
                  <img src={assets.AppleIcon} alt="apple Icon" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="slide-content">Up to 10% off Voucher</h1>
                <div className="slide-btn">
                  <a href="#">shop Now</a>
                  <img src={assets.BtnArrow} alt="Arrow" />
                </div>
              </div>
              <div className="right-img">
                <img src={assets.Hero_img} alt="Hero Img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-wrapper">
              <div className="left-content">
                <div className="wrapper-d-flex ">
                  <img src={assets.AppleIcon} alt="apple Icon" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="slide-content">Up to 10% off Voucher</h1>
                <div className="slide-btn">
                  <a href="#">shop Now</a>
                  <img src={assets.BtnArrow} alt="Arrow" />
                </div>
              </div>
              <div className="right-img">
                <img src={assets.Hero_img} alt="Hero Img" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-wrapper">
              <div className="left-content">
                <div className="wrapper-d-flex ">
                  <img src={assets.AppleIcon} alt="apple Icon" />
                  <p>iPhone 14 Series</p>
                </div>
                <h1 className="slide-content">Up to 10% off Voucher</h1>
                <div className="slide-btn">
                  <a href="#">shop Now</a>
                  <img src={assets.BtnArrow} alt="Arrow" />
                </div>
              </div>
              <div className="right-img">
                <img src={assets.Hero_img} alt="Hero Img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HomeSlider;
