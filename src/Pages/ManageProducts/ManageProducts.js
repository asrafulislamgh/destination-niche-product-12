import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data));
  }, []);

  const handleDelete = (id) => {
    const deleteOrder = () => {
      fetch(`https://intense-taiga-54509.herokuapp.com/properties/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            // alert("One item is deleted successfully!");
          }
          const remainingProperties = properties.filter(
            (order) => order._id !== id
          );
          setProperties(remainingProperties);
        });
    };
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          deleteOrder();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };

  return (
    <div>
      <Container>
        <h2 className="text-center py-5">
          All Property list ({properties.length})
        </h2>

        {properties.map((myOrder) => (
          <Row
            xl={2}
            md={2}
            sm={1}
            xs={1}
            key={myOrder._id}
            className="g-3 mb-5 d-flex justify-center"
          >
            <Col>
              <img className="w-100" src={myOrder.img} alt="" />
            </Col>
            <Col>
              <h2>{myOrder.name}</h2>
              <p>{myOrder.description}</p>
              <Badge pill bg="warning" className="px-3 py-2 me-2" text="dark">
                Bedroom: {myOrder.bed}
              </Badge>
              <Badge pill bg="dark" className="px-3 py-2 me-2" text="light">
                Bathroom: {myOrder.bath}
              </Badge>
              <small>Total Area: {myOrder.area}</small>
              <br />
              <small>{myOrder.user?.displayName}</small>
              <h2 className="py-1 mt-3">
                ${myOrder.price} /{" "}
                <small>
                  ft<sup>2</sup>
                </small>
              </h2>
              <Button
                onClick={() => handleDelete(myOrder._id)}
                variant="danger"
                className="common-btn4 mt-4 mx-2"
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ManageProducts;
