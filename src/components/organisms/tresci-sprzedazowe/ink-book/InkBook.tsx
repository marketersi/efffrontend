import React from 'react';
import { useSelector } from 'react-redux';

const InkBook = () => {
  const { isLoading, screenData } = useSelector((state) => state.sales);
  const { projects } = screenData || {};
  const { projectSection8 } = projects || {};
  const { qualities } = projectSection8 || {};

  return (
    <>
      <section className="thematic-section copywriter-standard-pb-80">
        {/* <img
          src="https://cdn.owocni.pl/img/single-copywriter/luk.png"
          className="projects-bow-2"
          alt=""
        /> */}

        {/* <div className="copywriter-text-center copywriter-standard-mt-80">
          <img
            src={projectSection8?.logo_image}
            title="Logo klienta agencji Owocni"
            alt="Copywriting cena opracowania materiałów reklamowych"
          />
        </div> */}

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="names-client-name copywriter-black copywriter-green-underline copywriter-cname">
                {projectSection8?.underlined_label}
              </div>

              <div className="names-client-desc names-client-text copywriter-client-desc-margin">
                {projectSection8?.title_1}
              </div>
            </div>

            <div className="col-md-12">
              <p className="theme-desc copywriter-custom-mright copywriter-rwd-mtb-40 mobileLefttext">
                {projectSection8?.description}
              </p>
            </div>
          </div>
        </div>

       

        <div className="copywriter-text-center copywriter-standard-mb-80">
          <img
            src={projectSection8?.bannar_image_1}
            title="Content marketing dla firmy Moko"
            alt="Przykładowe teksty reklamowe dla klienta Owocnych"
            className="lingu"
          />
        </div>

        <div className="copywriter-custom-header-3 copywriter-standard-mt-80 banner-title">
          {/* {projectSection8?.bannar_image_1_title} */}
          <p className='turbokids-text-1 mobileBgap'>Lingusfera </p>
          <p className='turbokids-text-2'>- Twój bilet do międzynarodowej kariery</p>

        </div>

       

        {/* <div className="container text-center copywriter-reading-container copywriter-standard-mb-80">
          <div className="row">
            <div className="col-md-4">
              <img src={qualities?.image_1} alt="" />
              <div className="copywriter-sm-desc">
                {qualities?.image_1_info}
              </div>
            </div>

            <div className="col-md-4">
              <img src={qualities?.image_2} alt="" />
              <div className="copywriter-sm-desc">
                {qualities?.image_2_info}
              </div>
            </div>

            <div className="col-md-4">
              <img src={qualities?.image_3} alt="" />
              <div className="copywriter-sm-desc">
                {qualities?.image_3_info}
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="copywriter-text-center">
          <img
            src={qualities?.bottom_image}
            title="Reklama dla firmy Moko"
            alt="Realizacja reklamy dla Moko"
          />
        </div> */}
      </section>
    </>
  );
};

export default InkBook;
