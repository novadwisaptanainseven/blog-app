import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailBlog from "./DetailBlog";
import Home from "./Home";

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:section" component={Home} />
                <Route exact path="/detail-blog/:id" component={DetailBlog} />
            </Switch>
        </Router>
    );
};

export default Index;

if (document.getElementById("root")) {
    ReactDOM.render(<Index />, document.getElementById("root"));
}
