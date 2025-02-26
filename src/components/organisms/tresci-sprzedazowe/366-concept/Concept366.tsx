import React from 'react';
import { useSelector } from 'react-redux';

const Concept366 = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection4, projectSection5 } = projects || {};

  return (
    <>
      <section className="thematic-section">
        {/* <img
          src="https://images.prismic.io/marketersi/ce15d2cf-1440-47e9-a3de-1f63749c8095_luk.png?auto=compress,format"
          className="projects-bow-2"
          alt=""
        /> */}

        {/* <div className="copywriter-text-center copywriter-standard-mt-80">
          <img
            src={projectSection4?.logo_image}
            className="smaller-logos"
            title="Przykład realizacji przez agencję reklamową dla klienta"
            alt="Reklama dla klienta Owocnych"
          />
        </div> */}

        {/* <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection4?.underlined_label}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin">
                {projectSection4?.title}
              </div>
            </div>

            <div className="col-md-12 copywriter-custom-margin-2">
              <p className="theme-desc">
              {projectSection4?.description}
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="copywriter-custom-img-text text-center copywriter-standard-mtb-40">
          {projectSection4?.title_2}
        </div> */}

        {/* <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-ikony-subtheme copywriter-custom-font-size copywriter-rwd-mtb-40">
                {projectSection4?.sub_title_2}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="copywriter-text-center copywriter-rwd-mtb-40">
          <img
            src={projectSection4?.image_1}
            title="Copywriterzy Owocnych przygotowali hasła reklamowe"
            alt="Przykład realizacji tekstów reklamowych dla klienta"
            layout="responsive"
            style={{maxWidth:"1000px", width:"100%", margin: "50px auto 0"}}
          />
        </div> */}

        {/* <div className="copywriter-text-center copywriter-standard-mtb-40">
          <img
            src={projectSection4?.image_2}
            title="Hasło reklamowe dla klienta Owocnych"
            alt="Jeden z tekstów reklamowych na strony internetowe"
            layout="responsive"
          />
        </div> */}

        {/* <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-ikony-theme">
                {projectSection4?.title_3}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="copywriter-text-center">
          <img
            src={projectSection4?.image_3}
            title="Zrealizowane teksty reklamowe dla klienta Owocnych"
            alt="Content marketing - przykład"
            layout="responsive"
          />
        </div> */}

        {/* <div className="container custom-container2 copywriter-standard-mt-80">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-img-text">
               {projectSection4?.title_4}
              </div>

              <div className="copywriter-custom-img-text-sm copywriter-rwd-mtb-40 copywriter-custom-font-size">
                {projectSection4?.sub_title_4}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="copywriter-bg-10" style={{ position: "relative" }}>
          <img
            className="copywriter-fotel"
            src={projectSection4?.right_image}
            title="Pisanie tekstów dla małych i średnich firm"
            alt="Przykładowe zrealizowane dotychczas teksty na stronę"
          />

        </div> */}

       

        {/* <div className="copywriter-text-center copywriter-standard-mt-40">
          <img
            src={projectSection5?.logo_image}
            title="Własna firma - współpraca z agencją reklamową Owocni"
            alt="Slogany reklamowe przykład współpracy"
          />
        </div> */}

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection5?.underlined_label}
              </div>

              <div className="names-client-desc copywriter-client-desc-margin names-client-01">
                {projectSection5?.title_1}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc mobileLefttext">{projectSection5?.description}</p>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mtb-40 copywriter-standard-mb-80 copywriter-rwd-mtb-40 content-marketing">
          <img
            src={projectSection5?.image_1}
            className="copywriter-seo-img lingu"
            title="Copywriter oferta i przykład jednej z realizacji"
            alt="Zrealizowane teksty na stronę jednego z klientów"
            layout="responsive"
          />
        </div>

        <div className="container custom-container2 copywriter-standard-mtb-40 text-center">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="copywriter-custom-text-akuku copywriter-standard-mtb-40 georgia natura-text">
                {/* {projectSection5?.bannar_title} */}
                Z Naturą Za Rękę – Każdego Dnia
              </div>
              <div className="copywriter-custom-subtext-akuku banner-subtitle-text">
                {projectSection5?.bannar_sub_title}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="copywriter-text-center copywriter-standard-mt-40">
          <img
            src={projectSection5?.bannar_image}
            title="Copywriterzy przygotowali teksty reklamowe dla studia"
            alt="Przykład prac klienta agencji marketingowej"
            layout="responsive"
          />
        </div> */}

        {/* <div className="container custom-container2 copywriter-standard-mb-80">
          <div className="row">
            <div className="col-md-12">
              <div className="copywriter-custom-text-akuku-2 copywriter-standard-mb-40 copywriter-standard-mt-m80 new-mt-2">
                {projectSection5?.bannar_bottom_title}
              </div>
              <div className="copywriter-custom-subtext-akuku-2">
                {projectSection5?.bannar_bottom_sub_title}
              </div>
            </div>
          </div>
        </div> */}
        {/* 
        <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          alt=""
          className="projects-rotate-bow projects-bow-1"
          layout="responsive"
        /> */}
      </section>
    </>
  );
};

export default Concept366;
