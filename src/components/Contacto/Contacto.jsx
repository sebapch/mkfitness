import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="contact-form">
            <h2 style={{ color: "#fff" }}>Contáctame</h2>
            <p style={{ color: "#fff" }}>
              ¡Haz el primer paso para lograr tus objetivos de fitness hoy
              mismo!
            </p>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label style={{ color: "#fff" }}>Nombre</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
                  type="text"
                  placeholder="Ingresa tu nombre"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label style={{ color: "#fff" }}>
                  Correo electrónico
                </Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </Form.Group>

              <Form.Group controlId="formBasicMessage">
                <Form.Label style={{ color: "#fff" }}>Mensaje</Form.Label>
                <Form.Control
                  style={{ backgroundColor: "#1a1a1a", color: "#fff" }}
                  as="textarea"
                  rows={3}
                  placeholder="Ingresa tu mensaje"
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "#3c3c3c", borderColor: "#3c3c3c" }}
                variant="dark"
                type="submit"
                block
              >
                ¡Hablemos!
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contacto;
