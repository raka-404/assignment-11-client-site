import React from "react";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <h2>Our Recent Snaps</h2>
      
      <Container>
  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={12} md={4}>
      <img src="https://demo.themexpert.com/wordpress/valley/wp-content/uploads/2019/07/region-2.jpg" alt="" />
    </Col>
    <Col xs={12} md={4}>
     <img src="https://demo.themexpert.com/wordpress/valley/summer-holiday/wp-content/uploads/sites/7/2019/07/region-4.jpg" alt="" />
    </Col>
    <Col xs={12} md={4}>
     <img src="https://demo.themexpert.com/wordpress/valley/wp-content/uploads/2019/07/region-1.jpg" alt="" />
    </Col>
  </Row>
</Container>


    <Container>
      <h2 className="mt-5 mb-5">You have to know 4 things</h2>
      <div>
      <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Quotes 1</Accordion.Header>
    <Accordion.Body>
    “Man cannot discover new oceans unless he has the courage to lose sight of the shore.” – Andre Gide
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Quotes 2</Accordion.Header>
    <Accordion.Body>
    “Travel is fatal to prejudice, bigotry, and narrow-mindedness.” –Mark Twain
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Quotes 3</Accordion.Header>
    <Accordion.Body>
    “Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.” – Anthony Bourdain
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Quotes 4</Accordion.Header>
    <Accordion.Body>
    “A journey is best measured in friends, rather than miles.” –Tim Cahill
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </div>
    </Container>

    
    
     </div>
   
  );
};

export default About;
