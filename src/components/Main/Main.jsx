import React from 'react'
import  {Container, Col, Row, Button} from 'react-bootstrap'

const Main = () => {
  return (
    <div style={{backgroundColor: '#1E1E27'}}>

   
    <Container style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <Row>
            <Col style={{display: 'flex',alignItems: 'center'}}>
                <div>
                    <label style={{color: 'white'}}>
                    Soy personal trainer certificado, preparador físico y quiero ayudarte a tener el conocimiento necesario para que veas resultados por siempre.
                     Llevo más de 10 años en el mundo deportivo estudiando y promoviendo el fitness con base en ciencia,
                      por eso creé MKFitness un lugar donde te guiaré en este camino tan lindo donde cambiarás tu mindset para siempre 💪🏼
                    </label>
                    <Button> Contactanos </Button>
                </div>
            </Col>
            <Col>
                <div>
                    <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' style={{maxHeight:'50vh'}}/>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Main