import React from "react";
import { ReactComponentElement } from "react";
import { NavLink } from "react-router-dom";
import "./home.css"
import web from "../src/images/home-slider1.png";
import web1 from "../src/images/home-slider2.png";
import web2 from "../src/images/home-banner-04.jpeg";
import Selectioncollege from "../src/images/college.jpg";
import Selectionexamination from "../src/images/examination.jpg";
import Selectionhelp from "../src/images/help.jpg";
import Selectiontimetable from "../src/images/timetable.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col,  } from 'react-grid-system';
const Home = () => {
  return (
    <>
        <div>
          <div classNameName="container-flex">
            <Carousel>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  classNameName="d-block w-100"
                  src={web}
                />
                <Carousel.Caption>
                  <h3>First Demo </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  classNameName="d-block w-100"
                  src={web1}
                />
                <Carousel.Caption>
                  <h3>Second Demo</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img
                  style={{ height: "500px" }}
                  classNameName="d-block w-100"
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
        <a href="/"> <img src={Selectioncollege}  style={{width: "200px", padding: "15px" , position: "relative"}}  alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectionexamination} style={{width: "200px", padding: "15px",position: "relative"}} alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectiontimetable}  style={{width: "200px", padding: "15px", position: "relative"}} alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectionhelp} style={{width: "200px", padding: "15px", position: "relative"}} alt='imagem' title='imagem' /></a>
        </Row>
        </Container>
    
 

    {/* blog */}

    

    {/* blog End */}
  
        
        </div>
    </>
  );
};

export default Home;
