import React, { useState } from "react";
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
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
const Login = () => {
  const { googleLogin, error, emailLogin } = useAuth();
  const [loginInfo, setLoginInfo] = useState({});

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/dashboard";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginInfo = { ...loginInfo };
    newLoginInfo[field] = value;
    setLoginInfo(newLoginInfo);
  };
  const handleEmailLogin = (e) => {
    e.preventDefault();
    emailLogin(loginInfo.email, loginInfo.password, history, redirect_url);
  };

  const googleSignin = () => {
    googleLogin(history, redirect_url);
  };

  return (
    <div>
      <HeaderNav />
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Login</h3>

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
              <FormControl
                type="password"
                name="password"
                onBlur={handleOnBlur}
                className="input-field mb-3"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
                required
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Login
                </Button>
              </div>

              <div className="py-2">
                <small>
                  <Button variant="link">Reset Password?</Button>
                </small>
              </div>
              <div className="py-2">
                Create a new account?
                <Link className="" to="/registration">
                  <u>
                    <em>Sign Up</em>
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

export default Login;
