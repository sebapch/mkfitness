import React from 'react'
import  {Container, Col, Row, Button} from 'react-bootstrap'
import './Main.css'
import { Fade } from "react-awesome-reveal";
import Foto1 from '../../assets/foto1.png'


const Main = () => {
  return (
    <div style={{backgroundColor: 'black', minHeight:'90vh', display: 'flex', alignItems: 'center'}}>

   
    <Container style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <Row>
            <Col style={{display: 'flex',alignItems: 'center'}}>
            <Fade direction='Down' delay={100} triggerOnce={true}>
                <div>
                    <label style={{color: 'white', marginBottom: '3rem', fontSize: '30px', textAlign: 'center'}}>
                    Obtén la mejor versión de ti mismo física y mentalmente, unite a Mkfitness
                    <br/>
                      💪🏼
                    </label>
                    <div style={{display: 'flex',justifyContent: 'center', marginBottom: '2rem'}}>
                    <a  href="https://wa.me/610431273526?text=Hola!%20Quería%20saber%20sobre%20la%20asesoría%20(rellenar%20con%20el%20nombre%20de%20asesoría%20de%20interés),%20Muchas%20gracias!%20"> 
                    <button className="button-51">Contactame</button>
                    </a>
                    </div>
                </div>
                </Fade>
            </Col>
            
            <Col>
            <Fade direction='Down' delay={500} triggerOnce={true}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={Foto1} alt='' style={{maxHeight:'50vh'}}/>
                </div>
            </Fade>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Main