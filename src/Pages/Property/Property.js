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
        <Card className="card-container text-center border-0">
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body pb-1">
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

            <Card.Text className="card-info">
              <Badge
                pill
                bg="light"
                className="px-3 py-2 me-2 badge-icon"
                text="dark"
              >
                <i className="fas fa-bed me-2"></i> {bed}
              </Badge>
              <Badge
                pill
                bg="light"
                className="px-3 py-2 me-2 badge-icon"
                text="dark"
              >
                <i className="fas fa-bath me-2"></i> {bath}
              </Badge>
              <Badge
                pill
                bg="light"
                className="px-3 py-2 me-2 badge-icon"
                text="dark"
              >
                <i className="fas fa-layer-group me-2 "></i> {area}{" "}
                <small>
                  ft<sup>2</sup>
                </small>
              </Badge>
            </Card.Text>
            <Card.Text className="card-info badge-icon">
              <i className="fas fa-map-marker-alt me-2"></i> {location}
            </Card.Text>

            <Card.Title
              style={{ color: "#377ef9", fontWeight: "bold" }}
              className="card-title"
            >
              ${price} /{" "}
              <small>
                ft<sup>2</sup>
              </small>
            </Card.Title>
          </Card.Body>
          <Card.Footer className="card-body border-0">
            <Link to={`/properties/${_id}`}>
              <Button variant="dark" className="common-btn3 mb-3">
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
