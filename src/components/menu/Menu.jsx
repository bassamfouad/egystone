import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "./menu.css";
class Menu extends Component {
  render() {
    return (
      <Navbar className="menu d-flex justify-content-center test" sticky="top">
        <div className="row">
          <div className="col left">
            <Navbar.Brand href="/">
              <img
                src="/img/logo.png"
                alt=""
                height="80px"
                width="80px"
                className="logo"
              />
            </Navbar.Brand>
          </div>

          <div className="row test2">
            <div className="col ">
              <li>
                <Link to="/">Home</Link>
              </li>
            </div>
            <div className="col">
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
            <div className="col">
              <li>
                <Link to="/maarbels-granites">Marbel</Link>
              </li>
            </div>
            <div className="col">
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </div>
            <div className="col">
              <li>
                <Link to="/contact-page">Contact</Link>
              </li>
            </div>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default Menu;
