import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuThree || "";
  const { modalInfo } = formThree?.metadata || "";

  const [textAreaValue, setTextAreaValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = (e) => {
    e.preventDefault();
    const payload = {
      formTwoTextAreaValue: textAreaValue,
      formTwoInputValue: inputValue,
    };

    if (textAreaValue && inputValue) {
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
        <h2>{formThree?.form3_textareaTitle}</h2>
        <p>{formThree?.form3_textareaSubtitle}</p>
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
        <h2 className="mt-4 mb-4">{formThree?.form3_inputTitle}</h2>
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
        <h4></h4>
        <p>{modalInfo?.form3_modal_info}</p>
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
