import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

const Question14 = () => {
  const { screenData } = useSelector((state) => state.examination);
  const { summary } = screenData?.surveyQuestions || {};

  const handleDownloadPDF = async () => {
    const pdfUrl =
      'https://marketersi.cdn.prismic.io/marketersi/ZfgO6smUzjad_UM9_marketersi.pdf';
    if (pdfUrl) {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const blob = await response.blob();
        saveAs(blob, 'brochure.pdf');
      } catch (error) {
        console.error('Error downloading PDF:', error);
      }
    }
  };

  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    const showGifTimer = setTimeout(() => {
      setShowGif(true);
    }, 2000);

    const hideGifTimer = setTimeout(() => {
      setShowGif(false);
    }, 4000);

    return () => {
      clearTimeout(showGifTimer);
      clearTimeout(hideGifTimer);
    };
  }, []);

  return (
    <>
      {showGif && <img src="/assets/congrats.gif" className="congrats_gif" />}

      <div className="question_14">
        <h2>{summary?.title}</h2>
        <p>{summary?.description}</p>

        <h6>{summary?.info_1} </h6>
        <h6>{summary?.info_2} </h6>
      </div>
      <div className="marketing_book">
        <Row>
          <Col lg={6}>
            <img src={summary?.image} alt="" />
          </Col>
          <Col lg={6}>
            <h3>{summary?.image_description}</h3>
            <div>
              <div className="zh_next_btn_container">
                <motion.button
                  className="zh_next_btn"
                  whileHover={{ translateY: 5 }}
                  onClick={handleDownloadPDF}
                >
                  {summary?.buttonText_1}
                </motion.button>

                <Link href="/Zespol">
                  <motion.button
                    className="zh_preview_btn"
                    whileHover={{ translateY: 5 }}
                  >
                    {summary?.buttonText_2}
                  </motion.button>
                </Link>
              </div>
              <div className="zh_next_btn_container"></div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Question14;
