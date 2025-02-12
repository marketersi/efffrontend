import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formTwo } = screenData?.cardMenu?.menuSixth || "";
  const { rangeArray } = screenData?.cardMenu?.menuSixth?.formTwo || {};

  const [currentSection, setCurrentSection] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();
  const handleRadioChange = (index) => {
    setCurrentSection(index);
  };

  const handleNext = () => {
    setIsButtonClicked(true);

    if (currentSection !== null) {
      const payload = {
        formOneSelectedRangeValue: rangeArray[currentSection]?.description,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(2);
    }
  };

  return (
    <div className="slider_section">
      <div>
        
        <h2 className={`card-heading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
        Dla jakiej firmy i jakiego wideo potrzebujesz?
        </h2>
        <p className={`card-subheading ${isButtonClicked ? "red-title" : ""}`}>
        Zaznacz jedną opcję:
      </p>
        
      </div>

      
      <div>
      <div className="radio-container">
        {rangeArray?.map((range, index) => (
          <label key={index} className="custom-radio">
            <input
              type="radio"
              name="rangeSelection"
              value={index}
              checked={currentSection === index}
              onChange={() => handleRadioChange(index)}
              style={{ display: "none" }} // Hide the default radio button
            />
            <div
              className={`radio-circle ${currentSection === index ? "selected" : ""}`}
            >
              {currentSection === index && <div className="inner-circle" />}
            </div>
            <div className="radio-label">
              <h5>{range.label}</h5>
              <h5>{range.backgroundColor}</h5>
              <p>
                {range.description}
              </p>
            </div>
          </label>
        ))}
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
