
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Faq: React.FC<AccordionProps> = ({ faq }) => {
  const {faqAQ} = faq || [];


  const {faq_ques, faq_ans} = faqAQ || [];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="copywriter-intro-bg-5-label text-center text-change">
        {/* {faq?.main_title}  */}
        Odpowiedź jest zawsze jedna 
      </div>
      <div className="copywriter-text-center copywriter-standard-mtb-40">
        <img
          src={faq?.image}
          title="Owocni oferują usługi copywriterskie"
          alt="Reklama, której powiesz tak"
        />
      </div>
      <div className="faqContainer ">
      {faqAQ &&
        faqAQ?.map((item, index) => (
          <div key={index} className={`accordion-item ${index === activeIndex ? "active" : ""}`}>
            <div
              className="accordion-title"
              onClick={() => handleClick(index)}
            >
              {item.faq_ques}
              {index === activeIndex ? (
                <FontAwesomeIcon icon={faMinus} className="icon" />
              ) : (
                <FontAwesomeIcon icon={faPlus} className="icon" />
              )}
            </div>
            {index === activeIndex && (
              <div className="accordion-content faqcontent" dangerouslySetInnerHTML={{ __html: item.faq_ans }}></div>
              
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Faq;
