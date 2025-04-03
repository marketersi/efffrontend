'use client';

import React from 'react';
import style from '../main.module.css';
import ReactPlayer from 'react-player';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import useOsClass from '@/components/molecules/useOsClass';

const HardResult = () => {
  const { screenData } = useSelector((state) => state.videoEditing);
  const imageswithdescription = screenData?.imageswithdescription;
  const { section4, section5, section6, section7 } =
    imageswithdescription || {};
    const osClass = useOsClass();
  return (
    <div>
      <Container>
        <div className={style.hardResult}>
          <div className={style.Content}>
            <h2 className={style.hardMB}>{section4?.title}</h2>
            <h3 className={style.gradientBG}>- {section4?.subtitle}</h3>
            {/* <img src={section4?.image_url} alt="" className={style.hardImg} /> */}
            <p>{section4?.paragraph_1}</p>
            <p>{section4?.paragraph_2}</p>
          </div>

          <Row className="mb-5">
            <Col lg={6} className="order-lg-1 order-2">
              <h4>{section5?.quote}</h4>
            </Col>
            <Col lg={6} className="order-lg-2 order-1">
            <div className={osClass}>
            {/* <ReactPlayer
                url={section5?.video_url}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                muted={true}
                pip={false}
                playsinline
              /> */}
            </div>
            </Col>
          </Row>
          <div className={style.Content}>
            <p>{section5?.paragraph_1}</p>
            <p>{section5?.paragraph_2}</p>
          </div>
          <Row className="mt-5 pt-5 mb-5 pb-5">
            <Col lg={7} className={osClass}>
              {/* <ReactPlayer
                url={section6?.video_url}
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                muted={true}
                pip={false}
                playsinline
              /> */}
            </Col>
            <Col lg={5}>
              <h4 className="text-end">{section6?.quote}</h4>
            </Col>
          </Row>

          <div className={osClass}>
          <div className={style.Content}>
            <p>
              <span>{section6?.subtitle}</span> <br />
              {section6?.paragraph_1}
            </p>
            <p>{section6?.paragraph_2}</p>
            <p>{section6?.paragraph_3}</p>
            {/* <ReactPlayer
              url={section7?.video_url_1}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            <h2 className={style.brandingHeading}>{section7?.title}</h2>

            <p>{section7?.paragraph_1}</p>
            {/* <ReactPlayer
              url={section7?.video_url_3}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            <p>{section7?.paragraph_2}</p>
            <p>{section7?.paragraph_3}</p>
            {/* <ReactPlayer
              url={section7?.video_url_4}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
            <p>{section7?.paragraph_4}</p>
            {/* <ReactPlayer
              url={section7?.video_url_5}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
            /> */}
           
            <div className={`mb-5 pb-5  ${style.ratingLogoImg}`}>
              <Image
                src={section7?.image_url_1}
                alt="rating image"
                width="100%"
                height="auto"
              />
              {/* <Image
                src={section7?.image_url_2}
                alt="rating image"
                width="auto"
                height="auto"
              /> */}
            </div>
          </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HardResult;
