import React, {useRef} from "react";
import SecBreadcumb from "../inner-components/SecBreadcumb";
import FlashSaleCounter from "../inner-components/FlashSaleCounter";
import Button from "../inner-components/Button";
import BreadcumbBtnArrow from "../inner-components/BreadcumbBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import Product from "../Products/Product";
const FlashSales = () => {
  const swiper1Ref = useRef(null);
  return (
    <>
      <section className="flash-sales-sec">
        <div className="container">
          <SecBreadcumb tag="Today’s" title="Flash Sales"
            component1={FlashSaleCounter}
            // component2={BreadcumbBtnArrow}
            
          />
          <div className="flash-sales-slider position-relative">
            <Swiper
            className="flash-sales-slider-1 "
            onSwiper={(swiper) => (swiper1Ref.current = swiper)}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              slidesPerView={4.5}
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
             </SwiperSlide>
             <SwiperSlide>
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
             </SwiperSlide>
             <SwiperSlide>
                <Product />
             </SwiperSlide>
            </Swiper>
            <BreadcumbBtnArrow swiperRef={swiper1Ref} />
            {/* <SwiperControls swiperRef={swiper1Ref} /> */}
          </div>
          <div className="button-wrapper">
            <Button title="View all Products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FlashSales;
