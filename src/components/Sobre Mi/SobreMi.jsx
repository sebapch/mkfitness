import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const SobreMi = () => {
  return (
    <div className="bg-dark text-light pt-5 pb-5">
      <Container>
        <Row style={{alignItems: 'flex-end'}}>
          <Col>
            <h2>Sobre mí</h2>
            <div className="div-azul" />
            <p>
              Desde chico que estoy metido en el deporte gracias a mi viejo, que
              siempre fue un fanático. Por eso, el entrenamiento, la buena
              comida y los hábitos saludables son parte de mi vida desde
              siempre. A pesar de haber practicado fútbol, natación, maratones,
              gym y crossfit, nunca estaba conforme con mi físico y sabía que la
              alimentación era mi punto débil. Pero ahí fue cuando decidí
              tomármelo en serio y ponerme a estudiar.
            </p>
          </Col>
          <Col>
            <p>
              Estudié para ser profesor de educación física, personal trainer,
              nutrición deportiva y biomecánica, y actualmente estoy haciendo un
              máster universitario en hipertrofia y culturismo natural en
              España. Todo esto me llevó a un nuevo nivel, a medida que
              profundicé en el conocimiento y comprendí mis errores. Y en menos
              de un año, logré transformar mi cuerpo, pasando de estar como en
              la primera foto a estar como en la segunda.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SobreMi;
