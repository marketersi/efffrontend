import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Gallery = ({ openModal }) => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { GalleryData } = screenData || {};
  const { buttonText, image, title, subtitle, imageGroup } = GalleryData || {};

  return (
    <>
      <section
        className="thematic-section projects-gray-background menu-target"
        id="sec3"
      >
        <div className="catalog-submit-button projects-catalog-submit-buttom logo-button-box during-page-offer">
          <button
            className="download-catalog-button projects-download-catalog-button send-offer-button rwd-logo-button-box js--triggerAnimation"
            type="button"
            fdprocessedid="bcd6ip"
            onClick={openModal}
          >
            <strong>{buttonText && buttonText}</strong>
          </button>
        </div>

        {image && (
          <img
            src={image}
            className="img-background-logop galeria-logo-style"
            alt="Obraz galerii - Dłonie można projektują znak graficzny. Białego niedzwiedzia."
            title="Jak projektuje się dobre logo? Zobacz galerję"
          />
        )}

        {/* <div
          className="container projects-custom-container1 project-pbottom-30 galeria-margin-top"
          id="sec3"
        >
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="projects-galeria-theme">{title && title}</h3>

              <p className="theme-desc text-center projects-co-otrzymasz-sub galleryDecPara">
                {subtitle && subtitle}
              </p>
            </div>
          </div>
        </div> */}

        <div className="clearfix"></div>

        <div className="container projects-custom-container1">
          <div className="row">
            <div className="col-md-12 part-sec text-center">
              {/* <div className="galeriaImageContainer">
                {imageGroup &&
                  imageGroup.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className="projects-logotyp-fix-size projects-logotyp"
                      alt="Przykładowy projekt logo Voyage"
                      title="Projekt logo na przykładzie Voyage"
                    />
                  ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
