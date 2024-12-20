import React, { useRef } from 'react'
import SecBreadcumb from "../inner-components/SecBreadcumb";

import Button from "../inner-components/Button";
import BreadcumbBtnArrow from "../inner-components/BreadcumbBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Grid
} from "swiper/modules";

import "swiper/css";
import Product from "../Products/Product";
const ExploreProducts = () => {
    const swiper1Ref = useRef(null);

  return (
    <>
    <section className="explore-product-sec">
        <div className="container">
        <SecBreadcumb tag="Our Products" title="Explore Our Products"  />
            <div className="explore-product-sec-wrapper position-relative">
            <Swiper
            className="explore-product-slider-1 "
            onSwiper={(swiper) => (swiper1Ref.current = swiper)}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Grid]}
            //   slidesPerGroup={5}
              spaceBetween={20}
              slidesPerView={4}
              
              grabCursor={true}
              navigation={{
                // nextEl: ".swiper-button-next",
                // prevEl: ".swiper-button-prev",
                disabledClass: "swiper-button-disabled"
              }}
            loop={true}
              pagination={{ clickable: false }}
            //   autoplay={{ delay: 2500 }}
            >
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
              <SwiperSlide>
                <Product />
                <Product />
             </SwiperSlide>
            </Swiper>
            <BreadcumbBtnArrow swiperRef={swiper1Ref} />
            </div>
            <div className="button-wrapper">
            <Button title="View all Products" />
          </div>
        </div>
    </section>
    </>
      )
}

export default ExploreProducts