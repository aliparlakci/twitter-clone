import React, { useEffect } from "react";
import { useFirebase } from "../FirebaseProvider";

export const SessionContext = React.createContext({
  user: null,
});

export const SessionProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  const firebase = useFirebase();

  useEffect(
    () => firebase.client.auth().onAuthStateChanged((user) => setUser(user)),
    [firebase.client]
  );

  return (
    <>
      <SessionContext.Provider value={user}>{children}</SessionContext.Provider>
    </>
  );
};
