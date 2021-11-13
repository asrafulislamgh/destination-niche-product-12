import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OurProgress.css";

const OurProgress = () => {
  return (
    <div>
      <Container style={{ marginTop: "50px" }}>
        <Row xl={4} lg={4} md={3} sm={2} xs={1} className="gy-4">
          <Col>
            <div className="thumb-img">
              <img
                className="w-100"
                src="http://spaceworxfm.com/wp-content/uploads/2020/11/real-estate.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="thumb-img">
              <img
                className="w-100"
                src="https://idx-acnt-ihouseprd.b-cdn.net/AR893462/file_manager/SS%20Table%20Images/ANYHOUSE%20USA%204-1%20(400X500).jpg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="thumb-img">
              <img
                className="w-100"
                src="https://as1.ftcdn.net/v2/jpg/02/08/98/26/500_F_208982671_ZyVWNhYxzmuSGpz4mSwfxLorj0fY6loV.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="thumb-img">
              <img
                className="w-100"
                src="https://highimpactcs.com/wp-content/uploads/2018/07/hands-together-teamwork-400x500.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
        <Row xl={4} lg={4} md={3} sm={2} xs={1} className="gy-4">
          <Col></Col>
        </Row>
      </Container>
      <div className="progress-container">
        <div className="progress-items container text-center">
          <Row lg={4} md={4} sm={2} xs={1} className="gy-4">
            <Col>
              <div>
                <i class="progress-icon fas fa-home"></i>
                <h3 className="icon-heading">156</h3>
                <p>Listing</p>
              </div>
            </Col>
            <Col>
              <div>
                <i class="progress-icon fas fa-map-marked-alt"></i>
                <h3 className="icon-heading">257</h3>
                <p>Locations</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon far fa-smile"></i>
                <h3 className="icon-heading">112k</h3>
                <p>Highly Satisfied</p>
              </div>
            </Col>
            <Col>
              <div>
                <i className="progress-icon fas fa-users"></i>
                <h3 className="icon-heading">253k</h3>
                <p>Our Buyers</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default OurProgress;
