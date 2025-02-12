import React from 'react';
import style from '../opinie.module.css';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Personally = () => {
  const { screenData } = useSelector((state) => state.opinion);
  const atMarketersi = screenData.atMarketersi || {};

  return (
    <>
      <div className={style.Personally}>
        <div className={style.personallyContainer}>
          <div className={style.personallyCard}>
            <Row>
              <Col lg={4}>
                <img
                  className={style.personallMan}
                  src={atMarketersi?.img_1}
                  alt=""
                />

                {/* to be deleted */}
                {/* <img
                  className={style.personallHand}
                  src={atMarketersi?.img_2}
                  alt=""
                /> */}
              </Col>
              <Col lg={8}>
                <h2>{atMarketersi?.title}</h2>
                <p>{atMarketersi?.para_1}</p>
                <p>{atMarketersi?.para_2}</p>
                <p>{atMarketersi?.para_3}</p>
                <div className={style.contact}>
                  <h4>{atMarketersi.cont_title}</h4>
                  <p>{atMarketersi?.cont_name}</p>
                  <p>Tel. {atMarketersi?.cont_number}</p>
                  <a href="mailto:studio@marketersi.pl">
                    {atMarketersi?.write_to_us?.text}
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personally;
