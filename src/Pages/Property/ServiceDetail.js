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
// import "./Appointment.css";
import useAuth from "../../hooks/useAuth";

const ServiceDetail = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://mighty-dawn-62358.herokuapp.com/services")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);

  const selectedService = services.find(
    (service) => service._id === id
    // (service) => console.log(service._id, id)
  );

  const onSubmit = (data, e) => {
    e.preventDefault();

    console.log(e.defaultPrevented);
    // const handleBook = (id) => {
    selectedService.status = 0;
    selectedService.id = id;
    selectedService._id = null;
    // selectedService.user = user;
    selectedService.user = data;
    selectedService.user.photoURL = user.photoURL;

    fetch("https://mighty-dawn-62358.herokuapp.com/booking", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedService),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(selectedService);
        history.push("/myorder");
        alert("A new booking is added successfully!");
      });
    reset();
    // };
  };
  return (
    <div className="my-5 py-5">
      <Row className="gy-3 gy-sm-5">
        <Col xl={5} lg={4} md={6}>
          <div>
            <img className="w-100 rounded" src={selectedService?.img} alt="" />
          </div>
        </Col>
        <Col xl={3} lg={3} md={5} className="mx-4">
          <div>
            <h1>{selectedService?.name}</h1>
            <p>{selectedService?.description}</p>
            <Card.Text className="card-info">
              <Badge pill bg="warning" className="px-3 me-2" text="dark">
                <h6 className="mb-0"> Day: {selectedService?.day}</h6>
              </Badge>
              <Badge pill bg="dark" className="px-3  me-2" text="light">
                <h6 className="mb-0"> Day: {selectedService?.night}</h6>
              </Badge>
            </Card.Text>
            <h3>${selectedService?.price}</h3>
          </div>
        </Col>
        <Col xl={3} lg={3} md={12} className="mx-4">
          <Row className="d-flex justify-content-center text-center">
            <Col style={{ maxWidth: "400px" }}>
              <h3 className="py-3">Add Service</h3>
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
                <FormControl
                  {...register("number", { required: true })}
                  className="input-field mb-3"
                  placeholder="Ticket Number"
                  aria-label="ticket"
                  type="number"
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
                    Book Now
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

export default ServiceDetail;
