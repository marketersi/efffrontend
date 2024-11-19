import React from 'react';
import { useSelector } from 'react-redux';

const PDFCopyData = {
  normalText:
    'Jak wywołać właściwe emocje, zdobyć zaufanie i sympatię? Jakie kształty i które kolory sprawdzą się najlepiej w branży? To tylko kilka części układanki, które pomożemy Ci rozwiązać.',
  image: '/assets/images/logo-design/Ksiega-znaku-projektowanie-logo.jpg.webp',
  imageTitle:
    'Owocny przewodnik po mądrym projektowaniu logo dla właścicieli małych firm stał się tak popularny, że cytuje go cała fachowa prasa.',
  imageSubtitle: 'Możesz pobrać darmowy egzemplarz.',
  imageLinkText: 'Kliknij tutaj(PDF)',
  imageLink:
    'https://drive.google.com/uc?authuser=0&amp;id=1bU_jwyc1R4WqXkZDaDmuMPj-U30pZUwm&amp;export=download',
};

const PDFCopy = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { PDFCopyData } = screenData || {};
  const {
    normalText,
    image,
    imageTitle,
    imageSubtitle,
    imageLinkText,
    imageLink,
  } = PDFCopyData || {};

  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-push-content-top">
              <p className="theme-desc projects-theme-desc-p projects-mq-book-fix">
                {normalText && normalText}
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xl-6 projects-lprasa-container">
              {image && (
                <img
                  src={image}
                  className="projects-ksiazka-projektowanie-logo"
                  alt="Zdjęcie okładki książki Owocnych"
                  title="Księga znaku przedstawiająca projektowanie logo"
                />
              )}
            </div>
            <div className="col-xl-6">
              <p className="theme-desc projects-custom-lineheight projects-custom-margin pGuid">
                {imageTitle && imageTitle}
              </p>
              <p className="projects-custom-lineheight projects-prasa-margin">
                <img
                  src="/assets/images/logo-design/Logotyp-dla-firmy-prasa.gif.webp"
                  className="projects-hide-img"
                  alt=""
                  title="Logotyp dla firmy prasa"
                />
              </p>
              <p className="theme-desc projects-custom-lineheight">
                {/* to be deleted */}
                {imageSubtitle && imageSubtitle} <br />
                {imageLink && imageLinkText && (
                  <a
                    // href="https://drive.google.com/uc?authuser=0&id=1bU_jwyc1R4WqXkZDaDmuMPj-U30pZUwm&export"
                    href="https://marketersi.cdn.prismic.io/marketersi/ZufO-bVsGrYSvYd5_Zabezpieczony-MARKETERSI-EbookYoutube.pdf"
                    target='_blank'
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="orange-link">
                      <strong>{imageLinkText}</strong>
                    </span>
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PDFCopy;
