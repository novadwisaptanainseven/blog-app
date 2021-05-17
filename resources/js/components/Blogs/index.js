import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    ArtificialIntelegentIcon,
    ImgSlideshow1,
    MobileAppIcon,
    SampleFotoProfil,
    WebDevelopmentIcon,
} from "../../assets";
import dummyBlogs from "../../assets/dummyData/dummy-blogs";
import BlogsCards from "./BlogsCards";

const Blogs = () => {
    const [selectCategory, setSelectCategory] = useState(1);

    const data = dummyBlogs.filter(
        (item) => item.idCategory && item.idCategory === selectCategory
    );

    useEffect(() => {
        console.log("render");
        let categories = document.querySelectorAll(".list-category");
        categories.forEach((item) => {
            item.addEventListener("click", function () {
                unsetActiveAllCategories(categories);
                item.classList.toggle("active");
            });
        });
    }, [unsetActiveAllCategories]);

    const unsetActiveAllCategories = useCallback((categories) => {
        categories.forEach((item) => {
            item.classList.remove("active");
        });
    }, []);

    return (
        <div className="section-blogs container mt-5">
            <div
                className="blogs-heading d-flex align-items-center justify-content-center"
                style={{ columnGap: "40px" }}
            >
                <div className="line1"></div>
                <h1 className="text-center">Blogs</h1>
                <div className="line2"></div>
            </div>
            <div className="blogs-content my-4">
                <div className="categories">
                    <ul
                        className="d-flex list-unstyled justify-content-center"
                        style={{ columnGap: 30 }}
                    >
                        <li
                            className="d-flex align-items-center list-category"
                            onClick={() => setSelectCategory(1)}
                        >
                            {/* <span
                                className="icon mr-3"
                                style={{
                                    display: "inline-block",
                                    width: 31,
                                    height: 31,
                                    borderRadius: 100,
                                    backgroundColor: "#FF5858",
                                }}
                            ></span> */}
                            <img
                                src={WebDevelopmentIcon}
                                alt={WebDevelopmentIcon}
                                style={{ width: 30, height: 30 }}
                                className="mr-3"
                            />
                            <span className="category-name">
                                Web Development
                            </span>
                        </li>
                        <li
                            className="d-flex align-items-center list-category"
                            onClick={() => setSelectCategory(2)}
                        >
                            <img
                                src={MobileAppIcon}
                                alt={MobileAppIcon}
                                style={{ width: 30, height: 30 }}
                                className="mr-3"
                            />
                            <span className="category-name">Mobile App</span>
                        </li>
                        <li
                            className="d-flex align-items-center list-category"
                            onClick={() => setSelectCategory(3)}
                        >
                            <img
                                src={ArtificialIntelegentIcon}
                                alt={ArtificialIntelegentIcon}
                                style={{ width: 30, height: 30 }}
                                className="mr-3"
                            />
                            <span className="category-name">
                                Artificial Intelegent
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="blogs-cards mt-4">
                    <div className="row">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-sm-12 mb-3"
                            >
                                <BlogsCards
                                    writerName={item.writer}
                                    writerPhoto={SampleFotoProfil}
                                    blogImage={item.image}
                                    datePost={`Diposting pada tanggal ${item.datePost}`}
                                    blogTitle={item.title}
                                    idPost={item.id}
                                />
                            </div>
                        ))}
                    </div>
                    <div className="text-center">
                        <button className="btn btn-dark">More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
