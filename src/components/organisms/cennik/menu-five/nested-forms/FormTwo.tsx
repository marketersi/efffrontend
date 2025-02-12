import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuFifth || "";
  const { modalInfo } = formThree || "";

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

       // Count the number of letters (excluding spaces) in the textarea and input field
       const textAreaLetterCount = textAreaValue.replace(/\s+/g, '').length;
       const inputLetterCount = inputValue.replace(/\s+/g, '').length;

    if (textAreaLetterCount < 50 || inputLetterCount < 10) {
      setIsModalOpen(true);
    } else {
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
      
    }
  };

  return (
    <div className="feedback_section">
      <form onSubmit={handleNext}>
        {/* <h2 className="">{formThree?.section3_title1_second}</h2> */}
        <h2 className=""><span className="text-default-color">Napisz w kilku słowach</span> czym zajmuje się Twój biznes i co jest dla Ciebie ważne?</h2>
        <p>{formThree?.section3_subtitle1}</p>
        <textarea
          rows="5"
          cols="50"
          className="fs_textarea mt-3"
          onChange={(e) => setTextAreaValue(e.target.value)}
          value={textAreaValue}
          style={{
            backgroundColor: textAreaValue.length > 10 ? "#effeeb" : "",
            outline: textAreaValue.length > 10 ? "none" : "",
          }}
        ></textarea>
        {/* <h2 className="mt-3">{formThree?.section3_title2}</h2> */}
        <p className="mt-2">{formThree?.section3_subtitle2}</p>
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
        {modalInfo?.modal_info}
        </p>
        <div className="cenikBtnDiv">
          <button onClick={closeModal}>{modalInfo?.modal_button1Text}</button>
        </div>

        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FeedbackSection;
