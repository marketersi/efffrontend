import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./accordion.css";
import { useSelector } from "react-redux";
import ProjectuxModal from "../../modals/ProjectuxModal";
// import { ModalForm } from "../../tresci-sprzedazowe/ModalForm";


const UXAccordion = () => {
  const { screenData } = useSelector((state) => state.ux);
  const FAQ = screenData.FAQ || {};

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  
  // const [isModal, setIsModal] = useState(false);

  // const handleModalClose = () => {
  //   setIsModal(!isModal);
  // };

   const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


  return (
    <>
      <div className="faqContainer ">
        <div className="header__top__left">
          <h2
            className="textAnimation"
            style={{
              opacity: 1,
              transform: "translate(0px, 0px)",
            }}
          >
            Odpowiedź jest <br/> zawsze jedna:
            {/* {FAQ?.FAQTitle?.title} */}
          </h2>
          <img src="https://images.prismic.io/marketersi/Z35wjZbqstJ99K0__TAK!-1-.png?auto=format,compress" alt="" className="takImages"/>
        </div>
        {FAQ.FAQCard &&
          FAQ.FAQCard.map((item, index) => (
            <div
      key={index}
      className={`accordion-item ${index === activeIndex ? "active" : ""}`}
    >
              <div
        className="accordion-title"
        onClick={() => handleClick(index)}
      >
                {item.question}
                {index === activeIndex ? (
                  <FontAwesomeIcon icon={faMinus} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                )}
              </div>
              {index === activeIndex && (
                <div className="accordion-content" dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                
              )}

            </div>







          ))}
        <a className="send-offer-button js--triggerAnimation" onClick={openModal}>
          
            Brzmi świetnie. Wyślijcie mi ofertę 
          
        </a>
      </div>
            {/* <ModalForm isOpen={isModal} onClose={handleModalClose} /> */}
            <ProjectuxModal isOpen={isModalOpen} onRequestClose={closeModal}/>
    </>
  );
};

export default UXAccordion;
