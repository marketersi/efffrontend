import React from "react";
import { Col, Row } from "react-bootstrap";
import { FACTS_DATA } from "./facts";
import "./factsContainer.css";
import FactsCard from "./FactsCard";
import { useSelector } from "react-redux";

const FactsContainer = () => {
  const { isLoading, screenData } = useSelector((state) => state.facts);

  const reversedFactoCard = screenData?.factocard?.slice().reverse();
  return (
    <section className="fc_sec">
      <Row>
        {reversedFactoCard?.map((e, i) => {
          return (
            <Col key={e.id} lg={6}>
              <FactsCard {...e} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default FactsContainer;
