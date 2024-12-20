import React from "react";
import { assets } from "../../assets/images/assets";

const BreadcumbBtnArrow = ({ swiperRef }) => {
  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  return (
    <>
      <div className="slider-btns">
        <div className="btn-1 btn " onClick={handlePrev}>
          <img src={assets.LeftArrow_b} alt="left-arrow" />
        </div>
        <div className="btn-2 btn " onClick={handleNext}>
          <img src={assets.RightArrow_b} alt="left-arrow" />
        </div>
      </div>
    </>
  );
};

export default BreadcumbBtnArrow;

// const SwiperControls = ({ swiperRef }) => {
//   const handlePrev = () => swiperRef.current?.slidePrev();
//   const handleNext = () => swiperRef.current?.slideNext();
//   return (
//     <div className="swiper-controls">
//       {" "}
//       <button onClick={handlePrev}>Prev</button>{" "}
//       <button onClick={handleNext}>Next</button>{" "}
//     </div>
//   );
// };
