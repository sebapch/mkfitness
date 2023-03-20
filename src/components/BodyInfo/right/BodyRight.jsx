import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ImageBody from "../Image/ImageBody";
import BodyText from "../Text/BodyText";
import "../BodyInfo.css";
import { Fade } from "react-awesome-reveal";

const BodyRight = () => {
  return (
    <div style={{ margin: "7rem 0" }}>
      <Container style={{ display: "flex", alignItems: "center" }}>
        <Row>
          <Col className="bodyText-centered" sm={12} md={12} lg={6}>
            <Fade
              direction="Down"
              delay={600}
              duration={3000}
              triggerOnce={true}
            >
              <BodyText
                titulo="¿CANSADO DE INTENTAR TODO Y NO VER RESULTADOS? ¡YO TAMBIÉN HE ESTADO AHÍ!"
                texto="Pero encontré el camino para transformar mi físico y mi mente: con conocimiento, disciplina y pasión por el fitness. \n Ahora quiero ayudarte a vos a conseguir el cambio que siempre quisiste. Con mi método basado en la ciencia y la motivación, lograremos juntos tu mejor versión. ¡Vamos por ello! 💪🏼"
              />
            </Fade>
          </Col>
          <Col style={{ textAlign: "center" }} sm={12} md={12} lg={6}> 
            <Fade
              direction="Down"
              delay={600}
              duration={3000}
              triggerOnce={true}
            >
              <ImageBody foto={2}/>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BodyRight;
