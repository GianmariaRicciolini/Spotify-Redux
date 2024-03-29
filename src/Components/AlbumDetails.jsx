import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
              <img src={albumData.cover_medium} alt={albumData.title} />
              <h1>{albumData.title}</h1>
              <h2>{albumData.artist.name}</h2>
              <p>Label: {albumData.label}</p>
              <p>Number of Tracks: {albumData.nb_tracks}</p>
              <p>Release Date: {albumData.release_date}</p>
              <p>Genre: {albumData.genre_id}</p>
              <ul>
                {albumData.tracks.data.map((track) => (
                  <li key={track.id}>{track.title}</li>
                ))}
              </ul>
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
