import React from "react";
import { Link } from "react-router-dom";
import sliderImg from "../../image/sunset-g55a1ce936_1920.jpg";
import "./Slider.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div className="slider-img">
          <img src={sliderImg} alt="" clssName="img-fluid" />
        </div>

        <div className="content ">
          <div className="content-style">
            <h1>
              {" "}
              <span>CCTV Systems</span> & Access control
            </h1>
            <br />
            <p className="fw-bold ">
              Suspendisse tincidunt ornare sem, at venenatis lorem tempor <br />
              vel. Sed feugiat sit amet nisi non dignissim. Duis egestas augue
              <br />
              at nisi pharetra porta.
            </p>
            <Link clssName="order-design " to="/Shop">
              Order now{" "}
              <BsArrowRightCircleFill
                size={"40px"}
                color={"#85C226"}
                marginLeft={"10px"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
