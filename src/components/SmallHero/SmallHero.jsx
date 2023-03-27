import React from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import "./SmallHero.css";
import { Fade } from "react-awesome-reveal";

const SmallHero = () => {
  return (
    <div style={{ backgroundColor: "#101635", padding: '3rem 0' }}>
      <Container>

        <Stack style={{ textAlign: "center", alignItems: "center" }}>
      <Fade direction='Down' delay={600} triggerOnce={true}>
          <label className="label-smallHero">
            Lo que aprendí en este proceso es lo que quiero enseñarte a vos,
            para que entrenar conmigo no sea solo un entrenamiento sino una
            herramienta para toda la vida que cambiará tu cuerpo y tu mente para
            siempre.
          </label>
        </Fade>
        <Fade direction='Down' delay={800}  triggerOnce={true}>
        <a  href="https://wa.me/393271094917?text=Hola!%20Quería%20saber%20sobre%20la%20asesoría%20(rellenar%20con%20el%20nombre%20de%20asesoría%20de%20interés),%20Muchas%20gracias!%20💪🏼"> 
            <button className="button-51">Contactame</button>
            </a>
         </Fade>
        </Stack>
      </Container>
    </div>
  );
};

export default SmallHero;
