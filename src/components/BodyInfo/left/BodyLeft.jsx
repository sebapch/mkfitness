import React from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import ImageBody from '../Image/ImageBody'
import BodyText from '../Text/BodyText'
import '../BodyInfo.css';


const bodyLeft = () => {
  return (
    <>
        <Container>
            <Row>
                <Col >
                    <ImageBody />
                </Col>
                <Col className='bodyText-centered'>
                    <BodyText />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default bodyLeft