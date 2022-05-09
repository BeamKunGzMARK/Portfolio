import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { pageAnimation, titleAnim } from "../../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import Cookies from "js-cookie";

const Home = () => {
  const [element, controls] = useScroll();
  const [count, setCount] = useState(0);
  function fetchcount() {
    const cookievisit = Cookies.get("_visit");
    if (cookievisit === undefined) {
      fetch("http://nodeserverwithcatcrypto.herokuapp.com/portfolio", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          count: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCount(data - 100);
        });

      Cookies.set("_visit", "yes", { expires: 1 });
    } else {
      fetch("http://nodeserverwithcatcrypto.herokuapp.com/portfolio", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setCount(data - 100);
        });
    }
  }

  useEffect(() => {
    fetchcount();
  }, []);

  return (
    <div id="home" className="fix  ">
      <div className="bg-image">
        <motion.div
          variants={pageAnimation}
          ref={element}
          animate={controls}
          className="container home-page-intro "
        >
          <Row className="home-row">
            <Col md={8} xs={12}>
              <motion.div className="intro-section">
                <motion.h5 variants={titleAnim} className="mb-5">
                  <div className="grouping_f1">
                    <p className="turnrightf">{"</ "}</p>
                    <Typewriter
                      options={{
                        strings: [" Time to Coding...", " Time to Study..."],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: "mb-4 chonburi-font",
                      }}
                    />
                    <p className="turnleftf">{" >"}</p>
                  </div>
                </motion.h5>
                <div className="grouping_flex">
                  <motion.h2 variants={titleAnim} className="mb-4 connection">
                    Hi, I'm{" "}
                    <Typewriter
                      options={{
                        strings: ["Nawapat", "Developer"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName:
                          "mb-4 chonburi-font homec-text typelet",
                      }}
                      // className="turnlef"
                    />
                  </motion.h2>
                </div>
                <div className="spacingbeforehome chonburi-font">
                  <motion.h2 variants={titleAnim} className="mb-4">
                    Visit{" "}
                    <CountUp end={count} duration={3} className="homec-text" />
                  </motion.h2>
                </div>
              </motion.div>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
