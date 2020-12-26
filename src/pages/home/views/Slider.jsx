import React from "react";
import { Carousel } from "react-bootstrap";
import Image1 from "../../../static/image 1.jpg";
import Image2 from "../../../static/image 2.jpg";
import Image3 from "../../../static/image 3.jpg";
import "../styles/slider.css";

export default function Slider(props) {
  return (
    <div className="my-slider-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <div className="carousel-image">
            <img className="d-block w-100" src={Image1} alt="First slide" />
          </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="carousel-image">
            <img className="d-block w-100" src={Image2} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-image">
            <img className="d-block w-100" src={Image3} alt="Third slide" />
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
