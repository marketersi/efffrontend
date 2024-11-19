'use client';

import React from 'react';
import style from '../team.module.css';
import ReactPlayer from 'react-player';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOsClass from '@/components/molecules/useOsClass';

const Banner = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { herosection } = screenData;
const  osClass = useOsClass();


  return (
    <div className={style.banner}>
      <div className={style.zespolVideo}>
        <div className={osClass}>
        <ReactPlayer
          url={herosection?.background_video}
          playing={true}
          loop={true}
          muted={true}
          width="100%"
          height="auto"
          playsinline
          className={style.bannerVideo}
        />
        </div>
      </div>
      <div className={style.overlay}></div>

      <Container>
        <div className={style.bannerHeading}>
          <h1>{herosection?.main_title}</h1>
        </div>
        {/* <div className={style.img20}>
          <img src={herosection?.left_image} alt="" />
        </div> */}
        <div className={style.bannerBottomContent}>
          <Row>
            <Col xxl={6} lg={7} className="order-lg-1 order-2">
              <div className={style.BannerBotHeading}>
                <h4>{herosection?.sub_title}</h4>
                <h2>{herosection?.title_2}</h2>
              </div>
            </Col>
            {/* to be deleted */}
            <Col xxl={6} lg={5} className="order-lg-2 order-1">
              <div className={style.BannerBotImg}>
                {/* <img src={herosection?.right_image} alt="" /> */}
                <img src={herosection?.left_image} alt="" />
              </div>
            </Col>
          </Row>
          <div className={`${style.teamContent} ${style.bannerContent}`}>
            <p>{herosection?.para_one}</p>
            <p>{herosection?.para_two}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
