import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
import logo from "../assets/logo.png";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "./Firebase";

const Login = () => (
  <div>
    <LoginFormBase />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <div className="image">
          <img src={logo} alt="Logo" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <TextField name="email" label="Email" onChange={this.handleChange} />
          <TextField
            type="password"
            name="password"
            label="Password"
            onChange={this.handleChange}
          />
          <button className="button" variant="contained" type="submit">
            Login
          </button>

          {/* {error && <p>{error.message}</p>} */}
        </form>
      </div>
    );
  }
}

const LoginFormBase = withFirebase(LoginForm);

export default Login;
