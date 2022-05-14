import {
  faClipboardList,
  faImage,
  faMoneyBill,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const [packs, setPacks] = useState([]);
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const penLogo = <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>;
  const imgLogo = <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>;
  const moneyLogo = <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>;
  const features = <FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon>;
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const edit = <FontAwesomeIcon icon={faPen} />;

  //collecting input field
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  //collecting title field
  const handleNotes = (e) => {
    setNotes(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleImg = (e) => {
    setImg(e.target.value);
  };

  return <Container>{/* //modal for editing packages */}</Container>;
};

export default Packages;
