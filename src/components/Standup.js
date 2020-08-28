import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Standup extends React.Component {
  render() {
    return (
    <section className="standup">
      <div class="animate__animated animate__flipInY">
        <Container>
          <Row>
            <Col md="6">
              <h1>Stand Up</h1>
              <p class="mt-4">Originally from Louisville, Kentucky, Tyler took his brand of offbeat, quirky and often silly comedy and performed throughout the midwest before eventually moving to Southern California.</p>
              <p>Tyler has appeared on Comcast's Trial By Laughter and CMT’s Young Talent Night at The Stardome. Tyler's comedy has been heard on Audible's comedy channel and his writing has appeared on the front page of Reddit. He was a finalist in the Rocky Top Comedy Contest and the winner of the 2014 Comedy Off Broadway Comedy Contest. Tyler has participated in Gilda's Laugh Fest, The Tim Northern Comedy Festival and the Orange County Comedy Festival. Before moving out west he regularly appeared on the television program "Hey Kentucky." He can be found frequently at the donut establishment closest to him.</p>
              <div class="quotes">
                <p>"Has a strange way of looking at things and writes some good jokes!"</p>
                <p><strong>-Jimmie JJ Walker</strong></p>
                <p>"Very, very, very funny."</p>
                <p><strong>-Mike Armstrong</strong></p>
                <p>"I didn't really see much of your set but my friends said it was pretty good"</p>
                <p><strong>-Girl doing shots in the lobby in Dayton</strong></p>
              </div>
              <div class="mb-4">
                <iframe width="100%" height="315" title="Tyler Gooch Standup" src="https://www.youtube.com/embed/GV6mpzeOhLw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </Col>
            <Col>
              <Image src={process.env.PUBLIC_URL + "/standup.png"} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    );
  }
}

export default Standup;
