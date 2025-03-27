import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import Link from "next/link";

const provincesArray = [
  "Dolnośląskie",
  "Kujawsko-Pomorskie",
  "Lubelskie",
  "Lubuskie",
  "Łódzkie",
  "Małopolskie",
  "Mazowieckie",
  "Opolskie",
  "Podkarpackie",
  "Podlaskie",
  "Pomorskie",
  "Śląskie",
  "Świętokrzyskie",
  "Warmińsko-Mazurskie",
  "Wielkopolskie",
  "Zachodniopomorskie",
];

const ContactMap = () => {
  const { isLoading, screenData } = useSelector((state) => state.contact);
  const { feedback } = screenData || {};

  console.log(feedback , 'feedback')

  const [selectedFeedback, setSelectedFeedback] = useState({});
  const [activeFeedback, setActiveFeedback] = useState("");

  const [glowIndex, setGlowIndex] = useState(null);
  const [prevGlowIndex, setPrevGlowIndex] = useState(null);

  useEffect(() => {
    if (feedback && feedback.length > 0) {
      console.log("initial feedback", feedback[0]);
      console.log(
        "initial active feedback",
        feedback[0].provinces.toLowerCase()
      );
      setSelectedFeedback(feedback[0]);
      setActiveFeedback(feedback[0].provinces);
    }
  }, [feedback]);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomGlowIndex;
      do {
        randomGlowIndex = Math.floor(Math.random() * 16) + 1;
      } while (randomGlowIndex === prevGlowIndex);

      setGlowIndex(randomGlowIndex);
      setPrevGlowIndex(randomGlowIndex);
    }, 2000);

    return () => clearInterval(interval);
  }, [prevGlowIndex]);

  const handleShowFeedback = (province) => {
    const matchedFeedback = feedback.find((item) => {
      return item.provinces.toLowerCase() === province?.toLowerCase();
    });

    if (matchedFeedback) {
      setSelectedFeedback(matchedFeedback);
      setActiveFeedback(matchedFeedback?.provinces);
    }
  };

  const handleShowRandomFeedbacks = () => {
    const index = Math.floor(Math.random() * 16 + 1);
    handleShowFeedback(provincesArray[index]);
  };

  return (
    <div className="map_container">
      <div className="MapContainerInner">
      <Image src="/assets/images/contact/mapakontakt.avif" alt="" />

      <>
        <div
          className={`icon1 plus_icon_container ${
            activeFeedback === "Zachodniopomorskie".toLowerCase()
              ? "active"
              : ""
          } `}
          onClick={() => handleShowFeedback("Zachodniopomorskie")}
        >
          <div className={`${glowIndex === 1 ? "glow" : ""}`}></div>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" />

        </div>

        <div
          className={`icon2 plus_icon_container ${
            activeFeedback === "Pomorskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Pomorskie")}
        >
          <div className={`${glowIndex === 2 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon3 plus_icon_container ${
            activeFeedback === "Warmińsko-Mazurskie".toLowerCase()
              ? "active"
              : ""
          } `}
          onClick={() => handleShowFeedback("Warmińsko-Mazurskie")}
        >
          <div className={`${glowIndex === 3 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon4 plus_icon_container ${
            activeFeedback === "Lubuskie".toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Lubuskie")}
        >
          <div className={`${glowIndex === 4 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon5 plus_icon_container ${
            activeFeedback === "Wielkopolskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Wielkopolskie")}
        >
          <div className={`${glowIndex === 5 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon6 plus_icon_container ${
            activeFeedback === "Kujawsko-Pomorskie".toLowerCase()
              ? "active"
              : ""
          }`}
          onClick={() => handleShowFeedback("Kujawsko-Pomorskie")}
        >
          <div className={`${glowIndex === 6 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon7 plus_icon_container ${
            activeFeedback === "Mazowieckie".toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Mazowieckie")}
        >
          <div className={`${glowIndex === 7 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon8 plus_icon_container ${
            activeFeedback === "Podlaskie".toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Podlaskie")}
        >
          <div className={`${glowIndex === 8 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon9 plus_icon_container ${
            activeFeedback === "Dolnośląskie".toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Dolnośląskie")}
        >
          <div className={`${glowIndex === 9 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon10 plus_icon_container ${
            activeFeedback === "Łódzkie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Łódzkie")}
        >
          <div className={`${glowIndex === 10 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon11 plus_icon_container ${
            activeFeedback === "Opolskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Opolskie")}
        >
          <div className={`${glowIndex === 11 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon12 plus_icon_container ${
            activeFeedback === "Śląskie".toLowerCase() ? "active" : ""
          }`}
          onClick={() => handleShowFeedback("Śląskie")}
        >
          <div className={`${glowIndex === 12 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon13 plus_icon_container ${
            activeFeedback === "Małopolskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Małopolskie")}
        >
          <div className={`${glowIndex === 13 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon14 plus_icon_container ${
            activeFeedback === "Świętokrzyskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Świętokrzyskie")}
        >
          <div className={`${glowIndex === 14 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon15 plus_icon_container ${
            activeFeedback === "Lubelskie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Lubelskie")}
        >
          <div className={`${glowIndex === 15 ? "glow" : ""}`}></div>
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>

        <div
          className={`icon16 plus_icon_container ${
            activeFeedback === "Podkarpackie".toLowerCase() ? "active" : ""
          } `}
          onClick={() => handleShowFeedback("Podkarpackie")}
        >
          <div className={`${glowIndex === 16 ? "glow" : ""}`}></div>
          {/* <span>+</span> */}
          <span><FontAwesomeIcon icon={faMapMarkerAlt} className="map-icon" /></span>
        </div>
      </>
      {/* Icon container ends */}
      </div>

      {selectedFeedback && (
        <div className="map_content">
          <p>Social media z realnym efektem</p>
          <h3>{selectedFeedback?.feedback_title}</h3>
          <h4>{selectedFeedback?.feedback_content}</h4>
          <p>{selectedFeedback?.feedback_subtitle}</p>
          <p className="map_bottom_p">
            {selectedFeedback?.company_name}, {selectedFeedback?.capital_city}
          </p>
          <div className="MapsButtonsDiv">

            <a href="#" className="MapsButtons">Opinie</a>

            <div className="MapsButtonsDivRight">
              <button
                type="button"
                className="MapsButtonsNormal"
                aria-label="Następna opinia"
                onClick={handleShowRandomFeedbacks} // Trigger the same function as map clicks
              >
                <span>Zobacz kolejną</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  role="img"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path d="M28.4,43.4v169.1c0,25.9,29.1,42.6,50.9,28l132.8-85.1c20.8-13.5,20.8-42.6,0-56L79.2,14.4C57.4,1.9,28.4,17.5,28.4,43.4z" />
                </svg>
              </button>
            </div>


          </div>
        </div>
      )}

      {/* <div className="map_button">
        <Link className="nasiBtn" href="/owocni-opinie">
          Nasi klienci
        </Link>
        <div className="map_play" onClick={handleShowRandomFeedbacks}>
          <span>Następna opinia</span>
          <div className="play">
            <Image src="/assets/images/play_arrow.svg" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactMap;
