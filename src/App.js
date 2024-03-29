import HomePage from "./Components/HomePage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MySideBar from "./Components/MySideBar";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xs={2}>
          <MySideBar />
        </Col>
        <Col xs={10}>
          <HomePage />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
