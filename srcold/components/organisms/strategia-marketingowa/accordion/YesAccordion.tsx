import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./yes.css";
import { useSelector } from "react-redux";
import { Variants, motion } from "framer-motion";

const YesAccordion = () => {
  const { screenData } = useSelector((state) => state.strategy);
  const { FAQsection } = screenData;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const slideAnimationTop: Variants = {
    offscreen: {
      y: 0,
      rotate: -30,
      opacity: 0,
      scale: 0.8,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="faqContainer">
      <div className="header__top__left"></div>
      {FAQsection?.FAQcard.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${index === activeIndex ? "active" : ""}`}
        >
          <div className="accordion-title" onClick={() => handleClick(index)}>
            <div style={{ flex: 1 }}>{item.question}</div>

            {index === activeIndex ? (
              <FontAwesomeIcon icon={faMinus} className="icon" />
            ) : (
              <FontAwesomeIcon icon={faPlus} className="icon" />
            )}
          </div>
          {index === activeIndex && (
            <div
              className="accordion-content"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default YesAccordion;
