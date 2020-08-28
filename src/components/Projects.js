import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends React.Component {
  render() {
    return (
    <section className="projects">
      <div class="animate__animated animate__jackInTheBox">
        <Container>
          <Row>
            <Col md="6">
              <h1>Projects</h1>
              <p class="mt-4">Before moving to California Tyler was a big time TV star making appearances on Hey Kentucky! Top TV critics called his segments "I'm sorry, I didn't see your segment."</p>
              <iframe width="100%" height="315" title="Hey Kentucky!" src="https://www.youtube.com/embed/axeBbJeFh_g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <Row className="mt-3 border-top pt-3">
                <Col md="4">
                  <Image src="http://crime.tylergoo.ch/wp-content/uploads/2019/07/crime2-02.jpg" />
                </Col>
                <Col>
                  <h3>Crime & Punsishment Podcast</h3>
                  <p>Dive deep into the world of fake crime. Each episode is a pun-ridden profile of a fictional villain. Available on <a href="https://podcasts.apple.com/us/podcast/crime-and-punsishment/id1474400555?fbclid=IwAR2r0Vw5MhFToCuupPIH6aU6VT2MK0CW5g2a-W9ypOe3iPRqY1QSI0kgEV4">Apple Podcasts</a> or wherever you get your podcasts (probably).</p>
                </Col>
              </Row>
              <Row className="mt-3 border-top pt-3">
                <Col md="4">
                  <Image src="http://tylergoo.ch/christmas/christmas.jpg" />
                </Col>
                <Col>
                  <h3>Tyler Gooch's Money Grab Comedy EveP</h3>
                  <p>Tyler has a Christmas themed comedy EP available for <a href="http://tylergoo.ch/christmas">purchase</a>. It makes a great Christmas gift for any friends that are fans of Tyler's comedy and a great gift for your enemies who dislike Tyler's comedy!</p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Image src={process.env.PUBLIC_URL + "/typewriter.png"} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    );
  }
}

export default Projects;
