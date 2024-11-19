import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx3 = () => {
  const {  screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example2 } = implementation || {};
  return (
    <section className="projects-thematic-section-gray">
      {
  example2?.map((item, index) => {
    return (
      <div className="container names-custom-container" key={index}>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="underline-down names-client-name copywriter-cname cname-big-mtop">
              {item?.title}
            </div>
            <div className="names-client-desc">
              {item?.subtitle}
            </div>
          </div>
        </div>
      
        <div className="naming-seo-img">
          <img
            className="custom-image-margin"
            src={item?.image}
            title="Przykład logo i hasła reklamowego dla firmy Nevel"
            alt="Hasła reklamowe są dobre dla Nevel"
          />
        </div>
      
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize pnazw-names-quote-margin">
                {item?.quote}
              </h5>
              <p className="signature newsignmargin">{item?.quote_name}</p>
            </div>
          </div>
        </div>
      
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc">
                {item?.para_1}
              </p>
              <p className="theme-desc">
                {item?.para_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  })
}


   </section>
  );
};

export default ImplementationEx3;
