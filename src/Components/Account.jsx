import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import account_picture from "../assets/baseline_account_black_box_18dp.png";
// import help_button from "../assets/help-circle-outline.png";
import "../index.css";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {},
    };
  }
  render() {
    return (
      <div className="login-container">
        <TextField
          name="Name"
          placeholder="Name"
          onChange={this.handleChange}
          style={{ backgroundColor: "#e3e6e8" }}
        />
        <Button>Change Name</Button>
        <br />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          style={{ backgroundColor: "#e3e6e8" }}
        />
        <Button>Change Password</Button>
      </div>
    );
  }
}

export default Account;
