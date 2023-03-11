import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';


const Testimonios = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Testimonios</h2>
      <h4 className="text-center mb-5">Lo que dicen nuestros clientes</h4>
      <Row>
        <Col md={4}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title>Juan Pérez</Card.Title>
              <Card.Text>
                "Gracias a los entrenamientos de MKFitness he logrado aumentar mi masa muscular y mejorar mi resistencia."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title>María Rodríguez</Card.Title>
              <Card.Text>
                "MKFitness ha cambiado mi vida. Ahora me siento más saludable y con más energía."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mx-auto">
            <Card.Body>
              <Card.Title>Carlos Gómez</Card.Title>
              <Card.Text>
                "La asesoría de MKFitness me ha ayudado a alcanzar mis objetivos de manera efectiva y sostenible."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonios