import firebase from "firebase";
import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Firebase {
  config = {
    apiKey: process.env.REACT_APP_API_KEY || "",
    authDomain: process.env.REACT_APP_AUTH_DOMAIN || "",
    databaseURL: process.env.REACT_APP_DATABASE_URL || "",
    projectId: process.env.REACT_APP_PROJECT_ID || "",
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || "",
    appId: process.env.REACT_APP_APP_ID || "",
    measurementId: process.env.REACT_APP_MEASUREMENT_ID || "",
  };

  client = app;
  user = null;

  constructor() {
    app.initializeApp(this.config);

    app
      .firestore()
      .enablePersistence()
      .catch((err) => {
        if (err.code === "failed-precondition") {
          console.log("Multiple tabs are open, caching disabled");
        } else if (err.code === "unimplemented") {
          console.log("Browser does not support caching.");
        }
      });
  }

  async signIn() {
    await app.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    const provider = new app.auth.GoogleAuthProvider();
    provider.setCustomParameters({ hd: "sabanciuniv.edu" });
    await app.auth().signInWithPopup(provider);
  }

  signOut() {
    app.auth().signOut();
  }
}

export default Firebase;
