import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ImageBody.css";
import Foto1 from "../../../assets/foto1.jpg";

const ImageBody = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={Foto1}
            alt=""
            className="imageBody"
            style={{ marginTop: "5rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageBody;
