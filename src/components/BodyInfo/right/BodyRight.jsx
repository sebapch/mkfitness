import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import ImageBody from '../Image/ImageBody'
import BodyText from '../Text/BodyText'
import '../BodyInfo.css';

const BodyRight = () => {
  return (
    <Container>
            <Row>
                <Col className='bodyText-centered'>
                <BodyText />
                </Col>
                <Col>
                    <ImageBody />
                </Col>
            </Row>
        </Container>
  )
}

export default BodyRight