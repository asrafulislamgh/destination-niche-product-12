import "react-bootstrap-drawer/lib/style.css";
import {
  Container,
  Nav,
  Row,
  Button,
  Offcanvas,
  Navbar,
} from "react-bootstrap";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import DashboardNav from "./DashboardNav";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrders from "../ManageOrders/ManageOrders";
import PaymentMethods from "./PaymentMethods";
import Review from "../Home/Review/Review";
import AddProduct from "../AddProduct/AddProduct";

const Dashboard = () => {
  const { isAdmin } = useAuth();
  const [show, setShow] = useState(false);
  let { path, url } = useRouteMatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <DashboardNav />
      <div className="position-relative">
        <Button className="mt-2" variant="primary" onClick={handleShow}>
          Menu <i class="fas fa-arrow-circle-right"></i>
        </Button>

        <Offcanvas style={{ width: "200px" }} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dashboard</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar bg="light">
              <Nav className="flex-column">
                <Nav.Link
                  style={{ borderBottom: "1px solid" }}
                  as={NavLink}
                  activeStyle={{ color: "#000" }}
                  to="/properties"
                >
                  Properties
                </Nav.Link>
                {isAdmin ? (
                  <div>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/manageorders`}
                    >
                      Manage All Orders
                    </Nav.Link>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/addproduct`}
                    >
                      Add A Product
                    </Nav.Link>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/makeadmin`}
                    >
                      Make Admin
                    </Nav.Link>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/manageproducts`}
                    >
                      Manage Products
                    </Nav.Link>
                  </div>
                ) : (
                  <div>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/payment`}
                    >
                      Pay
                    </Nav.Link>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/myorder`}
                    >
                      My Order
                    </Nav.Link>
                    <Nav.Link
                      style={{ borderBottom: "1px solid" }}
                      as={NavLink}
                      activeStyle={{ color: "#000" }}
                      to={`${url}/review`}
                    >
                      Review
                    </Nav.Link>
                  </div>
                )}
              </Nav>
            </Navbar>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <Container fluid>
        <Row className="flex-xl-nowrap">
          {/* <Col xs={12} sm={4} md={3} lg={2} />
          <Col xs={12} sm={8} md={9} lg={10}></Col> */}
          <Switch>
            <Route exact path={path}>
              {isAdmin ? <ManageOrders /> : <MyOrder />}
              {/* <MyOrder /> */}
            </Route>
            <Route path={`${path}/payment`}>
              <PaymentMethods />
            </Route>
            <Route path={`${path}/review`}>
              <Review />
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrder />
            </Route>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageorders`}>
              <ManageOrders />
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin />
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct />
            </AdminRoute>
          </Switch>
        </Row>
      </Container>
      <div className="py-3 mt-5 bg-dark text-light text-center">
        <p style={{ marginBottom: "0", margin: "20px 0", color: "#bbb" }}>
          Copyright by Destination Inc. 2021. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Dashboard;
