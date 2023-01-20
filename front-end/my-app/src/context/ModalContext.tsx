import { createContext, useState } from "react";

interface IContextPrvoider {
  modalIsOpenCreate: boolean;
  setModalIsOpenCreate: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpenEdit: boolean;
  setModalIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>;
  modalIsOpenDelete: boolean;
  setModalIsOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IContextProps {
  children: React.ReactNode;
}
const ModalContext = createContext({} as IContextPrvoider);

const ModalProvider = ({ children }: IContextProps) => {
  const [modalIsOpenCreate, setModalIsOpenCreate] = useState<boolean>(false);
  const [modalIsOpenEdit, setModalIsOpenEdit] = useState<boolean>(false);
  const [modalIsOpenDelete, setModalIsOpenDelete] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpenCreate,
        setModalIsOpenCreate,
        modalIsOpenEdit,
        setModalIsOpenEdit,
        modalIsOpenDelete,
        setModalIsOpenDelete,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
