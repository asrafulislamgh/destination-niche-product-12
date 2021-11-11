import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(
      `https://intense-taiga-54509.herokuapp.com/orders?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const deleteOrder = () => {
      fetch(`https://intense-taiga-54509.herokuapp.com/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            // alert("One item is deleted successfully!");
          }
          const remainingOrders = myOrders.filter((order) => order._id !== id);
          setMyOrders(remainingOrders);
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
        <h2 className="text-center py-5">My Order list ({myOrders.length})</h2>

        {myOrders.map((myOrder) => (
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
              <small>Ordered by: </small>
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  margin: "5px 5px 5px 0",
                }}
                src={myOrder.user?.photoURL}
                alt=""
              />
              <small>{myOrder.user?.displayName}</small>
              <h2 className="py-1">
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
            {/* <Col xl={1}>
              {!myOrder.status ? (
                <Button
                  onClick={() => handleUpdate(myOrder._id)}
                  variant="light"
                  className="common-btn3 mt-4 mx-2"
                >
                  Pending
                </Button>
              ) : (
                <Button variant="success" className="btn btn-success mt-4 mx-2">
                  Confirmed
                </Button>
              )}
              <Button variant="light" className="common-btn3 mt-4 mx-2">
                Confirm Now
              </Button>
              <Button
                onClick={() => handleDelete(myOrder._id)}
                variant="danger"
                className="common-btn4 mt-4 mx-2"
              >
                Delete
              </Button>
            </Col> */}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default MyOrder;
