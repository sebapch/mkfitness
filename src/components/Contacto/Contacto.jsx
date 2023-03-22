import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./Contacto.css";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

const Contacto = () => {
  return (
    <Container className="contact-form" id='contacto'>
      <div>
        <h2 style={{ color: "#fff" }}>Contáctame</h2>
        <p style={{ color: "#fff" }}>
          ¡Haz el primer paso para lograr tus objetivos de fitness hoy mismo!
        </p>
      </div>
      <Row>
        <Col>
        <a  href="https://wa.me/1123990779"> 
          <BsWhatsapp className='contacto-icons' />
         </a>
        </Col>
        <Col>
        <a  href="https://ig.me/m/NOMBREDELUSUARIO"> 
        
          <BsInstagram className='contacto-icons'/>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
