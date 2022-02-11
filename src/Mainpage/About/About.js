import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import abutImag from "../../image/about-photo.png";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col about-us">
            <h4>ABOUT US</h4>
            <h1>
              CCTV for <span>your Safety</span>{" "}
            </h1>
            <h6>
              Vestibulum commodo at dolor eu aliquam. In congue ornare augue eu
              scelerisque. Duis vestibulum, dolor sed facilisis laoreet.
            </h6>
            <p>
              Nunc pretium nibh non aliquam scelerisque. Integer porttitor dolor
              sit amet leo malesuada scelerisque. Sed sed tortor lobortis,
              dictum lacus sed, mollis enim. Aenean ullamcorper accumsan sem sit
              amet aliquam. Cras euismod mauris felis, eget bibendum nibh
              facilisis ac.
            </p>
            <Link clssName="Read-more rounded " to="/details">
              Read more{" "}
              <BsArrowRight size={"40px"} color={"#fff"} marginLeft={"10px"} />
            </Link>
          </div>
          <div className="col-lg-6 col-md-6 col">
            <img src={abutImag} alt="" className="img-fuild" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
