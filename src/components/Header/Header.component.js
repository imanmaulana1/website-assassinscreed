import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Header.module.css";
const Header = () => {
  const fadeAnimation = keyframes`${fadeIn}`;
  const FadeDiv = styled.div`
    animation: 3s ${fadeAnimation};
  `;
  return (
    <div className={`${styles.hero} min-vh-100 w-100`} id="home">
      <Container>
        <Row className="d-flex align-items-center justify-content-md-center pt-5">
          <Col xs={3} lg={2}>
            <hr className={styles.dash} />
          </Col>
          <Col xs={6} lg={3} className="text-center">
            <h1 className={styles.titleHero}>Assassin's Creed</h1>
          </Col>
          <Col xs={3} lg={2}>
            <hr className={styles.dash} />
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <p className={`${styles.subTitle} text-center fst-italic`}>Codename Red</p>
          </Col>
        </Row>
        <FadeDiv>
          <Container className={styles.boxWrapper}>
            <Row className={styles.comingsoonWrapper}>
              <Col className="text-center">
                <h1 className={`${styles.text} fw-light`}>COMING SOON</h1>
              </Col>
            </Row>
          </Container>
        </FadeDiv>
      </Container>
    </div>
  );
};

export default Header;
