import React from "react";
import style from "../team.module.css";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

const Support = () => {
  
  const { isLoading, screenData } = useSelector((state) => state.team);
  const {  section2 } = screenData;

  return (
    <>
      <section className="container">
      <Row className={style.Support}>
        <Col md={7} className={style.teamContent}>
          <h4>
          Każdy projekt <br/>realizujemy kompleksowo.
          </h4>
          
        </Col>
        <Col md={5} className={style.imagebox}>
          <img src={section2?.section_two_image} alt="" />

        </Col>
      </Row>
      </section>
    </>
  );
};

export default Support;
