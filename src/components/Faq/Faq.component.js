import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className={`${styles.faq} fw-bold text-center`} id="faq">
              FAQ
            </h2>
          </Col>
        </Row>
        <Accordion className={styles.accordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What's Assassin's Creed Red</Accordion.Header>
            <Accordion.Body>
              Assassin's Creed Japan will be the next major game in the Assassin's Creed franchise, following the success of 2020's Assassin's Creed Valhalla. Developer Marc-Alexis Cote, who has served as both creative director and producer
              on some of the best Assassin's Creed games, described Codename Red as Ubisoft's "next premium flagship title" before teasing that it will be "the future of our open-world RPG games on Assassin's Creed.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>When does Assassin's Creed Codename RED release on Xbox?</Accordion.Header>
            <Accordion.Body>Assassin's Creed Codename RED will be released in 2023.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Who is developing Assassin's Creed Codename RED?</Accordion.Header>
            <Accordion.Body>Assassin's Creed Codename RED is being developed by Ubisoft Quebec.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Faq;
