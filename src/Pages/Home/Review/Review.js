import React from "react";
import {
  Col,
  Container,
  FormControl,
  Row,
  Button,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
const Review = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();

  const onSubmit = (data, e) => {
    const newData = { ...data };
    newData.rating = data.rating / 20;
    newData.photoURL = user.photoURL;

    fetch("https://intense-taiga-54509.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Good job!", "Your review is published", "success");
        history.push("/home");
      });
    reset();
  };

  return (
    <div>
      <Container data-aos="fade-up" className="justify-content-center">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px", margin: "30px 0" }}>
            <h3 className="pb-5">Leave Your Feedback</h3>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                {...register("displayName")}
                className="input-field mb-3"
                placeholder="Name"
                aria-label="name"
                value={user.displayName}
                defaultValues={user.displayName}
                aria-describedby="basic-addon2"
              />

              <FormControl
                {...register("email")}
                className="input-field mb-3"
                placeholder="Email"
                aria-label="email"
                value={user.email}
                defaultValues={user.email}
                type="email"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("rating", { required: true })}
                type="number"
                name="rating"
                className="input-field mb-3"
                placeholder="Rating 1-5"
                aria-label="rating"
                min="1"
                max="100"
                aria-describedby="basic-addon2"
              />
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  {...register("comments", { required: true })}
                  as="textarea"
                  name="comments"
                  className="input-field mb-3"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>

              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Submit
                </Button>
              </div>
              {errors.exampleRequired && <span>This field is required</span>}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Review;
