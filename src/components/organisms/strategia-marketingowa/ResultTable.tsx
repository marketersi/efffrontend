import { useState } from "react";
import SurveyModal from "./SurveyModal";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function ResultTable() {
  const { isLoading, screenData } = useSelector((state) => state.strategy);
  const { ResultTable } = screenData;

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
    <div className="ResultTable content">
      <div className="ResultTable_Title">{ResultTable?.title}</div>
      <div className="ResultTable_Table feature">
        {ResultTable?.resultCard.map((item) => (
          <div className="ResultTable_Table_Row" key={item.id}>
            <div className="ResultTable_Table_Row_Content">{item.title}</div>
            <div>
              <img
                src={item.image_url}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div>
              <div
                className="ResultTable_Table_Row_Button"
                onClick={() => handleOpenModal(item.id)}
              >
                Zapytaj o szczegóły (Case study)
              </div>
            </div>
          </div>
        ))}
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
