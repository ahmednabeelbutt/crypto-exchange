import React from 'react';
import { useNavigate } from "react-router-dom";

const Auth = ({ authenticatedUser, authUser, children }) => {

  const navigate = useNavigate();

  const isLoggedIn = authenticatedUser === authUser;

  if (!isLoggedIn) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
};

export default Auth;
