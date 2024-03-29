import HomePage from "./Components/HomePage";
import PlayerBar from "./Components/PlayerBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MySideBar from "./Components/MySideBar";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchResults from "./Components/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Row>
          <Col xs={2} className="p-0">
            <MySideBar style={{ height: "100vh" }} />
          </Col>
          <Col
            xs={10}
            className="d-flex flex-column justify-content-between"
            style={{ maxHeight: "100vh", overflow: "auto" }}
          >
            <Row>
              <Col>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/:searched" element={<SearchResults />} />
                </Routes>
              </Col>
            </Row>
            <Row>
              <Col>
                <PlayerBar />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
