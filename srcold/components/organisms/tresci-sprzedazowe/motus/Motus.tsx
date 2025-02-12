import React from 'react';
import { useSelector } from 'react-redux';

const Motus = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection2, projectSection3 } = projects || {};

  return (
    <div>
      <section className="thematic-section motus-section copywriter-standard-pt-140">
        <div className="copywriter-text-center">
          <img
            src={projectSection2?.logo_image}
            title="Marketing internetowy pomoże Ci rozwinąć firmę"
            alt="Logotyp Motus City to estetyczna reklama"
          />
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection2?.underlined_label}
              </div>
              <div className="names-client-desc copywriter-client-desc-margin">
                {projectSection2?.title}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc">{projectSection2?.description}</p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mtb-40">
          <img
            src={projectSection2?.bannar_image}
            title="Copywriter oferta kreowania tekstów na strony internetowe"
            alt="Slogany reklamowe przygotowane przez Owocnych"
          />
        </div>

        <div className="copywriter-bg-2">
          <img
            className="copywriter-seo-img-dnone"
            src={projectSection2?.bckgrnd_image}
            title="Copywriter cennik przygotowania opisów produktów"
            alt="Skuteczny marketing firmy to zadanie, którym zajmie się nasza agencja reklamowa"
          />
          <div className="custom-container2 copywriting-text-right">
            <div className="copywriting-custom-subcont">
              <span className="copywriting-img-desc">
                <span className="copywriter-custom-red">
                  {projectSection2?.background_image_title}
                </span>{' '}
                <br className="dont-delete" />
                {projectSection2?.quote}
              </span>
            </div>
          </div>
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriting-img-desc copywriter-cmargin-5 motus-desc">
                {projectSection2?.title_1}
              </div>

              <div className="copywriter-img-big-desc copywriter-custom-color">
                {projectSection2?.sub_title_1}
              </div>

              <div className="copywriting-img-desc copywriter-cmargin-6">
                Gdy inni stoją w miejscu, <br className="dont-delete" />
                Ty stań na hulajnodze <br className="dont-delete" />
                i jedź, gdzie <br className="dont-delete" />
                chcesz.
              </div>
            </div>
          </div>
        </div>
        <div className="copywriter-bg-3">
          <img
            className="copywriter-seo-img-dnone"
            src={projectSection2?.bottom_bannar_image}
            title="Przykład fotografii reklamowej to również content marketing"
            alt="Realizacja fotografii reklamowej dla klienta Owocnych"
          />
        </div>

        <div className="copywriter-text-center">
          <img
            src={projectSection3?.logo_image}
            className=""
            title="Content marketing dla kancelarii prawniczej"
            alt="Case study copywritingu dla kancelarii prawniczej"
          />
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection3?.underlined_label}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin">
                {projectSection3?.title}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc">{projectSection3?.description}</p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-rwd-mtb-40">
          <img
            src={projectSection3?.bannar_image}
            title="Przykład tekstów reklamowych dla klienta Owocnych"
            alt="Teksty reklamowe dla kancelarii prawniczej"
          />
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-prawo-tekst-1">
                {projectSection3?.quote_1}
              </div>

              <div className="copywriter-prawo-tekst-2">
                {projectSection3?.quote_2}
              </div>
            </div>
          </div>
        </div>

        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          alt=""
          className="projects-rotate-bow projects-bow-1"
        /> */}
      </section>
    </div>
  );
};

export default Motus;
