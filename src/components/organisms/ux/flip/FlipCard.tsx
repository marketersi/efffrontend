import Image from "next/image";
import "./flip.css";
import { useState, useEffect } from "react";

const FlipCard = ({
    frontImageUrl,
    // backImageUrl,
    // backTopImg,
    name,
    // textColor,
    // bgColor,
    // isFlipping,
    typingText,
  }) => {
    // const [isFlipped, setIsFlipped] = useState(false);
    // const [animateImage, setAnimateImage] = useState(false);
  
    // useEffect(() => {
    //   if (isFlipping) {
    //     const timeoutId = setTimeout(() => {
    //       setIsFlipped(true);
    //     }, 500); 
  
    //     return () => clearTimeout(timeoutId);
    //   } else {
    //     setIsFlipped(false);
    //     setAnimateImage(true); 
  
    //     const animationTimeoutId = setTimeout(() => {
    //       setAnimateImage(false); 
    //     }, 500);
  
    //     return () => clearTimeout(animationTimeoutId);
    //   }
    // }, [isFlipping]);
  
    return (
      // <div className="card">
      //   <div className={`innerCard ${isFlipped ? "isFlipped" : ""}`}>
      //     <div className="front" style={{ backgroundColor: bgColor }}>
      //       <div className="imageContainer">
      //         <Image
      //           src={frontImageUrl}
      //           alt={name}
      //           layout="fill"
      //           objectFit="cover"
      //           className={`image ${animateImage ? "animate" : ""}`}
      //         />
      //       </div>
      //       <div className="textContainer">
      //         <h3 className="name" style={{ color: textColor }}>
      //           {name}
      //         </h3>
      //       </div>
      //     </div>
      //     <div className="back" style={{ backgroundColor: bgColor }}>
      //       <div
      //         className={`backTopImg ${isFlipped ? "isFlipped" : "notFlipped"}`}
      //       >
      //         <Image src={backTopImg} alt={`${name} top image`} layout="fill" />
      //       </div>
      //       <div className="imageContainer">
      //         <Image
      //           src={backImageUrl}
      //           alt={name}
      //           layout="fill"
      //           objectFit="cover"
      //           className="image"
      //         />
      //       </div>
      //       <h3 className="typingEffect">{typingText}</h3>
      //     </div>
      //   </div>
      // </div>
      <div className="card">
         <img
                src={frontImageUrl}
                alt={name}
                style={{width: '100%', height: 'auto'}}
              />
              <h3 className="typingEffect">{typingText}</h3>
      </div>
    );
  };
  

export default FlipCard