import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select, { components } from "react-select";
import Image from "next/image";
import { motion } from "framer-motion";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormZero = ({ setCurrentComponent }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { screenData } = useSelector((state) => state.priceList);
  const { formOne } = screenData?.cardMenu?.menuThree || "";
  const { dropdown } = screenData?.cardMenu?.menuThree?.formOne || {};

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const dispatch = useDispatch();

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

  const handleButtonClick = () => {


    let payload;
    setIsButtonClicked(true);
    if (!selectedOption) {
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 500);
    } else {
      payload = {
        formZeroDropdownValueOne: selectedOption?.value,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(1);
    }
  };

  return (
    <div>
      <h2 className={`card-heading ${isButtonClicked ? "red-title" : ""}`}>
        {formOne?.form1_title}
      </h2>
      <p className={`card-subheading ${isButtonClicked ? "red-title" : ""}`}>
        {formOne?.form1_subtitle}
      </p>
      <div style={{ textAlign: "left" }} className="select-input">
        <Select
          options={dropdown}
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
              backgroundColor: selectedOption
                ? "#effeeb"
                : baseStyles.backgroundColor,
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
      {selectedOption && selectedOption.value === dropdown[1].value && (
        <div className="additional-input-container">
          <div>
          <h2>Podaj adres strony:</h2>
          <p>Lub wpisz jej nazwę</p>
          </div>
          <input type="text" />
        </div>
      )}
      <motion.button
        className="cennikBtn"
        whileHover={{ translateY: 5 }}
        onClick={handleButtonClick}
      >
        {formOne?.form1_buttonText}
      </motion.button>
    </div>
  );
};

export default FormZero;
