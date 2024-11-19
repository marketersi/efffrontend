import React from 'react';
import style from '../team.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const PersonalCard = (props) => {
  const { image, name, designation, quate_one } = props;

  return (
    <Container>
      <Row>
        <Col>
          <div className={style.personalCard}>
            <Row>
              <Col lg={3}>
                <img src={image} alt={name} />
                <h4>{name}</h4>
                <p>{designation}</p>
              </Col>
              <Col lg={9}>
                <h6>{quate_one}</h6>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PersonalCard;
