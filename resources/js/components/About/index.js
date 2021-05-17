import React from "react";
import { AboutImage } from "../../assets";

const About = () => {
    const aboutStyle = {
        backgroundImage: `url(${AboutImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
    };

    return (
        <div className="section-about mt-5" style={aboutStyle}>
           
            <div
                className="py-5"
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                <div className="container text-white">
                    <div
                        className="blogs-heading d-flex align-items-center justify-content-center"
                        style={{
                            columnGap: "40px",
                            textShadow: "1px 2px 4px rgba(0,0,0,0.5)",
                        }}
                    >
                        <div className="line1 bg-white my-box-shadow"></div>
                        <h1 className="text-center">About</h1>
                        <div className="line2 bg-white my-box-shadow"></div>
                    </div>
                    <div
                        className="about-description my-text-shadow mt-4 text-center"
                        style={{ fontSize: "24px" }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Nesciunt deleniti voluptate doloribus! Nostrum
                            quod, deserunt laboriosam fugiat ab assumenda optio
                            libero velit nam fuga vel, repellat culpa suscipit,
                            cumque temporibus! Veritatis incidunt, in obcaecati
                            placeat est alias saepe quas animi quisquam
                            voluptatibus quam error optio earum adipisci fuga
                            porro iure atque nihil labore facilis eveniet?
                            Consequuntur alias ratione laboriosam, saepe maiores
                            veniam iure aliquam, vitae ipsa perferendis
                            delectus. Minus libero exercitationem vitae qui
                            tempore minima! Asperiores est sunt quisquam
                            temporibus earum ducimus, quia, dicta possimus
                            officiis numquam fugit nam repellat id soluta odio!
                            Alias in debitis qui beatae facere. Facilis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
