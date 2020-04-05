import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Registration from "./Registration";
import * as ROUTES from "../constants/routes";

import withAuthentication from "./Session/withAuthentication";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authuser: null,
    };
  }

  render() {
    return (
      <Router>
        <Route path={ROUTES.SIGN_IN} component={Login} />
        <Route exact path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.SIGN_UP} component={Registration} />
        <Route path={ROUTES.PASSWORD_FORGET} component={ResetPassword} />
      </Router>
    );
  }
}

export default withAuthentication(App);
