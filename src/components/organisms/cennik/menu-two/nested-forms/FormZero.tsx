import React, { useState } from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormZero = ({ setCurrentComponent, form }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const dispatch = useDispatch();

  const optionsOne = form?.Dropdown1.map((option) => ({
    value: option.value,
    label: option.value,
  }));
  const optionsTwo = form?.Dropdown2.map((option) => ({
    value: option.value,
    label: option.value,
  }));

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
  const handleSelectChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleButtonClick = () => {
    let payload;
    setIsButtonClicked(true);
    if (!selectedOption || !selectedOption2) {
      setTimeout(() => {
        setIsButtonClicked(false);
      }, 500);
    } else {
      payload = {
        formZeroDropdownValueOne: selectedOption?.value,
        formZeroDropdownValueTwo: selectedOption2?.value,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(1);
    }
  };

  return (
    <div className="formTwo">
      <h2
        className={`card-heading mb-3 ${
          isButtonClicked && !selectedOption ? "red-title" : ""
        }`}
      >
        {form?.section_1_title_1}
      </h2>
      <div style={{ textAlign: "left" }} className="select-input">
        <Select
          options={optionsOne}
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
      <h2
        className={`card-heading mt-4 mb-3 ${
          isButtonClicked && !selectedOption2 ? "red-title" : ""
        }`}
      >
        {form?.section_1_title_2}
      </h2>
      <div style={{ textAlign: "left" }} className="select-input">
        <Select
          options={optionsTwo}
          placeholder="Wybierz"
          isSearchable={false}
          components={{ DropdownIndicator }}
          onChange={handleSelectChange2}
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
              backgroundColor: selectedOption2
                ? "#effeeb"
                : baseStyles.backgroundColor,
              outline: selectedOption2 ? "2px solid #effeeb" : "none",
            }),
            dropdownIndicator: (provided, state) => ({
              ...provided,
              padding: "0",
              paddingLeft: "3px",
              paddingRight: "3px",
            }),
            menu: (provided, state) => ({
              ...provided,
              backgroundColor: selectedOption2 ? "#effeeb" : "#fff",
            }),
          }}
        />
      </div>
      <motion.button
        className="cennikBtn"
        whileHover={{ translateY: 5 }}
        onClick={handleButtonClick}
      >
        Rozpocznij kalkulację
      </motion.button>
    </div>
  );
};

export default FormZero;
