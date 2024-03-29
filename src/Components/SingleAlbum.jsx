import React from "react";
import { Col, Row } from "react-bootstrap";

const SingleAlbum = ({ albumInfo }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <Row className="text-center">
        <Col xs={12}>
          <img variant="top" src={albumInfo.album.cover_medium} className="img-fluid" />
        </Col>
        <Col xs={12}>
          <h4>{albumInfo.title}</h4>
          <h4>Artist: {albumInfo.artist.name}</h4>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleAlbum;
