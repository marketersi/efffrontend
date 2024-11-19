import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formTwo } = screenData?.cardMenu?.menuFour || "";
  const { rangeArray } = screenData?.cardMenu?.menuFour?.formTwo || {};

  const [currentSection, setCurrentSection] = useState(0);

  const [sliderValue, setSliderValue] = useState(0); 

  // const { rangeArray } = formTwo || [];
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
        <h2>Jakiej propozycji oczekujesz?</h2>
        <p
          style={{
            backgroundColor: rangeArray[currentSection]?.backgroundColor,
          }}
        >
          {rangeArray[currentSection]?.label}
        </p>
        <div className="range_description ">{rangeArray[currentSection]?.description}</div>
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

export default SliderSection;
