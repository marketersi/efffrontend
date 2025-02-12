import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FlipCard from "./FlipCard";
import "./flip.css";

const Flip = () => {
  // const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const { screenData } = useSelector((state) => state.ux);
  const { cardOne, cardTwo, cardThree, cardFour } = screenData.market || {};

  const cardsData = [
    { ...cardOne, bgColor: "#ff5000", textColor: "#ff5000" },
    { ...cardTwo, bgColor: "#1ec19b", textColor: "#1ec19b" },
    { ...cardThree, bgColor: "#ee8aa1", textColor: "#ee8aa1" },
    { ...cardFour, bgColor: "#ffc700", textColor: "#ffc700" },
  ];

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [cardsData.length]);

  return (
    <div className="flipCardContainer">
      {cardsData.map((card, index) => (
        <FlipCard
          key={index}
          frontImageUrl={card.image}
          // backImageUrl={card.back_image}
          // backTopImg={card.back_image_2}
          name={card.text}
          // textColor={card.textColor}
          // bgColor={card.bgColor}
          typingText={card.back_title}
          // isFlipping={currentCardIndex === index}
        />
      ))}
    </div>
  );
};

export default Flip;
