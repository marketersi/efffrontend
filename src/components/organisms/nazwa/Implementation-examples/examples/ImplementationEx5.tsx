import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx5 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example4, example5, example6 } = implementation || {};
  return (
    <section className="projects-gray-opinion-5" style={{ marginTop: "-33px" }}>
      <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="names-client-name copywriter-cname cname-big-mtop underline-down">
              {example4?.title} 
            </div>
            <div className="names-client-desc">
              {example4?.subtitle}
            </div>
          </div>
        </div>
      </div>

      <div className="naming-seo-img">
        <img
          src={example4?.image}
          title="Kampanie reklamowe nie będą problemem z taką nazwą jak Beauforia"
          alt="Przykładowe tworzenie nazw dla salonu kosmetycznego"
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize-2">
              {example4?.customer_quote}
            </h5>
            <p className="signature newsignmargin">{example4?.quote_name}</p>
          </div>
        </div>
      </div>

      <div className="container names-custom-container">
        <div className="row">
          <div className="col-md-12">
            <p className="theme-desc">
              {example4?.para_1}
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ImplementationEx5;
