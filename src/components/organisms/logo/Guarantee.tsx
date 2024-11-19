import React, { useState } from "react";
import { useSelector } from "react-redux";

const Guarantee = ({ openModal }) => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GuaranteeData } = screenData || {};
  const { title, subtitle, buttontext } = GuaranteeData || {};

  return (
    <>
      <section>
        <div className="container projects-custom-white-container menu-target text-center">
          <div className="projects-big-100">100%</div>
          {title && <div className="projects-big-sub100">{title}</div>}
          {subtitle && <div className="projects-big-text100">{subtitle}</div>}

          <button
            className="download-catalog-button-2 projects-download-catalog-button projects-button-margin send-offer-button js--triggerAnimation"
            type="button"
            fdprocessedid="jeqyl"
            onClick={openModal}
          >
            <strong>{buttontext && buttontext}</strong>
          </button>
        </div>
      </section>
    </>
  );
};

export default Guarantee;
