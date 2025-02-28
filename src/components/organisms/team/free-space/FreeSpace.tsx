'use client';
import React from 'react';
import style from '../team.module.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const FreeSpace = () => {
  const { isLoading, screenData } = useSelector((state) => state.team);
  const { section1, section2 } = screenData;

  return (
    <>
      <section className= {`${style.topmobilespace} WidthContent`}>
      <div
        className={style.free}
        // to be deleted
        // style={{ backgroundImage: `url(${section1?.section_one_img})` }}
      >
        <div className={style.teamContent}>
          <h1 className={style.MainTitle}>Twoja marka na właściwym kursie – pewność i skuteczność z Marketersi</h1>
          
          <p className={style.mobilelefttext}>Odkryj strategię marketingową Marketersi, która stanie się Twoim niezawodnym kompasem. Z nami unikasz nie tylko kosztownych błędów i zbędnych wydatków, ale także przekształcasz potencjalne przeszkody w odblokowanie zysków.</p>
          <p className={style.mobilelefttext}>Inwestując środki i czas w to, co naprawdę przynosi rezultaty, wyróżniasz się na tle konkurencji. Takie podejście odróżnia sprytne, dynamicznie rozwijające się firmy od tych, które nieustannie napotykają na przeszkody.</p>
          
          <p className={style.mobilelefttext}>W Marketersi nie tylko tworzymy strategie – konstruujemy fundamenty, na których Twoja firma może stabilnie rosnąć i rozwijać się. Nasza praca to połączenie pasji, doświadczenia i ciągłego dążenia do doskonałości.</p>
          <p className={style.mobilelefttext}>Każdy projekt traktujemy jak wyzwanie architektoniczne, gdzie detale decydują o sile i trwałości finalnego wykonania.</p>

          <div className={style.mainHeading}>
            <h2>{section1?.section_title_one}</h2>
            <motion.div whileHover={{ translateY: 5 }}>
              <a
                // target="_blank"
                // href="https://docs.google.com/document/d/1xMLse-SaH8O0qUs4j3S7JlEbR2YGRhsUO6Dgt7_DC2U/edit"
                href="mailto:studio@marketersi.pl"
              >
                <button>Dołącz do nas</button>
              </a>
            </motion.div>
          </div>
          <p className={style.freePara}>{section2?.sub_title_discription}</p>
        </div>
      </div>
      </section>
    </>
  );
};

export default FreeSpace;
