import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import man from "../../../img/man.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <Row className="pt-5 gy-5 d-flex align-items-center background">
        <Col lg={5} md={6} sm={12} className="order-2 order-lg-1 order-md-1">
          <img className="w-100" src={man} alt="" />
        </Col>
        <Col
          lg={7}
          md={6}
          sm={12}
          className="px-5 order-1 order-lg-2 order-md-2"
        >
          <div>
            <h1 className="mb-3 about-heading display-3">
              <span>We have everything</span> you need to <span>buy</span> or
              <span>sell</span> quickly!
            </h1>
            <p>
              We're different because we have years of experience and our
              approach is to work directly with us. So you will have a great
              deal!
              <br />
              <br />
              Best Doctors’ innovative services include access to an unrivaled
              network of physicians who have been selected as the best in their
              field by other leading doctors. With every service offered, the
              goal remains the same: to help people in need get the right
              diagnosis and treatment, significantly improving health outcomes.
            </p>
            <Button variant="light" className="common-btn my-3">
              See More
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
