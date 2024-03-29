import React from "react";
import { Button, Container, Row, Col, Form, ButtonGroup } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import SearchBar from "../Components/SearchBar";
import { HouseDoorFill, BookFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function MySideBar() {
  return (
    <Container className="bg-black vh-100 d-flex flex-column justify-content-between py-4">
      <Row>
        <Col xs={12} className="pb-4">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Col>
        <Col xs={12} className="py-2">
          <Link to="/" className="text-decoration-none text-secondary">
            <HouseDoorFill size={30} />
            &nbsp; Home
          </Link>
        </Col>
        <Col xs={12} className="py-3">
          <a href="#" className="text-decoration-none text-secondary">
            <BookFill size={30} />
            &nbsp; Your Library
          </a>
        </Col>
        <Col xs={12}>
          <SearchBar />
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12}>
          <Button type="button" className="btn btn-outline-dark w-75 bg-light rounded-pill">
            Sign Up
          </Button>
        </Col>
        <Col xs={12} className="py-3">
          <Button type="button" className="btn btn-outline-light w-75 bg-black rounded-pill">
            Login
          </Button>
        </Col>

        <Col xs={12}>
          <a href="#" className="text-decoration-none text-secondary">
            Cookie Policy |
          </a>
          <a href="#" className="text-decoration-none text-secondary">
            Privacy
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default MySideBar;
