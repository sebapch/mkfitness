import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const SobreMi = () => {
  return (
    <div className="bg-dark text-light" style={{ padding: "6rem 0" }}>
      <Container>
        <Row style={{ alignItems: "flex-end" }}>
          <Col sm={12} md={12} xl={6}>
            <Fade direction="Down" delay={100} triggerOnce={true}>
              <h2>Sobre mí</h2>
              <div className="div-azul" />
            </Fade>
            <Fade direction="Down" delay={300} triggerOnce={true}>
              <p>
                Entonces me prepare y concrete mis estudios en: Personal trainer
                matriculado ( URBAN), Nutrición deportiva (URBAN) y Experto en
                biomecánica ( ENFAF). Actualmente estoy haciendo un máster
                universitario en hipertrofia y culturismo natural en España
                (ENFAF). Todo esto me llevó a un nuevo nivel, a medida que
                profundicé en el conocimiento y comprendí mis errores. Y en
                menos de un año, logré transformar mi cuerpo, pasando de estar
                como en la primera foto a estar como en la segunda.
              </p>
            </Fade>
          </Col>
          <Col sm={12} md={12} xl={6}>
            <Fade direction="Down" delay={500} triggerOnce={true}>
              <p>
                Desde chico que estoy metido en el deporte gracias a mi padre,
                que siempre fue un deportista. Por eso, el entrenamiento, la
                buena comida y los hábitos saludables son parte de mi vida desde
                siempre. A pesar de haber practicado fútbol, natación,
                maratones, gym y crossfit, nunca estaba conforme con mi físico y
                sabía que la alimentación era mi punto débil. Pero ahí fue
                cuando decidí tomármelo en serio y ponerme a estudiar.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SobreMi;
