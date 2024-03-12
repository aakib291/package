import React from "react";
import {  Nav, Row, Col, Card, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import nasikmnplogo from "./assets/img/nashikMNPLogo.png";
function Footer() {
  return (
    <>
      <footer className="bg-success">
        <div className="py-5 px-4 ">
          <Row className="d-flex justify-content-around">
            <Col xs={12} md={12} lg={3}>
              <div className=" mb-5">
                <Card.Body className="text-center">
                  <Card.Title className="text-white fw-bold fs-5">
                    Find Us
                  </Card.Title>
                  <Card.Text className="text-white">
                    Nashik Municipal Corporation Rajiv Gandhi Bhavan, Sharanpur
                    Road, Nashik
                  </Card.Text>
                </Card.Body>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card.Body className="text-center  mb-5">
                <Card.Title className="text-white fw-bold fs-5">
                  Call Us
                </Card.Title>
                <Button
                  variant="outline-success"
                  className="text-white "
                  href="tel:+917030300300"
                >
                  +91 7030300300
                </Button>
              </Card.Body>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card.Body className="text-center">
                <Card.Title className="text-white fw-bold fs-5">
                  Mail Us
                </Card.Title>
                <Button
                  variant="outline-success"
                  className="text-white"
                  href="mailto:gardens_sup@nmc.gov.in"
                >
                  gardens_sup@nmc.gov.in
                </Button>
              </Card.Body>
            </Col>
          </Row>
          
          <hr className="text-white mx-5" />
        </div>
        <div className="pb-5  px-4 ">
          <Row className="d-flex justify-content-center">
            <Col xs={12} md={12} lg={5}>
              <div className="text-center">
                <Image src={nasikmnplogo} />
                <p className="ps-5 ms-3 pt-3 text-white">
                  Nashik is a city in the northern part of Maharashtra. Nashik
                  is an important Hindu ' pilgrimage site. Nashik is one of the
                  fastest growing cities in India. Along with the
                  infrastructural progress and development provided to the
                  citizens of the city by the Parks Department of the Nashik
                  Municipal Corporation, the city is also known for its green
                  recreational avenues available to the young and old.
                </p>
              </div>
              <div className="ms-5">
                <h4 className="text-white fw-bold fs-3">Follow us</h4>
                <Button variant="outline-success " href="#">
                  <i className="bi bi-facebook text-white fs-5"></i>
                </Button>
                <Button variant="outline-success " href="#">
                  <i className="bi bi-twitter-x text-white fs-5"></i>
                </Button>
                <Button variant="outline-success " href="#">
                  <i className="bi bi-instagram text-white fs-5"></i>
                </Button>
                <Button variant="outline-success " href="#">
                  <i className="bi bi-youtube text-white fs-5"></i>
                </Button>
              </div>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <div className="ms-5 mb-5">
                <h4 className="text-white fw-bold fs-3 mt-5">Useful Links</h4>
              
                <Nav>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    Services
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    Garden
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    Register
                  </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    href="#"
                    className="pe-4 text-decoration-none text-white "
                  >
                    News
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.932428960961!2d73.78672957500257!3d20.01135048139551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebade77b6b2d%3A0xe95b9b55a4380b08!2sNashik%20Municipal%20Corporation!5e0!3m2!1sen!2sin!4v1709835782133!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  );
}

export default Footer;
