import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { Col, Container, Row } from "react-bootstrap";
import userImg from "../../../img/user.jpg";
import "./ReviewHome.css";

const ReviewHome = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container className="my-5 pb-5">
      <h1 className="py-5 text-center">What Our Clients Say</h1>
      <Row xl={3} lg={3} md={2} sm={2} xs={1} className="gy-4">
        {reviews.map((review) => (
          <Col data-aos="fade-up" data-aos-offset="300" key={review._id}>
            <div className="reviewContainer">
              <div className="d-flex justify-content-center align-items-center text-center">
                <img
                  style={{ width: "80px" }}
                  className="userImg"
                  src={review.photoURL === null ? userImg : review.photoURL}
                  alt=""
                />
                <h5 className="ms-3">{review.displayName}</h5>
              </div>
              <div className="text-center mt-3">
                <p
                  style={{
                    overflow: "hidden",
                    maxHeight: "6rem",
                    display: "block",
                    textOverflow: "ellipsis",
                  }}
                >
                  <span className="commentText">{review.comments}</span>
                </p>
                <p>{review.rating} out of 5.00</p>
                <Rating
                  className="rating"
                  initialRating={review.rating}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  readonly
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReviewHome;
