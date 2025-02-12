import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SliderForm = ({ setCurrentComponent }) => {
  const [currentSection, setCurrentSection] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formTwo } = screenData?.cardMenu?.menuThree || "";
  const { rangeArray } = screenData?.cardMenu?.menuThree?.formTwo || {};

  const dispatch = useDispatch();
  const handleRadioChange = (index) => {
    setCurrentSection(index);
  };
  const handleNext = () => {
    setIsButtonClicked(true); // Trigger validation styling

    if (currentSection !== null) {
      const payload = {
        formOneSelectedRangeValue: rangeArray[currentSection]?.description,
      };

      console.log("payload:", payload);
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(2);
    } else {
      setTimeout(() => {
        setIsButtonClicked(false); // Reset validation styling after a brief moment
      }, 500);
    }
  };

  return (
    <div className="slider_section">
      <div>
        <h2 className={`card-heading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
          {formTwo?.form2_title}
        </h2>
        <p className={`card-subheading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
          {formTwo?.form2_subtitle}
        </p>
      </div>

      <div className="radio-container">
        {rangeArray.map((range, index) => (
          <label key={index} className="custom-radio">
            <input
              type="radio"
              name="rangeSelection"
              value={index}
              checked={currentSection === index}
              onChange={() => handleRadioChange(index)}
              style={{ display: "none" }} // Hide default radio button
            />
            <div className={`radio-circle ${currentSection === index ? "selected" : ""}`}>
              {currentSection === index && <div className="inner-circle" />}
            </div>
            <div className="radio-boxdiv radio-label">
              <p style={{ margin: "5px 0 0 0", fontSize: "16px" }}>
                <strong>{range.label}</strong>
                {range.description}
              </p>
            </div>
          </label>
        ))}
      </div>

      <div className="ss_btn-container">
        <button onClick={handleNext} className="cennikBtn">
          Kontynuuj (prawie gotowe)
        </button>
      </div>
    </div>
  );
};

export default SliderForm;
