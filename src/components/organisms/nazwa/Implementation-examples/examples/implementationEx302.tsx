import React from "react";
import { useSelector } from "react-redux";

const ImplementationEx302 = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example2 } = implementation || {};
  return (
    <section className="projects-thematic-section-gray">
      {example2?.slice(2, 3).map((item, index) => {
        return (
          <div
            className="container names-custom-container projects-push-content-top"
            key={index}
          >
            <div className="naming-seo-img">
              <div className="text-center">
                <div className="underline-down names-client-name copywriter-cname cname-big-mtop cname-pb">
                  {item?.title}
                </div>
                <div className="names-client-desc">{item?.subtitle}</div>
                <div className="container custom-container1 text-left">
                  <div className="row">
                    <div className="col-md-12">
                      <p className="theme-desc text-left mobilelefttext">
                        {/* {item?.para_1} */}
                        Rytuał Urody jest krótką, łatwą do zapamiętania nazwą,
                        która podkreśla wyjątkowość oferowanych usług.
                      </p>
                      {/* <p className="theme-desc text-left">
                {item?.para_2}  
              </p> */}
                    </div>
                  </div>
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

              <p className="theme-desc text-left mobilelefttext">
                Rytuał” przywołuje na myśl głęboki relaks i dopracowane detale,
                które stanowią integralną część każdego zabiegu, zapewniając
                klientom pełne odprężenie i luksusowe doświadczenie.
              </p>
              <p className="theme-desc text-left mobilelefttext">{item?.para_2}</p>
            </div>

            {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image names-quote-fsize pnazw-names-quote-margin">
                {item?.quote}
              </h5>
              <p className="signature newsignmargin">{item?.quote_name}</p>
            </div>
          </div>
        </div> */}
          </div>
        );
      })}
    </section>
  );
};

export default ImplementationEx302;
