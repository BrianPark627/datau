import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Firebase, { FirebaseContext } from "./Components/Firebase";
import App from "./Components/App";

// const Navigation = () => (
//   <div>
//     <ul>
//       <li>
//         <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.HOME}>Home</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
//       </li>
//       <li>
//         <Link to={ROUTES.PASSWORD_FORGET}>Password Forget</Link>
//       </li>
//     </ul>
//   </div>
// );

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
