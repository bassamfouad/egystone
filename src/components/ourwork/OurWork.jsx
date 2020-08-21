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
