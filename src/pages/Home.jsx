import React from "react";
import "../components/css/home.css";
import web from "../images/home-slider1.png";
import web1 from "../images/home-slider2.png";
import web2 from "../images/home-banner-04.jpeg";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-grid-system";
import classroomsvg from "../assets/classroom.svg";
import facultysvg from "../assets/faculty.svg";
import examsvg from "../assets/exam.svg";
import helpdesksvg from "../assets/help-desk.svg";

const Home = () => {
  return (
    <>
      <div>
        <div className="container-flex">
          <Carousel>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web1}
              />
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "500px" }}>
              <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={web2}
              />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <br />
        <Container>
          <Row>
            <a href="Classroom">
              <img
                src={classroomsvg}
                className="home-buttons"
                alt="imagem"
                title="Classroom"
              />
            </a>
            <a href="Faculty">
              <img
                src={facultysvg}
                className="home-buttons"
                alt="imagem"
                title="Faculty"
              />
            </a>
            <a href="Exam">
              <img
                src={examsvg}
                className="home-buttons"
                alt="imagem"
                title="Exam"
              />
            </a>
            <a href="Helpdesk">
              <img
                src={helpdesksvg}
                className="home-buttons"
                alt="imagem"
                title="Help Desk"
              />
            </a>
          </Row>
        </Container>

        {/* blog */}

        {/* blog End */}
      </div>
    </>
  );
};

export default Home;
