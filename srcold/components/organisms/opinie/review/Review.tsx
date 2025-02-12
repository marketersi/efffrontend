import React, { useEffect, useState } from "react";
import style from "../opinie.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import Stars from "@/components/molecules/Ratings";

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 768;
}

export default function Review() {
  const { screenData } = useSelector((state) => state.opinion);
  const Review = screenData.Review || [];

  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="brand_Slide_ButtonNext">
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
    slidesToShow: mobile ? 1 : 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className={style.job}>
        <div className={style.opinionContainer}>
          <Slider {...settings}>
            {Review.map((e, i) => {
              return <ReviewCard data={e} key={i} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

const ReviewCard = ({ data }) => {
  return (
    <div className={style.cardReview}>
      <img className={style.reviewMainImg} src={data.client_image} alt="" />
      <img className={style.reviewLogoImg} src={data.client_logo} alt="" />
      <div className={style.star}>
        <Stars rating={data.rating_no} size="16px" noShadow />
        <div>
          <h6>{data.client_name}</h6>
          <p>{data.designation}</p>
        </div>
      </div>
      <p>{data.paragraph}</p>
    </div>
  );
};
