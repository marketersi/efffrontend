import React from "react";
import { useSelector } from "react-redux";

const ZooGarden = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { ZooGardenData } = screenData || {};

  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd">
                {/* {ZooGardenData?.title} */}
                RYTUAŁ URODY <br /> PIASECZNO
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {ZooGardenData?.subtitle}
              </h3>
            </div>
          </div>
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc mb-4 mobilelefttext">
                {ZooGardenData?.text1} {ZooGardenData?.text2}
              </p>

              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mb-4 mobilelefttext">
                {ZooGardenData?.text3} {ZooGardenData?.text4}
              </p>

              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top mb-4 mobilelefttext">
                {ZooGardenData?.text5}
              </p>

              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mobilelefttext">
                {ZooGardenData?.text6}
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
            className="image-810"
            src={ZooGardenData?.image_1}
            alt="Zmiana starego znaku firmowego poprzez projektowanie logo firmy"
            title="Prezentacja, jak projektowanie logo firmy może odmienić stary znak firmowy"
          />
        </div>

        {/* <div className="image-810-container">
          <div className="image-810">
            <img
              className="zooImage position-relative"
              src={ZooGardenData?.image_2}
              title="Przykład logo firmy na podstawie Ogrodu"
              alt="Projektowanie logo Twojej firmy wizualizowane na kartce"
              style={{ left: "-291px", position: "relative", maxWidth: "none" }}
            />
          </div>
        </div> */}

        <div className="container custom-container1">
          <div className="row"></div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
              „Ten projekt nie tylko spełnił nasze oczekiwania, ale przerósł je,
              oddając wyjątkowość naszej oferty w sposób, który zachwyca. To
              była wyjątkowa współpraca, a efekt idealnie oddaje charakter
              naszego salonu. Dziękujemy!”
            </h5>
            <p className="signature">– Kamila Pawłowska, właścicielka salonu</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZooGarden;
