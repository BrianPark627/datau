import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import logo from "../assets/logo.png";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "./Firebase";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

const Login = () => (
  <Paper
    className="login-container"
    style={{ backgroundColor: "#76838d" }}
    elevation="12"
  >
    <LoginFormBase />
  </Paper>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div className="login">
        <div className="image">
          <img src={logo} alt="Logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            style={{ backgroundColor: "#e3e6e8" }}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            style={{ backgroundColor: "#e3e6e8" }}
          />
          <button
            className="button"
            variant="contained"
            type="submit"
            disabled={isInvalid}
          >
            Login
          </button>

          {error && <p>{error.message}</p>}
        </form>
        <button
          style={{ border: "none", background: "none", marginTop: "50px" }}
        >
          <Link to={ROUTES.SIGN_UP}>Register now</Link>
        </button>
      </div>
    );
  }
}

const LoginFormBase = compose(withRouter, withFirebase)(LoginForm);

export default Login;
