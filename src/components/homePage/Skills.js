import { motion } from "framer-motion";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import Img from "react-cool-img";
import "../../styles/_skills.scss";
import skills from "./data/skills.js";

import $ from "jquery";
$(function () {
  boxRollovers_skills();
});

let XAngle = 0;
let YAngle = 0;
let Z = 50;

function boxRollovers_skills() {
  let $selector = $(".skills");

  $selector.on("mousemove", function (e) {
    var $this = $(this);
    var XRel = e.pageX - $this.offset().left;
    var YRel = e.pageY - $this.offset().top;
    var width = $this.width();

    YAngle = -(0.5 - XRel / width) * 40;
    XAngle = (0.5 - YRel / width) * 40;
    updateViews($this.children(".skills_logo"));
  });

  $selector.on("mouseleave", function () {
    let oLayer = $(this).children(".skills_logo");
    oLayer.css({
      transform: "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",
      transition: "all 150ms linear 0s",
      "-webkit-transition": "all 150ms linear 0s",
    });
    oLayer.find("strong").css({
      transform: "perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)",
      transition: "all 150ms linear 0s",
      "-webkit-transition": "all 150ms linear 0s",
    });
  });
}

function updateViews(oLayer) {
  oLayer.css({
    transform:
      "perspective(525px) translateZ(" +
      Z +
      "px) rotateX(" +
      XAngle +
      "deg) rotateY(" +
      YAngle +
      "deg)",
    transition: "none",
    "-webkit-transition": "none",
  });
  oLayer.find("strong").css({
    transform:
      "perspective(525px) translateZ(" +
      Z +
      "px) rotateX(" +
      XAngle / 0.66 +
      "deg) rotateY(" +
      YAngle / 0.66 +
      "deg)",
    transition: "none",
    "-webkit-transition": "none",
  });
}

const Skills = () => {
  const [element, controls] = useScroll();
  return (
    <div id="skills" className="skills-section">
      <motion.div
        variants={scrollReveal}
        ref={element}
        animate={controls}
        className="container"
      >
        <div className="heading-section">
          <h1>
            <span className="chonburi-font skillc-text">Ski</span>lls
          </h1>
        </div>
        <Row xs={3} md={3}>
          {skills.map((skill, index) => {
            if (skill.name === "Heroku" || skill.name === "Tradingview") {
              return (
                <Col key={index + 1}>
                  <div className="skills">
                    <a
                      className="skills_logo"
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Img
                        placeholder="/images/skills/lod.jpeg"
                        src={skill.logo}
                        className={skill.name}
                        error="/images/skills/error.png"
                        alt="React Cool Img"
                      />
                    </a>
                    <a href={skill.link} target="_blank" rel="noreferrer">
                      {" "}
                      <h6>{skill.name}</h6>{" "}
                    </a>
                  </div>
                </Col>
              );
            } else {
              return (
                <Col key={index + 1}>
                  <div className="skills">
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className="skills_logo"
                    >
                      <Img
                        placeholder="/images/skills/lod.jpeg"
                        src={skill.logo}
                        className={skill.name}
                        error="/images/skills/error.png"
                        alt="React Cool Img"
                      />
                    </a>
                    <a href={skill.link} target="_blank" rel="noreferrer">
                      {" "}
                      <h6>{skill.name}</h6>{" "}
                    </a>
                  </div>
                </Col>
              );
            }
          })}
        </Row>
      </motion.div>
    </div>
  );
};

export default Skills;
