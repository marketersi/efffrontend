import React from 'react';
import style from '../opinie.module.css';
import { Row, Col } from 'react-bootstrap';
// import { motion, Variants } from 'framer-motion';
import { useSelector } from 'react-redux';

const Teams = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const teams = screenData.teams || {};

  // const springUp: Variants = {
  //   offscreen: {
  //     x: -100,
  //   },
  //   onscreen: {
  //     x: 100,
  //     transition: {
  //       type: 'ease',
  //       bounce: 1,
  //       damping: 10,
  //       stiffness: 200,
  //       duration: 2,
  //     },
  //   },
  // };

  return (
    <>
      <div className={style.teams}>
        <div className={style.teamsContainer}>
          <div className={style.teamsTopContent}>
            <h2>{teams.title}</h2>
            {/* to be deleted */}
            {/* <img src={teams.img_one} alt="" /> */}
          </div>
          <div className={style.teamsCard}>
            <Row>
              <Col lg={6}>
                {/* to be deleted */}
                {/* <img className={style.maleImg} src={teams.img_two} alt="" /> */}
                <h4 className={style.teamLeftContent}>{teams.para_four}</h4>
              </Col>
              <Col lg={6}>
                <div className={style.teamsCardContent}>
                  <h5>{teams.para_one}</h5>
                  <p>{teams.para_two}</p>
                  <p>{teams.para_three}</p>
                </div>
              </Col>
            </Row>
          </div>
          {/* to be deleted */}
          {/* <motion.img
            style={{ margin: "-500px 0 0 -160px", width: "450px" }}
            src="https://owocni.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbottom.eef04a74.png&w=750&q=75"
            alt=""
            initial="offscreen"
            whileInView="onscreen"
            variants={springUp}
            className={style.animatedCar}
          /> */}
        </div>
      </div>
    </>
  );
};

export default Teams;
