import React, {useRef} from "react";
import BreadcumbBtnArrow from "../inner-components/BreadcumbBtn";
import SecBreadcumb from "../inner-components/SecBreadcumb";
import CategoryItem from "../Products/CategoryItem";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
const CategorySlider = () => {
    const swiperRef = useRef(null);
  return (
    <>
      <section className="category-sec">
        <div className="container">
          <SecBreadcumb tag = "Categories" title="Browse By Category"
            // component1={FlashSaleCounter}
            // component2={BreadcumbBtnArrow}
          />
        <div className="category-slider position-relative">
        <Swiper
            className="category-slider-1"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={5}
              grabCursor={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                disabledClass: "swiper-button-disabled"
              }}
            loop={true}
              pagination={{ clickable: false }}
            //   autoplay={{ delay: 2500 }}
            >
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
             <SwiperSlide>
             <CategoryItem /> 
             </SwiperSlide>
            </Swiper>
            {/* <CategoryItem /> */}
            <BreadcumbBtnArrow swiperRef={swiperRef} />

        </div>

        </div>
      </section>
    </>
  );
};

export default CategorySlider;
