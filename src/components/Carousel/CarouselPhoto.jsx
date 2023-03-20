import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Cambio1 from "../../assets/cambio1.jpeg";
import Cambio2 from "../../assets/cambio2.jpeg";
import Cambio3 from "../../assets/cambio3.jpeg";
import "./CarouselPhoto.css";

const CarouselPhoto = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center" }}>Cambios físicos</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="div-azul" />

        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          style={{ textAlign: "center" }}
        >
          <Carousel.Item className="item-carousel">
            <img className="img-carousel" src={Cambio1} alt="First slide" />
            {/*  <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img src={Cambio2} alt="Second slide" className="img-carousel" />

            {/*  <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img className="img-carousel" src={Cambio3} alt="Third slide" />

            {/*    <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CarouselPhoto;
