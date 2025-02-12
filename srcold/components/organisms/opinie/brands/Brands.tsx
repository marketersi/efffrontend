import React from "react";
import style from "../opinie.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const Brands = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const brands = screenData.brands || {};
  const brand = brands.brand || [];

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="brandImgBtn">
        <div className="OurClients_Slide_Button_Text">Następna</div>
        <div className="ArrowButton" onMouseEnter={onClick}>
          <span className="ArrowButton_Arrow">&gt;</span>
        </div>
      </div>
    );
  }

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className={style.brands}>
        <div className={style.opinionContainer}>
          <h2>{brands.title}</h2>
          {brand?.map((e, i) => {
            return (
              <>
              <div className="row">
                <div className="col-md-10">
                <div className={style.brandSlide} key={i}>
                <h4>{e.brand_title}</h4>
                <div className={style.brandSlideItem}>
                  <Slider {...settings}>
                    {e.image.map((e, i) => {
                      return <img src={e} key={i} />;
                    })}
                  </Slider>
                </div>
              </div>
                </div>
              </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Brands;
