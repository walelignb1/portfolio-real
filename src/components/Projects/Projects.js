import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import emotion from "../../Assets/Projects/emotion.png";
import chatify from "../../Assets/Projects/chatify.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Inventory management system"
              description="I help jan construction with our product in order to adjust ordering, storing, using, 
              and selling a company's inventory. This includes the management of raw materials, components, 
              and finished products, as well as warehousing and processing of such items."

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
