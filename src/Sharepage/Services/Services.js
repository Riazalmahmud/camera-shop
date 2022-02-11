import React from "react";
import { Card, Col } from "react-bootstrap";

const Services = ({ cameraService }) => {
  const { image, description, title } = cameraService;
  console.log(cameraService);
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} className="img-fluid" />
          <Card.Body>
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Text className="fw-bold">
              {" "}
              {description.slice(0, 70)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Services;
