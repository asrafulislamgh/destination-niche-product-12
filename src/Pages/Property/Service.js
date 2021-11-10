import React from "react";
import { Card, CardGroup, Button, Badge } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./Service.css";
import "./Services.css";

const Service = ({ service }) => {
  const { _id, name, description, img, day, night, price, rating } = service;
  return (
    <div>
      <CardGroup>
        <Card className="card-container">
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-info">{description}</Card.Text>
            <Card.Text className="card-info">
              <Badge pill bg="warning" className="px-3 py-2 me-2" text="dark">
                Day: {day}
              </Badge>
              <Badge pill bg="dark" className="px-3 py-2 me-2" text="light">
                Night: {night}
              </Badge>
            </Card.Text>
            <Card.Title className="card-title">${price}</Card.Title>
            <Card.Text>
              <Rating
                className="rating"
                initialRating={rating}
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                readonly
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer className="card-body">
            <Link to={`/service/${_id}`}>
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

export default Service;
