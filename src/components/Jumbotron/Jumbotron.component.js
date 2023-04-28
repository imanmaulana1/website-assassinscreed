import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from "./Jumbotron.module.css"

const Jumbotron = () => {
  return (
    <Container fluid>
    <Row>
      <Col className={`${styles.jumbotron} d-flex align-items-end`}>
        <div className={`${styles.box} mx-auto mb-5 py-5`}>
          <h1 className={`text-center ${styles.text}`}>The New Universe Upcoming </h1>
          <h1 className={`text-center ${styles.textDanger} fs-6`}>Travel to Feudal Japan</h1>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Jumbotron