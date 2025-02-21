import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CoverFlowSlider = () => {
  const carousel = React.useRef(null);

  const { screenData } = useSelector((state) => state.ux);
  const slider = screenData.slider || {};

  const [slideIndex, setSlideIndex] = useState(0);

  const NextArrow = ({ onClick }) => {
    return <FaArrowRight className="custom-arrow next" onClick={onClick} />;
  };
  
  const PrevArrow = ({ onClick }) => {
    return <FaArrowLeft className="custom-arrow prev" onClick={onClick} />;
  };

  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    dots: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: true, // Enable arrows
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      
      <Slider {...settings} className="UxSlider" ref={carousel}>
  {slider?.images?.map((e, index) => {
    return (
      <div key={index} className={index === slideIndex ? "slide slide-active" : "slide"}>
        <a href={e.image_link} target="blank">
          <img src={e.Image} alt={`image ${index + 1}`} />
        </a>
      </div>
    );
  })}
</Slider>;
    </div>
  );
};

export default CoverFlowSlider;
