import { createContext, useEffect, useState } from "react";
import { apiLocal } from "../services/api";
import { AxiosResponse } from "axios";

interface IUserContextProvider {
  userAuthenticated: boolean | undefined;
  setUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean | undefined;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IUserProps {
  children: React.ReactNode;
}
const UserContext = createContext({} as IUserContextProvider);

const UserProvider = ({ children }: IUserProps) => {
  const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const verifyUserToken = async () => {
      let token: string | null = "";
      token = localStorage.getItem("token");
      token = sessionStorage.getItem("token");
      try {
        const response: AxiosResponse = await apiLocal.post(
          "token",
          { token },
          {
            headers: { Authorization: "Bearer " + token },
          }
        );
        console.log(response.data);
        setUserAuthenticated(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    verifyUserToken();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userAuthenticated,
        setUserAuthenticated,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
