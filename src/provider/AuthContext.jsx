import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const TravelContext = createContext(null);

export const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   getting the currently logged in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth);
  };

  const placeInfo = { user, signUp, signIn, logOut };

  return (
    <TravelContext.Provider value={placeInfo}>
      {children}
    </TravelContext.Provider>
  );
};

export default AuthContext;
