import React from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Row } from "react-bootstrap";
import play from "../assets/playerbuttons/play.png";
import { Heart } from "react-bootstrap-icons";
import { selectSong } from "../Redux/actions";

const SingleSong = ({ track }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(selectSong(track));
  };

  return (
    <>
      <Col xs={12} className="border border-ligh rounded bg-dark text-start p-3">
        <Row className="align-items-center">
          <Col xs={2}>
            <Button className="bg-dark border-dark" onClick={handleClick}>
              <img src={play} width={10} alt="play" />
            </Button>
          </Col>
          <Col xs={8}>
            <h6 className="m-0">{track.title}</h6>
          </Col>
          <Col xs={2}>
            <Button className="bg-dark border-dark">
              <Heart />
            </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default SingleSong;
