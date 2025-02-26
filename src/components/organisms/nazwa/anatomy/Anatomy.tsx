import React from 'react';
import { useSelector } from 'react-redux';
import "./anatomy.css";

const Anatomy = () => {
  const { isLoading, screenData } = useSelector((state) => state.anatomy);
  const { anatomy, anatomy_guide } = screenData || {};
  return (
    <section className="top-section-ending projects-over-hid second-section paddtopbotom">
      <div className="container width900">
        <div className="row">
          <div className="col-md-12">
            <h2 className="projects-big-header custom-projects-margin-top custom-font-size text-center">
              {/* {anatomy?.title} */}
             
              Twoja marka to więcej niż <br/>tylko biznes - to opowieść, <br/>która czeka, <br/>aby zostać opowiedziana.
            </h2>

            <p className="text-center p-0 projects-under-big-header2">
              {anatomy?.description1}
            </p>

            <p className="text-center p-0 projects-under-big-header mb-5">
            {anatomy_guide?.paragraph1}
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
