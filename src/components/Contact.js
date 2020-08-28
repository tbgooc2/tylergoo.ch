import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
  render() {
    return (
    <section className="contact">
      <div class="animate__animated animate__lightSpeedInRight">
        <Container>
          <Row>
            <Col md="6">
              <h1>Contact</h1>
              <p class="mt-4">If you're looking to contact Tyler you've made the right decision by click "contact" on his website.</p>
              <p>Send Tyler an email to book him or just to say "hi," he'll probably respond to both: <a href="mailto:tyler.gooch@ymail.com">tyler.gooch@ymail.com</a></p>
            </Col>
            <Col>
              <Image src={process.env.PUBLIC_URL + "/cartoon.png"} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    );
  }
}

export default Contact;
