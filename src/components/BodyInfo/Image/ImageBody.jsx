import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './ImageBody.css'

const ImageBody = () => {
  return (
    <Container>
        <Row>
            <Col>
            <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' style={{maxWidth:'30vh',  marginTop: '1rem', padding: '1.5rem'}}/>

            <img src='https://mkonlinefitness.files.wordpress.com/2022/07/img_8827.jpg?w=768' alt='' style={{maxWidth:'30vh', marginTop: '6rem', padding: '1.5rem'}}/>

            </Col>
        </Row>
    </Container>
  )
}

export default ImageBody