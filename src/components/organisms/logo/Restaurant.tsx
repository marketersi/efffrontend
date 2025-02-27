import React from "react";
import { useSelector } from "react-redux";



const Restaurant = () => {
  const {isLoading, screenData} = useSelector((state) => state.logo);
  const {RestaurantData} = screenData || {};
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
              EKOWITA <br/> ŁÓDŹ
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {RestaurantData?.subtitle}
              </h3>
             
            </div>
          </div>
        </div>

        {/* <div className="image-810-container">
          <div className="image-810">
            <img
              className="desktop-810 position-relative"
              src={RestaurantData?.image_1}
              title="Projektowanie logo - cena nie musi być wysoka, a pomysł jest dobry"
              alt="Projektowanie logo - cena w ogólnym ujęciu"
              style={{ left: "-65px", position: "relative", maxWidth: "none" }}
            />
           
          </div>
        </div> */}

        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
            <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-theme-desc mb-4 mobilelefttext">
                {RestaurantData?.text1}
              </p>
              <p className="theme-desc projects-theme-desc-p mb-4 mobilelefttext">
                {RestaurantData?.text2}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-m0-top mb-4 mobilelefttext">
              {RestaurantData?.text3}
              </p>
              <p className="theme-desc projects-theme-desc-p projects-custom-theme-desc mobilelefttext">
              {RestaurantData?.text4}
              </p>
            </div>
          </div>
        </div>

        <div className="image-810-container position-relative mt-0">
          <div className="image-810">
            <a href="https://www.youtube.com/watch?v=9C-ZNDm0Ziw" data-lity="">
              <img
                className="desktop-810 position-relative"
                src={RestaurantData?.image_2}
                title="Rzeczy ważne przy projektu logo na przykładzie Bohemii"
                alt="Profesjonalny znak wyróżni Twoją markę "
               
              />
            </a>
           
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-quote signed-quote signed-quote-image">
               {RestaurantData?.quote}
                
              </h5>
              <p className="signature">{RestaurantData?.quoteAuthor}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Restaurant;
