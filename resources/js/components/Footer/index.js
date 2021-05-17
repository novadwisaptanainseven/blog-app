import {
    faEnvelope,
    faMapMarkedAlt,
    faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    return (
        <div className="footer text-white mt-5">
            <div
                className="row justify-content-center"
                style={{ width: "100%" }}
            >
                <div className="col-md-3 mb-3">
                    <h3>
                        <b>Sitemap</b>
                    </h3>
                    <ul className="p-0 list-unstyled mt-4">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mb-3">
                    <h3>
                        <b>Assistance</b>
                    </h3>
                    <ul className="p-0 list-unstyled mt-4">
                        <li>
                            <a href="#">Join Us</a>
                        </li>
                        <li>
                            <a href="#">Privacy &amp; Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms &amp; Conditions</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">FAQ'S</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 mb-3">
                    <h3>
                        <b>Contact Us</b>
                    </h3>
                    <ul className="p-0 list-unstyled mt-4">
                        <li
                            className="d-flex list-contact-us"
                            style={{ columnGap: 10 }}
                        >
                            <FontAwesomeIcon
                                className="mt-1 icon"
                                icon={faMapMarkedAlt}
                            />
                            <span>
                                Jl. Slamet Riyadi Gg. Hikmah RT.05, No. 08, Kel.
                                Sungai Kunjang
                            </span>
                        </li>
                        <li
                            className="d-flex list-contact-us"
                            style={{ columnGap: 10 }}
                        >
                            <FontAwesomeIcon
                                className="mt-1 icon"
                                icon={faMobileAlt}
                            />
                            <span className="ml-2">0812446232365</span>
                        </li>
                        <li
                            className="d-flex list-contact-us"
                            style={{ columnGap: 10 }}
                        >
                            <FontAwesomeIcon
                                className="mt-2 icon"
                                icon={faEnvelope}
                            />
                            <span className="ml-1">
                                novadwisaptans@gmail.com
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <p
                className="text-center mt-4"
                style={{ fontSize: 18, fontFamily: "Roboto Slab, serif" }}
            >
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | Nova Dwi Sapta Nain Seven
            </p>
        </div>
    );
};

export default Footer;
