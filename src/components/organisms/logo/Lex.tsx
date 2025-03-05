import React from "react";
import { useSelector } from "react-redux";

const Aico = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { LaxPartnersData } = screenData || {};
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd pt-1">
                LEX PARTNERS <br /> PRAWNICY POZNAŃ
              </h5>
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {LaxPartnersData?.subtitle}
              </h3>
            </div>
          </div>
        </div>

        {/* <div className="custom-container1-image">
          <img
            src={LaxPartnersData?.image_1}
            alt="Księga znaku - użycie w celu zaprojektowania nowego logo"
            title="Księga znaku dająca pomysł na znak firmowy"
          />
        </div> */}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {LaxPartnersData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top mobilelefttext">
                {/* {LaxPartnersData?.text2} */}
                To logo to nie tylko znak – to wizualne wyrażenie wartości
                kancelarii i zobowiązanie do zapewniania najwyższej jakości
                usług prawniczych. Dzięki niemu Lex Partners buduje
                rozpoznawalność i zaufanie wśród klientów poszukujących
                rzetelnych partnerów w zakresie w prawa.
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container mt-0  mobilemp0">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={LaxPartnersData?.image_1}
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
                {LaxPartnersData?.quote}
              </h5>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="signature">{LaxPartnersData?.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aico;
