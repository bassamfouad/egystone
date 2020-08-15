import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousle.css";
class CarouselSlider extends React.Component {
  constructor({ images }) {
    super();
    this.state = {
      name: "bravo",
      topic: true,
      image: images,
      alt: "",
    };
  }
  render() {
    return (
      <div className="container-fluid sum">
        <div className="row">
          <div className="header slider w-100">
            <Carousel>
              {this.state.image.map((image, key) => (
                <Carousel.Item key={key}>
                  <img
                    className="d-block w-100 all"
                    src={image}
                    alt={this.state.alt}
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
        </div>
      </div>
    );
  }
}
export default CarouselSlider;
