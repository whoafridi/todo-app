import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import NavBar from '../../shared/NavBar/NavBar'
import Notes from '../Notes/Notes'
import { useSelector } from "react-redux";


const Allnotes = () => {

    const [notes, setNotes] = useState([]);
    const userState = useSelector((state) => state.loginUserReducer);

    const { currentUser } = userState;
    console.log(currentUser?.email);

    useEffect(() => {
      fetch(`http://localhost:5000/gettodobymail/${currentUser.email}`)
        .then((res) => res.json())
        .then((data) => setNotes(data));
    }, [currentUser?.email]);

  return (
    <>
      <NavBar></NavBar>

      <Container className="mt-3">
        <h2 className="text-primary fw-bold text-center p-2 rounded-pill shadow-lg mb-4 mt-3">
          Your Total Notes {notes.length}
        </h2>
        <Row lg={3}>
          {/* looping for taking each note */}
          {notes.map((note) => (
            <Notes key={note._id} note={note}></Notes>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Allnotes