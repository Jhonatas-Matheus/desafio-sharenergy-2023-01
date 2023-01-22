import { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import CardCRUDUser from "../components/CardCRUDUser";
import ModalCRUDUserCreate from "../components/ModalCRUDCreateClient";
import { ModalContext } from "../context/ModalContext";
import { useRequests } from "../hooks/useRequests";
import ModalCRUDUserUpdate from "../components/ModalCRUDUpdateClient";
import ModalCRUDDelete from "../components/ModalCRUDDelete";
import { TriggerContext } from "../context/TriggerContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toastError } from "../utils/ReactToast";
import { BiRefresh } from "react-icons/bi";
export interface IClientCRUD {
  _id: string;
  name: string;
  phone: string;
  email: string;
  cpf: string;
  address: {
    city: string;
    country: string;
    neighborhood: string;
    number: string;
    state: string;
    street: string;
    zipCode: string;
  };
}

export interface IClientCRUDToUpdate {
  _id?: string;
  name?: string;
  phone?: string;
  email?: string;
  cpf?: string;
  address?: {
    city?: string;
    country?: string;
    neighborhood?: string;
    number?: string;
    state?: string;
    street?: string;
    zipCode?: string;
  };
}
interface ISearch {
  searchText: string;
}
const formSchema = yup.object({
  searchText: yup.string(),
});
const CrudPage = () => {
  const { setModalIsOpenCreate, modalIsOpenCreate } = useContext(ModalContext);
  const { handleSubmit, reset, register } = useForm<ISearch>({
    resolver: yupResolver(formSchema),
  });
  const { trigger, setTrigger } = useContext(TriggerContext);
  const handleShowModal = () => {
    setModalIsOpenCreate(!modalIsOpenCreate);
  };
  const handleRereshList = () => {
    setTrigger(!trigger);
  };
  const handleOnSubmit = (data: ISearch) => {
    const searchResult = usersCRUD?.filter(
      (e) =>
        e.name
          .toLocaleLowerCase()
          .includes(data.searchText.toLocaleLowerCase()) ||
        e.cpf.toLocaleLowerCase().includes(data.searchText.toLocaleLowerCase())
    );
    if (data.searchText.length > 0 && (searchResult?.length as number) > 0) {
      if ((searchResult?.length as number) > 0) {
        setDisplayClientsCRUD(searchResult);
      }
    } else {
      toastError("Não foi encontrado correspondências para essa busca.");
      setDisplayClientsCRUD(usersCRUD);
    }
    reset();
  };
  const [usersCRUD, setUsersCRUD] = useState<IClientCRUD[]>();
  const [displayClientsCRUD, setDisplayClientsCRUD] = useState<IClientCRUD[]>();
  const { getClients } = useRequests();
  useEffect(() => {
    const getData = async () => {
      try {
        setUsersCRUD(await getClients());
        setDisplayClientsCRUD(await getClients());
      } catch (error) {}
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger]);
  return (
    <>
      <Container>
        <form
          className=" flex flex-col items-center w-full"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="flex flex-col lg:flex-row gap-2 pt-4 px-4 md:px-4">
            <input
              {...register("searchText")}
              className=" bg-slate-200 w-full md:w-auto p-2 rounded-md focus:outline-none focus:bg-slate-300 placeholder:text-center "
              placeholder="Insira o nome ou cpf."
              type="text"
            />
            <div className="flex items-center gap-2">
              <input
                className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
                type="submit"
                value="Buscar"
              />
              <input
                className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
                type="button"
                value="Cadastrar Cliente"
                onClick={handleShowModal}
              />
              <button
                className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
                onClick={(e) => {
                  e.preventDefault();
                  handleRereshList();
                }}
              >
                <BiRefresh size={25} />
              </button>
            </div>
          </div>
        </form>
        <ul className="flex flex-col gap-10 w-full  md:w-[50%] lg:w-[50%] h-full py-4 pb-40 px-4 overflow-y-auto mt-4 scrl-customize1">
          {displayClientsCRUD?.map((e) => (
            <CardCRUDUser user={e} key={e._id} />
          ))}
        </ul>
      </Container>
      <ModalCRUDUserCreate />
      <ModalCRUDUserUpdate setClient={setUsersCRUD} />
      <ModalCRUDDelete setClient={setUsersCRUD} />
    </>
  );
};

export default CrudPage;
