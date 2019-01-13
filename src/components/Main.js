import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

const Main = props => {
  return (
    <div className="Main">
      <Header />
      <div className="content">
        <Route path="/home/projects" component={Projects} />
        <Route path="/home/about" component={About} />
        <Route path="/home/contact" component={Contact} />
        <Route exact path="/home" component={Home} />
      </div>
      <Footer />
    </div>
  );
};

module.exports = Main;
