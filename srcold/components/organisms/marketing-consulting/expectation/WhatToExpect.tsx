import React from "react";
import "./expect.css";
import { Container } from "react-bootstrap";
import "./expect.css";
import { useSelector } from "react-redux";

const WhatToExpect = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);
  const { WhatToExpect } = screenData || {};

  const {
    brand_logo,
    paragraph_6,
    paragraph_5,
    paragraph_4,
    paragraph_3,
    paragraph_2,
    image_url_right,
    image_url_left,
    paragraph_1,
    title,
  } = WhatToExpect || {};

  return (
    <Container className="text-center wte">
      <div className="wte_header">
        <h2>{title}</h2>
        <p>{paragraph_1}</p>
      </div>

      <div className="d-flex justify-content-center align-items-center toExpect">
        <img
          src={image_url_left}
          alt="feather image left"
          className="leaf_img"
        />
        <div className="w-sm-50 mx-sm-5">
          <p>{paragraph_2}</p>
          <p>{paragraph_3}</p>
        </div>
        <img
          src={image_url_right}
          alt="feather image right"
          className="leaf_img_right leaf_img"
        />
      </div>

      <div className="wte_end">
        <p>{paragraph_4}</p>
        <p>{paragraph_5}</p>
        <p className="my-5">{paragraph_6}</p>

        <img src={brand_logo} alt="brand logo" className="logoImg" />
      </div>
    </Container>
  );
};

export default WhatToExpect;
