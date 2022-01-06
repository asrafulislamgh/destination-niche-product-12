import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Badge,
  Button,
  Card,
  Spinner,
} from "react-bootstrap";
import Swal from "sweetalert2";
import userPhoto from "../../img/user1.png";

const ManageOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetch("https://intense-taiga-54509.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [pending]);

  const handleUpdate = (id) => {
    fetch(`https://intense-taiga-54509.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setPending(false);
          let timerInterval;
          Swal.fire({
            title: "The order is approved successfully!",
            // html: "You are redirecting to your <b></b> desired page.",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              timerInterval = setInterval(() => {}, 100);
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {});
        }
      });
  };
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

  if (!myOrders.length) {
    return <Spinner></Spinner>;
  }
  console.log(myOrders);
  return (
    <div>
      <Container>
        <h2 className="text-center py-5">All Order list ({myOrders.length})</h2>

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
              <Card.Text className="card-info">
                <Badge
                  pill
                  bg="light"
                  className="px-3 py-2 me-2 badge-icon"
                  text="dark"
                >
                  <i className="fas fa-bed me-2"></i> {myOrder.bed}
                </Badge>
                <Badge
                  pill
                  bg="light"
                  className="px-3 py-2 me-2 badge-icon"
                  text="dark"
                >
                  <i className="fas fa-bath me-2"></i> {myOrder.bath}
                </Badge>
                <Badge
                  pill
                  bg="light"
                  className="px-3 py-2 me-2 badge-icon"
                  text="dark"
                >
                  <i className="fas fa-layer-group me-2"></i> {myOrder.area}{" "}
                  <small>
                    ft<sup>2</sup>
                  </small>
                </Badge>
              </Card.Text>

              <small>Ordered by: </small>
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  margin: "5px 5px 5px 0",
                }}
                src={
                  myOrder.user?.photoURL === null
                    ? userPhoto
                    : myOrder.user?.photoURL
                }
                alt=""
              />
              <small>{myOrder.user?.displayName}</small>
              <h2 className="py-1">
                ${myOrder.price} /{" "}
                <small>
                  ft<sup>2</sup>
                </small>
              </h2>
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

export default ManageOrders;
