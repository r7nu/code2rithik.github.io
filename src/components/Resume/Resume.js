import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/rithiksamanthularesume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Junior Python Developer and Web Developer"
              date="November 2020 - May 2021"
              content={[
                "Developed Small Python Projects and Learnt the basics of Python with basic functions.",
                "Learnt Full Stack Web Development using HTML, CSS, JS, Bootstrap, Javascript and many more JavaScript Libraries and Frameworks!",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Service as Action - Local Buisness"
              content={[
                "Did Service as Action for a Local Buisness and helped them get an online presence",
              ]}
            />
            <Resumecontent
              title="Service as Action - Phoenix United"
              content={[
                "Did Service as Action for a Phoenix United which is a youtube gaming community and helped them get an online presence as well.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="The Boyds School"
              date="2013 - 2014"
              content={[]}
            />
            <Resumecontent
              title="McNair Elementary School"
              date="2015 - 2017"
              content={[]}
            />
            <Resumecontent
              title="Delhi Public School"
              date="2018 - 2020"
              content={[]}
            />
            <Resumecontent
              title="Bloomingdale International School"
              date="2020 - Current"
              content={[]}
            />
            <h3 className="resume-title">Badges and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `🏅 4 Week Streak Badge 🏅 -  Awarded for consistency of writing.`,
                `Computer Student of the Year`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
