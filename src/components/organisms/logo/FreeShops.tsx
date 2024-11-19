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
              <h5 className="theme-subtitle projects-clients-theme-subtitle projects-theme-subtitle-rwd projects-custom-mtop-0">
                {title && title}
              </h5>
              <h3 className="projects-theme-title-2 text-left ErupaSubTItle">
                {subtitle && subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-push-top-td projects-custom-margin-2">
                {FreeShopsData?.mainImageText1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {FreeShopsData?.mainImageText2}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-margin-2">
                {FreeShopsData?.mainImageText3}
              </p>
            </div>
          </div>
        </div>

        <div className="custom-container1-image">
          <img
          className="w-100"
            src={FreeShopsData?.mainImage}
            alt="Projektowanie logo przez profesjonalnego grafika"
            title="Projektowanie logo - grafik powinien się tym zająć"
          />
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {FreeShopsData?.bannerImageTextAbove1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {FreeShopsData?.bannerImageTextAbove2}
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

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc projects-custom-m0-top">
                {FreeShopsData?.bannerImageTextBelow1}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc">
                {FreeShopsData?.bannerImageTextBelow2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeShops;
