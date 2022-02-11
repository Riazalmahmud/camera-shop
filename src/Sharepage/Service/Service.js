import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import Services from "../Services/Services.js";
const Service = () => {
  const [camService, setCamService] = useState([]);
  useEffect(() => {
    fetch("./Products.json")
      .then((res) => res.json())
      .then((data) => setCamService(data));
  }, []);
  return (
    <div>
      <div className="container my-5 py-5">
        <h5 className="fast-color fw-bold">WHAT WE DO</h5>
        <h1 className="fw-bold">Our Services</h1>
        <p className="fw-bold">
          Vestibulum commodo at dolor eu aliquam. In congue ornare augue <br />
          eu scelerisque. Duis vestibulum, dolor sed facilisis laoreet.
        </p>

        <Row xs={1} md={3} className="g-4">
          {camService.map((cameraService) => (
            <Services
              key={cameraService.id}
              cameraService={cameraService}
            ></Services>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Service;
