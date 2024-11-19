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
                <h1 className="theme-title1 projects-big-header names-big-header naming-padding-valuation pnazw-custom-header">
                  {project_value?.title}
                </h1>
              </div>
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index">
                {project_value?.description}
              </p>
            </div>
          </div>
        </div>

        <div className="projects-custom-container-gray new-wierzymy">
          <img
            className="img-wierzymy"
            src={project_value?.banner_url}
            title="Agencja namingowa - wierzymy w małe firmy"
            alt="Wierzymy, że dobry naming pomaga"
          />

          <p className="theme-desc text-center projects-gray-section-custom-font projects-gray-section-valuation projects-thematic-section-background-index projecs-big-wierzymy-label">
            {project_value?.offer_title}
          </p>
        </div>

        <div className="opinion-box-image projects-thematic-section-gray-background"></div>

        <div className="container custom-container1">
          <div className="row">
            <div className="col-lg-6">
              <p className="theme-desc projects-theme-desc-p names-left-padding projects-thematic-section-background-index d-sm-block d-none">
                {project_value?.bottom_description}
              </p>
            </div>
          </div>
        </div>

        <div className="formulage">
          <img src="form.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default ProjectValue;
