import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./GalleryItem.module.css";
import Card from "../Card/Card.component";

const GalleryItem = ({ images }) => {
  return (
    <>
      <Container>
        <Row className="mx-auto">
          {images.map((item) => (
            <Col className="mb-4 col-md-6 col-lg-3 col-12">
              <Card styleCard={styles.image} image={item.img} title={item.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GalleryItem;
