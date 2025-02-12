import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx8 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example6 } = implementation || {};
  return (
    <section className="names-thematic-section-black">
      <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="names-client-name copywriter-cname names-color-white cname-big-mtop custom-cname-small-margin underline-down">
              {example6?.title}
            </div>

            <div className="names-client-desc names-color-dark names-custom-gray-text names-color-grey new-margin-gray nazwa_cardtwo_text">
              {example6?.subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="naming-seo-img">
        <img
          src={example6?.image_1}
          title="Jak podejść do nazwy dla nowej firmy? Przykład logotypu"
          alt="Victoria Coburg - dostępność domen"
        />
      </div> */}

      <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize names-color-light-dark names-custom-gray-text names-color-grey-med pnazw-new-custom-margin nazwa_cardtwo_quote">
              {example6?.quote}
            </h5>

            <p className="signature projects-gray-color-signature names-color-grey-dark newsignmargin nazwa_cardtwo_quoteauthor">
              {example6?.quote_name}
            </p>

            <p className="theme-desc names-color-light-dark names-color-grey nazwa_cardtwo_text">
              {example6?.para_1}
            </p>

            <p className="theme-desc names-color-light-dark names-color-grey nazwa_cardtwo_text">
              {example6?.para_2}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="naming-seo-img text-center coburg-imgs">
        <img
          src={example6?.image_2}
          title="Projektowanie nowej nazwy i logo - Victoria Coburg"
          alt="Przykład zaprojektowanej nowej nazwy na kartkach"
        />
        <img
          src="https://cdn.owocni.pl/img/single-projektowanie-nazw/seo-images/kampanie-reklamowe-victoria-coburg.jpg"
          title="Dobra nazwa dla firmy na przykładzie Victoria Coburg"
          alt="Tworzenie nazw firm na przykładzie Victoria Coburg"
        />
      </div> */}
    </section>
  );
};

export default ImplementationEx8;
