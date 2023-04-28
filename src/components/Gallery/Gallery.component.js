import React, { useEffect } from "react";
import { useState } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

import GalleryItem from "../GalleryItem/GalleryItem.component";

import styles from "./Gallery.module.css";

import {
  laptopGallery1,
  laptopGallery2,
  laptopGallery3,
  tabletGallery1,
  tabletGallery2,
  tabletGallery3,
  tabletGallery4,
  tabletGallery5,
  tabletGallery6,
  phoneGallery1,
  phoneGallery2,
  phoneGallery3,
  phoneGallery4,
  phoneGallery5,
  phoneGallery6,
  phoneGallery7,
  phoneGallery8,
  phoneGallery9,
  phoneGallery10,
  phoneGallery11,
  phoneGallery12,
} from "../../constants/constants";

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleSelect = (selected) => {
    setIndex(selected);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function laptopScreen() {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <GalleryItem images={laptopGallery1} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={laptopGallery2} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={laptopGallery3} />
        </Carousel.Item>
      </Carousel>
    );
  }

  function tabletScreen() {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <GalleryItem images={tabletGallery1} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={tabletGallery2} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={tabletGallery3} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={tabletGallery4} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={tabletGallery5} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={tabletGallery6} />
        </Carousel.Item>
      </Carousel>
    );
  }

  function smartphoneScreen() {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <GalleryItem images={phoneGallery1} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery2} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery3} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery4} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery5} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery6} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery7} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery8} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery9} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery10} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery11} />
        </Carousel.Item>
        <Carousel.Item>
          <GalleryItem images={phoneGallery12} />
        </Carousel.Item>
      </Carousel>
    );
  }

  return (
    <Container fluid className={styles.galleryWrapper}>
      <Row>
        <Col>
          <h2 className={`${styles.games} fw-bold text-center mb-5`} id="gallery">
            All Assassin's Creed Games
          </h2>
        </Col>
      </Row>
      {windowSize >= 992 ? laptopScreen() : windowSize >= 768 ? tabletScreen() : smartphoneScreen()}
    </Container>
  );
};

export default Gallery;
