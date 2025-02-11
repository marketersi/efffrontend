import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FeedbackForm = ({ setCurrentComponent, formThree }) => {
  const { formData } = useSelector((state) => state.priceList);

  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const { formThree } = screenData?.cardMenu?.menuOne || "";

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();

    // Count the number of letters (excluding spaces) in the textarea and input field
    const textAreaLetterCount = textAreaValue.replace(/\s+/g, '').length;
    const inputLetterCount = inputValue.replace(/\s+/g, '').length;

    // If letter counts are below the minimum required, show error
    if (textAreaLetterCount < 50 || inputLetterCount < 10) {
      setIsModalOpen(true);
    } else {
      const payload = {
        formTwoTextAreaValue: textAreaValue,
        formTwoInputValue: inputValue,
      };

      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3); // Proceed to next component
    }
  };

  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
      <h2
  dangerouslySetInnerHTML={{
    __html: formThree?.section3_title || "Default Title",
  }}
></h2>
        <p className="mt-3 mb-4">{formThree?.section3_subtitle1}</p>
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
        <p
  className="mt-4 mb-4"
  dangerouslySetInnerHTML={{ __html: formThree?.section3_textareaTitle }}
></p>

        <input
          type="text"
          className="fs_input"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          style={{
            backgroundColor: inputValue.length > 10 ? "#effeeb" : "",
            outline: inputValue.length > 10 ? "none" : "",
          }}
        />
        <button type="submit" className="cennikBtn">
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
        <p>
          {formThree?.modal?.modal_description}
        </p>
        <div className="cenikBtnDiv">
          <button onClick={closeModal}>{formThree?.modal?.modal_buttonText}</button>
        </div>

        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackForm;
