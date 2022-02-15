import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Product from "../Product/Product.js";

const Products = () => {
  const [cctvProduct, setCCtvProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setCCtvProduct(data));
  }, []);
  return (
    <div>
      <div className="container">
        <h4 className="fast-color fw-bold">SHOP ONLINE</h4>
        <h1 className="fw-bold">CCTV Products</h1>
      </div>

      <div className="container pt-5 mt-5">
        <Row xs={1} md={3} className="g-4">
          {cctvProduct.slice(0, 3).map((cctvProducts) => (
            <Product
              key={cctvProducts.id}
              cctvProducts={cctvProducts}
            ></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
