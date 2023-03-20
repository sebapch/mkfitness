import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ImageBody from "../Image/ImageBody";
import BodyText from "../Text/BodyText";
import "../BodyInfo.css";
import { Fade } from "react-awesome-reveal";

const bodyLeft = () => {
  return (
    <>
      <div style={{ margin: "7rem 0" }}>
        <Container style={{ display: "flex", alignItems: "center" }}>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <Fade
                direction="Down"
                delay={600}
                duration={3000}
                triggerOnce={true}
              >
                <ImageBody foto={1}/>
              </Fade>
            </Col>
            <Col className="bodyText-centered">
              <Fade direction="Down" delay={400} triggerOnce={true}>
                <BodyText titulo="¿Cómo cambió mi vida?" texto="Descubrí que el cambio comienza en ti. Cuando decides tomar acción y trabajar por tus metas, todo lo demás comienza a fluir en tu vida. No hay límites para lo que puedes lograr, y cada pequeño paso te acerca más a la mejor versión de ti mismo/a. ¡Permítete ser el cambio que deseas ver en tu vida y comienza hoy mismo!" />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default bodyLeft;
