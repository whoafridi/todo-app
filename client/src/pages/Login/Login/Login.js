import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../../actions/userAction';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  //storing email and password in a state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const emailLogo = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;

  const dispatch = useDispatch();
  //collecting email from user input field
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //collecting password from password field
  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  //submitting the info for login
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    const user = {email, password}
    dispatch(loginUser(user));
    setEmail('');
    setPassword('');
  };
  return (
    <>
    <h1>Login</h1>
      <Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5">
        <div className="text-center">
          <img
            className="img-fluid w-75"
            src="https://image.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg"
            alt=""
          />
        </div>
        <div className="p-5 shadow rounded">
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {emailLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={handleEmail}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {emailLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    onChange={handlePass}
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <div className="text-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
            <span className="fs-5 fw-bold">
              not registered? Register Now....
            </span>
            <Link to="/register">
              <Button variant="warning">Register</Button>
            </Link>
        </div>
      </Container>
    </>
  );
};

export default Login;
