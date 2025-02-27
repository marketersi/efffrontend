import React from "react";
import { useSelector } from "react-redux";

const FreeShops = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { FreeShopsData } = screenData || {};
  const {
    title,
    subtitle,
  } = FreeShopsData || {};

  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                {/* {title && title} */}
                BUDMAN <br/> KRAKÓW
              </h5>
              <h3 className="projects-theme-title-2 text-left ErupaSubTItle">
                {subtitle && subtitle}  
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-push-top-td projects-custom-margin-2 mb-4 mobilelefttext">
                {FreeShopsData?.mainImageText1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {FreeShopsData?.mainImageText2}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-margin-2 mobilelefttext">
                {FreeShopsData?.mainImageText3}
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <div className="image-810">
            <img
          className="w-100"
            src={FreeShopsData?.mainImage}
            alt="Projektowanie logo przez profesjonalnego grafika"
            title="Projektowanie logo - grafik powinien się tym zająć"
          />
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {/* {FreeShopsData?.bannerImageTextAbove1} */}
                Kształt domu w logo jasno nawiązuje do budownictwa, zapewniając natychmiastową rozpoznawalność.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {/* {FreeShopsData?.bannerImageTextAbove2} */}
                Przemyślany i prosty design sprawia, że logo jest niezapomniane i od razu wpada w oko.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top mb-4 mobilelefttext">
                {/* {FreeShopsData?.bannerImageTextBelow1} */}
                Każde logo, które tworzymy, buduje zaufanie już od pierwszego spojrzenia, wyróżniając markę klienta.
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mobilelefttext">
                {/* {FreeShopsData?.bannerImageTextBelow2} */}
                Projektując logo, tworzymy coś więcej niż znak – <span>budujemy fundamenty sukcesu</span> Twojej marki.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="image-810-container">
          <div className="image-810">
            <img
              className=" position-relative shopImage"
              src={FreeShopsData?.bannerimage}
              alt="Projekt"
              title="Profes"
              style={{ left: "-363px", position: "relative", maxWidth: "none" }}
            />
          </div>
        </div> */}

        
        <div className="container">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
            „Projekt logo doskonale odzwierciedla naszą wizję – solidność, innowacyjność i nowoczesne podejście do budownictwa. To znak, który budzi zaufanie i od razu kojarzy się z najwyższą jakością.”
            </h5>
            <p className="signature">–  Jan Bitner, właściciel firmy
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeShops;
