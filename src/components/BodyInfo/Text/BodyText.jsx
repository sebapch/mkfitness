import React from "react";
import { Container } from "react-bootstrap";
import './BodyText.css'

const BodyText = (props) => {

  return (
    <div >
    <Container >
      <h3>{props.titulo}</h3>
      <div className="div-azul" />
      <p style={{textAlign: 'justify'}}>
        {props.texto}
      </p>
      
    </Container>
    </div>
  );
};

export default BodyText;
