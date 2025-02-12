import React, { useEffect, useState } from "react";
import style from "../opinie.module.css";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Rating = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const ratings = screenData.Ratings || {};

  const [scrollOffset, setScrollOffset] = useState(0);
  const [translateY, setTranslateY] = useState(25.1973);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const newTranslateY = -20 + (scrollOffset / 720) * 33;
    setTranslateY(newTranslateY);
  }, [scrollOffset]);

  return (
    <>
      <div className={style.rating}>
        <div className={style.ratingContainer}>
          <div className={style.faceMotion}>
            <div className={style.face}>
              <img
                src={ratings.animated_image}
                alt=""
                className={style.emoFace}
              />
              <div>
                <img
                  className={style.eyes}
                  src={ratings.animated_image2}
                  alt=""
                  style={{
                    transform: `translate3d(0px, ${translateY}px, 0px)`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={style.ratingBlackCard}>
            <Row>
              <Col sm={6}>
                <img src={ratings.banner_image} alt="" />
              </Col>
              <Col sm={6}>
                <div className={style.ratingCardContent}>
                  <h6>{ratings?.paragraph_1}</h6>
                  <p>{ratings?.paragraph_2}</p>
                  <p>{ratings?.paragraph_3}</p>
                </div>
              </Col>
            </Row>
            <div className={style.topBtn}>
              <h4>{ratings.title}</h4>
              <p>{ratings.highlighted_text}</p>
            </div>
            <p style={{ margin: "30px 0 0 " }}>{ratings.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rating;
