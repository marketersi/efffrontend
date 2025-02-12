import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formTwo } = screenData?.cardMenu?.menuFifth || "";
  const { rangeArray } = screenData?.cardMenu?.menuFifth?.formTwo || {};
  
  const [currentSection, setCurrentSection] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  
  const handleRadioChange = (index: number) => {
    setCurrentSection(index);
  };

  

  const dispatch = useDispatch();
  const handleNext = () => {
    setIsButtonClicked(true); // Trigger validation styling

    if (currentSection !== null) {
      const payload = {
        formOneSelectedRangeValue: rangeArray[currentSection]?.description
        
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(2);
    } else {
      setTimeout(() => {
        setIsButtonClicked(false); // Reset the red styling after a brief moment
      }, 500);
    }
  };


  return (
    <div className="slider_section">
      <div>
        
        <h2 className={`card-heading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
        Dla jakiej firmy i jakiego montażu potrzebujesz?
        </h2>
        <p className={`card-subheading2 ${isButtonClicked ? "red-title" : ""}`}>
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
