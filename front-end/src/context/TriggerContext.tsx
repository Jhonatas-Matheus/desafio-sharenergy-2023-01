import { createContext, useState } from "react";

export interface ITrigerContext {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ITrigerProps {
  children: React.ReactNode;
}
const TriggerContext = createContext({} as ITrigerContext);

const TriggerContextProvider = ({ children }: ITrigerProps) => {
  const [trigger, setTrigger] = useState<boolean>(false);
  return (
    <TriggerContext.Provider value={{ trigger, setTrigger }}>
      {children}
    </TriggerContext.Provider>
  );
};

export { TriggerContextProvider, TriggerContext };
