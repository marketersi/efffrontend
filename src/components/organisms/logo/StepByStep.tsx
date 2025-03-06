import React from 'react';
import { useSelector } from 'react-redux';

const StepByStep = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { StepBystepData } = screenData || {};
  const {
    title,
    subtitle,
    image,
    imageTitle,
    imageSubTitle,
    secondaryImage,
    secondaryImageTitle,
    secondaryImageSubtitle,
    secondaryImageSubtitle2,
    bannerImage,
    bannerImageTitle,
    bannerImageSubtitle,
  } = StepBystepData || {};

  return (
    <>
      <section className="thematic-section projects-gray-background" id="sec4">
        <div className="container menu-target">
          <div className="row">
            <div className="col-md-12">
              <h3 className="projects-krok-po-kroku  no-after p-bottom-10">
                {/* {title && title} */}
                Przykładowe realizacje. 
                <br/>
                Tworzymy To,
                <br/>
                Co Zapada w Pamięć.

                
              </h3>

              <p className="theme-desc text-center p-0 projects-under-big-header3">
                {subtitle && subtitle}
              </p>
            </div>
          </div>
          <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle morespacetop">
              PRIMADENT<br/> MILANÓWEK
              </h5>

              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {imageSubTitle && imageSubTitle}
              </h3>
            </div>
          </div>
        </div>
        </div>

        {/* {image && (
          <img
            src={image}
            className="img-background-logop"
            alt="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
            title="Projekt logo dla nowo powstącej sieci lokali gastronomicznych"
          />
        )} */}

        <div className="container custom-container1">
          <div className="row">
            {/* <div className="col-md-12">
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {imageSubTitle && imageSubTitle}
              </h3>
            </div> */}

            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-push-top-50 mobilelefttext ">
                {secondaryImageTitle && secondaryImageTitle}
              </p>
              <div className="image-810">
                {secondaryImage && (
                  <img
                    src={secondaryImage}
                    className="appetime-img-p appetime-img w-100 mb-0"
                    alt="Wykonanie specjalnego projektu logo"
                    title="Przykłady tego, co potrafi projektowanie graficzne w przypadku logo"
                  />
                )}
              </div>

              <p className="theme-desc projects-theme-desc-p mb-4 mobilelefttext">
                {secondaryImageSubtitle && secondaryImageSubtitle}
              </p>
              <p className="theme-desc projects-theme-desc-p mobilelefttext">
                {secondaryImageSubtitle2 && secondaryImageSubtitle2}
              </p>
            </div>

           
          </div>
          <div className="row">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
            „Logo stworzone dla nas to kwintesencja profesjonalizmu i dbałości o detale. Subtelne, nowoczesne i eleganckie – dokładnie tak, jak chcemy być postrzegani przez naszych pacjentów. Jesteśmy zachwyceni!”
            </h5>
            <p className="signature">– Kaja Barciś, właścicielka gabinetu
            </p>
          </div>
        </div>
        </div>

        
      </section>
    </>
  );
};

export default StepByStep;
