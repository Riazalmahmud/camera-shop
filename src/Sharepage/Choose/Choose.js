import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./choose.css";
const Choose = () => {
  return (
    <div>
      <div className="choose-plan">
        <div className="container my-5 py-5 ">
          <h1 className="fw-bold py-5 my-5">Choose your plan</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col">
              <h4 className="fw-bold">CCTV</h4>
              <h1>
                $<span>45</span>
              </h1>
              <p>CCTV service</p>
              <p>Intercon integration</p>
              <p>Access control</p>
              <Link clssName="Read-more rounded " to="/details">
                Read more{" "}
                <BsArrowRight
                  size={"40px"}
                  color={"#fff"}
                  marginLeft={"10px"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
