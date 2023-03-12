import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="card-border">
              <h1>IMAGEN</h1>
              <label className="subtitle">intro al dato</label>
              <p>datos datos datos datos</p>
            </div>
          </Col>
          <Col>
            <div className="card-border">
              <h1>IMAGEN</h1>
              <label className="subtitle">intro al dato</label>
              <p>datos datos datos datos</p>
            </div>
          </Col>
          <Col>
            <div className="card-border">
              <h1>IMAGEN</h1>
              <label className="subtitle">intro al dato</label>
              <p>datos datos datos datos</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
