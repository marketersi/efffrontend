"use client";

import React from "react";
import style from "../main.module.css";
import ReactPlayer from "react-player";
import { Container, Image, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import useOsClass from "@/components/molecules/useOsClass";

const Entrepreneur = () => {
  const { isLoading, screenData } = useSelector((state) => state.home);
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
            <h3 className={style.gradientBG}> {section4?.subtitle}</h3>
            {/* <img src={section4?.image_url} alt="" className={style.hardImg} /> */}
            <p>{section4?.paragraph_1}</p>
            <p>{section4?.paragraph_2}</p>
          </div>

          <Row className="mb-3">
            <Col lg={12}>
              <h4 dangerouslySetInnerHTML={{ __html: section5?.quote }} />
            </Col>
            <Col lg={12} className={osClass}>
              <ReactPlayer
                url={section5?.video_url}
                playing={true}
                loop={true}
                width="99%"
                height="auto"
                muted={true}
                pip={false}
                playsinline
                style={{ margin: "20px auto 0" }}
              />
            </Col>
          </Row>
          <div className={style.Content}>
            <p>{section5?.paragraph_1}</p>
            <p>{section5?.paragraph_2}</p>
          </div>
        </div>

        <Row className="helmet mb-md-0 mb-sm-2">
          <Col lg={12} className={osClass}>
            <ReactPlayer
              url={section6?.video_url}
              playing={true}
              loop={true}
              width="100%"
              height="auto"
              muted={true}
              pip={false}
              playsinline
              className="helmetVideo"
              style={{ margin: "0 auto" }}
            />
          </Col>
        </Row>

        <div className={style.hardResult}>
          <Row className="helmet mb-md-5 mb-sm-2">
            <Col lg={12}>
              <h4 className={style.contentFont}>{section6?.quote}</h4>
            </Col>
          </Row>

          <div className={style.Content}>
            <p>
              <span>{section6?.subtitle}</span> <br />
              {section6?.paragraph_1}
            </p>
            <p>{section6?.paragraph_2}</p>
            <p>{section6?.paragraph_3}</p>
          </div>
          <div className={`{style.videoContainer}`}>
            <div className={osClass}>
              <ReactPlayer
                url={section7?.video_url_1}
                // url="https://marketersi.cdn.prismic.io/marketersi/Zulk2bVsGrYSvbNp_ZjIQfEMTzAJOCdrt_MariaBilal2-1-.webm"
                playing={true}
                loop={true}
                width="100%"
                height="auto"
                muted={true}
                pip={false}
                playsinline
              />
            </div>
          </div>

          <div className={style.Content}>
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
            {/* to be added an image and the above video to be removed */}
          </div>

          <div className={style.videoContainer}>
            <img src={section7?.video_url_3} className={style.girlImage} />
          </div>

          <div className={style.Content}>
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
            <h6 className={style.fontSmall}>{section7?.bottom_title}</h6>
            <h4 className={style.hardBottomContent}>
              {section7?.quoted_title}
            </h4>
            <div className={`${style.ratingLogoImg}`}>
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
      </Container>
    </div>
  );
};

export default Entrepreneur;
