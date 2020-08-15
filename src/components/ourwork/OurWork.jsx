import React, { Component, useState } from "react";
import "./ourwork.css";

class OurWork extends React.Component {
  constructor({ images }) {
    super({ images });
    this.state = {
      images: images,
    };
  }
  render() {
    return (
      <section id="work">
        <div className="content-box">
          <div className="row">
            <div className="col-sm-12 text-center">
              <div className="title">
                <h2>Our Work</h2>
                <div className="sub-heading">
                  <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsa, doloremque! Incidunt, fugit?
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-lg ">
            <div className="row-cols-3 wrap">
              {this.state.images.map((image, key) => (
                <img className="img-fluid kilo" src={image} alt="" srcset="" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default OurWork;
