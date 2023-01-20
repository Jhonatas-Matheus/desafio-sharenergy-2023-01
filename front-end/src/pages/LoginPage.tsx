import { AxiosError, AxiosResponse } from "axios";
import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { IUserLoginResponse } from "../hooks/useRequests";
import { apiLocal } from "../services/api";
import { toastError, toastSucess } from "../utils/ReactToast";
import { UserContext } from "../context/UserContext";

type Props = {};

const LoginPage = (props: Props) => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const persistedLoged = useRef<HTMLInputElement>(null);

  const { userAuthenticated, setUserAuthenticated, setLoading } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (
    e: SyntheticEvent
  ): Promise<IUserLoginResponse | void> => {
    e.preventDefault();
    const persistedLogedOption = persistedLoged.current?.checked;
    const userData = {
      username: username.current?.value as string,
      password: password.current?.value as string,
    };
    try {
      setLoading(true);
      const response: AxiosResponse = await apiLocal.post("login", userData);
      setUserAuthenticated(true);
      sessionStorage.setItem("token", response.data.token);
      if (persistedLogedOption) {
        localStorage.setItem("token", response.data.token);
      }
      toastSucess("Login feito com sucesso.");
      navigate("/random-users");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          if (error.response.data.message.includes("password")) {
            return toastError("Usuário ou senha inválido.");
          }
          return toastError(error.response.data.message);
        }
        return toastError("Algo deu errado tente novamente mais tarde.");
      }
      toastError("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (userAuthenticated) {
    navigate("/random-users");
  }
  return (
    <Container>
      <div className="flex flex-col my-auto justify-between py-4 min-w-[280px] md:min-w-[400px] w-[70%] min-h-[250px] md:max-h-[350px] h-[50%] md:w-[30%] md:h-[40%] rounded-xl shadow-perso2">
        <h2 className="text-center h- text-gray-500 text-4xl font-medium">
          Login
        </h2>

        <form
          className="flex w-full object-contain h-full flex-col px-4 justify-center gap-2 "
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            className="p-2 rounded-md bg-slate-300"
            type="text"
            placeholder="Usuário"
            ref={username}
          />
          <input
            className="p-2 rounded-md bg-slate-300"
            type="password"
            placeholder="Senha"
            ref={password}
          />
          <label className="flex gap-1">
            <input type="checkbox" ref={persistedLoged} />
            <p>Mantenha-me logado.</p>
          </label>
          <input
            className="bg-[#1ba2a1] hover:bg-[#014444] hover:cursor-pointer p-2 rounded-md text-white"
            type="submit"
            value="Iniciar Sessão"
          />
        </form>
      </div>
    </Container>
  );
};

export default LoginPage;
