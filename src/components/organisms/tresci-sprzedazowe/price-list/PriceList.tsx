import React from 'react';
import { useSelector } from 'react-redux';

const PriceList = () => {
  const { screenData } = useSelector((state) => state.sales);
  const { pricingSection } = screenData || {};
  return (
    <>
      <div className="container">
        <div className="copywriter-custom-header text-center">
          {pricingSection?.title}
        </div>
        <div className="copywriter-custom-subheader text-center">
          {pricingSection?.sub_title}
        </div>
      </div>
      <div className="container copywriter-whatwedo-container">
        <div className="row">
          <div className="col-lg-6 copywriter-what-we-do">
            {/* <img
                src={pricingSection?.image_left}
                title="Copywriting cennik usług pisania tekstów reklamowych"
                alt="Sprzedażowe teksty na stronę internetową firmy"
              /> */}
            <div className="copywriter-intro-sm-text">
              {pricingSection?.image_left_desc}
            </div>
          </div>
          <div className="col-lg-6 copywriter-what-we-do">
            {/* <img
                className="custom-margin-bottom-5 nierobimy-max-width-100"
                src={pricingSection?.image_right}
                title="Usługi copywriterskie dla Twojej firmy"
                alt="Opracowanie tekstów dla jednej strony internetowej"
              /> */}
            <div className="copywriter-intro-sm-text copywriter-intro-sm-mright">
              {pricingSection?.image_right_desc}
            </div>
          </div>
        </div>
      </div>
      <div className="container custom-container1">
        <div className="row">
          <div className="col-md-12 copywriter-custom-smaller">
            <p className="theme-desc">{pricingSection?.para_1}</p>

            <p className="theme-desc">{pricingSection?.para_2}</p>

            <p className="theme-desc">
              <strong>{pricingSection?.bottom_text}</strong>
            </p>

            <img
              src={pricingSection?.brand_logo}
              className="copywriter-owocni"
              title="Agencja reklamowa przygotuje teksty reklamowe dla Ciebie"
              alt="Logo firmy Owocni, która zajmuje się copywritingiem"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      {/* to be deleted */}
      {/* <div className="copywriter-wierzymy-container">
        <img
          src={pricingSection?.banner_img}
          title="Odpowiednie slogany reklamowe wzmocnią pozycję Twojej firmy"
          alt="Owocni oferują pisanie tekstów dla małych firm"
        />
      </div> */}
    </>
  );
};

export default PriceList;
