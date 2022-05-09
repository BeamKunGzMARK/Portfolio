import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/_nav.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";

const NavPart = () => {
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
        <div className="fixed ">
            <div className={width > 767 ? "px-5" : "px-2"}>
                <Navbar collapseOnSelect expand="lg" className=" p-0">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto ml-4 nav-left-side">
                            <Nav.Link href="#home" className="nav-item">
                                Home
                            </Nav.Link>
                            <Nav.Link href="#about" className="nav-item">
                                About
                            </Nav.Link>

                            <Nav.Link href="#skills" className="nav-item">
                                Skills
                            </Nav.Link>
                            <Nav.Link href="#projects" className="nav-item">
                                Projects
                            </Nav.Link>
                            <Nav.Link href="#certificate" className="nav-item">
                                Certificate
                            </Nav.Link>
                        </Nav>

                        <Nav
                            className={`ml-auto ${
                                width > 767 ? "" : "mt-5 w-100"
                            }`}
                        >
                            <div className="d-flex justify-content-between w-75 center">
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavPart;
