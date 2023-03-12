import React from 'react'
import  {Container, Col, Row, Button} from 'react-bootstrap'

const Main = () => {
  return (
    <div style={{backgroundColor: '#1E1E27'}}>

   
    <Container style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
        <Row>
            <Col style={{display: 'flex',alignItems: 'center'}}>
                <div>
                    <label style={{color: 'white', marginBottom: '3rem', fontSize: '30px'}}>
                    Soy personal trainer certificado, preparador físico y quiero ayudarte a tener el conocimiento necesario para que veas resultados por siempre.
                      💪🏼
                    </label>
                    <div style={{display: 'flex',justifyContent: 'center'}}>
                        
                    <Button variant="outline-primary"> Contactanos </Button>
                    </div>
                </div>
            </Col>
            <Col>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' style={{maxHeight:'50vh'}}/>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Main