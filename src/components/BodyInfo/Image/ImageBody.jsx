import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ImageBody.css";
import Foto1 from "../../../assets/foto1.jpg";

const ImageBody = () => {
  return (
   
          <img
            src={Foto1}
            alt=""
            className="imageBody"
            
          />
       
  );
};

export default ImageBody;
