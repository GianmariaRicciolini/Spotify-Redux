import React, { useEffect, useState } from "react";
import SingleAlbum from "./SingleAlbum";
import { Row, Container } from "react-bootstrap";

const SearchResults = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    const searched = parts[1];

    if (searched) {
      fetchData(searched);
    }
  }, []);

  const fetchData = async (searched) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searched}`, {
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

  return (
    <Container fluid>
      <Row className="py-3">
        <h2 className="text-light">Search Results</h2>

        {albums.map((album) => (
          <SingleAlbum key={album.id} albumInfo={album} />
        ))}
      </Row>
    </Container>
  );
};

export default SearchResults;
