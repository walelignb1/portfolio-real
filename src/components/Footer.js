import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlinePhone,
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn,FaFacebook } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Walelign Belisty</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Walelign Belisty</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://t.me/walelign_belisty"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlinePhone />
              </a>
            </li>
            <li className="social-icons">
                <a
                  href="https://www.facebook.com/walelign.belisty"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/walelign-belisty-78bbb623a/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/walelignb1"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  <AiFillGithub />
                </a>
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
