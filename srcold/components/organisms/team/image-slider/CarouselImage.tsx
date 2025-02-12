// ImageCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./imageslider.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const CustomPrevArrow = (props) => {
  const buttonVariants = {
    initial: { y: 0 },
    hover: { y: 3 },
  };

  const { className, style, onClick } = props;
  return (
    <motion.div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
      whileHover={{ translateY: 5 }}
      variants={buttonVariants}
      initial="initial"
    >
      Prev
    </motion.div>
  );
};

const CustomNextArrow = (props) => {
  const buttonVariants = {
    initial: { y: 0 },
    hover: { y: 3 },
  };

  const { className, style, onClick } = props;
  return (
    <motion.div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
      whileHover={{ translateY: 5 }}
      variants={buttonVariants}
      initial="initial"
    >
      Next
    </motion.div>
  );
};

const ImageCarousel = ({ images }) => {


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
