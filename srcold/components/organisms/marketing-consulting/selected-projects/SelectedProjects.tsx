import React from 'react';
import './selected-projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const SelectedProjects = () => {
  const { screenData } = useSelector((state) => state.consulting);

  const { Projects } = screenData || {};
  const { subtitle, title, Cards } = Projects || {};

  return (
    <Container className="sp_sec">
      <div className="sp_header">
        <h2>{title}</h2>
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
            <div className="my-5" key={index}>
              <Row className="justify-content-center">
                <Col lg={6}>
                  <img
                    src={banner_image}
                    alt="project-banner-image"
                    className="left-card-img"
                  />
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-center align-items-center"
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
            <div className="sp_card_container" key={index}>
              <Row>
                <Col
                  lg={5}
                  className="d-flex justify-content-center align-items-center order-lg-1 order-2"
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
                <Col lg={6} className="order-lg-2 order-1">
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
