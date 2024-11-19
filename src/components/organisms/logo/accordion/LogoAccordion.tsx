import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './accordion.css';

type AccordionItem = {
  title: string;
  description: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const LogoAccordion: React.FC<AccordionProps> = ({ items, title, image }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div id="sec2">
      <div className="copywriter-intro-bg-5-label text-center">{title}</div>

      <img src={image} className="img-background-logop" alt="tak_image" />

      <div className="faqContainer">
        {items &&
          items?.map((item, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-title ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => handleClick(index)}
              >
                {item.title}
                {index === activeIndex ? (
                  <FontAwesomeIcon icon={faMinus} className="icon" />
                ) : (
                  <FontAwesomeIcon icon={faPlus} className="icon" />
                )}
              </div>
              {index === activeIndex && (
                <div className="accordion-content">
                  {item?.content.split('\\n\\n').map((para, idx) => (
                    <div key={idx} style={{ margin: '10px 0' }}>
                      {para}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default LogoAccordion;
