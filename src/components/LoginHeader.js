import React from "react";
import { NavLink } from "react-router-dom";

const LoginHeader = props => {
  return (
    <div className="header">
      <NavLink to="/login">
        <h1>
          app<span>.</span>io
        </h1>
      </NavLink>
    </div>
  );
};

module.exports = LoginHeader;
