import React, { useEffect, useRef } from "react";
import { useRouteMatch } from "react-router";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    const barToggleButton = useRef();
    const navbarLink = useRef();
    const match = useRouteMatch();
    const { params } = match;

    useEffect(() => {
        switch (params.section) {
            case "blogs":
                scroll.scrollTo(600);
                break;
            case "about":
                scroll.scrollTo(1480);
                break;
            case "contact":
                scroll.scrollTo(1980);
                break;
            default:
                break;
        }
    }, [params]);

    useEffect(() => {
        barToggleButton.current = document.querySelectorAll(
            ".toggle-button .bar"
        );
        navbarLink.current = document.querySelector(".navbar-link");
    }, []);

    // Handle Sticky Navbar
    useEffect(() => {
        let navbar = document.querySelector(".navbar");
        window.addEventListener("scroll", function () {
            navbar.classList.toggle("sticky", this.scrollY > 500);
        });
    }, []);

    const handleNavbarToggle = (e) => {
        e.preventDefault();
        barToggleButton.current.forEach((item) => {
            item.classList.toggle("active");
        });
        // console.log(barToggleButton.current);
        navbarLink.current.classList.toggle("active");
    };

    return (
        <>
            <div className="navbar shadow-sm">
                <div className="navbar-brand">
                    <h2>Riptcode Tech</h2>
                </div>
                <a
                    href="#"
                    className="toggle-button"
                    onClick={(e) => handleNavbarToggle(e)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <ul className="navbar-link list-unstyled align-items-center m-0 justify-content-around">
                    <li>
                        <Link
                            className="link"
                            activeClass="active"
                            to="section-home"
                            spy={true}
                            smooth={true}
                            duration={800}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            activeClass="active"
                            to="section-blogs"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={800}
                        >
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            activeClass="active"
                            to="section-about"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={800}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="link"
                            activeClass="active"
                            to="section-contact"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={800}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Header;
