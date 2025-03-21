import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Calculator = () => {
  const [visitors, setVisitors] = useState(10);
  const [averageOrderValue, setAverageOrderValue] = useState(1);
  const [conversionIncrease1, setConversionIncrease1] = useState(0);
  const [conversionIncrease5, setConversionIncrease5] = useState(0);

  useEffect(() => {
    const additionalRevenue1 = visitors * 0.01 * averageOrderValue;

    setConversionIncrease1(additionalRevenue1);

    const additionalRevenue5 = visitors * 0.05 * averageOrderValue;

    setConversionIncrease5(additionalRevenue5);
  }, [visitors, averageOrderValue]);

  const handleVisitorsChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = Math.max(newValue, 0);
    newValue = Math.min(newValue, 9999);
    setVisitors(newValue);
  };

  const handleOrderValueChange = (event) => {
    let newValue = parseInt(event.target.value, 10);
    newValue = Math.max(newValue, 0);
    newValue = Math.min(newValue, 99999);
    setAverageOrderValue(newValue);
  };

  function formatNumberForPortugueseLocale(number) {
    if (typeof number !== "string") {
      number = number.toString();
    }

    return number.replace(/[.,]/g, function (match) {
      return match === "." ? "," : ".";
    });
  }

  return (
    <>
      <Row className="MTBigSpace">
        <Col
          lg={6}
          className="text-center d-flex flex-column align-items-center justify-content-center p-0"
        >
          <div className="first-card card shadow">
            <Row className="mb-5 align-items-start  mobileBottBDR">
              <Col sm={4}>
                <p className="mb-0 topMarg">Stronę odwiedza</p>
              </Col>
              <Col sm={4} className="CalTopInput colxsmobile">
                <input
                  value={visitors}
                  onChange={handleVisitorsChange}
                  type="number"
                  className="no-spinner calc_input"
                />

                <input
                  type="range"
                  min="10"
                  max="9999"
                  step="1"
                  value={visitors}
                  onChange={handleVisitorsChange}
                  className="custom-range"
                  style={{ "--value": visitors }}
                />
              </Col>
              <Col sm={4}>
                <p className="mb-0 topMarg">osób w miesiącu</p>
              </Col>
            </Row>

            <Row className="align-items-start">
              <Col sm={4}>
                <p className="inputHeading mb-0 topMarg">Średni zysk z zamówienia to</p>
              </Col>
              <Col sm={4} className="CalBotInput colxsmobile">
                <input
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  type="number"
                  className="no-spinner calc_input"
                />
                <input 
                  type="range"
                  min="1"
                  max="99999"
                  step="1"
                  value={averageOrderValue}
                  onChange={handleOrderValueChange}
                  className="custom-range"
                  style={{ "--value": averageOrderValue }}
                />
              </Col>
              <Col sm={4}>
                <p className="mb-0 topMarg">złotych</p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={6}  className="car text-center p-sm-4 p-3 second-card p-0">
          <img
            src="https://images.prismic.io/marketersi/Zokfoh5LeNNTw2Je_Marketersi-1b.png?auto=format,compress"
            alt=""
          />

          <div className="my-3">
            <h6>wzrost konwersji o 1%</h6>
            <Row>
              <Col xs={6} className="text-end  pe-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    conversionIncrease1.toLocaleString("en-US")
                  )}
                  zł
                </h3>
                <p>Miesięcznie</p>
              </Col>
              <Col xs={6} className="text-start ps-sm-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    (conversionIncrease1 * 12).toLocaleString("en-US")
                  )}{" "}
                  zł
                </h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>

          <div>
            <h6>wzrost konwersji o 5%</h6>
            <Row>
              <Col xs={6} className="text-end  pe-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    conversionIncrease5.toLocaleString("en-US")
                  ).toLocaleString("en-US")}{" "}
                  zł
                </h3>
                <p>Miesięcznie</p>
              </Col>
              <Col xs={6} className="text-start ps-sm-4">
                <h3>
                  {formatNumberForPortugueseLocale(
                    (conversionIncrease5 * 12).toLocaleString("en-US")
                  ).toLocaleString("en-US")}{" "}
                  zł
                </h3>
                <p>Rocznie</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Calculator;
