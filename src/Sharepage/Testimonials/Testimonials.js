import React from "react";
import { Carousel } from "react-bootstrap";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div>
      <div className="testimonia bg-light my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="customers-say">
                <h4 className="fw-bold fast-color">TESTIMONIALS</h4>
                <h1 className="fw-bold">
                  What our <br />
                  customers say{" "}
                </h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
