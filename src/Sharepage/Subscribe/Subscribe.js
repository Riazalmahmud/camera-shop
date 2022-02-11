import React from "react";
import { Form } from "react-bootstrap";
import { GiNetworkBars } from "react-icons/gi";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div>
      <div className="container">
        <div className="subscribe rounded-pill">
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="main-subscribe d-flex justify-content-between ml-3 mt-3">
                <div className="icon pl-3">
                  <GiNetworkBars size={"50px"} color={"#EDDEA0"} />
                </div>
                <div className="subscribe-text ">
                  <h4 className="fw-bold text-white">
                    Want to know about our offers first?
                  </h4>
                  <h1 className="fw-bold">Subscribe our newsletter</h1>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12">
              <Form className="py-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold sub-text">
                    Email address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="sub-fuild w-75 py-3 rounded"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
