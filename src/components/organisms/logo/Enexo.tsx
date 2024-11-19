import React from "react";
import { useSelector } from "react-redux";

const Enexo = () => {

  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { EnexoData } = screenData || {};


  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
                {EnexoData?.title}
              </h5>

              <h3 className="projects-theme-title-2 text-left">
                {EnexoData?.subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc projects-custom-margin-2">
                {EnexoData?.text1}
                
              </p>
              <p className="theme-desc projects-theme-desc-p">
                {EnexoData?.text2}
              </p>
              <p className="theme-desc projects-theme-desc-p">
                {EnexoData?.text3}
              </p>
              <p className="theme-desc projects-theme-desc-p">
                {EnexoData?.text4}
              </p>
            </div>
          </div>
        </div>
        <div className="image-810-container projects-image-810-container projects-mb-30">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={EnexoData?.image}
              title="Projektowanie logo - freelancer wykonał je dla Enexo"
              alt="Wizerunek Twojej marki - freelancer czy zatrudnienie agencji?"
              style={{ position: "relative", maxWidth: "none" }}
            />
            
          </div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
             {EnexoData?.quote}
            </h5>
            <p className="signature">{EnexoData?.quoteAuthor}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enexo;
