"use client";

import React, { useRef } from "react";
import style from "../team.module.css";
import { Row, Col, Container } from "react-bootstrap";
import {motion, Variants} from 'framer-motion'
import { useSelector } from "react-redux";

const Caring = () => {

  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section6 } = screenData;
  const { Card1, Card2, Card3 } = screenData?.section6  || {} ;

  const slideAnimationTop: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
     y: 0,
     opacity: 1,
      transition: {
        type: 'ease',
        bounce: 0.4,
        duration: 2,
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <div className={style.caring}>
        {/* <img
          src={section6?.image_6}
          className={style.caringImg}
          alt="ghjk"
        /> */}
        <Container>
          <Row className={style.cartRow}>
            <Col lg={4}>
              <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src={Card1?.card1_img} alt="" />
                <h4>{Card1?.card1_title}</h4>
                <p>{Card1?.card1_text}</p>
              </motion.div>
            </Col>
            <Col lg={4} className={style.cartTop}>
            <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src={Card2?.card2_img} alt="" />
                <h4>{Card2?.card2_title}</h4>
                <p>{Card2?.card2_text}</p>
              </motion.div>
            </Col>
            <Col lg={4}>
            <motion.div
                className={style.caringCard}
                initial="offscreen"
                whileInView="onscreen"
                variants={slideAnimationTop}
              >
                <img src={Card3?.card3_img} alt="" />
              <h4>{Card3?.card3_title}</h4>
              <p>{Card3?.card3_text}</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Caring;
