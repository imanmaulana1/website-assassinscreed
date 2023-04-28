import React from "react";
import { faGamepad, faGlobe, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Feature.module.css";

const Feature = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2 className={`${styles.feature} fw-bold text-center`} id="feature">
            Features
          </h2>
        </Col>
      </Row>
      <Row className="d-flex align-items-center mt-5">
        <Col sm={4} className="d-flex flex-column gap-4 text-center mb-4">
          <div>
            <FontAwesomeIcon icon={faGlobe} className="fs-3 mb-2" />
            <h5 className="fw-bold">Open World</h5>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col sm={4} className="d-flex flex-column gap-4 text-center mb-4">
          <div>
            <FontAwesomeIcon icon={faUserGroup} className="fs-3 mb-2" />
            <h5 className="fw-bold">Multiplayer</h5>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col sm={4} className="d-flex flex-column gap-4 text-center mb-4">
          <div>
            <FontAwesomeIcon icon={faGamepad} className="fs-3 mb-2" />
            <h5 className="fw-bold">Multi-platform</h5>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;
