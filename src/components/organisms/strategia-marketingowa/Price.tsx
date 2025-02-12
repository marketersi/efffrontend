import { useState } from "react";
import SurveyModal from "./SurveyModal";
import { useSelector } from "react-redux";

export default function Price() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { priceSection } = screenData;

  console.log(priceSection , 'priceSection@1213456')

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
    <div className="Price WidthContent2">
    
   
      <div className="Price_Container full">
        <div className="Price_Card_Container">
          {/* Card 1 */}
          {priceSection?.priceCard.map((item) => (
         
            <div className="Price_Card" key={item.id}>
                 <img src={item.background_text} alt="" className="price-card-title-image" />
           
              <div className="Price_Card_Main">
                <div>
                  <div className="Price_Card_Main_Title">{item.title}</div>
                  <div className="Price_Card_Main_TextOne">
                    {item?.subtitle_1}
                  </div>
                  <div className="Price_Card_Main_ContentOne">
                    {item.description_1}
                  </div>
                  <div className="Price_Card_Main_TextTwo">
                    {item.subtitle_2}
                  </div>
                  <div className="Price_Card_Main_ContentTwo">
                    {item.description_2}
                  </div>
                  <div className="Price_Card_Main_Footer">
                    {item.bottom_text}
                  </div>
                </div>
                <div>
                  <button
                    className="Price_Card_Main_Button"
                    onClick={handleOpenModal}
                  >
                    {item?.button_text}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
