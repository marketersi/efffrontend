import React from 'react';
import './customers-review.css';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CustomersReview = () => {
  const { isLoading, screenData } = useSelector((state) => state.consulting);

  const { CustomeReview } = screenData || {};
  const { image_url, subtitle, title } = CustomeReview || {};

  return (
    <Container className="cr_sec">
      <div className="cr_header">
        <h2>{title}</h2>
        <p>
          <em>{subtitle}</em>
        </p>
      </div>

      {/* to be deleted */}
      {/* <div>
        <img src={image_url} alt="reviews collage" className="w-100" />
      </div> */}
    </Container>
  );
};

export default CustomersReview;
