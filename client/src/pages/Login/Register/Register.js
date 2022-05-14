import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import  {useDispatch, useSelector} from 'react-redux';
import { registerUser} from '../../../actions/userAction';


const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const dispatch = useDispatch();

  //storing email and password in a state
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const emailLogo = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
  const passLogo = <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>;
  const userLogo = <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>;

  //collecting email from user input field
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleuserName = (e) => {
    setUserName(e.target.value);
  };
  //collecting password from password field
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  //submitting the info for login
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { fullname, username,email, phone , password};
      dispatch(registerUser(user));
      setFullName('');
      setUserName('');
      setEmail('');
      setPassword('');
      setPhone('');
  };

  return (
    <>
      <h3 className="text-primary fw-bold text-center p-2 rounded-pill shadow-lg">
        Register
      </h3>
      <Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center mt-5">
        <div className="text-center">
          <img
            className="img-fluid w-75"
            src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg"
            alt=""
          />
        </div>
        <div className="p-5 shadow rounded">
          <Form noValidate onSubmit={handleSubmit}>
            {/* name field */}
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>Full Name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {userLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Full-Name"
                    onChange={handleName}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            {/* user name */}
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>User Name</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {userLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    onChange={handleuserName}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            {/* email field */}
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
            {/* password field */}
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {passLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    onBlur={handlePassword}
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            {/* phone */}
            <Row className="mb-3">
              <Form.Group as={Col} className="w-100" md="4">
                <Form.Label>Phone</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">
                    {userLogo}
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="Phone"
                    onChange={handlePhone}
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            {/* submit button */}
            <div className="text-center">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
          <div className="text-center mt-2">
            <span className="fs-5 fw-bold">
              Already registered? Login Now....
            </span>
            <Link to="/login">
              <Button variant="warning">Login</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
