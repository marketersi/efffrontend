import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Select, { components } from "react-select";
import Image from "next/image";

const FeedbackSection = ({ setCurrentComponent}) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuThree || "";
  const { modalInfo } = formThree?.metadata || "";
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");



  

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(false);
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

  const handleSelectChange = (option) => {
    setSelectedOption(option);
  };

    // Count the number of letters (excluding spaces) in the textarea and input field
    const textAreaLetterCount = textAreaValue.replace(/\s+/g, '').length;
    const inputLetterCount = inputValue.replace(/\s+/g, '').length;

  const handleNext = (e) => {
    e.preventDefault();

    if (textAreaLetterCount < 50) {
      setIsModalOpen(true);
     
    } else {
      const payload = {
        formTwoTextAreaValue: textAreaValue,
        formTwoDropdownValue: selectedOption.value,
      };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
    }
  };



  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
        <h2 className="mb-3">{formThree?.form3_textareaTitle}</h2>
        {/* <p>{formThree?.form3_textareaSubtitle}</p> */}
   
        <textarea
          rows="5"
          cols="50"
          className="fs_textarea"
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
          style={{
            backgroundColor: textAreaValue.length > 10 ? "#effeeb" : "",
            outline: textAreaValue.length > 10 ? "none" : "",
          }}
        ></textarea>
        {/* Dropdown Component */}
        <div className="mt-4">
        <h2 className={`card-heading ${isButtonClicked ? "red-title" : ""}`}>
        {formThree?.form3_inputTitle}
      </h2>
      {/* <p className={`card-subheading ${isButtonClicked ? "red-title" : ""}`}>
        {formThree?.form3_inputTitle}
      </p> */}
        <div className="select-input mb-4">
          <Select
            options={formThree?.dropdown || []}
            placeholder="Wybierz"
            isSearchable={false}
            components={{ DropdownIndicator }}
            onChange={handleSelectChange}
            styles={{
              clearIndicator: (baseStyles) => ({
                ...baseStyles,
                display: "none",
              }),
              indicatorSeparator: (baseStyles) => ({
                ...baseStyles,
                display: "none",
              }),
              control: (baseStyles) => ({
                ...baseStyles,
                paddingLeft: "10px",
                borderRadius: "20px",
                paddingBlock: "3px",
                backgroundColor: selectedOption ? "#effeeb" : baseStyles.backgroundColor,
                outline: selectedOption ? "2px solid #effeeb" : "none",
                textAlign: "left"
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                padding: "0 3px",
              }),
              menu: (provided) => ({
                ...provided,
                backgroundColor: selectedOption ? "#effeeb" : "#fff",
              }),
            }}
          />
        </div>
        </div>
        
        <button type="submit" className="cennikBtn">
          {formThree?.form3_buttonText}
        </button>
      </form>

       <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="CenikModal"
            overlayClassName="Overlay"
          >
            <p>
              {modalInfo?.form3_modal_info}
            </p>
            <div className="cenikBtnDiv">
              <button onClick={closeModal}>{modalInfo?.form3_modal_buttonText}</button>
            </div>
    
            <div className="close" onClick={closeModal}>
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </Modal>
    </div>
  );
};

export default FeedbackSection;
