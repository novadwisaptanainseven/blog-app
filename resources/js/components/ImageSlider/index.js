import React from "react";
import { ImgSlideshow1, ImgSlideshow2, ImgSlideshow3 } from "../../assets";

const ImageSlider = () => {
    const imgCarouselCostumStyle = {
        height: "100vh",
        width: "100vw",
        objectFit: "cover",
        filter: "brightness(0.6)",
    };

    const captionCarouselCostumStyle = {
        bottom: 250,
        zIndex: 1,
        textShadow: "1px 2px 4px rgba(0,0,0,0.5)",
    };

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleCaptions"
                    data-slide-to="2"
                ></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={ImgSlideshow2}
                        style={imgCarouselCostumStyle}
                        className="d-block"
                        alt={ImgSlideshow2}
                    />
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={captionCarouselCostumStyle}
                    >
                        <h1>First slide label</h1>
                        <p style={{ fontSize: "1.5em" }}>
                            Some representative placeholder content for the
                            first slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={ImgSlideshow1}
                        style={imgCarouselCostumStyle}
                        className="d-block w-100 vh-100"
                        alt={ImgSlideshow1}
                    />
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={captionCarouselCostumStyle}
                    >
                        <h1>Second slide label</h1>
                        <p style={{ fontSize: "1.5em" }}>
                            Some representative placeholder content for the
                            second slide.
                        </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={ImgSlideshow3}
                        style={imgCarouselCostumStyle}
                        className="d-block w-100 vh-100"
                        alt={ImgSlideshow1}
                    />
                    <div
                        className="carousel-caption d-none d-md-block"
                        style={captionCarouselCostumStyle}
                    >
                        <h1>Third slide label</h1>
                        <p style={{ fontSize: "1.5em" }}>
                            Some representative placeholder content for the
                            third slide.
                        </p>
                    </div>
                </div>
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default ImageSlider;
