import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import './HomePage.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './NavBar';
import NavBar2 from './NavBar2';

import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';


const HomePage = () => {
  return (
    <div className="home-page">
      <Element name="navbar">
        <section className="navbar">
          <Container>
            <Row>
              <Col>
                <NavBar></NavBar>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="slogan">
        <section className="slogan">
          <Container>
            <Row>
              <Col>
                <Section1></Section1>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="short-description">
        <section className="short-description">
          <Container>
            <Row>
              <Col>
                <Section2></Section2>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="what-we-do">
        <section className="what-we-do">
          <Container>
            <Row>
              <Col>
                <Section3></Section3>
              </Col>
            </Row>  
          </Container>
        </section>
      </Element>

      <Element name="unforgettable-results">
        <section className="unforgettable-results">
          <Container>
            <Row>
              <Col>
                <Section4></Section4>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="clients-say">
        <section className="clients-say">
          <Container>
            <Row>
              <Col>
                  <Section5></Section5>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="super-proud">
        <section className="super-proud">
          <Container>
            <Row>
              <Col>
                <Section6></Section6>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>

      <Element name="footer_nav">
        <section className="footer_nav">
          <Container>
            <Row>
              <Col>
                <NavBar2></NavBar2>
              </Col>
            </Row>
          </Container>
        </section>
      </Element>
    </div>
  );
};




export default HomePage;