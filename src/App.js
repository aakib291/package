import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import GrievanceIndex from "./GrievanceIndex";
import GrievanceForm from "./GrievanceForm";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Router>
          <Navbar expand="lg" className="bg-success">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Button variant="success fs-5 border border-1 me-3">
                    <Link to="/" className="nav-link text-white">
                      <i className="bi bi-box-arrow-in-right me-3"></i>
                      Login
                    </Link>
                  </Button>
                  <Button variant="success fs-5 border border-1">
                    <Link to="/help" className="nav-link text-white">
                      <i className="bi bi-info-circle me-3"></i>
                      Help
                    </Link>
                  </Button>
                </Nav>
                <Nav className="ms-auto">
                  <Button variant="success fs-5 border border-1 me-3">
                    Staff Login
                  </Button>
                  <Button variant="success fs-5 border border-1">
                    <i className="bi bi-pencil-square"></i> Register
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<GrievanceIndex />} />
            <Route path="/help" element={<GrievanceForm />} />
          </Routes>
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
