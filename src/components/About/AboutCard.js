import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I have always satisfied my past clients with my work. 
            That’s why all of them gave me a five-star rating which of 
            course is a huge achievement for me. They also recommended me 
            for web programming projects.
          </p>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Walelign Belisty</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
