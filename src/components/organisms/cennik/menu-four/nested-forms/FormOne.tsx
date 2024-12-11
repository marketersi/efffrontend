import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formTwo } = screenData?.cardMenu?.menuFour || "";
  const { rangeArray } = screenData?.cardMenu?.menuFour?.formTwo || {};

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
          {formTwo?.section2_title}
        </h2>
        {/* <p className={`card-subheading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
          {formTwo?.form2_subtitle}
        </p> */}
      </div>

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
              <p
                style={{
                  margin: "5px 0 0 0",
                  fontSize: "16px",
                  color: "#555",
                }}
              >
                <strong>{range.label}</strong>
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
  );
};

export default SliderSection;
