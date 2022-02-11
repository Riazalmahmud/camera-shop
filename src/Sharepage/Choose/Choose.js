import React from "react";
import { BsArrowRightShort, BsCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./choose.css";
const Choose = () => {
  return (
    <div>
      <div className="choose-plan">
        <div className="container my-5 py-5 ">
          <h1 className="fw-bold py-5 my-5 text-white">Choose your plan</h1>
          <div className="row">
            <div className="col-lg-4 col-md-4 col bg-light shadow p-3 mb-5 bg-body rounded">
              <div className="choose-design py-5">
                <h4 className="fast-color fw-bold">CCTV</h4>
                <h1 className="">
                  <BsCheck size={"40px"} color={"#85c226"} />$<span>45</span>
                </h1>
                <p>
                  <span>X</span>CCTV service
                </p>
                <h6 className="ml-5">
                  <BsCheck size={"40px"} color={"#85c226"} />
                  <span>Intercon integration</span>
                </h6>
                <p>
                  <span>X</span>Access control
                </p>
                <Link clssName="get-now rounded " to="/details">
                  Get now <BsArrowRightShort size={"25px"} color={"#fff"} />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col bg-light shadow p-3 mb-5 bg-body rounded">
              <div className="choose-design py-5">
                <h4 className="fast-color fw-bold">Full Security</h4>
                <h1 className="">
                  <BsCheck size={"40px"} color={"#85c226"} />$<span>259</span>
                </h1>
                <p>
                  <BsCheck size={"40px"} color={"#85c226"} /> CCTV service
                </p>
                <p className="full-security fw-bold">
                  <BsCheck size={"40px"} color={"#85c226"} />
                  Intercon integration
                </p>
                <p>
                  <BsCheck size={"40px"} color={"#85c226"} /> Access control
                </p>
                <Link clssName="get-now rounded " to="/details">
                  Get now <BsArrowRightShort size={"25px"} color={"#fff"} />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col bg-light shadow p-3 mb-5 bg-body rounded">
              <div className="choose-design py-5">
                <h4 className="fast-color fw-bold">CCTV Pro</h4>
                <h1 className="">
                  <BsCheck size={"40px"} color={"#85c226"} />$<span>65</span>
                </h1>
                <p>
                  <span>X</span>CCTV service
                </p>
                <h6 className="ml-5">
                  <BsCheck size={"40px"} color={"#85c226"} />
                  <span>Intercon integration</span>
                </h6>
                <p>
                  <span>X</span>Access control
                </p>
                <Link clssName="get-now rounded " to="/details">
                  Get now <BsArrowRightShort size={"25px"} color={"#fff"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
