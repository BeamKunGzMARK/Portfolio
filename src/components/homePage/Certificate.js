import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { scrollReveal, scrollReveals } from "../../animation";
import { useScroll } from "./useScroll";
import "../../styles/_portfolio.scss";
import Isotope from "isotope-layout";
// Import Swiper React components
import Swiper from "swiper";
import GLightbox from "glightbox";
import certi from "./json/certificate.json";

const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  if (all) {
    select(el, all).forEach((e) => e.addEventListener(type, listener));
  } else {
    select(el, all).addEventListener(type, listener);
  }
};

/**
 * Porfolio isotope and filter
 */
window.addEventListener("load", () => {
  let portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    let portfolioFilters = select("#portfolio-flters li", true);

    on(
      "click",
      "#portfolio-flters li",
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
      },
      true
    );
  }

  var button_certificate_all = document.getElementById("certificate_all");
  button_certificate_all.click();
});

/**
 * Initiate portfolio lightbox
 */
GLightbox({
  selector: ".portfokio-lightbox",
});

/**
 * Portfolio details slider
 */
new Swiper(".portfolio-details-slider", {
  speed: 400,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

const Certificate = () => {
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
    <div id="certificate" className="about pb-6 pt-6">
      <motion.div
        variants={width > 1080 ? scrollReveal.show : scrollReveals.show}
        ref={element}
        animate={controls}
        className="container"
      >
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="heading-section">
              <h1>
                <span className="chonburi-font certc-text">Certi</span>ficate
              </h1>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li
                    data-filter="*"
                    id="certificate_all"
                    className="filter-active editor-filter"
                  >
                    All
                  </li>
                  <li data-filter=".filter-2020" className="editor-filter">
                    2020
                  </li>
                  <li data-filter=".filter-2021" className="editor-filter">
                    2021
                  </li>
                  <li data-filter=".filter-2022" className="editor-filter">
                    2022
                  </li>
                  <li data-filter=".filter-school" className="editor-filter">
                    School
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {certi.map((certifi, index) => {
                if (
                  certifi.description === "Suankularb Wittiyalai Nonthaburi"
                ) {
                  return (
                    <div
                      className={`col-lg-4 col-md-6 portfolio-item turned filter-${certifi.year} filter-school`}
                      key={index}
                    >
                      <div className="portfolio-wrap">
                        <img
                          src={certifi.logo}
                          className="img-fluid"
                          alt={certifi.name}
                        />
                        <div className="portfolio-info">
                          <h4>{certifi.name}</h4>
                          <p>{certifi.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`col-lg-4 col-md-6 portfolio-item turned filter-${certifi.year}`}
                      key={index}
                    >
                      <div className="portfolio-wrap">
                        <img
                          src={certifi.logo}
                          className="img-fluid"
                          alt={certifi.name}
                        />
                        <div className="portfolio-info">
                          <h4>{certifi.name}</h4>
                          <p>{certifi.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Certificate;
