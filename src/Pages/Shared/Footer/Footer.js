import React from "react";
import {
  Col,
  Container,
  Row,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logoFooter from "../../../img/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="py-5 footer-text">
        <Row className="gy-5">
          <Col md={3}>
            <div>
              <h4 className="mb-3">About</h4>
              <p className="py-2">
                Trust is the key of our business. We live on your happiness. We
                always think out of the box to ensure the best quality possible.
                So Destination Inc. is the final destination of your happy live
                to live longer.
              </p>
              <Link to="#">
                <Button variant="link" className="btn common-btn">
                  Learn More
                </Button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <img
                style={{ maxWidth: "200px", marginBottom: "30px" }}
                src={logoFooter}
                alt="logo"
              ></img>
              <h3 className="my-4 text-center">Let's Get in Touch</h3>
              <p className="my-4">
                Our distinctive buildings fill the skyline and streetscapes of
                the city
              </p>
            </div>
            {/* subscriber */}
            <InputGroup style={{ width: "90%" }} className="mb-3 mx-auto">
              <FormControl
                placeholder="Email Address"
                aria-label="Email Address"
                aria-describedby="basic-addon2"
              />
              <Button variant="link" className="common-btn" id="button-addon2">
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col md={3}>
            <div>
              <div>
                <h4 className="mb-4">Contact Us</h4>
              </div>
              <div className="mb-3">
                <p>
                  <i class="fas fa-map-marker-alt me-2"></i>Office-1: Gulshan 1,
                  Gulshan Avenue, Dhaka - 1210, Bangladesh
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <i class="fas fa-map-marker-alt me-2"></i>Office-2: Nabinagar,
                  Savar, Dhaka - 1200, Bangladesh
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <i class="fas fa-phone-alt me-2"></i> +880193033**02
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <i class="fas fa-envelope me-2"></i>{" "}
                  <a href="mailto:gdmamun@yahoo.com"> gdmamun@yahoo.com</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bg">
        <Container className="my-3">
          <Row>
            <Col className="d-flex justify-content-center my-3">
              <li>
                <Link to="/home">
                  <i className="fab fa-facebook-f px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-twitter px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-linkedin-in px-3"></i>
                </Link>
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <p style={{ fontSize: "14px", color: "#999" }}>
                  Copyright by Destination Inc. 2021. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
