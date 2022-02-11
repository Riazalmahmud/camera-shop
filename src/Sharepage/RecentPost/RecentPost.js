import React from "react";
import { Card, Col } from "react-bootstrap";

const RecentPost = ({ resentBlog }) => {
  const { image, description, title } = resentBlog;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} className="img-fluid" />
          <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>{description.slice(0, 150)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default RecentPost;
