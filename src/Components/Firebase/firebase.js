import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password, name) =>
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: name,
        });
        console.log("done");
        return result;
      })
      .catch((error) => {
        console.log(error);
      });

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);

  user = (uid) => this.db.ref(`users/${uid}`);
  users = () => this.db.ref("users");
}

export default Firebase;
