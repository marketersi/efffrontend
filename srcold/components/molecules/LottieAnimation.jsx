// import { useState, useEffect } from 'react';
// import Lottie from 'react-lottie';
// import animationData from './data.json';
// import blackLogo from './blackLogo.json';
// import whiteLogo from './whiteLogo.json';

// const LottieAnimation = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [direction, setDirection] = useState(1);

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: blackLogo,
//     rendererSettings: {
//       preserveAspectRatio: 'xMidYMid slice',
//     },
//   };

//   const handleMouseEnter = () => {
//     setDirection(1);
//     setIsPaused(false);
//   };

//   const handleMouseLeave = () => {
//     setDirection(-1);
//     setIsPaused(false);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setIsPaused(true); // Pause the animation after it plays initially
//     }, 3000); // Adjust the time based on your animation length
//   }, []);

//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <Lottie
//         options={defaultOptions}
//         height={150}
//         width={400}
//         isPaused={isPaused}
//         direction={direction}
//       />
//     </div>
//   );
// };

// export default LottieAnimation;

import { useState, useEffect } from "react";
import Lottie from "react-lottie";
import blackLogo from "./blackLogo.json";
import whiteLogo from "./whiteLogo.json";
import styles from "./lottieAnimation.module.css";

const LottieAnimation = ({isHovered}) => {
  // const [isPaused, setIsPaused] = useState(false);
  // const [direction, setDirection] = useState(1);
  const [animationData, setAnimationData] = useState(whiteLogo); // State for animation data

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: isHovered ? blackLogo : whiteLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const handleMouseEnter = () => {
  //   setDirection(1);
  //   setIsPaused(false);
  //   setAnimationData(blackLogo); // Change to white logo on hover
  // };

  // const handleMouseLeave = () => {
  //   // setDirection(-1);
  //   setIsPaused(false);
  //   setAnimationData(whiteLogo); // Change back to black logo on mouse leave
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsPaused(true); // Pause the animation after it plays initially
  //   }, 10000); // Adjust the time based on your animation length

  //   return () => clearTimeout(timer); // Cleanup the timer on unmount
  // }, []);

  return (
    <div
      className={styles.lottieContainer}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Lottie
        options={defaultOptions}
        // isPaused={isPaused}
        // direction={direction}
      />
    </div>
  );
};

export default LottieAnimation;
