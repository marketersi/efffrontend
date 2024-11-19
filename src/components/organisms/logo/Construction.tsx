import React from "react";
import { useSelector } from "react-redux";


const Construction = () => {
  const {isLoading, screenData} = useSelector((state) => state.logo);
  const{ConstructionData} = screenData || {} ;
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                {ConstructionData?.title}
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc projects-custom-mright">
                {ConstructionData?.subtitle}
              </h3>

              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                {ConstructionData?.text1}
              </p>
             
            </div>
          </div>
        </div>

        {/* <div className="custom-container1-image">
          <img
            src={ConstructionData?.image_1}
            alt="Szczegółowy pomysł na logo firmy wykonany przez grafików"
            title="Przykładowe logo firmy na podstawie pomysłu"
          />
        </div> */}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
              {ConstructionData?.text2}
              </p>
              <p className="theme-desc projects-theme-desc-p">
              {ConstructionData?.text3}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={ConstructionData?.image_2}
              title="Przykładowy projekt logo firmy Core"
              alt="Nowy branding zapewni firmie Core nowych klientów"
              style={{ position: "relative", maxWidth: "none" }}
            />
            
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image">
                {ConstructionData?.quote}
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">{ConstructionData?.quoteAuthor}</p>
              <p className="theme-desc projects-theme-desc-p">
                {ConstructionData?.text4}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Construction;
