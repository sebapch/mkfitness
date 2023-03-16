import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import './Testimonios.css'


const Testimonios = () => {
  return (
    <Container className="py-5" >
      <h2 className="text-center mb-3">Testimonios</h2>
      <h4 className="text-center mb-5">Lo que dicen nuestros clientes</h4>
      <Row>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada" >
            <Card.Body>
              <Card.Title>Juan Pérez</Card.Title>
              <Card.Text style={{textAlign: 'center'}}>
              "No puedo creer lo mucho que he mejorado en tan poco tiempo. Con el entrenamiento de [tu nombre], me siento más fuerte y con más energía que nunca. ¡Gracias por ayudarme a alcanzar mis objetivos de fitness!"
              <br/>
              Maria
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada" >
            <Card.Body>
              <Card.Title style={{textAlign: 'center'}}>María Rodríguez</Card.Title>
              <Card.Text>
              "Siempre había luchado para mantenerme motivado en el gimnasio, pero desde que empecé a trabajar con [tu nombre], me siento motivado y enfocado. Me encanta la variedad en los ejercicios y el apoyo constante de mi entrenador personal."
              <br/>
              Jose
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={12} xl={4}>
          <Card className="mx-auto card-estilada" >
            <Card.Body>
              <Card.Title>Carlos Gómez</Card.Title>
              <Card.Text style={{textAlign: 'center'}}>
              "Después de años de intentar perder peso por mi cuenta, finalmente encontré a alguien que me ayudó a lograr mi objetivo. Gracias a [tu nombre], perdí 15 kilos y me siento mejor que nunca. ¡Recomiendo a [tu nombre] a todos los que buscan un entrenador personal efectivo!"
              <br/>
              Marco
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonios