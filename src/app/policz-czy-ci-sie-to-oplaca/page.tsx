'use client';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Calculator from '@/components/organisms/calculator/Calculator';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CALCULATOR_SCREEN_DATA } from '@/redux/kalkulator/calculatorAction';
import Warranty from '@/components/organisms/calculator/Warranty';
import './calculator.css';
import BounceLoader from 'react-spinners/BounceLoader';

const CalculatorScreen = () => {
  const { isLoading, screenData } = useSelector((state) => state.calculator);
  const dispatch = useDispatch();

  if (screenData) {
    console.log('calculator screen data from UI => ', screenData);
  }

  useEffect(() => {
    dispatch({ type: FETCH_CALCULATOR_SCREEN_DATA });
  }, [dispatch]);

  if (isLoading)
    return (
      <div className="loader-container">
        <BounceLoader color="#00bfff" size={50} />
      </div>
    );

  return (
    <>
      <section className="cal_sec">
        <Container>
          <Row className="first-row">
            <Col className="text-center">
              <h1>
                {screenData?.first_heading &&
                  screenData?.first_heading.split(' ').slice(0, 5).join(' ')}
              </h1>
              <p>
                {screenData?.first_heading &&
                  screenData?.first_heading.split(' ').slice(5).join(' ')}
              </p>
              <p className="BoldText">
  {screenData?.sub_heading?.split("suwaki.")[0]} suwaki. <br />
  {screenData?.sub_heading?.split("suwaki.")[1]}
</p>

            </Col>
          </Row>

          <Calculator />

          <Row className="second-row MTBigSpace2">
            <Col className="text-center p-sm-5 p-4">
              <h1>
                {screenData?.second_heading &&
                  screenData?.second_heading.split(' ').slice(0, 5).join(' ')} 

                  &nbsp;
                  
                <span>
                  {screenData?.second_heading &&
                    screenData?.second_heading.split(' ').slice(5).join(' ')}
                </span>
              </h1>
              <div className="calculator_container" style={{ margin: 'auto' }}>
                <p className="mt-5">{screenData?.first_paragraph}</p>
                <p>{screenData?.second_paragraph}</p>
              </div>
            </Col>
          </Row>
          <Warranty />
        </Container>
      </section>
    </>
  );
};

export default CalculatorScreen;
