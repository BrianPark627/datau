
import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from "../assets/logo.png";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    console.log("test");

  }

  render() {
    return (

      
        <div className = "login">
          <div className="image">
          <img
          
          src={logo}
          alt="Logo"
          />
          </div>
          <form onSubmit={this.handleSubmit}>
          
          <TextField id="standard-basic" label="Email" /> 
          <TextField type = "password" id="standard-basic" label="Password" />
          <Button className = "button" variant="contained">Login</Button> 
          
          

        
          </form>
        </div>
        
    );
  }
}
