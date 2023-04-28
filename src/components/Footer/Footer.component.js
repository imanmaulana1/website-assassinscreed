import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Footer.module.css";

const FooterComp = () => {
  return (
    <footer className={`${styles.footer} w-100 py-4`}>
      <Container>
        <Row>
          <Col className="col-lg-4 col-md-6 col-12 order-3 order-sm-2 order-lg-1 mb-4 ">
            <h5 className="text-white">Assassins Creed</h5>
            <p className="small text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <p className="small text-muted mb-0"> &#169; Copyrights. All rights reserved. </p>
          </Col>
          <Col className="col-lg-2 col-md-6 col-12 order-2 order-sm-2 order-lg-2 mx-auto mb-4">
            <h5 className="text-white mb-3">About</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className={`${styles.customTextLinks} text-secondary`}>
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#feature" className={`${styles.customTextLinks} text-secondary`}>
                  Feature
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className={`${styles.customTextLinks} text-secondary`}>
                  Gallery
                </a>
              </li>
              <li className="mb-2">
                <a href="#gallery" className={`${styles.customTextLinks} text-secondary`}>
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col className="col-lg-5 col-md-12 mb-4 order-1 order-sm-1 order-lg-3">
            <h5 className="text-white mb-3">Newsletter</h5>
            <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            <form action="#">
              <div className="input-group mb-3">
                <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-secondary" id="button-addon2" type="button">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;
