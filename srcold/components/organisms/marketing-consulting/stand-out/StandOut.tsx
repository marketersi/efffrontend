import React, { useEffect, useState } from "react";
import "./stand-out.css";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const StandOut = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  const { WhyUs } = screenData || {};
  const {
    info_image_url_2,
    info_2,
    question_2,
    info_image_url_1,
    info_1,
    question_1,
    image_url_1,
    paragraph_4,
    paragraph_3,
    paragraph_2,
    paragraph_1,
    subtitle,
    title,
  } = WhyUs || {};

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

  function isMobile() {
    return typeof window !== "undefined" && window.innerWidth <= 768;
  }

  return (
    <div className="so_sec">
      <Container className="text-center">
        <div className="so_header">
          <h1>{title}</h1>
          <p>
            <em>{subtitle}</em>
          </p>
        </div>
        <div className="so_paras">
          <p>{paragraph_1}</p>
          <p>{paragraph_2}</p>
          <p>{paragraph_3}</p>
          <p>{paragraph_4}</p>
          <div className="so_img">
            <img src={image_url_1} alt="graph image" />
          </div>
        </div>

        <div className="so_flex">
          <div>
            <h2>{question_1}</h2>
            <p>{info_1}</p>
          </div>
          <div>
            <img
              src={info_image_url_1}
              alt="info_image1"
              className="so_image"
            />
          </div>
        </div>

        <div className="so_flex">
          {!mobile && (
            <div>
              <img
                src={info_image_url_2}
                alt="info_image2"
                className="so_image"
              />
            </div>
          )}
          <div>
            <h2>{question_2}</h2>
            <p>{info_2}</p>
          </div>
          {mobile && (
            <div>
              <img src={info_image_url_2} alt="info_image2" />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default StandOut;
