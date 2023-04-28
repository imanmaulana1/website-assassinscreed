import React from "react";
import { Button, Row, Col, Container } from "react-bootstrap";

import video from "../../assets/videos/Trailer.mp4";
import styles from "./Trailer.module.css";

const Trailer = () => {
  return (
    <Container>
      <Row className={`${styles.contentWrapper} d-flex align-items-center`}>
        <Col lg={6} className={styles.description}>
          <h1 className="mb-3 my-4">
            Assassin's Creed <span className={`fs-4 ${styles.textDanger}`}>CODENAME RED</span>
          </h1>
          <p className={`${styles.text} fw-light lh-lg text-secondary mb-4`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quasi numquam blanditiis tempore aliquam quae velit, sapiente eligendi, dolorum earum deleniti dolores, tenetur nostrum ipsam debitis cumque et laborum explicabo!
          </p>
          <Button className={`btn ${styles.btnRed}`}>Learn More</Button>
        </Col>
        <Col className={styles.video}>
          <video className="w-100 pt-5" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Col>
      </Row>
    </Container>
  );
};

export default Trailer;
