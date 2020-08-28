import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <div class="animate__animated animate__flipInX animate__delay-1-2s">
          <Container fluid>
            <Row>
              <Col>
                <div class="content-wrapper">
                  <h1>Tyler Gooch</h1>
                  <h5>Comedian.</h5>
                  <h5>Writer.</h5>
                  <h5>Genius (uncredited).</h5>
                </div>
              </Col>
              <Col>
              <Image src={process.env.PUBLIC_URL + "/drigible-2.png"} className="drigible" />
                <Image src={process.env.PUBLIC_URL + "/home.png"} className="static" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Home;
