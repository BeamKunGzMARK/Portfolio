import React from "react";
import "../styles/_footer.scss";
import { Col, Nav, Row } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
    return (
        <div className="footer pb-5 pt-5 ">
            <div className="container">
                <Row className="justify-content-between align-items-center">
                    <Col md={1} xs={12}>
                        <div className="d-flex justify-content-between footer-info mt-4">
                            <Nav.Link
                                href="https://www.facebook.com/NawapatBuakoet/"
                                className="nav-item cursor-pointer"
                                target="_blank"
                            >
                                <FacebookIcon />
                            </Nav.Link>
                            <Nav.Link
                                href="https://www.youtube.com/c/beamnawapat"
                                className="nav-item cursor-pointer"
                                target="_blank"
                            >
                                <YouTubeIcon />
                            </Nav.Link>
                            <Nav.Link
                                href="https://www.instagram.com/nawapatb.2b/"
                                className="nav-item cursor-pointer"
                                target="_blank"
                            >
                                <InstagramIcon />
                            </Nav.Link>
                            <Nav.Link
                                href="https://github.com/BeamNawapat"
                                className="nav-item cursor-pointer"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </Nav.Link>
                        </div>
                    </Col>
                    <Col md={5} xs={12}>
                        <ul className="d-flex justify-content-between p-0 w-100 footer-info mt-4 paddingright">
                            <li className="p-1">
                                <a href="#home">Home</a>
                            </li>
                            <li className="p-1">
                                <a href="#about">About</a>
                            </li>
                            <li className="p-1">
                                <a href="#skills">Skills</a>
                            </li>
                            <li className="p-1">
                                <a href="#projects">Projects</a>
                            </li>
                            <li className="p-1">
                                <a href="#certificate">Certificate</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
