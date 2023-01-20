import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import { IClientCRUD } from "../pages/CrudPage";
import { BsTrash, BsGeoAlt } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { CurrentClientContext } from "../context/CurrentClientContext";
import { useRequests } from "../hooks/useRequests";
import { toastInfo } from "../utils/ReactToast";
type Props = {
  user: IClientCRUD;
};

const CardCRUDUser = ({ user }: Props) => {
  const { setCurrentClient } = useContext(CurrentClientContext);
  const { getSpecificClient } = useRequests();
  const {
    modalIsOpenDelete,
    modalIsOpenEdit,
    setModalIsOpenDelete,
    setModalIsOpenEdit,
  } = useContext(ModalContext);
  const handleopenModalEdit = () => {
    toastInfo(
      "Você pode editar qualquer campo sem obrigatoriamente editar todos."
    );
    setModalIsOpenEdit(!modalIsOpenEdit);
  };
  const handleopenModalDelete = () => {
    setModalIsOpenDelete(!modalIsOpenDelete);
  };
  const [showAddress, setShowAddres] = useState<boolean>(false);
  const handleShowAddress = () => {
    setShowAddres(!showAddress);
  };
  const handleCurrentClient = async (idClient: string) => {
    try {
      setCurrentClient(await getSpecificClient(idClient));
    } catch (error) {}
  };
  return (
    <>
      <li
        className="hidden lg:flex items-center shadow-perso4 rounded-xl"
        id={user._id}
      >
        <div className="flex justify-between w-full items-center px-4">
          <div className="text-center w-[50%]">
            <h2 className="text-xl font-semibold">Dados Pessoais:</h2>
            <p>
              <span className="font-semibold">Nome:</span> {user.name}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {user.email}
            </p>
            <p>
              <span className="font-semibold">Celular:</span> {user.phone}
            </p>
            <p>
              <span className="font-semibold">CPF:</span> {user.cpf}
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Endereço:</h2>
            <p>
              <span className="font-semibold">Rua: </span> {user.address.street}
              , {user.address.number}
            </p>
            <p>
              <span className="font-semibold">Bairro: </span>{" "}
              {user.address.neighborhood}
            </p>
            <p>
              <span className="font-semibold">CEP: </span>
              {user.address.zipCode}
            </p>
            <p>
              <span className="font-semibold">Cidade: </span>
              {user.address.city} <span className="font-semibold">UF: </span>
              {user.address.state}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="text-slate-500 duration-100 hover:text-[#1ba2a1]"
              onClick={() => {
                handleopenModalEdit();
                handleCurrentClient(user._id);
              }}
            >
              <BiEditAlt size={40} />
            </button>
            <button
              className="text-slate-500 duration-100 hover:text-[#1ba2a1]"
              onClick={handleopenModalDelete}
            >
              <BsTrash size={40} />
            </button>
          </div>
        </div>
      </li>
      <li className="lg:hidden min-w-[200px] items-center shadow-perso4 rounded-xl">
        <div className="flex flex-col justify-between w-full items-center px-4">
          {showAddress ? (
            <>
              <h2 className="text-xl font-semibold">Endereço:</h2>
              <p>
                <span className="font-semibold">Rua: </span>{" "}
                {user.address.street}, {user.address.number}
              </p>
              <p>
                <span className="font-semibold">Bairro: </span>{" "}
                {user.address.neighborhood}
              </p>
              <p>
                <span className="font-semibold">CEP:</span>{" "}
                {user.address.zipCode}
              </p>
              <p>
                <span className="font-semibold">Cidade: </span>{" "}
                {user.address.city} <span className="font-semibold">UF:</span>{" "}
                {user.address.state}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-semibold">Dados Pessoais:</h2>
              <p>
                <span className="font-semibold">Nome:</span> {user.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p>
                <span className="font-semibold">Celular:</span> {user.phone}
              </p>
              <p>
                <span className="font-semibold">CPF:</span> {user.cpf}
              </p>
            </>
          )}
        </div>
        <div className="text-center">
          <div className="flex justify-center gap-4">
            <button
              className="text-slate-500 duration-100 hover:text-[#1ba2a1]"
              onClick={() => {
                handleopenModalEdit();
                handleCurrentClient(user._id);
              }}
            >
              <BiEditAlt size={40} />
            </button>
            <button
              className="text-slate-500 duration-100 hover:text-[#1ba2a1]"
              onClick={handleopenModalDelete}
            >
              <BsTrash size={40} />
            </button>
            <button
              className="text-slate-500 duration-100 hover:text-[#1ba2a1]"
              onClick={handleShowAddress}
            >
              <BsGeoAlt size={40} />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardCRUDUser;
