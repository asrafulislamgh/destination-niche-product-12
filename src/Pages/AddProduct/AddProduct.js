import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://intense-taiga-54509.herokuapp.com/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire(
          "Good job!",
          "You have added a new product successfully!",
          "success"
        );
        console.log(result);
      });
    reset();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Container className="justify-content-center mb-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Add Product</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                {...register("name", { required: true })}
                className="input-field mb-3"
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("price", { required: true })}
                className="input-field mb-3"
                placeholder="Price"
                aria-label="price"
                type="number"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("bed", { required: true })}
                className="input-field mb-3"
                placeholder="BedRoom Quantity"
                aria-label="bed"
                type="number"
                min="1"
                max="50"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("bath", { required: true })}
                className="input-field mb-3"
                placeholder="Bathroom Quantity"
                aria-label="bath"
                type="number"
                min="1"
                max="50"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("area", { required: true })}
                className="input-field mb-3"
                placeholder="Area"
                aria-label="area"
                type="number"
                min="100"
                max="50000000"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("location", { required: true })}
                className="input-field mb-3"
                placeholder="Location"
                aria-label="location"
                type="text"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("img", { required: true })}
                className="input-field mb-3"
                placeholder="Image URL (400x300)"
                aria-label="img"
                type="text"
                aria-describedby="basic-addon2"
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger"></Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  {...register("description")}
                  as="textarea"
                  rows={4}
                  className="input-field mb-3"
                  placeholder="Description"
                />
              </Form.Group>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="d-grid">
                <Button
                  variant="dark"
                  type="submit"
                  className="btn common-btn3 py-3"
                >
                  Add
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
