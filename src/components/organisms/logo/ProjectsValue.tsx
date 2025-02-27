import React from "react";
import { useSelector } from "react-redux";

const ProjectsValue = ({openModal}) => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { ProjectValueData } = screenData || {};
  const {
    title,
    subtitle,
    image,
    imageTitle,
    imageSubtitle,
    galleryTitle,
    galleryImage,
    buttonText,
    imageGroup
  } = ProjectValueData || {};

    // const { isLoading, screenData } = useSelector((state) => state.logo);
    const { GalleryData } = screenData || {};
    // const { buttonText, image, title, subtitle, imageGroup } = GalleryData || {};
  

  return (
    <>
      <section>
        <div className="container projects-opinion-box-container2">
          <div className="row">
            
            <div className="col-md-12">
              <h3 className="projects-theme-title3 no-after p-bottom-10">
                {title && title}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-margin-left">
                {subtitle && subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container thematic-project thematic-section projects-gray-background">
        {/* <div className="projects-wierzymy-container"> */}
          
        {/* </div> */}

        <img
          src={image}
          className="img-background-logop img-background-logop-rwd"
          alt="Logo projekt wizytówki"
          title="Logo - projekt z napisem “wierzymy”"
        />
        <div className="projects-custom-container3 col-md-6 spacemanagemobile">
          <div className="projects-container-textright projects-rwd-tcenter">
            {/* <h5 className="projects-custom-h5">{imageTitle && imageTitle}</h5> */}

            <h5 className="projects-custom-h5">
              50% na start,
              <br /> a druga połowa,
              <br /> gdy będziesz w pełni <br /> zachwycony.
            </h5>

            <p className="theme-desc projects-theme-desc-p">
              {/* {imageSubtitle && imageSubtitle}  */}
              Najpierw otrzymujesz projekt, <br /> który wyróżni Twoją markę.{" "}
              <br /> A finalne rozliczenie <br /> nastąpi dopiero wtedy,
              <br /> gdy efekt przewyższy <br /> Twoje oczekiwania.
            </p>
          </div>

          <div className="catalog-submit-button projects-catalog-submit-buttom logo-button-box during-page-offer">
          <button
            className="download-catalog-button projects-download-catalog-button send-offer-button rwd-logo-button-box js--triggerAnimation"
            type="button"
            fdprocessedid="bcd6ip"
            onClick={openModal}
          >
            Brzmi świetnie. Wyślijcie mi ofertę
          </button>
        </div>
        </div>

        <div className="projects-wierzymy col-md-6">
            {image && (
              <img
                src={image}
                className="projects-wierzymy-img"
                alt="Logo projekt wizytówki"
                title="Logo - projekt z napisem “wierzymy”"
              />
            )}
          </div>

        


        {/* {galleryImage && (
          <img
            src={galleryImage}
            className="img-background-logop"
            alt="Jakie są najlepsze przykłady logo?"
            title="Przykłady logo dla firm o różnej działalności"
          />
        )} */}
      </section>
    </>
  );
};

export default ProjectsValue;
