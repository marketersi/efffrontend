import React, { useEffect, useState } from "react";
import style from "../opinie.module.css";
import { Col, Row } from "react-bootstrap";
import GoogleCard from "./GoogleCard";
import Slider from "react-slick";

function isMobile() {
  return typeof window !== "undefined" && window.innerWidth <= 768;
}

export default function GoogleReview() {
  const [showAll, setShowAll] = useState(false);

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
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <div className={style.google}>
        <div className={style.opinionContainer}>
          <div className={style.opinionContent}>
            <h2>
              127 <span> pozytywnych opinii</span> <br />w Google- Dziękujemy!
            </h2>
            <div className={style.googleMenu}>
              <ul>
                <li>Sortuj</li>
                <li>
                  <div className={style.playBG}>
                    <img src="/assets/images/play_arrow.svg" alt="" />
                  </div>
                </li>
                <li className={style.googleHover}>
                  <p>Najnowsze</p>
                  <div className={style.hoverMenu}>
                    <a href="#">Najwyżej oceniane</a>
                    <a href="#">Najniżej oceniane</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className={style.googleReviewBanner}>
              <img
                src="https://www.owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle.1ad8cd13.jpg&w=750&q=75"
                alt=""
              />
            </div>

            <div className={style.googleReview}>
              {showAll ? (
                <div className={style.allItemsContainer}>
                  <Row>
                    {Array.from({ length: 9 }).map((_, index) => {
                      return (
                        <Col md={4} key={index}>
                          <GoogleCard />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              ) : (
                <Slider {...settings}>
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                  <GoogleCard />
                </Slider>
              )}

              {!showAll && (
                <div
                  className={`${style.showAllbtn} ${style.mt95}`}
                  onClick={() => setShowAll(!showAll)}
                >
                  <span>Pokaż wszystkie</span>
                  <div className={style.googlePlay}>
                    <img src="https://www.owocni.pl/assets/arrow.svg" alt="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
