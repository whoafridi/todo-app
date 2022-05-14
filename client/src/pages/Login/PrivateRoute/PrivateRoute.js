import React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoute = ({ children, ...rest }) => {
  const userState = useSelector((state) => state.loginUserReducer);

  const {currentUser, loading} = userState;
  console.log(currentUser?.email);
  const location = useLocation();
  if (loading) {
    return (
      <Container style={{height: "100vh", width:"100vw" }} className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="info" />
      </Container>
    );
  }
  if (currentUser.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
