import React from "react";

import AuthService from "./AuthService";

import Header from "./LoginHeader";
import Footer from "./Footer";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.Auth = new AuthService();
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }

  render() {
    return (
      <div className="Login">
        <Header />
        <div className="content">
          <div className="card">
            <h2>welcome back!</h2>
            <form>
              <input
                className="form-item"
                placeholder="username"
                name="username"
                type="text"
                onChange={this.handleChange}
              />
              <input
                className="form-item"
                placeholder="password"
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              <input type="submit" value="login" className="form-submit" />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  handleChange = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => console.log(this.state)
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();

    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace("/");
      })
      .catch(err => {
        alert(err);
      });
  };
}

module.exports = Login;
