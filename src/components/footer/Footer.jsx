import React from "react";
import "./footer.css";
import Form from "react-bootstrap/Form";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row two">
          <div className="col-auto">
            <ul className="attr">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Marbel And Granites</a>
              </li>
              <li>
                <a href="">Our Work</a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <button>Clickd</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
