import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import "./Testimonios.css";
import Lujan from "../../assets/lujan.jpeg";
import Fabb from "../../assets/fabb.jpeg";
import Zabala from "../../assets/zabala.jpeg";
import { Fade } from "react-awesome-reveal";

const Testimonios = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Testimonios</h2>
      <h4 className="text-center mb-5">Lo que dicen nuestros clientes</h4>
      <Row>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada">
            <Card.Body className='card-body-responsive'>
            <Fade direction='Down' delay={100} triggerOnce={true}>

              <Card.Text style={{ textAlign: "center" }}>
                Siempre busqué la manera de estar bien físicamente, pero se me
                hacía muy difícil por que estaba errado en muchos aspectos.
                Gracias a la increíble ayuda de Juani pude lograr mis objetivos
                y superar mis expectativas. Un compañero dedicado, que
                transforma la manera de entrenar, comer, pensar y ejecutar cada
                ejercicio. Definitivamente el cambio que necesitaba y mucho
                mejor de lo que esperaba, más que un personal trainer, un
                hermano.
              </Card.Text>
              </Fade>
              <Row style={{ display: "flex", alignItems: "center" }}>

                <Col style={{textAlign: "center"}}>
              <Fade direction='Down' delay={100} triggerOnce={true}>
                  <img
                    src={Lujan}
                    alt=""
                    style={{ width: "50%", borderRadius: "50%" }}
                  />
                </Fade>
                </Col>
                <Col>
                <Fade direction='Down' delay={100} triggerOnce={true}>

                  <Card.Text>Santi Lujan.</Card.Text>
                  </Fade>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada">
            <Card.Body className='card-body-responsive'>
            <Fade direction='Down' delay={100} triggerOnce={true}>
              <Card.Text style={{ textAlign: "center" }}>
                Con juani pudimos lograr el primer objetivo de este camino, que
                fue encarar un volumen, de pesar 96 kg pase a pesar 112 kg en 10
                meses ahora vamos por la segunda etapa y este nuevo reto que va
                ser definir, excelente profesional!
              </Card.Text>

            </Fade>

              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col style={{textAlign: "center"}}>
                <Fade direction='Down' delay={100} triggerOnce={true}>
                  <img
                    src={Zabala}
                    alt=""
                    style={{ width: "50%", borderRadius: "50%" }}
                  />

                </Fade>

                </Col>
                <Col>
                <Fade direction='Down' delay={100} triggerOnce={true}>
                  <Card.Text>Santi Zabala.</Card.Text>

                </Fade>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada">
            <Card.Body className='card-body-responsive'>
            <Fade direction='Down' delay={100} triggerOnce={true}>
              <Card.Text style={{ textAlign: "center" }}>
                "No puedo creer lo mucho que he mejorado en tan poco tiempo. Con
                el entrenamiento de juani y su método Mkfitness, me siento más
                fuerte y con más energía que nunca. ¡Gracias por ayudarme a
                alcanzar mis objetivos!
              </Card.Text>

            </Fade>

              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col style={{textAlign: "center"}}>
                <Fade direction='Down' delay={100} triggerOnce={true}>
                  <img
                    src={Fabb}
                    alt=""
                    style={{ width: "50%", borderRadius: "50%" }}
                  />

                </Fade>

                </Col>
                <Col>
                <Fade direction='Down' delay={100} triggerOnce={true}>
                  <Card.Text>Caro Fabbroni</Card.Text>

                </Fade>

                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonios;
