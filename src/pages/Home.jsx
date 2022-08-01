import React from "react";

import '../components/css/home.css';
import Map from "../assets/map.jpg"
import web from "../images/home-slider1.png";
import web1 from "../images/home-slider2.png";
import web2 from "../images/home-banner-04.jpeg";
import Selectioncollege from "../images/college.jpg";
import Selectionexamination from "../images/examination.jpg";
import Selectionhelp from "../images/help.jpg";
import Selectiontimetable from "../images/timetable.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col,  } from 'react-grid-system';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';

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
          <Container style={{marginRight:'10px'}}>
          <Row>
        <a href="/"> <img src={Selectioncollege}  style={{width: "200px", padding: "15px" , position: "relative"}}  alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectionexamination} style={{width: "200px", padding: "15px",position: "relative"}} alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectiontimetable}  style={{width: "200px", padding: "15px", position: "relative"}} alt='imagem' title='imagem' /></a>
        <a href="/"><img src={Selectionhelp} style={{width: "200px", padding: "15px", position: "relative"}} alt='imagem' title='imagem' /></a>
        </Row>
        </Container>
        <br />
          
          {/* <h4 style={{marginInlineStart:'700px', marginInlineEnd:'700px'}}> VC Sir Photo</h4> */}

        <br />

        <Alert variant="secondary" style={{marginInlineEnd:"70px", marginInlineStart:'70px', borderRadius:'15px'}} >
      <Alert.Heading style={{fontSize:'22px', fontWeight:'800', fontFamily:'Inter', 
                  fontStyle:'normal', lineHeight:'20px', color:' #000000'}}>D Y Patil International University, </Alert.Heading>
      <p>
      D Y Patil International University, Akrudi, Pune is one of the finest private universities in India, 
      which is providing the highly-skilled talent to the nation and overseas. The university has recently 
      become operational as a state private university and offering the best quality higher education in the field... Read more 
      </p>
         
    </Alert>
    <br />

    {/* VC image Start */}



    {/* VC image End */}

    {/* drop bar Start */}
    <Accordion defaultActiveKey="1" style={{marginInlineEnd:"70px", marginInlineStart:'70px', borderRadius:'15px' }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header >Mission</Accordion.Header>
        <Accordion.Body>
        <li>Becoming a vibrant knowledge center and a center of excellence in research, teaching, and extension activities</li>
        <br />
        <li>Creating technologically equipped and action leaders of tomorrow in a wide range of spheres by providing the best-quality and value-based education</li>
        <br />
        <li>Educating students at undergraduate, postgraduate, doctoral, and post-doctoral levels to perform challenging roles in the industry</li>
        <br />
        <li>Providing excellent technological services to satisfy the future requirements of industry and overall academic needs of the society</li>
        <br />
        <li>Attracting international students to increase global connections and establishing collaborative programs with the reputed and international educational institutions</li>

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <br />
      <Accordion style={{marginInlineEnd:"70px", marginInlineStart:'70px', paddingBottom:'5rem', borderRadius:'15px'}}>
      <Accordion.Item eventKey="0" >
        <Accordion.Header style={{fontWeight:'bold'}}>Life of DYPIU</Accordion.Header>
        <Accordion.Body>
        <li>Becoming a vibrant knowledge center and a center of excellence in research, teaching, and extension activities</li>
        <br />
        <li>Creating technologically equipped and action leaders of tomorrow in a wide range of spheres by providing the best-quality and value-based education</li>
        <br />
        <li>Educating students at undergraduate, postgraduate, doctoral, and post-doctoral levels to perform challenging roles in the industry</li>
        <br />
        <li>Providing excellent technological services to satisfy the future requirements of industry and overall academic needs of the society</li>
        <br />
        <li>Attracting international students to increase global connections and establishing collaborative programs with the reputed and international educational institutions</li>

        </Accordion.Body>
      </Accordion.Item>


      </Accordion>
      <br />

      <div>
        <p style={{marginLeft:'4rem', fontSize:'25px', fontWeight:'600', fontFamily:'Inter', 
                  fontStyle:'normal', lineHeight:'20px', letterSpacing:'-0.28px'}}>
        D Y PATIL INTERNATONAL UNIVERSITY
        </p>
        <br />
        <Container style={{marginLeft:'40px'}}>
        <a href="/"> <img src={Map} style={{width:"50px", padding: "0px" , position: "relative"}} alt='imagem' title='imagem' /></a>
        </Container>
      </div>

      

    {/* drop bar End */}

    
 

    {/* blog */}

    

    {/* blog End */}
  
        
        </div>
    </>
  );
};

export default Home;
