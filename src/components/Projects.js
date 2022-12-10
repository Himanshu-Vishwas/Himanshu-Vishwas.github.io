import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import anprojImg1 from "../assets/img/andp1.png";
import anprojImg2 from "../assets/img/andp2.png";
import othrp1 from "../assets/img/othp1.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const webprojects = [
    {
      title: "BMI Calculator",
      description: "calculates the Body Mass Index",
      imgUrl: projImg1,
    },
    {
      title: "QR-code-component",
      description: "A Frontend Mentor project",
      imgUrl: projImg2,
    },
    {
      title: "Product-preview-card-component",
      description: "A Frontend Mentor project",
      imgUrl: projImg3,
    },
  ]
  
  const androidprojects = [
    {
      title: "My BTech Syllabus",
      description: "Complete syllabus of B.Tech (A.K.U)",
      imgUrl: anprojImg1,
    },
    {
      title: "Simple Calculator",
      description: "A simple calculator that performs simple operations.",
      imgUrl: anprojImg2,
    },
  ]
  const otherprojects = [
    {
      title: "Game Controller using Hand Gestures",
      description: "Python-opencv and turtle are used",
      imgUrl: othrp1,
    },
  ]
  

  
  ;

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    <ul align="left">
                      <li>
                        <a
                          href="https://developer.devgroup.engineer/bmi-calculator-react/"
                          alt=""
                          target="_blank"
                        >
                          BMI Calculator
                        </a>
                      </li>
                      <li>
                      Game controller using hand gestures.(Python-opencv + turtle) 
                        <a
                          href="https://www.youtube.com/watch?v=jBuYwrX5bQY&ab_channel=HimanshuKumar"
                          alt=""
                          target="_blank"
                        >
                        _Check out on YouTube.
                        </a>
                      </li>
                      <li>Calculator</li>
                      <li>Calendar</li>
                      <li>Guess the Number-Game</li>
                      <li>Random Password Generator</li>
                      <li>Stone Paper Scissor</li>
                      <li>Tic Tac Toe</li>
                      <li>ToDo App</li>
                    </ul>
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Android</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {androidprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {otherprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
