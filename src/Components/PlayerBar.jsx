import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, ProgressBar } from "react-bootstrap";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const PlayerBar = () => {
  const selectedSong = useSelector((state) => {
    console.log(state);
    return state.track.selectedSong;
  });

  console.log(selectedSong);

  return (
    <Row className="d-flex align-items-center bg-dark text-secondary">
      {selectedSong && (
        <>
          <Col xs={1} className="ps-5">
            <img src={selectedSong.album.cover_small} alt={selectedSong.title} />
          </Col>
          <Col xs={2} className="p-0">
            <h5 className="m-0">{selectedSong.title}</h5>
            <p className="m-0">{selectedSong.artist.name}</p>
          </Col>
        </>
      )}
      {!selectedSong && <Col xs={3} className="ps-5"></Col>}
      <Col xs={9} className="justify-content-center">
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col xs={6} className="d-flex justify-content-around w-50 mx-auto pt-5">
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
          <Col xs={6} className="pb-4 pt-3">
            <ProgressBar className="mt-3 mx-auto w-50 bg-secondary" style={{ height: "5px" }} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PlayerBar;
