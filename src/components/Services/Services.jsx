import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div id="asesorias">
      <Container>
        <Row>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: "1rem 0",
            }}
          >
            Asesorias{" "}
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="div-azul" />
          </div>
          <Col sm={12} md={12} xl={4} style={{ marginBottom: "1rem" }}>
            <div className="card-border">
              <Fade direction="Down" delay={100} triggerOnce={true}>
                <h1 className="title-card">Básica ⚡️</h1>

                <ul>
                  <li className="li-card">
                    ⚡️Rutina de entrenamiento (incluye una correcta
                    periodización, ajuste del volumen de entrenamiento,
                    indicadores de intensidad (RIR)).
                  </li>
                  <li className="li-card">
                    ⚡️Resolución a dudas por whatsapp (incluye chequeos
                    constantes de técnica de ejercicios, monitoreo del estado
                    físico y ajustes/modificaciones al plan). *No incluye
                    apartado nutricional. *Si incluye App móvil
                  </li>
                </ul>
              </Fade>
            </div>
          </Col>
          
          <Col sm={12} md={12} xl={4} style={{ marginBottom: "1rem" }}>
            <div className="card-border">
              <Fade direction="Down" delay={700} triggerOnce={true}>
                <h1 className="title-card">Asesoramiento 1 a 1 🦍 </h1>

                <ul>
                  <li className="li-card">
                    🦍 Plan de nutrición y entrenamiento personalizados
                    <br />
                    🦍 Videollamadas SEMANALES para resolución de dudas ,
                    consultas etc.
                    <br />
                    🦍 Videos y videollamadas exclusivos para aprender a cómo
                    entrenar , manejar variables , cómo aprender a manejar la
                    nutrición y cómo utilizar suplementación deportiva.
                    <br />
                    🦍 App móvil y guías exclusivas.
                  </li>
                  
                </ul>
              </Fade>
            </div>
          </Col>
          <Col sm={12} md={12} xl={4} style={{ marginBottom: "1rem" }}>
            <div className="card-border">
              <Fade direction="Down" delay={1000} triggerOnce={true}>
                <h1 className="title-card">🍑 Bootie workouts 🍑 </h1>

                <ul>
                  <li className="li-card">
                    Si queres mejorar tu estética corporal y sobre todo verte
                    Diosa , este plan es para VOS !
                  </li>
                  <li className="li-card">
                    🍑 Plan de nutrición de acuerdo a tus objetivos .
                  </li>
                  <li className="li-card">
                    🍑Plan de entrenamiento personalizado con el objetivo de
                    <br /> mejorar la estética corporal y el 🍑
                  </li>
                  <li className="li-card">
                    🍑 Seguimiento continuo y motivación diaria vía whatsapp,
                    app y más .
                  </li>
                  <li className="li-card">
                    🍑 App móvil para llevar tu plan con vos a todos lados.
                  </li>
                  <li className="li-card">
                    *Consultar cupos disponibles.
                    <br />
                    *No dietas , no planes veganos y vegetarianos
                  </li>
                </ul>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
