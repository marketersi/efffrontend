import React from "react";
import { useSelector } from "react-redux";

const Aico = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { AicoData } = screenData || {};
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                {/* {AicoData?.title} */}
                AVRON <br/> ŁÓDŹ
              </h5>
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {AicoData?.subtitle}
              </h3>
              {/* <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                {AicoData?.text1}
              </p> */}
            </div>
          </div>
        </div>

        {/* <div className="custom-container1-image">
          <img
            src={AicoData?.image_1}
            alt="Księga znaku - użycie w celu zaprojektowania nowego logo"
            title="Księga znaku dająca pomysł na znak firmowy"
          />
        </div> */}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
            <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc  mb-4 mobilelefttext">
                {AicoData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top mb-4 mobilelefttext">
                {AicoData?.text2}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {AicoData?.text3}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mobilelefttext">
                {AicoData?.text4}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container mt-0">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={AicoData?.image_2}
              title="Przykład pracy przy projektowaniu logo na bazie Aico"
              alt="Aico jako przykład procesu w projektowaniu logo"
              style={{ position: "relative", maxWidth: "none" }}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image margin-right-74">
                {AicoData?.quote}
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">{AicoData?.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aico;
