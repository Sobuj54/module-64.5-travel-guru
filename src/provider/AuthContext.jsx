import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const TravelContext = createContext(null);

// firebase authentication
export const auth = getAuth(app);
// google authentication provider
export const googleProvider = new GoogleAuthProvider();
//facebook authentication provider
export const facebookProvider = new FacebookAuthProvider();

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

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const facebookLogIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const placeInfo = {
    user,
    signUp,
    signIn,
    logOut,
    googleLogIn,
    facebookLogIn,
  };

  return (
    <TravelContext.Provider value={placeInfo}>
      {children}
    </TravelContext.Provider>
  );
};

export default AuthContext;
