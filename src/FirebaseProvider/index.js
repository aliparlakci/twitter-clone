import React, { useContext } from "react";
import Firebase from "./firebase";

const firebase = new Firebase();

const FirebaseContext = React.createContext(firebase);

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={firebase}>
    {children}
  </FirebaseContext.Provider>
);

const useFirebase = () => useContext(FirebaseContext);

export { Firebase, FirebaseContext, FirebaseProvider, useFirebase };
