import React from "react";
import Menu from "../../components/menu/Menu";
import Form from "react-bootstrap/Form";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <div className="container-fluid som">
        <div className="row">
          <div className="col-lg">
            <Menu />
          </div>
        </div>
      </div>
      <br />
      <div className="container ">
        <div className="row">
          <div className="col-lg-5">
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  className="fit"
                  as="textarea"
                  rows="10"
                  border="black"
                />
              </Form.Group>
            </Form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
