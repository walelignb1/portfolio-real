import React from "react";
import { Col, Row } from "react-bootstrap";
import {SiReact} from "react-icons/si";
import {AiFillHtml5} from "react-icons/ai";
import {DiPhp,DiJsBadge,} from "react-icons/di";
import {IoLogoCss3} from "react-icons/io";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJsBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
    </Row>
  );
}

export default Toolstack;
