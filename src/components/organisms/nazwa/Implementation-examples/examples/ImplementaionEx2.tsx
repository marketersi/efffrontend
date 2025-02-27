import React from "react";
import { useSelector } from "react-redux";

const ImplementationExample2 = () => {
  const { screenData } = useSelector((state) => state.anatomy);
  const { implementation } = screenData || {};
  const { example1 } = implementation || {};
  return (
    <section className="projects-thematic-section-gray">
      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12 projects-push-content-top project-font-family">
            <p className="theme-desc mobilelefttext">{example1?.para_1}</p>

            <p className="theme-desc projects-margin-bottom-10 mobilelefttext">
              {example1?.para_2}
            </p>

            {/* to be deleted */}
            {/* <div className="custom-text-align-center">
              <img
                className="names-custom-image"
                src={example1?.image_1 }
                title="Projektowanie nazw dla Iglarek"
                alt="Tworzenie nazw marek na przykładzie Iglarek"
              />
            </div> */}

            <p className="theme-desc mobilelefttext">{example1?.para_3}</p>

            {/* <p className="theme-desc projects-margin-bottom-10">
              {example1?.para_4}
            </p> */}

            {/* to be deleted */}
            {/* <div className="custom-text-align-center">
              <img
                className="names-custom-image"
                src={example1?.image_2}
                title="Projektowanie logo dla Iglarek"
                alt="Tworzenie nazw firm na przykładzie Iglarek"
              />
            </div> */}

            {/* <p className="theme-desc">{example1?.para_5}</p> */}
          </div>
        </div>
      </div>

      <div className="naming-seo-img">
        <img
          src={example1?.image_3}
          title="Przykład tego jak stworzyć dobrą nazwę"
          alt="Projektowanie logo dla Iglarek"
        />
        <p className="theme-desc changefont projects-margin-top mobilelefttext">
          {example1?.para_4} 
        </p>

        <p className="theme-desc projects-margin-top mobilelefttext">{example1?.para_5}</p>
      </div>

      <div className="clearfix"></div>
    </section>
  );
};

export default ImplementationExample2;
