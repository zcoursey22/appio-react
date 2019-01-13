import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div className="header">
      <NavLink exact to="/home" activeClassName="active-navlink">
        <h1>
          app<span>.</span>io
        </h1>
      </NavLink>
      <div className="navbar">
        <NavLink exact to="/home/projects" activeClassName="active-navlink">
          projects
        </NavLink>
        <NavLink to="/home/about" activeClassName="active-navlink">
          about
        </NavLink>
        <NavLink to="/home/contact" activeClassName="active-navlink">
          contact
        </NavLink>
      </div>
    </div>
  );
};

module.exports = Header;
