import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useAuthentication } from "../hooks/useAuthentication";

type Props = {};

const DashboardPage = (props: Props) => {
  return <div>DashboardPage</div>;
};

export default DashboardPage;
