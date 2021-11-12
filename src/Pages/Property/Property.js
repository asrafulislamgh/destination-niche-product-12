import React from "react";
import { Badge, Card, CardGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Property.css";

const Property = ({ propertyItem }) => {
  const { _id, name, price, description, img, location, area, bath, bed } =
    propertyItem;
  return (
    <div>
      <CardGroup>
        <Card className="card-container text-center">
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title text-truncate">{name}</Card.Title>
            <Card.Text
              style={{
                overflow: "hidden",
                maxHeight: "4rem",
                display: "block",
                textOverflow: "ellipsis",
              }}
              className="card-info"
            >
              {description}
            </Card.Text>
            <Card.Text className="card-info">{location}</Card.Text>
            <Card.Text className="card-info">{area}</Card.Text>
            <Card.Text className="card-info">
              <Badge pill bg="warning" className="px-3 py-2 me-2" text="dark">
                Bedroom: {bed}
              </Badge>
              <Badge pill bg="dark" className="px-3 py-2 me-2" text="light">
                Bathroom: {bath}
              </Badge>
            </Card.Text>
            <Card.Title className="card-title">
              ${price} /{" "}
              <small>
                ft<sup>2</sup>
              </small>
            </Card.Title>
          </Card.Body>
          <Card.Footer className="card-body">
            <Link to={`/properties/${_id}`}>
              <Button variant="dark" className="common-btn3">
                Book Now
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Property;
