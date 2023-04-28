import React from "react";
import { faPlaystation, faWindows, faXbox } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";

const CardComp = ({ styleCard, image, title }) => {
  return (
    <Card className={styleCard}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title className="fs-5 mb-5 text-center">{title}</Card.Title>
        <Card.Title>
          <div className="d-flex gap-4">
            <FontAwesomeIcon icon={faXbox} className="text-secondary fs-6" />
            <FontAwesomeIcon icon={faWindows} className="text-secondary fs-6" />
            <FontAwesomeIcon icon={faPlaystation} className="text-secondary fs-6" />
          </div>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
