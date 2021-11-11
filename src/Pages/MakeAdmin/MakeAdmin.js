import React, { useState } from "react";
import {
  Col,
  Container,
  FormControl,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import Swal from "sweetalert2";
const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState({});

  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };
  const handleEmailLogin = (e) => {
    fetch(`https://intense-taiga-54509.herokuapp.com/users/${adminEmail}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good job!", "You clicked the button!", "success");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px", margin: "100px 0" }}>
            <h3 className="py-5">Make An Admin</h3>

            <Form onSubmit={handleEmailLogin}>
              <FormControl
                type="email"
                name="email"
                onBlur={handleOnBlur}
                className="input-field mb-3"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon2"
                required
              />
              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Make Admin
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeAdmin;
