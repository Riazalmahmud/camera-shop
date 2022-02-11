import React from "react";
import Service from "../../Sharepage/Service/Service.js";
import Slider from "../../Sharepage/Slider/Slider.js";
import About from "../About/About.js";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Service></Service>
    </div>
  );
};

export default Home;
