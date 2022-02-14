import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider.js";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
