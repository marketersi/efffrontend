import React from 'react';
import { useSelector } from 'react-redux';

const AnatomyGuide = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { anatomy_guide } = screenData || {};
  return (
    <section id="sec0">
      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12 projects-push-content-top">
            <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
              {anatomy_guide?.paragraph1}
            </p>
          </div>
        </div>
      </div>

      <div className="container custom-container-4 custom-margin-bottom-30">
        <div className="row">
          <div className="col-lg-3 stats-image-cont p-0">
            <img
              src={anatomy_guide?.percentage_image_url}
              alt="Statystyki, czyli jak ważne jest zastrzeżenie nazwy firmy"
            />
          </div>

          <div className="col-lg-9">
            <p className="theme-desc projects-theme-desc-p projects-mq-book-fix custom-margin-bottom-20">
              {anatomy_guide?.paragraph2}
            </p>
          </div>
        </div>
      </div>

      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12">
            <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
              {anatomy_guide?.paragraph3}
            </p>
          </div>
        </div>
      </div>

      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12 projects-custom-container-second-prasa">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 p-sm-0">
                  <p className="theme-desc projects-mq-book-fix">
                    {anatomy_guide?.paragraph4}
                  </p>

                  <img
                    className="projects-logotypy-prasa custom-bottom-margin2"
                    src={anatomy_guide?.banner_url}
                    title="Logotypy prasy, opinie o firmie Owocni"
                    alt="Jak nazwać firmę? Prasa o naszych efektach"
                  />
                  {/* to be deleted */}
                  <p className="projects-mq-book-fix projects-custom-gray-text projects-hide-810 text-center PDF-d-book">
                    Jeśli chcesz możesz pobrać darmowy egzemplarz.
                    <a
                      href="https://marketersi.cdn.prismic.io/marketersi/ZufO-bVsGrYSvYd5_Zabezpieczony-MARKETERSI-EbookYoutube.pdf"
                      className="red-link d-block"
                      target="_blank"
                    >
                      Kliknij tutaj (PDF)
                    </a>
                  </p>
                </div>
                <div className="col-lg-6 projects-lprasa-container p-0">
                  <img
                    className="projects-logotypy-prasa custom-bottom-margin2"
                    src={anatomy_guide?.brand_url}
                    title="Książka o tym jak nazwać firmę"
                    alt="Książka przydatna przy tworzeniu nazwy"
                  />
                  {/* to be deleted */}
                  {/* <p className="projects-mq-book-fix projects-custom-gray-text projects-hide-810 text-center PDF-m-book">
                    Jeśli chcesz możesz pobrać darmowy egzemplarz.
                    <a
                      href="/files/resources/Broszura-NazwaB.pdf"
                      className="red-link"
                      target="_blank"
                    >
                      Kliknij tutaj (PDF)
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomyGuide;
