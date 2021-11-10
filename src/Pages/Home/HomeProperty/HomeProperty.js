import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Property from "../../Property/Property";

const HomeProperty = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("/properties.json")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);
  let limitedProperty = properties.slice(1, 7);

  return (
    <div>
      <Container className="py-5">
        <h1 className="py-5 text-center">Our Latest Properties</h1>
        <Row xl={3} md={3} sm={2} xs={1} className="gy-5">
          {limitedProperty.map((propertyItem) => (
            <Col>
              <Property
                key={propertyItem._id}
                propertyItem={propertyItem}
              ></Property>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeProperty;
