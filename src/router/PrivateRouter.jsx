import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../components/context/LoginContext";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateRouter;
