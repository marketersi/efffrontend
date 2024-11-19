import React from 'react';
import { useSelector } from 'react-redux';

const ProjectsValue = () => {
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
  } = ProjectValueData || {};

  return (
    <>
      <section>
        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12"></div>
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
      <section className="thematic-section projects-gray-background">
        <div className="projects-wierzymy-container">
          <div className="projects-wierzymy">
            {image && (
              <img
                src={image}
                className="projects-wierzymy-img"
                alt="Logo projekt wizytówki"
                title="Logo - projekt z napisem “wierzymy”"
              />
            )}
          </div>
        </div>

        <img
          src={image}
          className="img-background-logop img-background-logop-rwd"
          alt="Logo projekt wizytówki"
          title="Logo - projekt z napisem “wierzymy”"
        />
        <div className="projects-custom-container3">
          <div className="projects-container-textright projects-rwd-tcenter">
            <h5 className="projects-custom-h5">{imageTitle && imageTitle}</h5>

            <p className="theme-desc projects-theme-desc-p valuePara">
              {imageSubtitle && imageSubtitle}
            </p>

            <p className="theme-desc text-center projects-co-otrzymasz-sub projects-happy-clients-margin">
              {/* {galleryTitle && galleryTitle} */}
            </p>
          </div>
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
