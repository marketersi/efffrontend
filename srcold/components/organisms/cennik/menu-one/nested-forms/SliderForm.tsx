import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select, { components } from "react-select";
import Image from "next/image";

const SliderForm = ({ setCurrentComponent, formTwo }: any) => {
  const [currentSection, setCurrentSection] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { rangeArray, dropdown2 } = formTwo || [];

  const handleRadioChange = (index: number) => {
    setCurrentSection(index);
  };

  const DropdownIndicator = (props) => {
    const { selectProps } = props;
    const { value } = selectProps;

    return (
      <components.DropdownIndicator {...props}>
        {value ? (
          <Image
            src={"https://images.prismic.io/marketersi/ZufUa7VsGrYSvYfJ_dropdownarrow.png?auto=format,compress"}
            alt="arrow"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={"https://images.prismic.io/marketersi/ZufUa7VsGrYSvYfJ_dropdownarrow.png?auto=format,compress"}
            alt="arrow"
            width={30}
            height={30}
          />
        )}
      </components.DropdownIndicator>
    );
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  

  const dispatch = useDispatch();

  const handleNext = () => {
    setIsButtonClicked(true); // Trigger validation styling

    if (selectedOption && currentSection !== null) {
      const payload = {
        formOneSelectedRangeValue: rangeArray[currentSection]?.description,
        formOneDropdownValueTwo: selectedOption?.value,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(2);
    } else {
      setTimeout(() => {
        setIsButtonClicked(false); // Reset the red styling after a brief moment
      }, 500);
    }
  };

  console.log(formTwo);

  return (
    <div className="slider_section">
      <div>
      <h2 className={`card-heading ${isButtonClicked && !selectedOption ? "red-title" : ""}`}>
        {formTwo?.section2_title}
      </h2>
      </div>

      <div style={{ textAlign: "left" }} className="select-input">
        <Select
          options={formTwo?.dropdown2}
          placeholder="Wybierz kategorię"
          isSearchable={false}
          components={{ DropdownIndicator }}
          onChange={handleSelectChange}
          styles={{
            clearIndicator: (baseStyles, state) => ({
              ...baseStyles,
              display: "none",
            }),
            indicatorSeparator: (baseStyles, state) => ({
              ...baseStyles,
              display: "none",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              paddingLeft: "10px",
              borderRadius: "20px",
              paddingBlock: "3px",
              backgroundColor: selectedOption ? "#effeeb" : baseStyles.backgroundColor,
              outline: selectedOption ? "2px solid #effeeb" : "none",
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              padding: "0",
              paddingLeft: "3px",
              paddingRight: "3px",
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: selectedOption ? "#effeeb" : "#fff",
            }),
          }}
        />
      </div>

      <div>
      <h2
          className={`card-heading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}
        >
          {formTwo?.section2_title2}
        </h2>
        <p className={`card-subheading ${isButtonClicked && currentSection === null ? "red-title" : ""}`}>
          {formTwo?.section2_subtitle}
        </p>
        <div className="radio-container">
          {rangeArray.map((range, index) => (
            <label key={index} className="custom-radio">
              <input
                type="radio"
                name="rangeSelection"
                value={index}
                checked={currentSection === index}
                onChange={() => handleRadioChange(index)}
                style={{ display: "none" }}  // Hide default radio button
                
              />
               <div
        className={`radio-circle ${currentSection === index ? "selected" : ""}`}
      >
        {currentSection === index && <div className="inner-circle" />}
      </div>
              <div className="radio-boxdiv radio-label">
              <h3 className="custom-height"> <strong>{range.label}</strong>
                
                  {range.description}
                </h3>
                <p>{range.backgroundColor}</p>
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

export default SliderForm;