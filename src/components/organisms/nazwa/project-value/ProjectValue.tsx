import React from "react";
import { useSelector } from "react-redux";

const ProjectValue = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { project_value } = screenData || {};
  return (
    <div className="pnazw-page">
      <section className="projects-thematic-section-gray projects-thematic-section-background-index ">
        <div className="container custom-container1">
          <div className="row">
            <div className="col-md-12">
              <div
                className="projects-custom-container-gray menu-target"
                id="sec2"
              >
                <h1 className="names-big-header naming-padding-valuation pnazw-custom-header mb-3">
                  {project_value?.title}
                </h1>
              </div>
            
            </div>
          </div>
        </div>

        <div className="projects-custom-container-gray new-wierzymy">

        <div>
            <p className="theme-desc text-left projects-gray-section-custom-font projects-gray-section-valuation projects-thematic-section-background-index projecs-big-wierzymy-label">
              {/* {project_value?.offer_title} */}
              <span className="descriptiob-bold">
                {" "}
                Strategiczny Rozwój:
              </span>{" "}
              Nasze nazwy są zaprojektowane tak, aby wspierać Twój
              długoterminowy sukces i rozwój na rynku.
            </p>

            <p className="theme-desc text-left projects-gray-section-custom-font projects-gray-section-valuation projects-thematic-section-background-index projecs-big-wierzymy-label">
                {/* {project_value?.description} */}
                <span className="descriptiob-bold">
                  {" "}
                  Nazwę, która inspiruje:
                </span>{" "}
                Przekształcimy Twoje wartości i wizję w nazwę, która będzie
                inspirować i motywować do działania, stając się siłą napędową
                Twojej marki.
              </p>

            <p className="theme-desc text-left projects-theme-desc-p names-left-padding projects-thematic-section-background-index d-sm-block d-none">
              <span className="descriptiob-bold">Gwarancję Zadowolenia:</span>{" "}
              Nie ustajemy, dopóki nie znajdziemy tej perfekcyjnej nazwy, która
              spełni wszystkie Twoje oczekiwania.
            </p>
          </div>

          
          <div>
            <img
              className="img-wierzymy"
              src={project_value?.banner_url}
              title="Agencja namingowa - wierzymy w małe firmy"
              alt="Wierzymy, że dobry naming pomaga"
            />
          </div>

      
        </div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-lg-9">
              {/* {project_value?.bottom_description} */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectValue;
