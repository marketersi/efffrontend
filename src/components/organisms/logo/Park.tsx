import React from 'react';
import { useSelector } from 'react-redux';

const Park = () => {
  const { isLoading, screenData } = useSelector((state) => state.logo);
  const { ParkData } = screenData || {};
  return (
    <>
      <section className="thematic-section projects-gray-background">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12 projects-custom-espace"></div>
            <div className="col-md-12">
              <h5 className="theme-subtitle projects-clients-theme-subtitle">
              PUPILOTKA <br/>LEGIONOWO
              </h5>
              <h3 className="projects-theme-title-2 text-left projects-custom-theme-desc">
                {ParkData?.subtitle}
              </h3>
              <p className="theme-desc projects-theme-desc-p projects-custom-push-top-td projects-custom-margin-2 mobilelefttext">
                {ParkData?.text}
              </p>
            </div>

            {/* <div className="col-md-12 text-center projects-h-50">
              <p className="projects-new-blue-logo text-center">
                <strong>Stare logo</strong>
              </p>
            </div> */}

            <div className="col-md-12 text-center custom-margin-bottom-40 image-810">
              <img
                src={ParkData?.logoImage}
                className="w-100 starelogo"
                alt="Prezentacja projektu logo, starego"
                title="Przykład starego projektu logo Gdańskiego Parku"
              />
            </div>

            {/* <div className="col-md-12 text-center projects-h-100">
              <p className="projects-new-blue-text text-center">
                <strong>Nowe logo</strong>
              </p>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <h5 className="theme-quote signed-quote signed-quote-image">
            „To logo idealnie pasuje do naszego salonu – jest przyjazne, ciepłe i przyciąga uwagę, tak jak chcieliśmy.”
            </h5>
            <p className="signature">– Sylwia Margas, właścicielka

            </p>
          </div>
        </div>
      </section>

      {/* <img
        src={ParkData?.bannerImage}
        className="img-background-logop park-img w-100"
        alt="Nowe logo Gdańskiego Parku wykonane przez profesjonalistów"
        title="Nowy logotyp dla firmy na przykładzie nowego logo Gdańskiego Parku"
      /> */}
    </>
  );
};

export default Park;
