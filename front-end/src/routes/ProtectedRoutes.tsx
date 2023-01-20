import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import spin from "../assets/Spin-1s-200px.svg";
import Container from "../components/Container";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const { userAuthenticated, loading } = useContext(UserContext);
  if (loading) {
    return (
      <Container tailWindClass="justify-center flex flex-col items-center">
        <img src={spin} alt="Spin" className="bg-red-500" />;
      </Container>
    );
  }
  if (!userAuthenticated) {
    navigate("/");
  }
  return <Outlet />;
};

export default ProtectedRoutes;
