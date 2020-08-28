import React from 'react';
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

function Award(props) {
  if (props.length.length > 0) {
    return (
      <Card.Text className="award"><FontAwesomeIcon icon={faTrophy} /> {props.length}</Card.Text>
    );
  } else {
    return null;
  }
}

class Writing extends React.Component {
  render() {
    var essays = [{
        "title":"What I Wish I Could Say To My High School Bully",
        "link":"https://littleoldladycomedy.com/2020/08/26/what-i-wish-i-could-say-to-my-high-school-bully/",
        "image":"https://littleoldladycomedycom.files.wordpress.com/2020/08/black-and-white-people-bar-men.jpg",
        "description":"The first thing I’d say to my high school bully would be, “hey! I’m 32 and you’re in high school. Respect your elders.”",
        "publication":"Little Old Lady Comedy",
        "award":""
      },
      {
        "title":"Answers To Your Questions Regarding The Violent End To Last Weekend’s Gender Reveal Party",
        "link":"https://medium.com/slackjaw/answers-to-your-questions-regarding-the-violent-end-to-last-weekends-gender-reveal-party-ffe65cbea255",
        "image":"https://miro.medium.com/max/700/0*Y5UV8gI131NJLkn9",
        "description":"Just listen for a second, and let me explain.",
        "publication":"Slackjaw",
        "award":""
      },
      {
        "title":"5 Numbers That Deserve to Be Prime",
        "link":"https://medium.com/how-pants-work/5-numbers-that-deserve-to-be-prime-2a2b114b1ad1",
        "image":"https://miro.medium.com/max/700/0*5ztJWaacXYVJltWt",
        "description":"There’s more that counts than just divisibility.",
        "publication":"How Pants Work",
        "award":""
      },
      {
        "title":"Doctors Discover Gene That Makes Someone A Florida Fan Is The Same One That Makes People Think It’s Ok To Go Shirtless To An Olive Garden",
        "link":"https://kentuckysportsradio.com/main/doctors-discover-gene-that-makes-someone-a-florida-fan-is-the-same-one-that-makes-people-think-its-ok-to-go-shirtless-to-an-olive-garden/",
        "image":"https://kentuckysportsradio.com//wp-content/uploads/2018/09/ksr_logo.png",
        "description":"“No one of sound mind and body would do that weird chomp thing so often without realizing how absurd it looked.”",
        "publication":"Kentucky Sports Radio",
        "award":"Front Page of Reddit"
      },
      {
        "title":"The Six Differences between Andre the Giant and Louis Pasteur",
        "link":"https://www.pointsincase.com/articles/the-six-differences-between-andre-the-giant-and-louispasteur",
        "image":"https://www.pointsincase.com/wp-content/uploads/2020/04/andre-and-louis-1440x720.jpg",
        "description":"Soon you'll be able to immediately tell the difference between the two.",
        "publication":"Points In Case",
        "award":""
      },
      {
        "title":"Sharks, I'm the Tooth Fairy and I'm Looking for Investors",
        "link":"https://www.pointsincase.com/articles/sharks-im-the-tooth-fairy-and-im-looking-for-investors",
        "image":"https://www.pointsincase.com/wp-content/uploads/2020/06/fairy-tooth-1440x1075.jpg",
        "description":"I've cornered the market on buying children's teeth and it's not weird.",
        "publication":"Points In Case",
        "award":""
      },
      {
        "title":"For Sale: Baby Shoes, Never Worn: A Quick Follow-Up",
        "link":"https://medium.com/slackjaw/for-sale-baby-shoes-never-worn-a-quick-follow-up-42fa828d15f9",
        "image":"https://miro.medium.com/max/1000/1*EfpOLQ3RY6cDYWyKEbMvtw.jpeg",
        "description":"Our baby is fine. He is just in the 90th percentile when it comes to foot size.",
        "publication":"Slackjaw",
        "award":""
      },
      {
        "title":"With Regards To The Golf Scramble",
        "link":"https://medium.com/@therealgoochy/with-regards-to-the-golf-scramble-41e81c0d9213",
        "image":"https://miro.medium.com/max/700/1*eiy3Y92FkPcgxGX4npsx1A.jpeg",
        "description":"Greetings to the survivors and to the family and friends of those less fortunate...",
        "publication":"",
        "award":""
      },
      {
        "title":"What Type Of Milk Philosophers Would Put In Their Coffee At A Pretentious Coffee Shop That Offers Lots Of Types Of Milk, Based On What I Know About Them",
        "link":"https://medium.com/slackjaw/what-type-of-milk-philosophers-would-put-in-their-coffee-at-a-pretentious-coffee-shop-4798ea77d9e8",
        "image":"https://miro.medium.com/max/700/0*9cD8HVMfakr4CL_S",
        "description":"Plato — Hazelnut Milk",
        "publication":"Slackjaw",
        "award":""
      },
      {
        "title":"I Was One Of The Boys That Tried Out, And Was Cut From, The Basketball Team That Allowed Air Bud, A Dog, To Play",
        "link":"https://medium.com/slackjaw/i-was-one-of-the-boys-that-tried-out-and-was-cut-from-the-basketball-team-that-allowed-air-bud-c5ad333e8f99",
        "image":"https://miro.medium.com/max/700/0*mqTvXOSYLlppSEwj",
        "description":"I am one of the only people who has ever tried out for, and been passed over by a team that eventually, not only found a roster spot for, but gave real, legitimate playing time to a dog.",
        "publication":"Slackjaw",
        "award":"Slackjaw Writing Contest Honorable Mention"
      },
      {
        "title":"What I Imagine The Editor’s Notes On The Assembly Instructions For My Son’s Tricycle Must Have Been",
        "link":"https://medium.com/slackjaw/what-i-imagine-the-editors-notes-provided-to-the-person-who-wrote-the-assembly-instructions-for-my-4524cbde73ca",
        "image":"https://miro.medium.com/max/700/0*xQpgFg4Hjkh87uVO",
        "description":"You showed a great ability to illustrate the process of assembling the tricycle without any use of text to help explain what is being demonstrated.",
        "publication":"Slackjaw",
        "award":""
      },
      {
        "title":"Stopping by the Golden Corral on a Snowy Evening",
        "link":"https://medium.com/pickle-fork/stopping-by-the-golden-corral-on-a-snowy-evening-6ed0d8569dce",
        "image":"https://miro.medium.com/max/700/0*v6uKznH6lCTiv3hx",
        "description":"What meat this is, I do not know / There’s a metric ton of it though",
        "publication":"Pickle Fork",
        "award":""
      }
    ];
    const listItems = essays.map((link) =>
      <a href={link.link} key={link.title}>
        <Card>
          <Card.Img src={link.image} alt="Card image" />
          <Card.Body>
            <Card.Title>{link.title}</Card.Title>
            <Card.Text>
              {link.description}
            </Card.Text>
            <Card.Text className="outlet">{link.publication}</Card.Text>
            <Award length={link.award} />
          </Card.Body>
        </Card>
      </a>
    );
      // const list = essays.map((item, index) => {
      //   return (
      //     <React.Fragment>
      //     {this.essays.map(({title, link, image}) => <Result title={titl} link={link} image={image} />)}
      //     </React.Fragment>
      //       // <a href={item.link} key={index}>
      //       //   <Card>
      //       //     <Card.Img src={item.image} alt="Card image" />
      //       //     <Card.Body>
      //       //       <Card.Title>{item.title}</Card.Title>
      //       //       <Card.Text>
      //       //         {item.description}
      //       //       </Card.Text>
      //       //       <Card.Text className="outlet">{item.publication}</Card.Text>
      //       //       if (item.award != null) {
      //       //         <Card.Text className="award"><FontAwesomeIcon icon={faTrophy} /> {item.award}</Card.Text>
      //       //       }
      //       //     </Card.Body>
      //       //   </Card>
      //       // </a>
      //     );
      //   },
      // );

    return (
        <section className="writing">
          <Container>
            <div className="animate__animated animate__fadeInLeft">
              <Row>
                <Col>
                  <div className="content-wrapper">
                    <h1>Writing</h1>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md="8">
                  <p>Tyler’s writing has appeared on the largest college sports blog in the nation and even found it’s way to the front-page of Reddit. Before moving to southern California he was the co-founder and co-editor-in-chief of <a className="link" href="http://newcirclecircular.com">The New Circle Circular</a>, a Kentucky-centric satirical news publication that gained over 12,000 followers on social media.</p>
                  <p>Tyler has achieved 'Top Writer' status on Medium in the Humor category and received an honorable mention prize in the 2019 Slackjaw Humor Writing Contest. His half-hour pilot Hail Mary was named a quarterfinalist in the 2020 Winter Los Angeles International Screenplay Awards.</p>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <CardColumns>
                    {listItems}
                  </CardColumns>
                </Col>
              </Row>
            </div>
        </Container>
      </section>
  );
  }
}

export default Writing;
