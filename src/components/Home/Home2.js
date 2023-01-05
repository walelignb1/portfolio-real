import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillPhone,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn,FaFacebook } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Know Who  <span className="purple"> I'M </span>
            </h1>
            <p className="home-about-body">
             Welcome! I'm walelign belisty, and I know I can help your company by Web development, 
             I'm a Front-End Developer with a proven ability to collaborate effectively with senior developers 
             while spending extra time to be mentored. Enjoy working closely with team members to ensure 
             workloads are effectively redirected to bottlenecks and personally picking up the slack when 
             necessary. With a passion for both personal growth and for software development, 
             I attended a 1000+ hour coding bootcamp to learn new languages while sharpening existing skills. 
             Ready to apply my passion for coding to a talented engineering team to develop quality solutions. &nbsp;
              
              <i>
                <b className="purple">Frontend Developer, &nbsp;exploring the world. </b>
              </i>
              
              
              &nbsp; I am insanely curious about different cultures, so you'll also 
                find my nose buried in a book or travel blog. &nbsp;
              <i>
                <b className="purple"> </b>
                {" "}
                <b className="purple">
                 
                </b>
              </i>
              <br />
              <br />
              When you're ready for your brand to reach its next level of success, call or email me. 
              I have the right tools and expertise to turn your brand into a household name.
              See it for yourself in<b className="purple"> &nbsp;Project section </b> and
              <i>
                <b className="purple">
                  {" "}
                 
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"></b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://t.me/walelign_belisty"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillPhone />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/walelign.belisty"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/walelign-belisty-78bbb623a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/walelignb1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
