import React from "react";
import {
    SampleFotoProfil,
    InstagramIcon,
    GmailIcon,
    WhatsappIcon,
} from "../../assets";

const Contact = () => {
    return (
        <div className="section-contact container py-5">
            <div
                className="blogs-heading d-flex align-items-center justify-content-center"
                style={{ columnGap: "40px" }}
            >
                <div className="line1"></div>
                <h1 className="text-center">Contact</h1>
                <div className="line2"></div>
            </div>
            <div className="contact-content mt-4">
                <div className="card">
                    <div className="row">
                        <div
                            className="col-md-4 p-4 text-white align-items-center justify-content-center d-flex"
                            style={{ backgroundColor: "#343434" }}
                        >
                            <div className="contact-container">
                                <div className="contact-image text-center py-3">
                                    <img
                                        className="mb-3"
                                        src={SampleFotoProfil}
                                        alt="contact-image"
                                        style={{
                                            height: 150,
                                            width: 150,
                                            borderRadius: "100%",
                                            objectFit: "cover",
                                        }}
                                    />
                                </div>
                                <div className="contact-description">
                                    <ul className="contact-list list-unstyled">
                                        <li>
                                            <img
                                                src={InstagramIcon}
                                                alt="instagram-icon"
                                                className="mr-3"
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            />
                                            @novadwisapta
                                        </li>
                                        <li>
                                            <img
                                                src={GmailIcon}
                                                alt="gmail-icon"
                                                className="mr-3"
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            />
                                            novadwisaptans@gmail.com
                                        </li>
                                        <li>
                                            <img
                                                src={WhatsappIcon}
                                                alt="whatsapp-icon"
                                                className="mr-3"
                                                style={{
                                                    width: 15,
                                                    height: 15,
                                                }}
                                            />
                                            081244623265
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md p-4">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Enter name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="jondoe@email.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        rows="4"
                                        placeholder="Your message"
                                    />
                                </div>

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="btn btn-dark px-4"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
