// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import Rating from "react-rating";
// import userImg from "../../../img/user.jpg";

// export default function FeaturesProperty() {
//   const [reviews, setReviews] = useState([]);
//   useEffect(() => {
//     fetch("https://intense-taiga-54509.herokuapp.com/reviews")
//       .then((res) => res.json())
//       .then((data) => setReviews(data));
//   }, []);

//   return (
//     <div>
//       <Container className="my-5 pb-5">
//         <Row className="gx-4">
//           <Slider
//             slidesToShow={3}
//             swipeToSlide={true}
//             focusOnSelect={true}
//             autoplay={true}
//             autoplaySpeed={2000}
//           >
//             {reviews.map((review) => (
//               <Col>
//                 <div className="reviewContainer">
//                   <div className="d-flex justify-between align-items-center">
//                     <img
//                       style={{ width: "80px" }}
//                       className="userImg"
//                       src={review.photoURL === null ? userImg : review.photoURL}
//                       alt=""
//                     />
//                     <h4 className="ms-3">{review.displayName}</h4>
//                   </div>
//                   <div className="text-center mt-3">
//                     <p>
//                       <span className="commentText">{review.comments}</span>
//                     </p>
//                     <p>{review.rating} out of 5.00</p>
//                     <Rating
//                       className="rating"
//                       initialRating={review.rating}
//                       emptySymbol="fa fa-star-o fa-2x"
//                       fullSymbol="fa fa-star fa-2x"
//                       readonly
//                     />
//                   </div>
//                 </div>
//               </Col>
//             ))}
//           </Slider>
//         </Row>
//       </Container>
//     </div>
//   );
// }
