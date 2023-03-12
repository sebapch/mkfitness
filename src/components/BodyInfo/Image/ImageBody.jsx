import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './ImageBody.css'

const ImageBody = () => {
  return (
    <Container>
        <Row>
            <Col>
            <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' className='imageBody' style={{marginTop: '2rem'}}/>
            </Col>
            <Col>
            <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' className='imageBody' style={{marginTop: '5rem'}}/>
            </Col>

           
        </Row>
    </Container>
  )
}

export default ImageBody