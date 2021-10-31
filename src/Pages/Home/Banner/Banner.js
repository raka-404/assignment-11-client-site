import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
     
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://demo.themexpert.com/wordpress/valley/summer-holiday/wp-content/uploads/sites/7/2017/01/img.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Ocean</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://demo.themexpert.com/wordpress/valley/summer-holiday/wp-content/uploads/sites/7/2017/01/images-1.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>Snow World</h2>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://demo.themexpert.com/wordpress/valley/summer-holiday/wp-content/uploads/sites/7/2017/01/harley-davidson-768x432.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>Europe</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
    </div>
  );
};

export default Banner;
