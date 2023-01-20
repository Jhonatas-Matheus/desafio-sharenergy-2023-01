import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { useRequests } from "../hooks/useRequests";
import { IClientCRUD } from "../pages/CrudPage";
import { CurrentClientContext } from "../context/CurrentClientContext";
import { TriggerContext } from "../context/TriggerContext";
import { toastError, toastSucess } from "../utils/ReactToast";
type Props = {
  setClient: React.Dispatch<React.SetStateAction<IClientCRUD[] | undefined>>;
};
const ModalCRUDDelete = ({ setClient }: Props) => {
  const { currentClient } = useContext(CurrentClientContext);
  const { modalIsOpenDelete, setModalIsOpenDelete } = useContext(ModalContext);
  const { trigger, setTrigger } = useContext(TriggerContext);
  const { deleteClient, getClients } = useRequests();
  const handleDeleteCliente = async () => {
    try {
      await deleteClient(currentClient?._id as string);
      setClient(await getClients());
      setTrigger(!trigger);
      toastSucess("Usuário deletado com sucesso.");
      setModalIsOpenDelete(!modalIsOpenDelete);
    } catch (error) {
      toastError("Algo deu errado, porfavor tente novamente.");
    }
  };
  const handleCloseModal = () => {
    setModalIsOpenDelete(!modalIsOpenDelete);
  };
  return (
    <>
      <form
        className={
          modalIsOpenDelete
            ? "absolute w-[90%] md:w-[50%] duration-200 opacity-1 top-[0] left-0 translate-x-[5%]  translate-y-[250%]  md:translate-x-[50%]   md:translate-y-[400%] lg:translate-x-[120%] lg:translate-y-[300%]  lg:w-[30%] z-[50] flex flex-col h-auto  overflow-y-auto gap-2 items-center pt-4 py-4 px-4 md:px-4 shadow-perso2 rounded-xl bg-white scrl-customize2"
            : "absolute w-[90%] md:w-[50%] duration-200 opacity-0 top-[0] left-0 translate-x-[5%] -translate-y-[250%]  md:translate-x-[50%]  -md:translate-y-[400%] lg:translate-x-[120%] lg:-translate-y-[300%] lg:w-[30%] z-[50] flex flex-col h-auto  overflow-y-auto gap-2 items-center pt-4 py-4 px-4 md:px-4 shadow-perso2 rounded-xl bg-white scrl-customize2"
        }
      >
        <h2>Você confirma que deseja deletar o usuário</h2>

        <input
          type="button"
          value="Confirmar"
          className="border-solid border-[1px] rounded-md p-2 cursor-pointer bg-[#e74c3c]/60  hover:bg-[#e74c3c]"
          onClick={handleDeleteCliente}
        />
      </form>
      <div
        onClick={handleCloseModal}
        className={
          modalIsOpenDelete
            ? "absolute flex flex-col justify-center px-4 items-center top-0 opacity-100 left-0 z-20 w-full h-full bg-white/80 duration-300"
            : "absolute flex flex-col justify-center px-4 items-center top-0 opacity-0 pointer-events-none left-0 z-20 w-full h-full bg-white/80 duration-300"
        }
      ></div>
    </>
  );
};

export default ModalCRUDDelete;
