"use client";
import React from "react";
import "./pricing-option.css";
import { Container } from "react-bootstrap";
import CardTwo from "../../cennik/menu-two/CardTwo";
import { useSelector } from "react-redux";

const PricingOption = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);
  const { PricingOption } = screenData || {};
  const { Form } = screenData?.PricingOption || {};

  return (
    <section>
      <div className="container po_pricing_sec">
        <div className="row justify-content-center m-0">
          <div>
            <h2 className="po_title">{PricingOption?.title}</h2>
            <div className="mt-3">
              <p className="po_subtitle">{PricingOption?.subtitle}</p>
            </div>

            <div className="po_card_custom">
              <CardTwo form={Form} />
            </div>
          </div>
        </div>
      </div>

      <div className="po_brands">
        <p>{PricingOption?.brand_quote}</p>
        <img
          src={PricingOption?.brand_image}
          alt="experts"
          className="brand_desktop"
        />
        {/* mobile image */}
        <img src={PricingOption?.brand_image_mobile} className="brand_mobile" />
      </div>
    </section>
  );
};

export default PricingOption;
