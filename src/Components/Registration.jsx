import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "./Firebase";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

const Registration = () => (
  <Paper
    className="login-container"
    style={{ backgroundColor: "#76838d" }}
    elevation="12"
  >
    <RegistrationFormBase />
  </Paper>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
  error: null,
};

class RegistrationForm extends Component {
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
    const { username, email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // Create a user in your Firebase realtime database
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { username, email, password, passwordConfirm, error } = this.state;
    const isInvalid =
      password !== passwordConfirm ||
      password === "" ||
      email === "" ||
      username === "";

    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="username"
            onChange={this.handleChange}
            type="text"
            placeholder="Full Name"
            style={{ backgroundColor: "#e3e6e8", marginTop: "100px" }}
          />
          <TextField
            name="email"
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
            style={{ backgroundColor: "#e3e6e8", marginTop: "25px" }}
          />
          <TextField
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            style={{ backgroundColor: "#e3e6e8", marginTop: "25px" }}
          />
          <TextField
            name="passwordConfirm"
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
            style={{ backgroundColor: "#e3e6e8", marginTop: "25px" }}
          />
          <button
            className="button"
            variant="contained"
            type="submit"
            disabled={isInvalid}
            style={{ marginTop: "100px" }}
          >
            Sign Up
          </button>
          {error && <p>{error.message}</p>}
        </form>
        <button
          style={{ border: "none", background: "none", marginTop: "50px" }}
        >
          <Link to={ROUTES.SIGN_IN}>Already have an account?</Link>
        </button>
      </div>
    );
  }
}

const RegistrationFormBase = compose(
  withRouter,
  withFirebase
)(RegistrationForm);

export default Registration;
