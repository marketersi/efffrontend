import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Select, { components } from "react-select";
import Image from "next/image";

const SliderForm = ({ setCurrentComponent, formTwo }: any) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const { rangeArray, dropdown } = formTwo || [];

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
            src={"https://images.prismic.io/marketersi/ZufV4LVsGrYSvYfY_dropdownok.png?auto=format,compress"}
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
    const payload = {
      formOneSelectedRangeValue: rangeArray[currentSection]?.description,
      formTwoDropdownValue: selectedOption?.value,
    };
    dispatch(savePriceListFormData(payload));
    setCurrentComponent(2);
  };

  return (
    <div className="slider_section">
      <div>
      <h2 className={`card-heading ${isButtonClicked ? "red-title" : ""}`}>
        {formTwo?.section1_title}
      </h2>
      <p className={`card-subheading ${isButtonClicked ? "red-title" : ""}`}>
        {formTwo?.section1_subtitle}
      </p>
      </div>

      <div style={{ textAlign: "left" }} className="select-input mb-md-5 mb-sm-3">
        <Select
          options={formTwo?.dropdown2}
          placeholder="Wybierz"
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
        <h2>{formTwo?.section2_title}</h2>
        <div className="radio-container">
          {rangeArray.map((range, index) => (
            <label key={index}>
              <input
                type="radio"
                name="rangeSelection"
                value={index}
                checked={currentSection === index}
                onChange={() => handleRadioChange(index)}
                style={{ marginRight: "10px" }}
                className={currentSection === index ? "checked-radio" : ""}
              />
              <div className="radio-boxdiv">
                <strong>{range.label}</strong>
                <p style={{ margin: "5px 0 0 0", fontSize: "16px", color: "#555" }}>
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

export default SliderForm;