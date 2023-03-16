import React from "react";
import { Container } from "react-bootstrap";
import './BodyText.css'

const BodyText = () => {
  return (
    <div >

    <Container >
      <h3>¿COMO CAMBIÓ MI VIDA?</h3>
      <div className="div-azul" />
      <p>
        Mi hisoria de cambio de vida empieza hace unos años. El deporte siempre
        estuvo presente en mi vida, pero durante mi adolescencia tenía problemas
        ya que al practicar un deporte de contacto (fútbol) era muy débil por mi
        contextura física. También solía recibir chistes sobre mi cuerpo que no
        me agradaban para nada.
      </p>
    </Container>
    </div>
  );
};

export default BodyText;
