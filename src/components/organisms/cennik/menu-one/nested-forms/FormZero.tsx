import React, { useState } from "react";
import { motion } from "framer-motion";
import Select, { components } from "react-select";
import Image from "next/image";
import CennikModal from "@/components/organisms/modals/CennikModal";
import { useDispatch } from "react-redux";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormZero = ({ setCurrentComponent, form }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

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
    if (
      selectedOption &&
      selectedOption.value === form.dropdown[form.dropdown.length - 1].value
    ) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

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
        {form?.section1_title}
      </h2>
      <p className={`card-subheading ${isButtonClicked ? "red-title" : ""}`}>
        {form?.section1_subtitle}
      </p>

      <div style={{ textAlign: "left" }} className="select-input">
        <Select
          options={form?.dropdown}
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

      {selectedOption && selectedOption.value === form.dropdown[0].value && (
        <div className="additional-input-container">
          <h2>Podaj adres strony:</h2>
          <input type="text" />
        </div>
      )}

      <motion.button
        className="cennikBtn"
        whileHover={{ translateY: 5 }}
        onClick={handleButtonClick}
      >
        {form?.section1_buttonText}
      </motion.button>

      {/* Modal */}
      <CennikModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default FormZero;
