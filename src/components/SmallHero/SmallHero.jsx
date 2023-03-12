import React from 'react'
import {Container, Col, Row, Stack} from 'react-bootstrap'

const SmallHero = () => {
  return (
    <div style={{backgroundColor: '#101635'}}>
      <Container>
        <Stack>
          <h1>TITULO</h1>
          <label>TEXTO QUE ACOMPAÑA</label>
          <button>LLAMADO A ACCION</button>
        </Stack>
      </Container>
    </div>
  )
}

export default SmallHero