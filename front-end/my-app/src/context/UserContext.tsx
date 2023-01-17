import { createContext, useEffect, useState } from "react";
import { IUserResponse, useAuthentication } from "../hooks/useAuthentication";

interface IUserContext {
  currentUser: IUserResponse | undefined;
}
interface IUserProps {
  children: React.ReactNode;
}
const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProps) => {
  const [currentUser, setCurrentUser] = useState<IUserResponse>();
  const useAuth = useAuthentication();
  useEffect(() => {
    const getUser = async () => {
      const userOfPromiseFinished = await useAuth;
      console.log(userOfPromiseFinished);
      if (userOfPromiseFinished) {
        setCurrentUser(userOfPromiseFinished);
      }
    };
    getUser();
  }, []);
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserProvider, UserContext };
