import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../1-page_style/page.css";
import AboutSlider from "./AboutSlider";
import OurTeam from "../../components/ourteam/OurTeam";

class AboutUS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [
        "img/about/carousel/1.jpg",
        "img/002.jpg",
        "img/about/carousel/3.jpg",
      ],
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
                <h2>About EgyStone</h2>
                <div className="sub-heading">
                  <p className="text-center">
                    Welcome to EgyٍStone, your one-stop destination for Egyptian
                    marble & granite. Since 2009, we have been supplying
                    Egyptian and imported top-of-the-line products with
                    outstanding finishes. Our goal is to enable individuals and
                    companies to get the best and finest finishing for both
                    internal and external spaces. EgyStone has the ability to
                    meet all requirements of bespoke uses of marble and granite
                    and guarantees an exceptional customer service experience.
                    We do not only specialize in manufacturing, but also
                    installation, and pre and post installation surface
                    treatments.
                  </p>
                </div>
                <img src="img/feds.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <OurTeam />
      </div>
    );
  }
}

export default AboutUS;
