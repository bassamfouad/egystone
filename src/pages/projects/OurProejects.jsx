import React from "react";
import CarouselSlider from "../../components/carousel/CarouselSlider";

import "./op.css";
import OurWork from "../../components/ourwork/OurWork";
class OurProejects extends React.Component {
  constructor() {
    super();
    this.state = {
      image: ["img/work/porto/2.jpg", "img/006.jpg"],
      title: ["lol", "lol2", "lol3", "lol4", "lol5"],
    };
  }
  render() {
    return (
      <div>
        <CarouselSlider images={["img/06.jpg", "img/04.jpg", "img/03.jpg"]} />
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="title">
              <h2>Our Projects</h2>
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
            "img/work/porto/1.jpg",
            "img/work/porto/1.jpg",
            "img/work/porto/4.jpg",
            "img/work/porto/4.png",

            "img/06.jpg",

            "img/06.jpg",
          ]}
        />
      </div>
    );
  }
}

export default OurProejects;
