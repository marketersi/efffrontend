import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SliderForm = ({ setCurrentComponent, formTwo }:any) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [sliderValue, setSliderValue] = useState(0); 

  const { rangeArray } = formTwo || [];
  const totalSections = rangeArray.length;

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value); 
  };

  const handleSliderFinalChange = () => {
    const calculatedSection = Math.floor((sliderValue / 110) * totalSections);
    setCurrentSection(calculatedSection);
  };

  const dispatch = useDispatch();

  const handleNext = () => {
    const payload = {
      formOneSelectedRangeValue: rangeArray[currentSection]?.description,
    };
    dispatch(savePriceListFormData(payload));
    setCurrentComponent(2);
  };

  return (
    <div className="slider_section">
      <div>
        <h2>{formTwo?.section2_title}</h2>
        <p
          style={{
            backgroundColor: rangeArray[currentSection]?.backgroundColor,
          }}
        >
          {rangeArray[currentSection]?.label}
        </p>
        <div className="range_description">
  {rangeArray[currentSection]?.description ? (
    rangeArray[currentSection].description.split('/').map((part, index) => (
      <span key={index}>{part}</span>
    ))
  ) : null}
</div>

      </div>

      <div className="space-between"></div>
      <div>
        <div className="ss_input-container">
          <img
            src="https://www.owocni.pl/_next/static/media/persons.6bff2827.png"
            alt=""
          />
          <input
            type="range"
            step="0.1"
            onInput={handleSliderChange} 
            onMouseUp={handleSliderFinalChange} 
            onTouchEnd={handleSliderFinalChange} 
            value={sliderValue}
            className="slider-input"
            style={{
              backgroundColor: rangeArray[currentSection]?.backgroundColor,
            }}
          />
          <img
            src="https://www.owocni.pl/_next/static/media/person.a15d0f85.png"
            alt=""
          />
        </div>
        <div className="ss_btn-container">
          <button onClick={handleNext} className="cennikBtn">
            {formTwo?.section2_buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderForm;
