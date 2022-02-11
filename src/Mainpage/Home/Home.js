import React from "react";
import Choose from "../../Sharepage/Choose/Choose.js";
import Products from "../../Sharepage/Products/Products.js";
import RecentPosts from "../../Sharepage/RecentPosts/RecentPosts.js";
import Service from "../../Sharepage/Service/Service.js";
import Slider from "../../Sharepage/Slider/Slider.js";
import Subscribe from "../../Sharepage/Subscribe/Subscribe.js";
import Testimonials from "../../Sharepage/Testimonials/Testimonials.js";
import About from "../About/About.js";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Service></Service>
      <Choose></Choose>
      <Products></Products>
      <Testimonials></Testimonials>
      <RecentPosts></RecentPosts>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
