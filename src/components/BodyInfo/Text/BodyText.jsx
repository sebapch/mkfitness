import React from "react";
import { Container } from "react-bootstrap";
import './BodyText.css'

const BodyText = (props) => {

  return (
    <div >
    <Container >
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <h3>{props.titulo}</h3>
      <div className="div-azul" style={{width: '60%'}}/>
      </div>

      <p style={{textAlign: 'justify'}}>
        {props.texto}
      </p>
          
    </Container>
    </div>
  );
};

export default BodyText;
