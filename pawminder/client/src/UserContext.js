import React from "react";

import HOST from "./localhost";
import axios from "axios";
axios.defaults.withCredentials = true;
let onChange = (v) => {};
let initVal = false;

export const AuthContext = React.createContext();

export const AuthProvider = ({ children, setLogin }) => {
  const [isLogedIn, setIsLogedIn] = React.useState(false);

  const login = () => {
    setIsLogedIn(true);
    onChange(!initVal);
  };

  const logout = () => {
    setIsLogedIn(false);

    onChange(!initVal);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLogedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export const AuthWraper = ({ changeFunc }) => {
  onChange = changeFunc;
  return AuthProvider;
};
