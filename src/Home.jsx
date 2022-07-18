import React from "react";
import web from "../src/images/home-slider1.png";
import web1 from "../src/images/home-slider2.png";
import web2 from "../src/images/home-banner-03.jpeg";
import Carousel from "react-bootstrap/Carousel";
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
        </div>
    </>
  );
};

export default Home;
