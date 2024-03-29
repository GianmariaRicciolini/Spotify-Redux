import React, { useEffect, useState } from "react";
import SingleAlbum from "./SingleAlbum";
import { Row, Container } from "react-bootstrap";

const RowAlbum = ({ genre, artist }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        });
        if (response.ok) {
          const { data } = await response.json();
          setAlbums(data);
        } else {
          throw new Error("Error fetching albums");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [artist]);

  return (
    <Container fluid>
      <Row>
        <h2>{genre}</h2>

        {albums.slice(0, 4).map((album) => (
          <SingleAlbum key={album.id} albumInfo={album} />
        ))}
      </Row>
    </Container>
  );
};

export default RowAlbum;
