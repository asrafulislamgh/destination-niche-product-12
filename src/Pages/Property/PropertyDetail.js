import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Col,
  Row,
  Button,
  Card,
  Badge,
  Form,
  FormControl,
} from "react-bootstrap";
import { useParams, Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
// import "./Appointment.css";

const PropertyDetail = () => {
  const { id } = useParams();
  const [properties, setProperties] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/properties")
      .then((res) => res.json())
      .then((result) => setProperties(result));
  }, []);

  const selectedProperty = properties.find(
    (property) => property._id === id
    // (service) => console.log(service._id, id)
  );

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log(e.defaultPrevented);
    selectedProperty.status = 0;
    selectedProperty.id = id;
    selectedProperty._id = null;
    selectedProperty.user = data;
    selectedProperty.user.photoURL = user.photoURL;

    fetch("http://intense-taiga-54509.herokuapp.com/orders", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedProperty),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(selectedProperty);
        history.push("/myorder");
        Swal.fire("Good job!", "You have ordered successfully!", "success");
      });
    reset();
    // };
  };
  return (
    <div className="my-5 py-5">
      <Row className="gy-3 gy-sm-5">
        <Col xl={5} lg={4} md={6}>
          <div>
            <img className="w-100 rounded" src={selectedProperty?.img} alt="" />
          </div>
        </Col>
        <Col xl={3} lg={3} md={5} className="mx-4">
          <div>
            <h1>{selectedProperty?.name}</h1>
            <p>{selectedProperty?.description}</p>
            <Card.Text className="card-info">
              <Badge pill bg="warning" className="px-3 me-2" text="dark">
                <h6 className="mb-0"> Day: {selectedProperty?.day}</h6>
              </Badge>
              <Badge pill bg="dark" className="px-3  me-2" text="light">
                <h6 className="mb-0"> Day: {selectedProperty?.night}</h6>
              </Badge>
            </Card.Text>
            <h3>${selectedProperty?.price}</h3>
          </div>
        </Col>
        <Col xl={3} lg={3} md={12} className="mx-4">
          <Row className="d-flex justify-content-center text-center">
            <Col style={{ maxWidth: "400px" }}>
              <h3 className="py-3">Order Now</h3>
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
                  {...register("phone", { required: true })}
                  className="input-field mb-3"
                  placeholder="Phone"
                  aria-label="phone"
                  aria-describedby="basic-addon2"
                />
                <FormControl
                  {...register("address", { required: true })}
                  className="input-field mb-3"
                  placeholder="Address"
                  aria-label="address"
                  aria-describedby="basic-addon2"
                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                ></Form.Group>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className="d-grid">
                  <Button
                    variant="dark"
                    type="submit"
                    className="btn common-btn3 py-3"
                  >
                    Order Now
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>

          {/* <Button
            // onClick={() => handleBook(selectedService?._id)}
            variant="light"
            className="common-btn3 mt-4"
          >
            Book Now
          </Button> */}

          <Link to="/services">
            <Button variant="light" className=" mt-4 ms-3">
              Back
            </Button>
          </Link>
          <Link to="/myorder">
            <Button variant="light" className=" mt-4 ms-3">
              See all of your orders
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default PropertyDetail;
