import React from 'react';
import './customers-review.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CustomersReview = () => {
  const { isLoading, screenData1 } = useSelector((state) => state.consulting);

  const { CustomeReview } = screenData1 || {};
  const { image_url, subtitle, title } = CustomeReview || {};

  const titlee = "Przejdź na\nwyższy poziom\nz Marketersi";

  <h2 style={{ whiteSpace: "pre-line" }}>{title}</h2>
  
  return (
    <Container className="cr_sec SmallContainer">
      <div className="cr_header">
      <h2 style={{ whiteSpace: "pre-line" }}>{titlee}</h2>
        {/* <p>
          <em>{subtitle}</em>
        </p> */}
      </div>

      {/* to be deleted */}
      {/* <div>
        <img src={image_url} alt="reviews collage" className="w-100" />
      </div> */}
    </Container>
  );
};

export default CustomersReview;
