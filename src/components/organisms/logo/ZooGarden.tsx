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
                {ZooGardenData?.title}
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {ZooGardenData?.subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc">
                {ZooGardenData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {ZooGardenData?.text2}
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
           className="w-100"
            src={ZooGardenData?.image_1}
            alt="Zmiana starego znaku firmowego poprzez projektowanie logo firmy"
            title="Prezentacja, jak projektowanie logo firmy może odmienić stary znak firmowy"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {ZooGardenData?.text3}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {ZooGardenData?.text4}
              </p>
            </div>
          </div>
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
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top">
                {ZooGardenData?.text5}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {ZooGardenData?.text6}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {ZooGardenData?.text7}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZooGarden;
