import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SingleAlbum = ({ albumInfo }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <Link to={`/album/${albumInfo.album.id}`} className="text-decoration-none">
        <Row className="text-center text-light">
          <Col xs={12}>
            <img variant="top" src={albumInfo.album.cover_medium} className="img-fluid" />
          </Col>
          <Col xs={12}>
            <p className="m-0 fw-bold">{albumInfo.title}</p>
            <p className="fw-bold">Artist: {albumInfo.artist.name}</p>
          </Col>
        </Row>
      </Link>
    </Col>
  );
};

export default SingleAlbum;
// 915785
