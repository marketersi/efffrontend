import React from "react";
import { useSelector } from "react-redux";

const LaunchEssentials = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { launch_essentials } = screenData || {};

  return (
    <section className="menu-target  sec0" id="sec1">
      <div className="container projects-custom-container1">
        <div className="row">
          <div className="col-md-12" id="sec1">
            <h3 className="projects-theme-title2 no-after p-bottom-10 naming-what-you-get-header">
              {launch_essentials?.section_title}
            </h3>

            <h5 className="projects-theme-subtitle1 theme-desc-list2">
              {launch_essentials?.section_subtitle}
            </h5>

            <p className="theme-desc text-center p-0 naming-project-includes">
              {launch_essentials?.list_title}
            </p>

            <ul className="names-list-info theme-desc">
              <li>{launch_essentials?.list_element1}</li>
              <li>{launch_essentials?.list_element2}</li>
              <li>{launch_essentials?.list_element3}</li>
              <li>{launch_essentials?.list_element4}</li>
            </ul>

            <div className="container custom-container1">
              <div className="row">
                <div className="col-md-12">
                  <p className="theme-desc projects-theme-desc-p projects-mq-book-fix after-li-ctext text-center">
                    {launch_essentials?.section_paragraph}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="naming-seo-img naming-tm-100 naming-new-tm-1">
        <img
        className="Naming"
          src={launch_essentials?.banner_url}
          title="Naming a zastrzeżenie nazwy firmy"
          alt="Naming czyli tworzenie nazw"
        />
      </div> */}

      <div className="container custom-container1 pnazw-page">
        <div className="row">
          <div className="col-md-12">
            <div className="names-container-Litery">
              <div className="names-client-desc-litery">
                {launch_essentials?.policy_title}
              </div>
              <p className="pnazw-ctext-size">
                {launch_essentials?.policy_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchEssentials;
