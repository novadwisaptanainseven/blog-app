import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ImgSlideshow1, ImgSlideshow2, SampleFotoProfil } from "../../assets";
import { Footer } from "../../components";
import HeaderDetail from "../../components/Header/HeaderDetail";

const DetailBlog = () => {
    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
    }, []);

    return (
        <div className="section-detail-blog">
            <HeaderDetail />
            {/* Detail Blog Header */}
            <div className="section-detail-blog-header">
                <h1
                    className="font-weight-bold text-center mt-5"
                    style={{ fontSize: "54px" }}
                >
                    Detail Blog
                </h1>
                <h2 className="font-weight-normal text-center my-text-muted">
                    <Link className="my-text-muted" to="/">
                        Blogs
                    </Link>{" "}
                    / Detail Blog
                </h2>
            </div>
            {/* End of Detail Blog Header */}

            {/* Content */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="content-header mb-3">
                            <h1
                                className="font-weight-light mb-0"
                                style={{ fontSize: "48px" }}
                            >
                                Blog Heading Title
                            </h1>
                            <span className="my-text-muted font-weight-light">
                                Diposting pada 05/05/2021
                            </span>
                        </div>
                        <div
                            className="content-description font-weight-light text-justify"
                            style={{ fontSize: "20px" }}
                        >
                            <img
                                src={ImgSlideshow2}
                                alt="img-blog"
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    objectFit: "cover",
                                }}
                                className="mb-4"
                            />
                            <h2 className="font-weight-light">
                                What is Lorem Ipsum ?
                            </h2>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                                but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>

                            <h2 className="font-weight-light mt-4">
                                Why Do We Use It ?
                            </h2>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum' will uncover many web sites
                                still in their infancy. Various versions have
                                evolved over the years, sometimes by accident,
                                sometimes on purpose (injected humour and the
                                like).
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div
                            className="info-heading d-flex align-items-center justify-content-center mb-3"
                            style={{ columnGap: "40px" }}
                        >
                            <div className="line1"></div>
                            <h2 className="text-center m-0">INFO</h2>
                            <div className="line2"></div>
                        </div>
                        <div className="info-content text-center font-weight-light">
                            <h2 className="font-weight-light mb-3">Writer</h2>
                            <img
                                className="mb-3"
                                src={SampleFotoProfil}
                                alt="img-writer"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <p style={{ fontStyle: "italic" }}>
                                Nova Dwi Sapta Nain Seven
                            </p>
                            <div style={{ fontSize: "1.3em" }}>
                                <div
                                    className="d-flex justify-content-between py-3"
                                    style={{
                                        borderBottom: "1px solid #afafaf",
                                    }}
                                >
                                    <span>Kategori</span>
                                    <span className="my-text-muted">
                                        Kategori
                                    </span>
                                </div>
                                <div
                                    className="d-flex justify-content-between py-3"
                                    style={{
                                        borderBottom: "1px solid #afafaf",
                                    }}
                                >
                                    <span>Dibaca</span>
                                    <span className="my-text-muted">
                                        23 Kali
                                    </span>
                                </div>
                                <div
                                    className="d-flex justify-content-between py-3"
                                    style={{
                                        borderBottom: "1px solid #afafaf",
                                    }}
                                >
                                    <span>Diposting</span>
                                    <span className="my-text-muted">
                                        5 bulan yang lalu
                                    </span>
                                </div>
                                <div
                                    className="d-flex justify-content-between py-3"
                                    style={{
                                        borderBottom: "1px solid #afafaf",
                                    }}
                                >
                                    <span>Pengunjung Terakhir</span>
                                    <span className="my-text-muted">
                                        4 jam yang lalu
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Content */}

            <Footer />
        </div>
    );
};

export default DetailBlog;
