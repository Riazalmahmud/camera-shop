import React from "react";
import { Card, Col } from "react-bootstrap";
import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Product.css";
const Product = ({ cctvProducts }) => {
  const { image, price, title, description } = cctvProducts;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body className="product">
            <Card.Title>{title} </Card.Title>
            <Card.Text>{description.slice(0, 70)}</Card.Text>
            <h4 className="fw-bold fast-color">$ {price}</h4>
            <Link clssName="get-now rounded " to="/details">
              Add to cart <AiTwotoneShopping size={"25px"} color={"#fff"} />
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Product;
