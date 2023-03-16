import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./Contacto.css";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Contacto = () => {
  return (
    <Container className="contact-form">
      <div>
        <h2 style={{ color: "#fff" }}>Contáctame</h2>
        <p style={{ color: "#fff" }}>
          ¡Haz el primer paso para lograr tus objetivos de fitness hoy mismo!
        </p>
      </div>
      <Row>
        <Col>
          <BsWhatsapp className='contacto-icons' />
        </Col>
        <Col>
          <BsInstagram className='contacto-icons'/>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
