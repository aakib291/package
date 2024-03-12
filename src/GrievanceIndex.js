import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import bannerimg from "./assets/img/bannerimg.png";
import nashikmnp from "./assets/img/nashikMNP.png";
import img1 from "./assets/img/img1.png";
import img2 from "./assets/img/img2.png";
import img3 from "./assets/img/img3.png";
import img4 from "./assets/img/img4.png";
import img5 from "./assets/img/img5.png";
import img6 from "./assets/img/img6.png";
import img7 from "./assets/img/img7.png";
import img8 from "./assets/img/img8.png";
import img9 from "./assets/img/img9.png";
import img10 from "./assets/img/img10.png";
import img11 from "./assets/img/img11.png";
function GrievanceIndex() {
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
          <p className="display-5 fw-bold">Grievance Dashboard</p>
          <Row className="d-flex justify-content-around">
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image
                    src={img1}
                    alt="bannerimg"
                    fluid="true"
                    // className="max-width-img"
                  />
                  <Card.Title className="fs-3 fw-bolder">
                    All Grievances
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img2} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Pending Grievances
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img3} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Resolve Grievances
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-around mt-4 pt-5">
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4  mb-5">
                <Card.Body>
                  <Image src={img4} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Resolve Category
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img5} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    % Grievances Resolved
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">90%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img6} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Escalated Grievance
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-around mt-4 pt-5">
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4  mb-5">
                <Card.Body>
                  <Image src={img7} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Reopen Grievance
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img8} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Grievances Pending 7 Days and 30 Days
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={3}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img9} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Citizen Satisfaction
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">99%</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="d-flex justify-content-around mt-4 pt-5 pb-4">
            <Col xs={12} md={12} lg={4}>
              <Card className="text-center shadow rounded-4 mb-5 ">
                <Card.Body>
                  <Image src={img10} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    Average Rating
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <Card className="text-center shadow rounded-4 mb-5">
                <Card.Body>
                  <Image src={img11} alt="bannerimg" fluid="true" />
                  <Card.Title className="fs-3 fw-bolder">
                    % Feedback Received
                  </Card.Title>
                  <Card.Text className="fs-5 fw-bolder">10252525</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default GrievanceIndex;
