import React from "react";
import style from "../opinie.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Banner = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const banner = screenData.Banner || {};

  return (
    <>
      <div className={style.opinionBanner}>
        <Container>
          <Row>
            <Col lg={4} md={6}>
              <div className={style.opinionContent}>
                <h1>{banner.title}</h1>
              </div>
            </Col>
            <Col lg={4} md={6} className="d-flex align-item-center">
              <img src={banner.image_1} alt="" />
            </Col>
            <Col lg={4} md={12}>
              <img
                className={style.opinionBnnaerImg}
                src={banner.image_2}
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
