import Image from "next/image";
import { useState } from "react";
import SurveyModal from "./SurveyModal";
import { useSelector } from "react-redux";

export default function Testimonial() {

  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { testimonial } = screenData;

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="Testimonial content">
      <div className="Testimonial_Card feature">
        <div>
          <img
            src={testimonial?.image_url}
            alt="TestimonialImage"
            style={{width: "700px", height: "auto"}}
            
          />
        </div>
        <div className="Testimonial_Card_Content">
          <div className="Testimonial_Card_Content_Title">
            {testimonial?.opinion}
          </div>
          <div>
            <button
              className="Testimonial_Card_Content_Button"
              onClick={handleOpenModal}
            >
              {testimonial?.button_text}
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      <SurveyModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        options={options}
      />
    </div>
  );
}
