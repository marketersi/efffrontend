import React from "react";
import "./happyCustomers.css";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useSelector } from "react-redux";

const HappyCustomers = () => {
  const { isLoading, screenData: homeScreenData } = useSelector(
    (state) => state.home
  );
  const { ClientReviews } = homeScreenData || {};
  const { SliderImages, RatingCard, ClientFeedback, FeedbackSummary } =
    ClientReviews || {};
  const { row1, row2, row3, row4 } = SliderImages || {};

  const { screenData } = useSelector((state) => state.opinion);
  const customerReplies = screenData.customerReplies || {};


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
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className="OurClients_Marquee full">
        {/* Marquee 1 */}
        <Marquee autoFill speed={175}>
          {row1?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 1 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 2 */}
        <Marquee autoFill speed={100}>
          {row2?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 2 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 3 */}
        <Marquee autoFill speed={100}>
          {row3?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 3 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
        {/* Marquee 4 */}
        <Marquee autoFill speed={150}>
          {row4?.map((e, i) => {
            return (
              <Image
                src={e.message}
                alt="row 4 image"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  filter: "grayscale(100%)",
                  opacity: "0.5",
                }}
                key={i}
              />
            );
          })}
        </Marquee>
      </div>
      <div className="replies">
        <div className="customer_replies_container">
          <h1>{customerReplies.title}</h1>
          <div>
            <Slider {...settings}>
              {customerReplies.reviews?.map((customerReply, index) => (
                <div key={index}>
                  {customerReply.map((reply, idx) => (
                    <div key={idx} className="single_review_card">
                      “{reply}”
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default HappyCustomers;
