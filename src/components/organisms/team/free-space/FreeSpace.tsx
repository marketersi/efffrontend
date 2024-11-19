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
      <div
        className={style.free}
        // to be deleted
        // style={{ backgroundImage: `url(${section1?.section_one_img})` }}
      >
        <div className={style.teamContent}>
          <p>
            <span>{section1?.section_subtitle_one}</span>
            {section1?.section_one_para_one}
          </p>
          <p>{section1?.section_one_para_two}</p>

          <div className={style.mainHeading}>
            <h2>{section1?.section_title_one}</h2>
            <motion.div whileHover={{ translateY: 5 }}>
              <a
                // target="_blank"
                // href="https://docs.google.com/document/d/1xMLse-SaH8O0qUs4j3S7JlEbR2YGRhsUO6Dgt7_DC2U/edit"
                href="mailto:studio@marketersi.pl"
              >
                <button>Rekrutacja</button>
              </a>
            </motion.div>
          </div>
          <p className={style.freePara}>{section2?.sub_title_discription}</p>
        </div>
      </div>
    </>
  );
};

export default FreeSpace;
