import React from "react";
import { useHistory } from "react-router";

const BlogsCards = ({
    writerName,
    writerPhoto,
    blogImage,
    datePost,
    blogTitle,
    idPost,
}) => {
    const history = useHistory();

    const goToDetail = (id) => {
        history.push(`/detail-blog/${id}`);
    };

    return (
        <div className="card">
            <img src={blogImage} className="card-img-top" alt={blogImage} />
            <div className="card-body">
                <div className="icon-category"></div>
                <div
                    className="my-card-heading d-flex align-items-center"
                    style={{ columnGap: 15 }}
                >
                    <img
                        style={{
                            width: 50,
                            height: 50,
                            objectFit: "cover",
                            borderRadius: "100%",
                        }}
                        src={writerPhoto}
                        alt={writerPhoto}
                    />
                    <div>
                        <p style={{ fontSize: "1.3em" }} className="m-0">
                            {writerName}
                        </p>
                        <span
                            className="text-muted"
                            style={{ fontStyle: "italic" }}
                        >
                            {datePost}
                        </span>
                    </div>
                </div>
                <h3 className="card-title mt-3">{blogTitle}</h3>
                <button
                    className="btn btn-primary"
                    onClick={() => goToDetail(idPost)}
                >
                    Read
                </button>
            </div>
        </div>
    );
};

export default BlogsCards;
