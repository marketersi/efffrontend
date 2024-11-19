import React from 'react';
import { useSelector } from 'react-redux';

const BusinessTools = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { buisnessToolsSection } = screenData || {};

  return (
    <>
      <section className="business_tools">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center copywriter-cmargin-2">
              <h1 className="copywriter-big-header-2">
                {buisnessToolsSection?.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="container text-center copywriter-custom-container-1 copywriter-rwd-mtb-40">
          <div className="copywriter-image-box">
            <div className="copywriter-image-box-1">
              <div className="copywriter-image-label">
                <strong>{buisnessToolsSection?.img_1_text}</strong>
              </div>
              <img
                src={buisnessToolsSection?.image_1}
                title="Pisanie tekstów oferty handlowej"
                alt="Owocni to numer 1 jeśli chodzi o skuteczny copywriting"
                className="businessToolImage"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-2">
              <div className="copywriter-image-label">
                <strong>{buisnessToolsSection?.img_2_text}</strong>
              </div>
              <img
                src={buisnessToolsSection?.image_2}
                title="Coptwriter oferta - przygotowywanie tekstów na stronę"
                alt="Dobrze przygotowane teksty na stronę to gwarancja wzrostu zysków"
                className="businessToolImage"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-3">
              <div className="copywriter-image-label">
                <strong>{buisnessToolsSection?.img_3_text}</strong>
              </div>
              <img
                src={buisnessToolsSection?.image_3}
                title="Usługi copywriterskie obejmują treści reklamowe"
                alt="Lekkie pióro to cecha charakterystyczna Owocnych"
                className="businessToolImage"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-4">
              <div className="copywriter-image-label">
                <strong>{buisnessToolsSection?.img_4_text}</strong>
              </div>
              <img
                src={buisnessToolsSection?.image_4}
                title="Lekkie pióro pomaga w pisaniu artykułów"
                alt="Artykuł - nad takimi rzeczami pracuje copywriter"
                className="businessToolImage"
              />
            </div>
          </div>

          <div className="copywriter-image-box">
            <div className="copywriter-image-box-5">
              <div className="copywriter-image-label">
                <strong>{buisnessToolsSection?.img_5_text}</strong>
              </div>
              <img
                src={buisnessToolsSection?.image_5}
                title="Copywriting katalogów i broszur"
                alt="Broszura i katalog to podstawa"
                className="businessToolImage"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center copywriter-cmargin-3">
              <div className="copywriter-custom-text-1">
                {buisnessToolsSection?.para_1}
              </div>

              <div className="copywriter-custom-text-2">
                {buisnessToolsSection?.para_2}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessTools;
