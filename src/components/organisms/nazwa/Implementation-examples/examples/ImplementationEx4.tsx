import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx4 = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example3 } = implementation || {};
  return (
    <section className="projects-gray-opinion-5">
      {example3?.map((item, index) => {
        return (
          <div key={index} className="container names-custom-container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="names-client-name copywriter-cname custom-after-top-line cname-big-mtop">
                  {item.title}
                </div>
                <div className="names-client-desc">{item.subtitle}</div>
              </div>
            </div>

            <div className="naming-seo-img">
              <img
                src={item.image}
                title="Nowa nazwa dla produktu - Biomba"
                alt=""
              />
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize names-quote-fsize-2">
                    {item.quote}
                  </h5>
                  <p className="signature newsignmargin">{item.quote_name}</p>
                </div>
              </div>
            </div>

            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                  <p className="theme-desc">{item.para}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ImplementationEx4;
