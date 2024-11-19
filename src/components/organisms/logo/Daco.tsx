import React from "react";
import { useSelector } from "react-redux";
import "./logo.css"

const Daco = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { DacoData } = screenData || {};
 
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
               {DacoData?.title}
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {DacoData?.subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td">
                {DacoData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
              {DacoData?.text2}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
              {DacoData?.text3}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="position-relative"
              src={DacoData?.image}
              title="Projekt logo dla firmy Daco"
              alt="Profesjonalny projekt logo dla firmy Daco"
              style={{ position: "relative", maxWidth: "none" }}
            />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image margin-right-74">
                {DacoData?.quote}
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">{DacoData?.quoteAuthor}</p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {DacoData?.quoteText}
              </p>
            </div>
            <div className="col-md-12 projects-custom-espace"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Daco;
