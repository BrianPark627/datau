import React from "react";
import { withFirebase } from "./Firebase";
import Button from "@material-ui/core/Button";

const SignOutButton = ({ firebase }) => (
  <div>
    <div style={{ color: "black" }}>Do you wish to sign out?</div>
    <Button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  </div>
);
export default withFirebase(SignOutButton);
