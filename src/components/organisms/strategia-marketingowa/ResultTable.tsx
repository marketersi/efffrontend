import { useState, useEffect } from "react";
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

// Prevent browser back button when modal is open
useEffect(() => {
  if (showModal) {
    const handleBackButton = (event) => {
      event.preventDefault();
      window.history.pushState(null, null, window.location.href);
    };

    window.history.pushState(null, null, window.location.href); // Add a new history state
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton); // Clean up on modal close
    };
  }
}, [showModal]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="ResultTable WidthContent">
      <div className="ResultTable_Title mt-0 manage-space">Nasze strategie<br/> napędzają biznesy<br/> – zobacz je w akcji:</div>
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
                Poznaj ofertę
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
