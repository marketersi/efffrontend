import React from 'react';
import '../tresci.css';
import { useSelector } from 'react-redux';

const Robo = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection6 } = projects || {};

  return (
    <>
      <section className="thematic-section">
        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        /> */}

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection6?.underlined_label}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin copywriter-custom-margin">
                {projectSection6?.title_1}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc copywriter-custom-mright">
                {projectSection6?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mt-40 copywriter-rwd-mtb-40">
          <img
            src={projectSection6?.bannar_image_1}
            title="Teksty na stronę zrealizowane przez agencję"
            alt="Agencja reklamowa prezentuje wyniki swojej pracy"
            className="lingu"
          />
        </div>

        {/* <div className="copywriter-bg-16">
          <img
            className="copywriter-seo-img-dnone"
            src={projectSection6?.bannar_image_2}
            title="Przygotowane przez Owocnych slogany reklamowe"
            alt="Reklama dla klienta agencji"
          />

          <div className="copywriter-inside-img-text">
            {projectSection6?.bannar_image_2_title}
          </div>

          <img
            className="copywriter-roboty-img-810"
            src={projectSection6?.bannar_image_2}
            title="Przygotowane przez Owocnych slogany reklamowe"
            alt="Reklama dla klienta agencji"
          />
        </div> */}

        <div className="container custom-container2 copywriter-standard-mt-80">
          <div className="row">
            <div className="col-md-12 copywriter-standard-mb-m100 new-mb">
              <div className="copywriter-custom-text-turbokids-1 pl-20">
                {projectSection6?.quote_1}
              </div>
              <div className="copywriter-custom-subtext-turbokids-1 pl-20 mb-5">
                {projectSection6?.quote_1_desc}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="copywriter-text-center copywriter-standard-mb-40 copywriter-rwd-mtb-40">
          <img
            style={{ margin: "100px 0 0" }}
            src={projectSection6?.quote_1_image}
            title="Copywriting cena zrealizowanych tekstów"
            alt="Przykład tekstów, które przygotowali copywriterzy agencji"
          />
        </div> */}

        <div className="container custom-container2 copywriter-after-img-1 ">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-text-turbokids-1 copywriter-text-left pr-20">
                {projectSection6?.quote_2}
              </div>
              <div className="copywriter-custom-subtext-turbokids-1 copywriter-text-left pr-20">
                {projectSection6?.quote_2_desc}
              </div>

              {/* <div className="copywriter-text-center roboafter-rwd">
                <img
                  src={projectSection6?.quote_2_image}
                  title="Przykład w jaki sposób Owocni realizują usługi copywriterskie"
                  alt="Teksty reklamowe dla klienta Owocnych"
                />
              </div> */}
            </div>
          </div>
        </div>
        {/* 
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          alt=""
          className="projects-rotate-bow projects-bow-1"
        /> */}
      </section>
    </>
  );
};

export default Robo;
