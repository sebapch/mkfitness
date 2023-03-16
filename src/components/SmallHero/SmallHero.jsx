import React from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import './SmallHero.css'

const SmallHero = () => {
  return (
    <div style={{ backgroundColor: "#101635" }}>
      <Container>
        <Stack style={{textAlign: 'center', alignItems: 'center'}}>
          <label className="label-smallHero">
            Lo que aprendí en este proceso es lo que quiero enseñarte a vos,
            para que entrenar conmigo no sea solo un entrenamiento 
            sino una herramienta para toda la vida que
            cambiará tu cuerpo y tu mente para siempre.
          </label>
          <button className="btn-smallHero">LLAMADO A ACCION</button>
        </Stack>
      </Container>
    </div>
  );
};

export default SmallHero;
