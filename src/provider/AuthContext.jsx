import React, { createContext } from "react";

export const TravelContext = createContext(null);

const AuthContext = ({ children }) => {
  const placeInfo = {};

  return (
    <TravelContext.Provider value={placeInfo}>
      {children}
    </TravelContext.Provider>
  );
};

export default AuthContext;
