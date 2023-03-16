import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1>Asesorias </h1>
          <Col>
            <div className="card-border">
              <h1>Básica</h1>
              
              <p>
                ⚡️Rutina de entrenamiento (incluye una correcta periodización,
                ajuste del volumen de entrenamiento, indicadores de intensidad
                (RIR)). ⚡️Resolución a dudas por whatsapp (incluye chequeos
                constantes de técnica de ejercicios, monitoreo del estado físico
                y ajustes/modificaciones al plan). *No incluye apartado
                nutricional. *Si incluye App móvil
              </p>
            </div>
          </Col>
          <Col>
            <div className="card-border">
              <h1>Premium</h1>
          
              <p>
                🦍Rutina de entrenamiento (incluye una correcta periodización,
                ajuste del volumen de entrenamiento, indicadores de intensidad
                (RIR)) y nutrición personalizada en una App para llevar tu
                planificación donde sea. 🦍Videollamada para responder el
                cuestionario inicial y empezar a diseñar el plan de alimentación
                y la rutina de entrenamiento personalizada 🦍Plan de
                alimentación con una guía de 5 días 100% personalizado teniendo
                en cuenta las calorías, macronutrientes y preferencias de
                comidas. Los ajustes al plan se hacen siempre en base a tus
                objetivos y todo en una APP móvil para Android e IOS.*NO incluye
                dietas cetógenicas, paleo ni ninguna de esta índole 🦍Resolución
                a dudas y chequeos constantes de técnica de ejercicios junto con
                1 videollamada mensual.
              </p>
            </div>
          </Col>
          <Col>
            <div className="card-border">
              <h1>Personalizada</h1>
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
