import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";

const Services = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1 style={{textAlign: 'center', fontWeight: 'bold', margin: '2rem 0'}}>Asesorias </h1>
          <Col sm={12} md={12} xl={4}>
            <div className="card-border">
              <h1 className='title-card'>Básica</h1>

              <ul>
                <li className='li-card'>
                  Rutina de entrenamiento (incluye una correcta periodización,
                  ajuste del volumen de entrenamiento, indicadores de intensidad
                  (RIR))
                </li>
                <li className='li-card'>
                  Resolución a dudas por whatsapp (incluye chequeos constantes
                  de técnica de ejercicios, monitoreo del estado físico y
                  ajustes/modificaciones al plan)
                </li>
                <li className='li-card'>App móvil</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={12} xl={4}>
            <div className="card-border">
              <h1 className='title-card'>Premium</h1>

              <ul>
                <li className='li-card'>
                  Rutina de entrenamiento (con periodización, volumen y RIR)
                </li>
                <li className='li-card'>Nutrición personalizada en App móvil</li>
                <li className='li-card'>Videollamada inicial para diseño de plan</li>
                <li className='li-card'>Plan de alimentación 100% personalizado en App móvil</li>
                <li className='li-card'>
                  Resolución de dudas y chequeos constantes de técnica de
                  ejercicios
                </li>
              </ul>
            </div>
          </Col>
          <Col sm={12} md={12} xl={4}>
            <div className="card-border">
              <h1 className='title-card'>Personalizada</h1>

              <ul>
                <li className='li-card'>
                  Rutina de entrenamiento completamente personalizada, basada en
                  tus objetivos y necesidades individuales
                </li>
                <li className='li-card'>
                  Plan de alimentación 100% personalizado, teniendo en cuenta
                  tus preferencias, restricciones y objetivos
                </li>
                <li className='li-card'>
                  Seguimiento constante y ajustes en base a tu progreso y
                  feedback
                </li>
                <li className='li-card'>
                  Videollamadas regulares para resolver dudas y hacer
                  seguimiento de tu progreso
                </li>
                <li className='li-card'>
                  Acceso a una App móvil para llevar tu planificación donde sea
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
