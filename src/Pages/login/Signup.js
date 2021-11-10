import React from "react";
import {
  Col,
  Container,
  FormControl,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Signup.css";

const Signup = () => {
  const {
    handleGoogleSignin,
    setIsLoading,
    error,
    setError,
    handleEmailChanging,
    handleRegistration,
    handlePasswordChanging,
    handleUpdateName,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const googleSignin = () => {
    handleGoogleSignin()
      .then(() => {
        history.push(redirect_url);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Incorrect Password!");
        }
      });
  };

  return (
    <div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Register</h3>
            <Form onSubmit={handleRegistration}>
              <FormControl
                onBlur={handleUpdateName}
                className="input-field mb-3"
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon2"
              />
              <FormControl
                className="input-field mb-3"
                onBlur={handleEmailChanging}
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon2"
              />
              <FormControl
                className="input-field mb-3"
                onBlur={handlePasswordChanging}
                placeholder="Password"
                aria-label="password"
                type="password"
                aria-describedby="basic-addon2"
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Register
                </Button>
              </div>

              <div className="py-2">
                Already have an account?{" "}
                <Link className="" to="/login">
                  <u>
                    <em>Login</em>
                  </u>
                </Link>
              </div>
              <div className="py-2">Or</div>

              <div className="d-grid">
                <Button onClick={googleSignin} className="btn btn-primary py-3">
                  With Google
                </Button>
                {/* <Button className="btn btn-dark text-white py-3">Github</Button>
                <Button className="btn btn-primary py-3">Facebook</Button> */}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
