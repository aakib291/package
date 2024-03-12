import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bannerimg from "./assets/img/bannerimg.png";
import nashikmnp from "./assets/img/nashikMNP.png";
import "./style.css";
import img1 from "./assets/img/img1.png";
import img12 from "./assets/img/img12.png";
import img13 from "./assets/img/img13.png";
import img14 from "./assets/img/img14.png";
import img15 from "./assets/img/img15.png";
import img16 from "./assets/img/img16.png";
import img17 from "./assets/img/img17.png";
import img18 from "./assets/img/img18.png";
import img19 from "./assets/img/img19.png";
import img20 from "./assets/img/img20.png";
import img21 from "./assets/img/img21.png";
import img22 from "./assets/img/img22.png";
import img23 from "./assets/img/img23.png";
import img24 from "./assets/img/img24.png";
import img25 from "./assets/img/img25.png";
function GrievanceForm() {
  return (
    <>
      <Container fluid className="m-0 p-0">
        {/* <NavbarIndex /> */}
        <Image
          src={bannerimg}
          alt="bannerimg"
          fluid="true"
          style={{ width: "100vw", height: "50vh", objectFit: "cover" }}
        />
        <Image
          src={nashikmnp}
          style={{
            position: "absolute",
            top: 100,
            left: 370,
            width: "50vw",
            height: "20vh",
          }}
        />
        <Container className="p-3 my-5">
          <p className="display-5 fw-bold mb-3 pb-3 ps-5">Grievance </p>
          <hr className="text-dark mx-3 mt-4 pb-4" />
          <Row className="d-flex justify-content-around pb-3">
            <Col xs={12} md={12} lg={2}>
              <div className="text-center   mb-5">
                <Image src={img1} alt="bannerimg" fluid="true" />
                <Card.Title className="fs-3 fw-bolder pt-3">
                  My Grievance
                </Card.Title>
              </div>
            </Col>
            <Col xs={12} md={12} lg={2}>
              <div className="text-center   mb-5">
                <Image src={img12} alt="bannerimg" fluid="true" />
                <Card.Title className="fs-3 fw-bolder pt-3">
                  Register Grievance
                </Card.Title>
              </div>
            </Col>
            <Col xs={12} md={12} lg={2}>
              <div className="text-center  mb-5 ">
                <Image src={img13} alt="bannerimg" fluid="true" />
                <Card.Title className="fs-3 fw-bolder pt-3">
                  Track Grievance
                </Card.Title>
              </div>
            </Col>
            <Col xs={12} md={12} lg={2}>
              <div className="text-center  mb-5 ">
                <Image src={img14} alt="bannerimg" fluid="true" />
                <Card.Title className="fs-3 fw-bolder pt-3">
                  Feedback Grievance
                </Card.Title>
              </div>
            </Col>
            <Col xs={12} md={12} lg={2}>
              <div className="text-center  mb-5 ">
                <Image src={img15} alt="bannerimg" fluid="true" />
                <Card.Title className="fs-3 fw-bolder pt-3">
                  View on Map
                </Card.Title>
              </div>
            </Col>
          </Row>
          <hr className="text-dark mx-3 mt-4" />
          <Container className="p-3 my-5">
            <p className="display-5 fw-bold pb-3">Register New Grievance </p>
            <Row className="d-flex justify-content-around">
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img16}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Sewer Line Choke And Blockage
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img17}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Street Light Not Working
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card ">
                  <Card.Body>
                    <Image
                      src={img18}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Garbage Not Lifted From Housing Society
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img19}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Storage of Water Supply
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="d-flex justify-content-around">
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img20}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Repairs of Roads
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img21}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Trimming of Branches
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card ">
                  <Card.Body>
                    <Image
                      src={img22}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Road Sweeping Not Done
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img23}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Pipeline Leakage
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="d-flex justify-content-start">
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img24}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Maintenance of Gardens
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={12} lg={3}>
                <Card className="text-center shadow rounded-5 mb-5 max-width-card">
                  <Card.Body>
                    <Image
                      src={img25}
                      alt="bannerimg"
                      fluid="true"
                      className="max-width-img"
                    />
                    <Card.Title className=" fw-bolder pt-4">
                      Issues Related To Stray Dogs Sterilisation
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container className="p-3 my-5">
            <hr className="text-dark mx-1 mt-4" />
            <p className="display-5 fw-bold pb-3 ps-3">More services </p>
            <div className="mx-5 px-3">
              <Form className="">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="griveanceType">
                    <Form.Label>
                      Grievance Type <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group as={Col} controlId="depeartment">
                    <Form.Label>
                      Depeartment <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="grievanceDescription">
                  <Form.Label>
                    Grievance Description <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="Division">
                    <Form.Label>
                      Division <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="Prabha">
                    <Form.Label>
                      Prabha <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="Address">
                  <Form.Label>
                    Address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="Landmark">
                    <Form.Label>
                      Landmark <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control />
                  </Form.Group>

                  <Form.Group as={Col} controlId="area">
                    <Form.Label>
                      Area <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Form.Label>
                      Area <span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control />
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="Choosefile1" className="mb-3">
                      <Form.Label>
                        Upload Photo Image{" "}
                        <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>
                    <Form.Text id="Choosefile1" muted>
                      Please Upload jpeg, jpg, bmp, png, gif, pdf
                    </Form.Text>
                  </Col>
                </Row>
                <Form.Group className="mb-3" id="formGridCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="By submiting below, I certify that all information is true and correct."
                  />
                </Form.Group>
                <div className="pt-3">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default GrievanceForm;
