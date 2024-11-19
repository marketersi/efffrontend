import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FeedbackSection = ({ setCurrentComponent }) => {
  const { isLoading, screenData } = useSelector((state) => state.priceList);
  const { formThree } = screenData?.cardMenu?.menuFour || "";
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
        <h2>{formThree?.section3_title_1}</h2>
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
        <h2 className="mt-3">{formThree?.section3_title_2}</h2>
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
          Ostatnie pytanie
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
          <h2 className="cennik-modal-title">
            {modalInfo?.modal_title}
          </h2>
          <p>
          {modalInfo?.modal_info}
          </p>
          <p>
          {modalInfo?.modal_info_2}
          </p>
          <div>
            <button className="cennik-modal-btn">
              <Link href="/">{modalInfo?.modal_button1Text}</Link>
            </button>
            <button className="cennik-modal-btn" onClick={closeModal}>
            {modalInfo?.modal_button2Text}
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
