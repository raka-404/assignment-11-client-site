import React from "react";
import { Col, Container, Row} from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
      <Container>
      <div className="bg-custom text-light text-start pt-5 cusFooter">
        <Container>
          <Row xs={1} md={2} lg={4}>
            <Col>
              <div className="footer-img">
               <h3 className="text-dark">MegaTour</h3>

              </div>
              <h6 className='footer-p text-dark'>Always happy journey and satisfaction with MegaTour</h6>
              <div>
                <a href="/"><i class="fab fa-facebook-square fs-3 ms-2"></i></a>
                <a href="/"><i class="fab fa-twitter-square fs-3 ms-2"></i></a>
                <a href="/"><i class="fab fa-google-plus-square fs-3 ms-2"></i></a>
              </div>
            </Col>
            <Col>
              <h3 className="footer-title">Destinations</h3>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Oceania</a>
                </li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Portugal </a>
                </li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Switzerland</a>
                </li>
            
              </ul>
            </Col>
            <Col>
              <h3 className="footer-title">Adventures</h3>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">The Dead Man</a></li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Ingredient Confession</a></li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Rock Climbing</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h3 className="footer-title">Our Trip</h3>
              <ul className=" quick-link d-block p-0 m-0">
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Diving</a></li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Rafting</a></li>
                <li>
                  <i class="fas fa-arrow-right me-2"></i>
                  <a href="/">Skating</a>
                </li>
              </ul>
            </Col>
            R
          </Row>
        </Container>
        <hr className="fw-5" />
        <p className="p-0 m-0 text-center text-dark">Alright reserved by Rakib</p>
      </div>
      </Container>
  );
};

export default Footer;
