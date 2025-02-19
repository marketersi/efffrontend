import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const Section5 = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { howItWorksSection, knowMoreSection } = screenData || {};
  const { steps } = howItWorksSection || {};
  return (
    <>
      <section className="section5" id="sec1">
        <div className="container copywriter-standard-mtb-40">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="copywriter-custom-gray-header-1">
                {howItWorksSection?.title}
              </div>
            </div>
          </div>
        </div>

        <div className="copywriter-text-center copywriter-standard-mb-40">
          {/* <img
            src={howItWorksSection?.image}
            title="Pisanie oferty dla klienta"
            alt="Proces pracy copywritera podzielony na etapy"
          /> */}
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center ">
              <div className="copywriter-custom-text-2 main-title">
                {steps?.main_title}
              </div>
            </div>
          </div>
        </div>
        <div className="container copywriter-intro-whatwedo-container">
          <div className="row">
            <div className="col-lg-6 copywriter-text-right">
              <img
                src={steps?.image_1}
                title="Teksty reklamowe Owocnych to gwarancja sukcesu"
                alt="Marketing, który osiąga zamierzony cel"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="col-lg-6 copywriter-intro-box">
              <div className="copywriter-intro-header-right">
                <strong>{steps?.title_1}</strong>
                <p>{steps?.sub_title_1}</p>
              </div>
              <div className="copywriter-intro-description-right copywriter-rwd-mtb-40">
                {/* {steps?.description_1} */}
                Albo będziesz zadowolony z efektów, albo zwracamy Ci pieniądze.
                Liczy się to, co zyskasz, a nie liczba znaków.
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 copywriter-intro-box copywriting-hide-1 order-lg-1 order-2">
              <div className="copywriter-intro-header-left">
                {/* <strong>{steps?.title_2}</strong>
                <p className='underlineText'>{steps?.sub_title_2}</p> */}
                <strong>
                  Opieramy się <br /> Na Sprawdzonych Zasadach{" "}
                </strong>
                <p>Psychologii, perswazji i sprzedaży.</p>
              </div>
              <div className="copywriter-intro-description-left copywriter-rwd-mtb-40">
                {/* {steps?.description_2} */}
                Korzystamy z wiedzy psychologicznej i technik perswazyjnych, aby
                skutecznie przemawiać do Twoich klientów - zarówno do ich{" "}
                rozumu, jak i emocji.
              </div>
            </div>

            <div className="col-lg-6 copywriting-hide-1 copywriter-text-left order-lg-2 order-1">
              <img
                src={steps?.image_2}
                title="Skuteczny copywriting wymaga odpowiedniej wiedzy"
                alt="Slogany reklamowe, które przyciągają użytkowników"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 copywriter-text-right">
              <img
                src={steps?.image_3}
                title="Teksty reklamowe, które przekonają odbiorców do Twojej firmy"
                alt="Pisanie oferty musi trafić w rozum i serce klienta"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            <div className="col-lg-6 copywriter-intro-box">
              <div className="copywriter-intro-header-right">
                <strong>
                  {steps?.title_3} 
                </strong>
                <p>{steps?.sub_title_3}</p>
              </div>
              <div className="copywriter-intro-description-right copywriter-rwd-mtb-40">
                {steps?.description_3}
              </div>
            </div>
          </div>
        </div>
        <div className="container copywriter-container-custom">
          <div className="row">
            <div className="copywriting-white-text-cont col-md-7">
              <div className="copywriting-bg-white-header">
                <strong>{knowMoreSection?.title} </strong>
              </div>

              <div className="copywriting-bg-white-subheader">
                {knowMoreSection?.para}
              </div>

              <div>
                <a
                  className="copywriting-bg-white-subheader-link"
                  href="https://marketersi.cdn.prismic.io/marketersi/ZufO-bVsGrYSvYd5_Zabezpieczony-MARKETERSI-EbookYoutube.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <span className="orange-link" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '21px' , color:'#00BFFF' }}>
                    <strong>
                      Kliknij tutaj, aby pobrać (PDF)
                     </strong>

                    </span>
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <img
                className="copywriter-ksiazka-img copywriter-rwd-mtb-40"
                src={knowMoreSection?.bannar_image}
                title="Przewodnik Owocnych, który tłumaczy, jak napisać tekst"
                alt="Książka, którą przygotowali copywriterzy Owocnych"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
