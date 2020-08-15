import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../1-page_style/page.css";
import AboutSlider from "./AboutSlider";

class AboutUS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ["img/01.jpg", "img/002.jpg", "img/03.jpg"],
    };
  }
  componentDidMount(props) {}
  render() {
    return (
      <div className="about">
        <div className="slider__size">
          <Carousel className="lol">
            {this.state.image.map((img, key) => (
              <Carousel.Item key={key}>
                <img
                  className="d-block w-100 lol"
                  src={img}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="title">
                <h2>Meet Our Awesome Team</h2>
                <div className="sub-heading">
                  <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur <br />
                    adipisicing elit. Ipsa, doloremque! Incidunt, fugit?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <AboutSlider />
        </div>
      </div>
    );
  }
}

export default AboutUS;
