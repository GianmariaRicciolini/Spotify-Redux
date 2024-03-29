import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleSong from "./SingleSong";

const AlbumDetails = () => {
  const [albumData, setAlbumData] = useState(null);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const id = parts[2];
    console.log("ID used for fetch:", id);

    if (id) {
      fetchAlbumData(id);
    }
  }, []);

  const fetchAlbumData = async (id) => {
    try {
      const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAlbumData(data);
      } else {
        throw new Error("Error fetching album data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="text-center text-light">
          {albumData ? (
            <>
              <Row>
                <Col xs={12}>
                  <img src={albumData.cover_big} alt={albumData.title} />
                </Col>
                <Col xs={12}>
                  <h1>{albumData.title}</h1>
                </Col>
                <Col>
                  <h3 className="fw-bold">{albumData.artist.name}</h3>
                </Col>
              </Row>

              <Row className=" ps-5 text-start pt-5 mb-5">
                {albumData.tracks.data.map((track) => (
                  <SingleSong key={track.id} track={track} />
                ))}
              </Row>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default AlbumDetails;
