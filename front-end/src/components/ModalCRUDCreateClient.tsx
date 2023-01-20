import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { IClient, useValidateFormCreate } from "../hooks/useValidateForm";
import { useRequests } from "../hooks/useRequests";
import { AxiosError } from "axios";
import { toastError, toastSucess } from "../utils/ReactToast";

import ReactInputMask from "react-input-mask";
import { resetFormObject } from "../utils/ResetFrom";
import { TriggerContext } from "../context/TriggerContext";

const ModalCRUDUserCreate = () => {
  const { modalIsOpenCreate, setModalIsOpenCreate } = useContext(ModalContext);
  const { trigger, setTrigger } = useContext(TriggerContext);

  const { handleSubmit, register, errors, reset } = useValidateFormCreate();
  const { createClient } = useRequests();
  const onSubmit = async (data: IClient) => {
    try {
      createClient({ ...data });
      setTrigger(!trigger);
      handleCloseModal();
      reset(resetFormObject);
      toastSucess("Cliente cadastrado com sucesso.");
    } catch (error) {
      if (error instanceof AxiosError) {
        toastError(error.message);
      }
    }
  };
  const handleCloseModal = () => {
    setModalIsOpenCreate(!modalIsOpenCreate);
  };
  return (
    <>
      <form
        className={
          modalIsOpenCreate
            ? "absolute w-[80%] translate-x-[12%] opacity-1 top-0 left-0 translate-y-[15%] md:translate-x-[12%] lg:translate-x-[50%] lg:translate-y-[50%]  duration-200 z-[50] flex flex-col h-[80%] lg:max-h-[50%] overflow-y-auto gap-2 items-center pt-4 py-4 px-4 md:px-4 lg:w-[50%] shadow-perso2 rounded-xl bg-white scrl-customize2"
            : "absolute w-[80%] translate-x-[12%] opacity-0 -top-[100%] left-0 lg:translate-x-[50%] lg:translate-y-[50%] duration-200 z-[50] flex flex-col h-[80%] lg:max-h-[50%] overflow-y-auto gap-2 items-center pt-4 py-4 px-4 md:px-4 lg:w-[50%] shadow-perso2 rounded-xl bg-white scrl-customize2"
        }
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="">Dados pessoais</h2>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Nome</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: João"
            type="text"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </label>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Email</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: joao@mail.com"
            type="text"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </label>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Phone</h2>
          <ReactInputMask
            {...register("phone")}
            mask="(99) 99999-9999"
            className="bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: (00) 90000-0000"
          />
          {errors.phone && <p>{errors.phone.message}</p>}
        </label>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">CPF</h2>
          <ReactInputMask
            {...register("cpf")}
            mask="999.999.999-99"
            className="bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: 000.000.000-00"
          />
          {errors.cpf && <p>{errors.cpf.message}</p>}
        </label>
        <h2>Endereço</h2>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Rua</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: Rua das esmeraldas"
            type="text"
            {...register("address.street")}
          />
          {errors.address?.street && <p>{errors.address.street.message}</p>}
        </label>
        <fieldset className="flex w-full md:w-[50%] justify-center gap-4">
          <label className="w-[80%]">
            <h2 className="text-start w-[50%]">CEP</h2>
            <ReactInputMask
              {...register("address.zipCode")}
              mask="99999-999"
              className="bg-slate-200 w-full p-2 rounded-md focus:outline-none focus:bg-slate-300  "
              placeholder="Ex: 00000-000"
            />
            {errors.address?.zipCode && <p>{errors.address.zipCode.message}</p>}
          </label>
          <label className="w-[20%]">
            <h2 className="text-start w-[50%]">Nº</h2>
            <input
              className=" bg-slate-200 w-full p-2 rounded-md focus:outline-none focus:bg-slate-300  "
              placeholder="Ex: 100"
              type="text"
              {...register("address.number")}
            />
            {errors.address?.number && <p>{errors.address.number.message}</p>}
          </label>
        </fieldset>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Bairro</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: Bairro"
            type="text"
            {...register("address.neighborhood")}
          />
          {errors.address?.neighborhood && (
            <p>{errors.address.neighborhood.message}</p>
          )}
        </label>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Cidade</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: Cidade"
            type="text"
            {...register("address.city")}
          />
          {errors.address?.city && <p>{errors.address.city.message}</p>}
        </label>
        <label className="w-full flex flex-col md:items-center  ">
          <h2 className="text-start w-full md:w-[50%]">Estado</h2>
          <input
            className=" bg-slate-200 md:w-[50%] p-2 rounded-md focus:outline-none focus:bg-slate-300  "
            placeholder="Ex: DF"
            type="text"
            {...register("address.state")}
          />
          {errors.address?.state && <p>{errors.address.state.message}</p>}
        </label>
        <input
          className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
          type="submit"
          value="Cadastrar Cliente"
        />
      </form>
      <div
        onClick={handleCloseModal}
        className={
          modalIsOpenCreate
            ? "absolute flex flex-col justify-center px-4 items-center top-0 opacity-100 left-0 z-20 w-full h-full bg-white/80 duration-300"
            : "absolute flex flex-col justify-center px-4 items-center top-0 opacity-0 pointer-events-none  left-0 z-20 w-full h-full bg-white/80 duration-300"
        }
      ></div>
    </>
  );
};

export default ModalCRUDUserCreate;
