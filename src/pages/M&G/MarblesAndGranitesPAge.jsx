import React from "react";
import CarouselSlider from "../../components/carousel/CarouselSlider";
import "./marble.css";
import OurWork from "../../components/ourwork/OurWork";
class MarblesAndGranitesPAge extends React.Component {
  constructor({ Props }) {
    super(Props);
    this.state = {
      images: [
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
      ],
      workImages: [
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
        "img/04.jpg",
      ],
    };
  }
  render() {
    return (
      <div>
        <CarouselSlider
          images={[
            "img/marbel/carousel/1.jpg",
            "img/marbel/carousel/2.jpg",
            "img/marbel/carousel/3.png",
          ]}
        />
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="title">
              <h2>Our Collections</h2>
              <div className="sub-heading">
                <p className="text-center">
                  Lorem ipsum dolor, sit amet consectetur <br />
                  adipisicing elit. Ipsa, doloremque! Incidunt, fugit?
                </p>
              </div>
            </div>
          </div>
        </div>
        <OurWork
          images={[
            "img/marbel/work/1.png",
            "img/marbel/work/4.jpg",
            "img/marbel/work/3.png",
            "img/marbel/work/5.png",
          ]}
        />
      </div>
    );
  }
}
export default MarblesAndGranitesPAge;
