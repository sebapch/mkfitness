import React from 'react'
import  {Container, Col, Row, Button} from 'react-bootstrap'
import './Main.css'
import { Fade } from "react-awesome-reveal";
const Main = () => {
  return (
    <div style={{backgroundColor: 'black'}}>

   
    <Container style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <Row>
            <Col style={{display: 'flex',alignItems: 'center'}}>
            <Fade direction='down' delay={100}>
                <div>
                    <label style={{color: 'white', marginBottom: '3rem', fontSize: '30px'}}>
                    "Obtén la mejor versión de ti mismo con nuestro entrenamiento personalizado"
                    <br/>
                      💪🏼
                    </label>
                    <div style={{display: 'flex',justifyContent: 'center'}}>
                        
                    <button className="button-51">Contactame</button>
                    
                    </div>
                </div>
                </Fade>
            </Col>
            
            <Col>
            <Fade direction='down' delay={500}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' style={{maxHeight:'50vh'}}/>
                </div>

            </Fade>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Main