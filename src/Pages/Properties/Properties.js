import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Property from "../Property/Property";
import Footer from "../Shared/Footer/Footer";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";

const Properties = () => {
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
  if (loading) {
    // <div className="container d-flex justify-content-center py-5 my-5">
    // return <Spinner animation="border" />;
    // </div>
  }
  return (
    <div style={{ backgroundColor: "#F7F4FB" }}>
      <HeaderNav />
      <Container className="py-5">
        <h1 className="py-5 text-center">Our Latest Properties</h1>
        {loading ? (
          <div className="container d-flex justify-content-center py-5 my-5">
            <Spinner animation="border" />
          </div>
        ) : (
          <Row xl={3} md={3} sm={2} xs={1} className="gy-5">
            {properties.map((propertyItem) => (
              <Col key={propertyItem._id}>
                <Property propertyItem={propertyItem}></Property>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default Properties;
