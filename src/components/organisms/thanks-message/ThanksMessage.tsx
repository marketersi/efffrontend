"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import style from "./thanks.module.css";

import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const ThanksMessage = () => {
  const { width, height } = useWindowSize();
  const router = useRouter();

  const [isShowingCoffit, setIsShowingConfeeti] = useState(true);

  useEffect(() => {
    // Hide confetti after 3 seconds
    const timeout = setTimeout(() => {
      setIsShowingConfetti(false);
    }, 3000);

    // Ensure no horizontal scrolling due to confetti
    document.body.style.overflowX = "hidden";

    return () => {
      clearTimeout(timeout); // Cleanup timeout on unmount
      document.body.style.overflowX = ""; // Reset overflow style
    };
  }, []);

  

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };
  const handleGoToOpinie = () => {
    router.push("/marketersi-opinie"); // Navigate to the desired page
  };

  return (
    <div className={style.thanks}>
      <Confetti width={width} height={height} numberOfPieces={1200} tweenDuration={3000} recycle={false} />
      <div className={style.thanksContainer}>
        <img
          className={style.maiImg}
          src="/assets/images/Thanks/envolope.png"
          alt=""
        />
        <img
          className={style.profileImg}
          src="/assets/images/Thanks/girl.jpg"
          alt=""
        />
        <h2>Dziękujemy za wiadomość</h2>
        <h4>
          Właśnie zaczynamy działać, by przygotować dla Ciebie coś wyjątkowego.{" "}
          <br /> Skontaktujemy się z Tobą w ciągu 24 godzin w dni robocze
          (poniedziałek - piątek)
        </h4>
        {/* <div className={style.likeButton}>
          <img src="/assets/images/Thanks/FEppCFCt76d.png" alt="" />
          <p>Obserwuj</p>
        </div> */}
        <h5>
          <span>W międzyczasie… </span>
          Zobacz, jak pomogliśmy innym. I jakie efekty osiągnęli dzięki
          współpracy z nami.
        </h5>

        <button onClick={handleGoToOpinie}>Poznaj opinie klientów</button>
      </div>
    </div>
  );
};

export default ThanksMessage;
