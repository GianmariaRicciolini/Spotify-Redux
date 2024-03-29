import React from "react";
import RowAlbum from "./RowAlbum";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container>
      <RowAlbum genre="Rock Classics" artist="queen" />
      <RowAlbum genre="Pop Culture" artist="katyperry" />
      <RowAlbum genre="HipHop" artist="eminem" />
    </Container>
  );
};

export default HomePage;
