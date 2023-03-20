import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ImageBody.css";
import Foto1 from "../../../assets/foto1.jpg";
import Foto2 from '../../../assets/foto2.png';

const ImageBody = (props) => {

  return (
   
          <img
            src={props.foto === 1 ? Foto1 : Foto2}
            alt=""
            className="imageBody"
            
          />
       
  );
};

export default ImageBody;
