import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Flip from "./flip/Flip";

const intervalDuration = 5000; 
const typingSpeed = 150;

function Market() {
  // const { screenData } = useSelector((state) => state.ux);
  // const { cardOne, cardTwo, cardThree, cardFour } = screenData.market || {};
  
  // const cards = [
  //   { title: cardOne?.title, color: "#FF5000" },
  //   { title: cardTwo?.title, color: "#1EC19B" },
  //   { title: cardThree?.title, color: "#EE8AA1" },
  //   { title: cardFour?.title, color: "#FFC700" }
  // ];

  // const [currentCardIndex, setCurrentCardIndex] = useState(0);
  // const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  // const [sentence, setSentence] = useState("");
  // const [color, setColor] = useState("#FF5000");

  // useEffect(() => {
  //   if (cards[currentCardIndex]?.title) {
  //     setSentence(cards[currentCardIndex].title);
  //     setColor(cards[currentCardIndex].color);
  //     setCurrentLetterIndex(0);
  //   }
  // }, [currentCardIndex]);

  // useEffect(() => {
  //   let typingTimeout;

  //   const type = () => {
  //     setCurrentLetterIndex((prevIndex) => prevIndex + 1);
  //     typingTimeout = setTimeout(type, typingSpeed);
  //   };

  //   type();

  //   return () => {
  //     clearTimeout(typingTimeout);
  //   };
  // }, [sentence]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  //   }, intervalDuration);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [cards.length]);

  return (
    <>
      {/* <div className="TypeMe typeme1 text-center projects-custom-typed-text">
        <span className="typed-cursor active" style={{ color: color }}>
          {sentence.substring(0, currentLetterIndex)}|
        </span>
      </div> */}
      <Flip />
      
    </>
  );
}



export default Market;
