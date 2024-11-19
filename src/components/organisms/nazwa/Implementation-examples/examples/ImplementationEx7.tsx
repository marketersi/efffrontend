import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx7 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example5 } = implementation || {};
  return (
    <section className="names-thematic-section-purple">
      <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="names-client-name copywriter-cname names-color-white cname-big-mtop custom-cname-small-margin underline-down">
              {example5?.title}
            </div>

            <div className="names-client-desc names-color-dark names-custom-gray-text names-color-purple">
             {example5?.subtitle}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="naming-seo-img">
        <img
          src={example5?.image}
          title="Logo firmy Star finance jako przykład tego jak pracują Owocni"
          alt="Nazwa dla nowej firmy na przykładzie Star finance"
        />
      </div> */}

      <div className="container names-custom-container margin-bottom-whitespace-fix">
        <div className="row">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize names-color-light-dark names-custom-gray-text names-color-purple-med nazwa_cardone_color">
             {example5?.customer_quote}
            </h5>

            <p className="signature projects-gray-color-signature names-color-purple-dark nazwa_cardone_color">
             {example5?.quote_name}
            </p>

            <p className="theme-desc names-color-light-dark names-color-purple names-custom-font-2 text-center pnazw-custom-margin-3 nazwa_cardone_color">
              {example5?.para}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationEx7;
