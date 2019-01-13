import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Main} />
            <Route exact path="/" component={Main} />
          </div>
        </div>
      </Switch>
    </Router>
  );
}

module.exports = App;
