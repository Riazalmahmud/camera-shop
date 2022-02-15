import React, { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import RecentPost from "../RecentPost/RecentPost.js";

const RecentPosts = () => {
  const [resentPt, setResentPt] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setResentPt(data));
  }, []);
  return (
    <div>
      <div className="container my-5 py-5">
        <h4 className="fw-bold fast-color"> WHATS NEW</h4>
        <h1 className="fw-bold">Recent posts</h1>

        <Row xs={1} md={3} className="g-4">
          {resentPt.map((resentBlog) => (
            <RecentPost
              key={resentBlog.id}
              resentBlog={resentBlog}
            ></RecentPost>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecentPosts;
