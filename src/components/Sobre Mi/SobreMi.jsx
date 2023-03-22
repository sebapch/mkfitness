import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import FotoSobreMi from '../../assets/sobremi.jpeg'

const SobreMi = () => {
  return (
    <div className="bg-dark text-light" id='sobremi' style={{ padding: "4rem 1rem" }}>
<div style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
      <Fade direction="Down" delay={100} triggerOnce={true}>
              <h2 id='sobremi' style={{textAlign: 'center'}}>Sobre mí</h2>
              <div className="div-azul" style={{width: '10rem'}} />
            </Fade>

</div>

      <Container >
        <Row style={{ alignItems: "center" }}>
          <Col sm={12} md={12} xl={6}>
            
              <p style={{textAlign: 'justify'}}>
              <Fade direction="Down" delay={500} triggerOnce={true}>
                Desde chico que estoy metido en el deporte gracias a mi padre,
                que siempre fue un deportista. Por eso, el entrenamiento, la
                buena comida y los hábitos saludables son parte de mi vida desde
                siempre. A pesar de haber practicado fútbol, natación,
                maratones, gym y crossfit, nunca estaba conforme con mi físico y
                sabía que la alimentación era mi punto débil. Pero ahí fue
                cuando decidí tomármelo en serio y ponerme a estudiar.
            </Fade>
              </p>
              <p style={{textAlign: 'justify'}}>
              <Fade direction="Down" delay={300} triggerOnce={true}>
                Entonces me prepare y concrete mis estudios en: Personal trainer
                matriculado ( URBAN), Nutrición deportiva (URBAN) y Experto en
                biomecánica ( ENFAF). Actualmente estoy haciendo un máster
                universitario en hipertrofia y culturismo natural en España
                (ENFAF). Todo esto me llevó a un nuevo nivel, a medida que
                profundicé en el conocimiento y comprendí mis errores. Y en
                menos de un año, logré transformar mi cuerpo, pasando de estar
                como en la segunda foto a estar como en la primera.
            </Fade>
            
              </p>
          </Col>
          <Col sm={12} md={12} xl={6} style={{textAlign: 'center'}}>
              <img src={FotoSobreMi} alt='' width='75%' style={{ border: "3px solid #0046EF"}}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SobreMi;
