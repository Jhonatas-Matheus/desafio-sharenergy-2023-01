import React, { useEffect, useRef, useState, SyntheticEvent } from "react";
import Container from "../components/Container";
import CardRandomUser from "../components/CardRandomUser";
import { apiRandomUser } from "../services/api";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { UserContext } from "../context/UserContext";

//  Clean input after submit;
//  Converte Forms elements to Isolated Component;
//  Fix bug scroll bar in screeen > 1280;

type Props = {};
interface IUserRandom {
  login: { username: string };
  dob: { age: string };
  email: string;
  name: { title: string; first: string; last: string };
  picture: { large: string };
}
const DashboardPage = (props: Props) => {
  const [usersRandoms, setUsersRandoms] = useState<IUserRandom[]>([]);
  const [displayUsersRandoms, setDisplayUsersRandoms] =
    useState<IUserRandom[]>();
  const searchValue = useRef<HTMLInputElement>(null);
  const optionName = useRef<HTMLInputElement>(null);
  const optionEmail = useRef<HTMLInputElement>(null);
  const optionUsername = useRef<HTMLInputElement>(null);
  const [triggerResetSearch, setTriggerResetSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handleResetSearch = () => {
    setTriggerResetSearch(!triggerResetSearch);
  };
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!searchValue) {
      return setCurrentPage(currentPage);
    }
    if (optionName.current?.checked) {
      const usersFound = usersRandoms.filter(
        (e) =>
          e.name.first
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.name.last
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.name.title
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string)
      );

      setDisplayUsersRandoms(usersFound);
    } else if (optionEmail.current?.checked) {
      const usersFound = usersRandoms.filter(
        (e) =>
          e.email
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.email
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.email
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string)
      );

      setDisplayUsersRandoms(usersFound);
    } else if (optionUsername.current?.checked) {
      const usersFound = usersRandoms.filter(
        (e) =>
          e.login.username
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.login.username
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string) ||
          e.login.username
            .toLocaleLowerCase()
            .includes(searchValue.current?.value as string)
      );

      setDisplayUsersRandoms(usersFound);
    }
  };
  useEffect(() => {
    const getData = async () => {
      const response = await apiRandomUser.get(
        `?page=${currentPage}&results=12&seed=abc`
      );
      setUsersRandoms(response.data.results);
      setDisplayUsersRandoms(response.data.results);
    };
    getData();
  }, [currentPage, triggerResetSearch]);
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const previousPage = () => {
    if (currentPage === 1) {
      return null;
    }
    setCurrentPage(currentPage - 1);
  };
  return (
    <Container>
      <form
        className="flex md:hidden flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center gap-2 pt-4 px-4 md:px-4">
          <input
            className=" bg-slate-200 w-full md:w-auto p-2 rounded-md focus:outline-none focus:bg-slate-300 placeholder:text-center "
            ref={searchValue}
            placeholder="Digite o que deseja buscar."
            type="text"
          />
          <div className="flex gap2">
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
            <input ref={optionName} type="radio" name="name" id="" />
            Nome
          </label>
          <label className="flex gap-2 items-center">
            <input ref={optionEmail} type="radio" name="name" id="" />
            Email
          </label>
          <label className="flex gap-2 items-center">
            <input ref={optionUsername} type="radio" name="name" id="" />
            Usuário
          </label>
        </div>
      </form>
      <form
        className="hidden md:flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 pt-4 px-4 md:px-4">
          <input
            className=" bg-slate-200 w-[40%] md:w-auto p-2 rounded-md focus:outline-none focus:bg-slate-300 "
            ref={searchValue}
            placeholder="Digite o que deseja buscar."
            type="text"
          />
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
        <div className="flex gap-4">
          <label className="flex gap-2 items-center">
            <input ref={optionName} type="radio" name="name" id="" />
            Nome
          </label>
          <label className="flex gap-2 items-center">
            <input ref={optionEmail} type="radio" name="name" id="" />
            Email
          </label>
          <label className="flex gap-2 items-center">
            <input ref={optionUsername} type="radio" name="name" id="" />
            Usuário
          </label>
        </div>
      </form>
      <ul className="grid px-4 pt-10 pb-20 overflow-x-hidden overflow-y-auto 2xl:overflow-y-hidden h-[80%] w-full md:h-full  place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 scrl-customize1 ">
        {displayUsersRandoms?.map((e, i) => (
          <CardRandomUser
            username={e.login.username}
            age={e.dob.age}
            email={e.email}
            fullname={e.name.title + " " + e.name.first + " " + e.name.last}
            photo={e.picture.large}
            key={i}
          />
        ))}
      </ul>
      <div className="flex-col items-center gap-4 mb-24">
        <h2 className="text-center">Página</h2>
        <div className="flex items-center">
          <button onClick={previousPage} className="hover:text-[#1ba2a1]">
            <RxDoubleArrowLeft size={30} />
          </button>
          <p>{currentPage}</p>
          <button onClick={nextPage} className="hover:text-[#1ba2a1]">
            <RxDoubleArrowRight size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
