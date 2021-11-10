import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Property from "../Property/Property";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  return (
    <div>
      <Container className="py-5">
        <h1 className="py-5 text-center">Our Latest Properties</h1>
        <Row xl={3} md={3} sm={2} xs={1} className="gy-5">
          {properties.map((propertyItem) => (
            <Col key={propertyItem._id}>
              <Property propertyItem={propertyItem}></Property>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Properties;
