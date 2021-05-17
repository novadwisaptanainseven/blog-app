import React from "react";
import {
    Header,
    ImageSlider,
    Blogs,
    About,
    Contact,
    Footer,
} from "../../components";

function Home() {
    return (
        <>
            <div className="section-home">
                <Header />
                <ImageSlider />
            </div>
            <Blogs />
            <About />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;
