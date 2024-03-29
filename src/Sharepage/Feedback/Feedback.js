import axios from "axios";
import Alert from "@mui/material/Alert";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import useAuth from "../../Hooks/useAuth.js";

const Feedback = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0); // initial rating value
  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onSubmit = (data) => {
    const rateCount = { ...data, rating: rating / 20 };
    axios.post("http://localhost:5000/feedbacks", rateCount).then((res) => {
      if (res.data.insertedId) {
        <Alert severity="success">Successfully Rating publish </Alert>;
      }
    });
    reset();
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className="login-design">
          <Form.Control
            as="textarea"
            {...register("description")}
            placeholder="Enter description"
            className="bg-transparent mt-2"
            rows={3}
          />
          <Form.Control
            {...register("img")}
            placeholder="Enter photoURL"
            className="bg-transparent mt-2"
          />

          <Rating
            onClick={handleRating}
            {...register("rating")}
            ratingValue={rating}
          />
          <Form.Control
            {...register("name")}
            displayName={user.displayName}
            placeholder="your name"
            className="bg-transparent mt-2"
          />
          <Form.Control
            {...register("address")}
            displayName={user.displayName}
            placeholder="your address"
            className="bg-transparent mt-2"
          />

          <button type="submit " className="my-5">
            {" "}
            Feedback submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
