"use client";
import React from "react";
import "./pricing-option.css";
import { Container } from "react-bootstrap";
import CardTwo from "../../cennik/menu-two/CardTwo";
import { useSelector } from "react-redux";

const PricingOption = () => {
  const {  screenData1 } = useSelector((state) => state.consulting);
  console.log(screenData1 , 'screenData1@13')
  
    const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { PricingOption } = screenData1 || {};
  const { Form1 } = screenData1?.PricingOption || {};
  const { Form } = screenData?.cardMenu?.MenuTwo || {};

  const titlee = "Odblokuj zyski z Marketersi:\npierwszy krok ku wielkim zmianom.";

  
  
  return (
    <section>
      <div className="container po_pricing_sec">
        <div className="row justify-content-center m-0">
          <div className="p-0">
              <h2 style={{ whiteSpace: "pre-line" }} className="po_title">
              {titlee}
              </h2>

            <div className="mt-3">
              <p className="po_subtitle">{PricingOption?.subtitle}</p>
            </div>

            <div className="po_card_custom">
              <CardTwo form={Form} />
            </div>
          </div>
        </div>
      </div>

      <div className="po_brands po_brandsNew">
        
      <div className="po_brandsNewInner">
        <p>{PricingOption?.brand_quote}</p>
        <img
          src={PricingOption?.brand_image}
          alt="experts"
          className="brand_desktop"
        />
        {/* mobile image */}
        <img src={PricingOption?.brand_image_mobile} className="brand_mobile" />
      </div>
      </div>
    </section>
  );
};

export default PricingOption;
