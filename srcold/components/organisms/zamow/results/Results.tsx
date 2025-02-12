import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './results.css';
import { useSelector } from 'react-redux';

const Results = () => {
  const { isLoading, screenData } = useSelector((state) => state.examination);
  const { ResearchResult, howTestWorks } = screenData || {};
  const { PercentageCard } = ResearchResult || [];

  return (
    <section className="results-section">
      <h2 className="result-title">{ResearchResult?.title}</h2>
      <p className="result-subtitle">{ResearchResult?.sub_title}</p>
      <Row>
        {PercentageCard?.map((e, i) => {
          return (
            <Col lg={3} sm={6} key={i}>
              <ResultsCard {...e} />
            </Col>
          );
        })}
      </Row>

      <div className="text-center free-test">
        <h2>{howTestWorks?.title}</h2>
        <div className="p-container">
          <p>{howTestWorks?.para1}</p>
          <p>{howTestWorks?.para2}</p>
          <p>{howTestWorks?.para3}</p>
          <p>{howTestWorks?.para4}</p>
          <p>{howTestWorks?.para5}</p>
          <p>{howTestWorks?.para6}</p>
        </div>
      </div>
    </section>
  );
};

export default Results;

const ResultsCard = ({ Percentage_value, title, website, category }) => {
  return (
    <>
      <Card className="results-card shadow">
        <h2>{Percentage_value}%</h2>
        <p>{title}</p>
      </Card>
      <div className="mt-3 text-center mb-lg-0  mb-5">
        <p>
          {website}
          <br />
          {category}
        </p>
      </div>
    </>
  );
};
