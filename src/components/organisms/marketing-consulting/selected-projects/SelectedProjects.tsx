import React from 'react';
import './selected-projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SelectedProjects = () => {
  const { screenData1 } = useSelector((state) => state.consulting);

  const { Projects } = screenData1 || {};
  const { subtitle, title, Cards } = Projects || {};
    const titlee = "Nasze projekty\nw akcji"
  return (
    <Container className="sp_sec">
      <div className="sp_header">
      <h2 style={{ whiteSpace: "pre-line" }}>{titlee}</h2>
        <p>
          <em>{subtitle}</em>
        </p>
      </div>

      {/* cards */}
      {Cards?.map((item, index) => {
        const {
          id,
          title,
          info,
          catagory,
          flag_logo_1,
          flag_logo_2,
          banner_image,
        } = item || {};

        const showFlags = index === 0;

        if (index % 2 !== 0) {
          return (
            <div className="my-5 CustomContainer" key={index}>
              <Row className="justify-content-center m-0">
                <Col lg={7} className='p-0'>
                  <img
                    src={banner_image}
                    alt="project-banner-image"
                    className="left-card-img"
                  />
                </Col>
                <Col
                  lg={5}
                  className="d-flex justify-content-center align-items-center p-0"
                >
                  <div className="sp_card_right text-center">
                    <p>{title}</p>
                    <h2>{info}</h2>
                    <div>
                      <p>{catagory}</p>
                      {showFlags && (
                        <div>
                          <img src={flag_logo_1} className="me-1" />
                          <img src={flag_logo_2} />
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          );
        } else {
          return (
            <div className="sp_card_container CustomContainer" key={index}>
              <Row className='m-0'>
                <Col
                  lg={5}
                  className="d-flex justify-content-center align-items-center order-lg-1 order-2 p-0"
                >
                  <div className="sp_card_left text-center">
                    <p>{title}</p>
                    <h2>{info}</h2>
                    <div>
                      <p>{catagory}</p>
                      {showFlags && (
                        <div>
                          <img src={flag_logo_1} alt="" className="me-1" />
                          <img src={flag_logo_2} alt="" />
                        </div>
                      )}
                    </div>
                  </div>
                </Col>
                <Col lg={7} className="order-lg-2 order-1 p-0">
                  <img
                    src={banner_image}
                    alt="project-banner-image"
                    className="left-card-img"
                  />
                </Col>
              </Row>
            </div>
          );
        }
      })}
    </Container>
  );
};

export default SelectedProjects;
