import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const SobreMi = () => {
  return (
    <div className="bg-dark text-light pt-5 pb-5"> 
      <Container >
        <Row>
          <Col >
            <h2>Sobre mí</h2>
            <div className='div-azul'/>
            <h3>¿Quién soy?</h3>
          </Col>
          <Col >
            <p>
              Soy personal trainer certificado, preparador físico y quiero
              ayudarte a tener el conocimiento necesario para que veas resultados
              por siempre. Llevo más de 10 años en el mundo deportivo estudiando y
              promoviendo el fitness con base en ciencia, por eso creé MKFitness
              un lugar donde te guiaré en este camino tan lindo donde cambiarás tu
              mindset para siempre 💪🏼
            </p>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default SobreMi;
