import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import NavBar from "../../shared/NavBar/NavBar";

const Subscription = () => {
  const [item, setItem] = useState([]);
  const userState = useSelector((state) => state.loginUserReducer);

  const { currentUser } = userState;
  console.log(currentUser?.email);
  // icon imported
  const arrow = <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>;

  //fetching packages
  useEffect(() => {
    fetch(`http://localhost:5000/getpackagebymail/${currentUser.email}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [currentUser.email]);
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <h3 className="my-5 text-primary fw-bold">
          Your Subcriptions {item.length}
        </h3>
        <Row className="my-5">
          {item.map((pack) => (
            //   used bootstrap card
            <Col key={pack._id}>
              <Card style={{ width: "18rem" }}>
                <h4 className="text-center text-light bg-primary p-2">
                  {pack.title}
                </h4>
                <Card.Body>
                  <p>{pack.description}</p>
                  <h6>Price: {pack.price} USD</h6>
                  <div className="text-center">
                    <Button className="text-light" variant="success">
                      Payment Completed {arrow}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Subscription;