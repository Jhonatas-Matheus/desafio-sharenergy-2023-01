import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { Outlet } from "react-router-dom";
type Props = {};

const ProtectedRoutes = ({}: Props) => {
  const userAuthenticated = useAuthentication();
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = async () => {
      if (!(await userAuthenticated)) {
        // navigate("/");
      }
    };
    getUser();
  }, []);
  return <Outlet />;
};

export default ProtectedRoutes;
