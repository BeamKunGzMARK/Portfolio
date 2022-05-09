import React from "react";
import { Col, Row } from "react-bootstrap";
import SkillSvg from "../../images/about-shape.svg";
import Img from "react-cool-img";
import { scrollReveal } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import $ from "jquery";
$(function () {
  boxRollovers();
});

let XAngle = 0;
let YAngle = 0;
let Z = 50;

function boxRollovers() {
  let $selector = $("#img_config");

  $selector.on("mousemove", function (e) {
    var $this = $(this);
    var XRel = e.pageX - $this.offset().left;
    var YRel = e.pageY - $this.offset().top;
    var width = $this.width();

    YAngle = -(0.5 - XRel / width) * 40;
    XAngle = (0.5 - YRel / width) * 40;
    updateView($this.children("#img_animation"));
  });

  $selector.on("mouseleave", function () {
    let oLayer = $(this).children("#img_animation");
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

function updateView(oLayer) {
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

const About = () => {
  const [element, controls] = useScroll();

  return (
    <motion.div id="about" className="about pb-6 pt-6">
      <img className="skills-img" src={SkillSvg} alt="" />

      <motion.div
        variants={window.innerWidth > 767 ? scrollReveal : null}
        ref={element}
        animate={controls}
        className="container"
      >
        <Row className="down50">
          <Col className="p-0 text-center imgconfiger" md={5} id="img_config">
            <motion.div
              transition={{ duration: 2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              id="img_animation"
            >
              <Img
                className="img-fluid circle aboutimg hoveranimation-img icon"
                placeholder="/images/skills/lod.jpeg"
                src="/images/BeamNews.jpg"
                error="/images/skills/error.png"
                id="img_about"
                alt="React Cool Img"
                height="50%"
              />
            </motion.div>
          </Col>
          <Col className="" md={7}>
            <div className="about-info magin">
              <h1 className="pb-4">
                <span className="chonburi-font aboutc-text">About</span> Me
              </h1>
              <p className="details">
                My name is Nawapat, I was born on April 5, 2005. I always like
                to invest in learning. My motto is perseverance, determination,
                perseverance, always cultivating knowledge, never stopping to
                develop.
              </p>
              <h1 className="pb-4 spacing_about">
                <span className="chonburi-font aboutc-text">My</span> School
              </h1>
              <p className="details">
                Suankularb Wittiyalai Nonthaburi School.
              </p>
            </div>
          </Col>
        </Row>
      </motion.div>
    </motion.div>
  );
};

export default About;
