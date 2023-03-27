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
        <a  href="https://wa.me/393271094917?text=Hola!%20Quería%20saber%20sobre%20la%20asesoría%20(rellenar%20con%20el%20nombre%20de%20asesoría%20de%20interés),%20Muchas%20gracias!%20💪🏼"> 
          <BsWhatsapp className='contacto-icons' />
         </a>
        </Col>
        <Col>
        <a  href="https://ig.me/m/juanimarini.mk"> 
        
          <BsInstagram className='contacto-icons'/>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
