import React from 'react';
import { useSelector } from 'react-redux';

const Anatomy = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { anatomy } = screenData || {};
  return (
    <section className="top-section-ending projects-over-hid">
      <div className="container projects-custom-container1">
        <div className="row">
          <div className="col-md-12">
            <h2 className="theme-title1 projects-big-header custom-projects-margin-top">
              {anatomy?.title}
            </h2>

            <p className="theme-desc text-center p-0 projects-under-big-header2 ">
              {anatomy?.description1}
            </p>

            <p className="theme-desc text-center p-0 projects-under-big-header">
              {anatomy?.description2}
            </p>

            {/* to be deleted */}
            {/* <p className="theme-desc text-center p-0 names-features-image naming-tm-100">
              <img
                className="owocnych-nazw-text"
                src={anatomy?.title_image_url}
                title="anatomia-naming"
                alt="Anatomia - projektowanie nazw"
              />
              <br className="dont-delete" />
              {anatomy?.below_text}
            </p> */}
          </div>
        </div>
      </div>

      <div className="naming-seo-img">
        <img
          src={anatomy?.banner_url}
          title="Składowe tworzenia nazwy"
          alt="Przepis na dobrą nazwę"
          style={{ boxShadow: 'none' }}
        />
      </div>
    </section>
  );
};

export default Anatomy;
