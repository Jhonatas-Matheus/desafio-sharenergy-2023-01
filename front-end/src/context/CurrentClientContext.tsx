import { createContext, useState } from "react";
import { IClientCRUD } from "../pages/CrudPage";

interface ICurrentClientContextProvider {
  currentClient?: IClientCRUD;
  setCurrentClient: React.Dispatch<
    React.SetStateAction<IClientCRUD | undefined>
  >;
}
interface ICurrentClientContextProps {
  children: React.ReactNode;
}

const CurrentClientContext = createContext({} as ICurrentClientContextProvider);

const CurrentClientProvider = ({ children }: ICurrentClientContextProps) => {
  const [currentClient, setCurrentClient] = useState<IClientCRUD>();
  return (
    <CurrentClientContext.Provider value={{ currentClient, setCurrentClient }}>
      {children}
    </CurrentClientContext.Provider>
  );
};

export { CurrentClientProvider, CurrentClientContext };
