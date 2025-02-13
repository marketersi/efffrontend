import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Select, { components } from "react-select";
import Image from "next/image";





const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuFour || "";
  const { modalInfo} = formThree || {};
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

     // Count the number of letters (excluding spaces) in the textarea and input field
 const textAreaLetterCount = textAreaValue.replace(/\s+/g, '').length;
 const inputLetterCount = inputValue.replace(/\s+/g, '').length;

  const handleNext = (e) => {

    e.preventDefault();

    const payload = {
      formTwoTextAreaValue: textAreaValue,
      formTwoDropdownValue: selectedOption?.value,
    };
console.log(payload , 'payloadpayload')

    if (textAreaLetterCount < 50) {
      setIsModalOpen(true);
      console.log('sdasdasds'  ,textAreaLetterCount)
    } 
    else {
     
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
    }
  };


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


  

  return (
    <div className="feedback_section mb-md-5 mb-sm-3">
       <form onSubmit={handleNext}>
       <h2><span style={{ color: '#00bbff' }}>Napisz w kilku słowach</span> czym zajmuje się Twój biznes i co jest dla Ciebie ważne?</h2>
         <p>{formThree?.section3_subtitle1}</p> 
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
        <div className="select-form mt-5">
        <h2 className={`card-heading ${isButtonClicked ? "red-title" : ""}`}>
        {formThree?.section3_title_2}
      </h2>
        
        {/* <p className={`card-heading ${isButtonClicked ? "red-title" : ""}`}>{formThree?.section3_subtitle2}</p> */}
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
        <button type="submit"  className="cennikBtn">
        Ostatni krok
        </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="CenikModal"
        overlayClassName="Overlay"
      >
        <div className="cennik-modal-content">
          
          <p>
          {modalInfo?.modal_info}
          </p>
          
          <div>
            <button className="cennik-modal-btn">
              <Link href="/">{modalInfo?.modal_button1Text}</Link>
            </button>
            
          </div>
        </div>
        

        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackSection;
