import React, { useEffect, useState } from "react";
import style from "../team.module.css";
import PersonalCard from "../personal/PersonalCard";
import { useSelector } from "react-redux";

const GoodTime = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section8 } = screenData || {};
  const { card1, card2, card3, card4, card5 } = screenData?.section9 || {};

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="WidthContent1 container">
      <div className={`${style.teamContent}`}>
        <h1 className={style.goodHeadingMain}>
          {section8?.section8_title?.split(" ").slice(0, 2).join(" ")}{" "}
          <div className="d-inline-block mx-2 ">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </div>
          {section8?.section8_title?.split(" ").slice(2).join(" ")}
        </h1>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_1}</p>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_2}</p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card1} />
      </div>
      <div className={style.teamContent}>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_3}</p>
      </div>
      <div
        className={style.cardCup}
        // style={{ backgroundImage: `url(${section8?.section8_image_1})` }}
      >
        <PersonalCard {...card2} />
      </div>
      <div className={style.teamContent}>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_4}</p>
      </div>
      <div className={style.cardDataSpace}>
        <PersonalCard {...card3} />
      </div>
      <div className={style.teamContent}>
        <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_5}</p>
      </div>
      <div
        className={style.hardWorkBG}
        // style={{ backgroundImage: `url(${section8?.section8_image_2})` }}
      >
        <div className={style.cardDataSpace}>
          <PersonalCard {...card4} />
        </div>

        <div className={style.teamContent}>
          <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_6}</p>
          <p className={`${style.mobilelefttext}`}>{section8?.section8_discription_7}</p>
        </div>
      </div>
      <div className={style.cardDataSpace1}>
        <PersonalCard {...card5} />
      </div>
      </section>
    </>
  );
};

export default GoodTime;
