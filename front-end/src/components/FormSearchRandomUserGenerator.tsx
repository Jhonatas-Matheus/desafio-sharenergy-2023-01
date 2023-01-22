import React from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { ISearchRandomUserGenarete } from "../hooks/useValidateForm";

type Props = {
  handleSubmit: UseFormHandleSubmit<ISearchRandomUserGenarete>;
  handleOnSubmit: (data: ISearchRandomUserGenarete) => void;
  register: UseFormRegister<ISearchRandomUserGenarete>;
  handleResetSearch: () => void;
};

const FormSearch = ({
  handleSubmit,
  handleOnSubmit,
  register,
  handleResetSearch,
}: Props) => {
  return (
    <form
      className="flex flex-col items-center w-full"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      <div className="flex flex-col lg:flex-row items-center gap-2 pt-4 px-4 md:px-4">
        <input
          className=" bg-slate-200 w-full md:w-auto p-2 rounded-md focus:outline-none focus:bg-slate-300 placeholder:text-center "
          placeholder="Digite o que deseja buscar."
          type="text"
          {...register("search")}
        />
        <div className="flex gap-2">
          <input
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="submit"
            value="Pesquisar"
          />
          <button
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="button"
            onClick={handleResetSearch}
          >
            Resetar Pesquisa
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <label className="flex gap-2 items-center">
          <input
            {...register("filter")}
            type="radio"
            name="filter"
            value="name"
          />
          Nome
        </label>
        <label className="flex gap-2 items-center">
          <input
            {...register("filter")}
            type="radio"
            name="filter"
            value="email"
          />
          Email
        </label>
        <label className="flex gap-2 items-center">
          <input
            {...register("filter")}
            type="radio"
            name="filter"
            value="username"
          />
          Usuário
        </label>
      </div>
    </form>
  );
};

export default FormSearch;
