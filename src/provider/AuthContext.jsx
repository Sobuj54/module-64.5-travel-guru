import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const TravelContext = createContext(null);

export const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const placeInfo = { signUp };

  return (
    <TravelContext.Provider value={placeInfo}>
      {children}
    </TravelContext.Provider>
  );
};

export default AuthContext;
