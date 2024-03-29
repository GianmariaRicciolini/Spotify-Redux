import React from "react";
import { Button, Container, Row, Col, Form, ButtonGroup } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";

function MySideBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    console.log("Ricerca:", searchValue);
  };
  return (
    <Container className="bg-black h-100 d-flex flex-column justify-content-between py-4">
      <Row>
        <Col xs={12} className="pb-4">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Col>
        <Col xs={12} className="py-2">
          <a href="#" className="text-decoration-none text-secondary">
            <i className="bi bi-house-door-fill"></i>&nbsp; Home
          </a>
        </Col>
        <Col xs={12} className="py-3">
          <a href="#" className="text-decoration-none text-secondary">
            <i className="bi bi-book-fill"></i>&nbsp; Your Library
          </a>
        </Col>
        <Col xs={12}>
          <Form className="input-group mt-3" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              id="searchField"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary btn-sm h-100" type="submit">
                GO
              </button>
            </div>
          </Form>
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
