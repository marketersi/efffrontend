import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { savePriceListFormData } from "@/redux/cennik/pricelistSlice";

const FormTwo = ({ setCurrentComponent, form }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState("");

  console.log("project description", projectDescription.length);

  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (projectDescription.length < 10) {
      setIsModalOpen(true);
    } else {
      const payload = { formTwoTextAreaValue: projectDescription };
      dispatch(savePriceListFormData(payload));
      setCurrentComponent(3);
    }
  };

  return (
    <div className="component-two_section">
      <h2>{form?.section_3_title_1}</h2>
      <p>{form?.section_3_title_2}</p>
      <textarea
        rows="5"
        cols="50"
        onChange={(e) => setProjectDescription(e.target.value)}
        style={{
          backgroundColor: projectDescription.length > 10 ? "#effeeb" : "",
        }}
      ></textarea>
      <div className="">
        <button className="cennikBtn" onClick={handleNext}>
          Ostatnie pytanie
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="CenikModal"
        overlayClassName="Overlay"
      >
        <h4>{form?.model_title}</h4>
        <p>{form?.modal_description}</p>
        <div className="cenikBtnDiv">
          <button onClick={closeModal}>{form?.button_text}</button>
        </div>

        <div className="close" onClick={closeModal}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
      </Modal>
    </div>
  );
};

export default FormTwo;
