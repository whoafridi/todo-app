import { faClipboard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useSelector } from "react-redux";
import axios from "axios";

const Addnotes = () => {
  const userState = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userState;
  console.log(currentUser?.email);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addedNote, setAddedNote] = useState({});
  const [item, setItem] = useState({});
  const emailLogo = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
  const noteLogo = <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>;

  //collecting title from user input field
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  //collecting note from password field
  const handleNotes = (e) => {
    setDescription(e.target.value);
  };

   // fetching all notes
   useEffect(() => {
    fetch(`http://localhost:5000/gettodobymail/${currentUser?.email}`)
      .then((res) => res.json())
      .then((data) => setAddedNote(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      email: currentUser.email,
    };
    axios
      .post("http://localhost:5000/addtodo", data)
      .then((res) => {
        console.log(res);

        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center mt-5">
          <div className="text-center">
            <img
              className="img-fluid w-50"
              src="https://image.freepik.com/free-vector/notebook-concept-illustration_114360-387.jpg"
              alt=""
            />
          </div>
          <div className="p-5 shadow rounded">
            <h5 className="text-primary fw-bold text-center p-2 rounded-pill shadow-lg mb-4">
              Add Notes
            </h5>
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} className="w-100" md="4">
                  <Form.Label>Title</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      {emailLogo}
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Title"
                      onChange={handleTitle}
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} className="w-100" md="4">
                  <Form.Label>Notes</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      {noteLogo}
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      onChange={handleNotes}
                      placeholder="Your note"
                      style={{ height: "100px" }}
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Add Notes
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Addnotes;
