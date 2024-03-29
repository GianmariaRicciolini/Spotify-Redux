import React from "react";
import { Row, Col, ProgressBar } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const PlayerBar = () => {
  return (
    <Row className="align-items-center justify-content-center bg-dark text-secondary">
      <Row>
        <Col xs={12} className="d-flex justify-content-around w-25 mx-auto pt-5">
          <a href="#">
            <img src={shuffle} width={30} alt="shuffle" />
          </a>

          <a href="#">
            <img src={prev} width={30} alt="prev" />
          </a>

          <a href="#">
            <img src={play} width={30} alt="play" />
          </a>

          <a href="#">
            <img src={next} width={30} alt="next" />
          </a>

          <a href="#">
            <img src={repeat} width={30} alt="repeat" />
          </a>
        </Col>
        <Col xs={12} className="pb-4">
          <ProgressBar className="mt-3 mx-auto w-25 bg-secondary" style={{ height: "5px" }} />
        </Col>
      </Row>
    </Row>
  );
};

export default PlayerBar;
