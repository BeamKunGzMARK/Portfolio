// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";
import myProjects from "./data/projects"

const Projects = () => {
  const [element, controls] = useScroll();
  const [width, setWidth] = useState(window.innerWidth);

  //* change value variables when width change //
  let resizeWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();

    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  return (
    <div className="projects" id="projects">
      <motion.div
        variants={width > 1080 ? scrollReveal.show : scrollReveal.show}
        ref={element}
        animate={controls}
        className="container pt-6 pb-6"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font projectc-text">Pro</span>jects
          </h1>
        </div>
        <div className="projects-cards">
          <Row className="justify-content-center">
            {myProjects.map((project, index) => {
              return (
                <Col md={"auto"} className="mb-5" key={index + 1}>
                  {project.liveweb && (
                    <Badge className="jdnkcjd" pill variant="danger">
                      <a
                        href={project.liveweb}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Youtube
                      </a>
                    </Badge>
                  )}
                  {project.badge.includes("react") && (
                    <Badge className="rebd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        React
                      </a>
                    </Badge>
                  )}
                  {project.badge.includes("express") && (
                    <Badge className="css3bd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        ExpressJS
                      </a>
                    </Badge>
                  )}
                  {project.badge.includes("blockchain") && (
                    <Badge className="htmlbd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.bitkub}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Blockchain
                      </a>
                    </Badge>
                  )}
                  {project.badge.includes("nagaDAO") && (
                    <Badge className="nagabd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.nagaDAO}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        nagaDAO
                      </a>
                    </Badge>
                  )}
                    {project.badge.includes("bitkub") && (
                    <Badge className="bkbd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.bitkub}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Bitkub
                      </a>
                    </Badge>
                  )}
                  {project.badge.includes("Tradingview") && (
                    <Badge className="crtd" pill variant=" ">
                      <a
                        className="Bottombadge"
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Tradingview
                      </a>
                    </Badge>
                  )}

                  <div className="project-card">
                    <div className="img-section">
                      <Img
                        placeholder="/images/skills/lod.jpeg"
                        src={project.image}
                        error="/images/download.png"
                        alt="React Cool Img"
                      />
                      <div className="imageCardEffect"></div>
                    </div>
                    <div className="project-info">
                      <h5 className="color-white font-weight-bold">
                        {project.title}
                      </h5>
                      <p className="color-white">{project.description}</p>
                      <div className="spacing"></div>
                      <div className="d-flex justify-content-between mr-4">
                        <a
                          href={project.source}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.demoLink}
                          className="project-card-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
