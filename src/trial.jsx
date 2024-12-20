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



const App = () => {
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);
  return (
    <div>
      {/* Swiper 1 */}
      <Swiper
        onSwiper={(swiper) => (swiper1Ref.current = swiper)}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1 - Slider 1</SwiperSlide>
        <SwiperSlide>Slide 2 - Slider 1</SwiperSlide>
      </Swiper>
      <SwiperControls swiperRef={swiper1Ref} />
      {/* Swiper 2 */}
      <Swiper
        onSwiper={(swiper) => (swiper2Ref.current = swiper)}
        slidesPerView={1}
      >
        <SwiperSlide>Slide 1 - Slider 2</SwiperSlide>
        <SwiperSlide>Slide 2 - Slider 2</SwiperSlide>
      </Swiper>
      <SwiperControls swiperRef={swiper2Ref} />
    </div>
  );
};