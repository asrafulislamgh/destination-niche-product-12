import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Property from "../../Property/Property";

const HomeProperty = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      });
  }, []);
  let limitedProperty = properties.slice(1, 7);

  return (
    <div style={{ backgroundColor: "#F7F4FB" }}>
      <Container className="py-5">
        <h1 className="py-5 text-center">Our Latest Properties</h1>
        {loading ? (
          <div className="container d-flex justify-content-center py-5 my-5">
            <Spinner animation="border" />
          </div>
        ) : (
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
        )}
      </Container>
    </div>
  );
};

export default HomeProperty;
