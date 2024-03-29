import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import play from "../assets/playerbuttons/play.png";

const SingleSong = ({ track }) => {
  return (
    <>
      <Col xs={12} className="btn btn-outline-light bg-dark text-start p-3">
        <Row className="align-items-center">
          <Col xs={2}>
            <Button className="bg-dark border-dark">
              <img src={play} width={10} alt="play" />
            </Button>
          </Col>
          <Col xs={10}>
            <h6>{track.title}</h6>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default SingleSong;
