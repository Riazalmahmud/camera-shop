import React, { useState, useEffect, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testimonials = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("Products.json")
      .then((res) => res.json())
      .then((data) => setFeedback(data));
  }, []);

  return (
    <div>
      <div className="testimonia bg-light my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="customers-say">
                <h4 className="fw-bold fast-color">TESTIMONIALS</h4>
                <h1 className="fw-bold">
                  What our <br />
                  customers say
                </h1>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {feedback.map((feedbacks) => (
                  <SwiperSlide key={feedbacks.id}>
                    <img src={feedbacks.image} alt="" className="img-fl" />
                    <h4 className="fw-bold fast-color"> {feedbacks.title}</h4>
                    <p className="fw-bold">
                      {" "}
                      {feedbacks.description.slice(0, 150)}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
