// import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Badge from "react-bootstrap/Badge";
import Img from "react-cool-img";

const myProjects = [
  {
    image: "/images/bkccharts.png",
    title: "Bkccharts",
    description: `Demonstrating the movement of coins in Bitkub Chain.`,
    source: "https://github.com/BeamNawapat/Bkccharts",
    bitkub:
      "https://www.bitkubchain.com/th/app-directory/bkccharts/fd811321-9253-43a4-a421-fc486e982156",
    demoLink: "https://www.bkccharts.com",
    badge: "Tradingview bitkub express blockchain",
  },
  {
    image: "/images/frec.png",
    title: "Login Firebase",
    description: "Login Form by using ReactJS.",
    source: "https://github.com/BeamNawapat/React_Firebaselogin",
    badge: "react",
    demoLink: "https://beamkungzmark.github.io/React_Firebaselogin/",
  },
  {
    image: "/images/visitors.png",
    title: "Data Analysis of Bkccharts",
    description: "Create Own Data Analysis by ExpressJS",
    source: "https://github.com/BeamNawapat/Bkccharts",
    badge: "express",
    demoLink: "https://www.bkccharts.com/visitors.html",
  },
  {
    image: "/images/contract.png",
    title: "Lottery Contract",
    description: "Lottery Contract by using ReactJS",
    soruce:
      "https://github.com/BeamNawapat/My-Study/tree/master/Solidity/Ethereum_and_Solidity_The_Complete_Developer's_Guide/lottery-react",
    badge: "react bitkub blockchain",
    demoLink: "https://catcryptotester-dev.web.app/",
  },
  {
    image: "/images/Multisender.png",
    title: "Multisender Contract",
    description: "Multisender Contract by using Solidity",
    bitkub:
      "https://bkcscan.com/address/0x59558Ba878c0c18cb616D7B28bC5b05982d55994/transactions",
    source:
      "https://bkcscan.com/address/0x59558Ba878c0c18cb616D7B28bC5b05982d55994/transactions",
    badge: "blockchain bitkub",
    demoLink:
      "https://bkcscan.com/address/0x59558Ba878c0c18cb616D7B28bC5b05982d55994/transactions",
  },
  {
    image: "/images/PETNFT.png",
    title: "PET NFT ERC721 Contract",
    description: "PETNFT Contract by using Solidity",
    bitkub:
      "https://bkcscan.com/address/0x4e8Fb4c2b4f7653831902fC19574AfaF8175757b/transactions",
    source:
      "https://bkcscan.com/address/0x4e8Fb4c2b4f7653831902fC19574AfaF8175757b/transactions",
    badge: "blockchain bitkub",
    demoLink:
      "https://bkcscan.com/address/0x4e8Fb4c2b4f7653831902fC19574AfaF8175757b/transactions",
  },
];

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
