import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Services.css";
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (
    <div id='asesorias'>
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
          <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="div-azul" />

        </div>
          <Col sm={12} md={12} xl={6} style={{ marginBottom: "1rem" }}>
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
          <Col sm={12} md={12} xl={6} style={{ marginBottom: "1rem" }}>
              <div className="card-border">
            <Fade direction="Down" delay={300} triggerOnce={true}>
                <h1 className="title-card">Premium 🦍</h1>

                <ul>
                  <li className="li-card">
                    🦍 Rutina de entrenamiento (incluye una correcta
                    periodización, ajuste del volumen de entrenamiento,
                    indicadores de intensidad (RIR)) y nutrición personalizada
                    en una App para llevar tu planificación donde sea.
                  </li>
                  <li className="li-card">
                    🦍 Videollamada para responder el cuestionario inicial y
                    empezar a diseñar el plan de alimentación y la rutina de
                    entrenamiento personalizada
                  </li>
                  <li className="li-card">
                    🦍 Plan de alimentación con una guía de 5 días 100%
                    personalizado teniendo en cuenta las calorías,
                    macronutrientes y preferencias de comidas. Los ajustes al
                    plan se hacen siempre en base a tus objetivos y todo en una
                    APP móvil para Android e IOS.*NO incluye dietas cetógenicas,
                    paleo ni ninguna de esta índole
                  </li>
                  <li className="li-card">
                    🦍 Resolución a dudas y chequeos constantes de técnica de
                    ejercicios junto con 1 videollamada mensual.
                  </li>
                </ul>
            </Fade>
              </div>
          </Col>
          <Col sm={12} md={12} xl={6} style={{ marginBottom: "1rem" }}>
              <div className="card-border">
            <Fade direction="Down" delay={700} triggerOnce={true}>
                <h1 className="title-card">Nutricion 🍏</h1>

                <ul>
                  <li className="li-card">
                    🍏 Plan de alimentación con una guía de 5 días 100%
                    personalizado teniendo en cuenta las calorías,
                    macronutrientes y preferencias de comidas. Los ajustes al
                    plan se hacen siempre en base a tus objetivos.
                  </li>
                  <li className="li-card"> 🍏Soporte por whatsapp</li>
                  <li className="li-card">
                    🍏 Guias exclusivas para aprender como comer, manejar
                    calorias y macronutrientes. NO INCLUYE DIETAS CETO, KETO,
                    PALEO ENTRE OTRAS. NO INCLUTE DIETAS PARA CELIACOS NI
                    DIABETICOS.
                  </li>
                </ul>
            </Fade>
              </div>
          </Col>
          <Col sm={12} md={12} xl={6} style={{ marginBottom: "1rem" }}>
            <div className="card-border">
              <Fade direction="Down" delay={1000} triggerOnce={true}>
                <h1 className="title-card">Preparación deportiva en: 🤸🏻‍♀️</h1>

                <ul>
                  <li className="li-card">
                    🤸🏻‍♀️ Culturismo natural (entre 1 - 2 años dependiendo punto de
                    partida)
                  </li>
                  <li className="li-card">
                    {" "}
                    🤸🏻‍♀️ Fútbol (pretemporadas, acondicionamiento, mejora en
                    fuerza/ rendimiento deportivo)
                  </li>
                  <li className="li-card">
                    🤸🏻‍♀️ Condición física para examenes/policia etc.
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
