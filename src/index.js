import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.css";
import * as ROUTES from "./constants/routes";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPassword";
import Registration from "./Components/Registration";
import Firebase, { FirebaseContext } from "./Components/Firebase";

const App = () => (
  <Router>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.SIGN_UP} component={Registration} />
    <Route path={ROUTES.SIGN_IN} component={Login} />
    <Route path={ROUTES.PASSWORD_FORGET} component={ResetPassword} />
  </Router>
);

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
      </li>
      <li>
        <Link to={ROUTES.PASSWORD_FORGET}>Password Forget</Link>
      </li>
    </ul>
  </div>
);

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
