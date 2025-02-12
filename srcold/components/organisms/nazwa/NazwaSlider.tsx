import React from 'react'
import ProfitSlider from "../tresci-sprzedazowe/profit-slider/ProfitSlider";
import { useSelector } from "react-redux";

const NazwaSlider = () => {
    const {  screenData } = useSelector((state) => state.anatomy);
    const { implementation } = screenData || {};
    const { sliderSection } = implementation || {};
    const { image } = sliderSection || {};
  
  return (
    <>
     <div>
      <section className="thematic-nr-section thematic-bg-section copywriter-ending-white-bg copywriter-standard-pt-40">
        {/* <img
          src="https://cdn.owocni.pl/img/copywriting-main-img/bg-black-top.png"
          alt="Image"
          className="white-bg"
        /> */}
      </section>
      <section className="names-thematic-section-black names-thematic-section-black-fix copywriter-ending-padding copywriter-standard-pt-40">
        <div className="copywriter-ending-big text-center">
          {sliderSection?.title}
        </div>

        <div className="copywriter-ending-big-2 text-center">
          {sliderSection?.subtitle}
        </div>

        <div className="container custom-container2">
          <div className="row">
            <div className="col-md-12">
              <p className="theme-desc text-center copywriter-ending-white">
                {sliderSection?.sliderText}
              </p>

             
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </section>
      <ProfitSlider images={image} />
    </div>
    </>
  )
}

export default NazwaSlider