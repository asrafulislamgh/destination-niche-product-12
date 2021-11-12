import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, isLoading, isAdmin } = useAuth();

  if (isLoading) {
    console.log("Before", isAdmin);
    console.log("Before", isLoading);
    <div className="d-flex justify-center align-items-center flex-column py-5 my-5 mx-auto">
      <Spinner animation="border" />
    </div>;
  }
  if (!isAdmin) {
    console.log("Before", isAdmin);
    console.log("Before", isLoading);
    return (
      <div className="d-flex justify-center align-items-center flex-column py-5 my-5 mx-auto">
        <Spinner animation="border" />
      </div>
    );
  }
  console.log("after", isAdmin);
  console.log("after", isLoading);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default AdminRoute;
