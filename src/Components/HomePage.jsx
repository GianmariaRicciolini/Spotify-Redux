import React from "react";
import RowAlbum from "./RowAlbum";
import { Container, Row, Col } from "react-bootstrap";
import PlayerBar from "./PlayerBar";

const HomePage = () => {
  return (
    <Container className="h-75">
      <Container>
        <Row className="text-center pt-3">
          <Col xs={2}>
            <a href="#" className="text-decoration-none text-secondary fw-bold">
              TRENDING
            </a>
          </Col>
          <Col xs={2}>
            <a href="#" className="text-decoration-none text-secondary fw-bold">
              PODCAST
            </a>
          </Col>
          <Col xs={3}>
            <a href="#" className="text-decoration-none text-secondary fw-bold">
              MOODS AND GENRES
            </a>
          </Col>
          <Col xs={3}>
            <a href="#" className="text-decoration-none text-secondary fw-bold">
              NEW RELEASES
            </a>
          </Col>
          <Col xs={2}>
            <a href="#" className="text-decoration-none text-secondary fw-bold">
              DISCOVER
            </a>
          </Col>
        </Row>
      </Container>
      <RowAlbum genre="Rock Classics" artist="queen" />
      <RowAlbum genre="Pop Culture" artist="katyperry" />
      <RowAlbum genre="HipHop" artist="eminem" />
    </Container>
  );
};

export default HomePage;
