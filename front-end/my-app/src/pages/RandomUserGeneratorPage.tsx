import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { UserContext } from "../context/UserContext";
import { useAuthentication } from "../hooks/useAuthentication";
import profilePhoto from "../assets/profile_user.jpg";
import CardRandomUser from "../components/CardRandomUser";
import { apiRandomUser } from "../services/api";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { useResize } from "../hooks/useResize";

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
  const [windowSize, setWindowSize] = useState<number>();
  useResize(setWindowSize);
  const handleResetSearch = () => {
    console.log("Chamou a função");
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
          e.name.first.includes(searchValue.current?.value as string) ||
          e.name.last.includes(searchValue.current?.value as string) ||
          e.name.title.includes(searchValue.current?.value as string)
      );
      console.log(usersFound);
      setDisplayUsersRandoms(usersFound);
    } else if (optionEmail.current?.checked) {
      const usersFound = usersRandoms.filter(
        (e) =>
          e.email.includes(searchValue.current?.value as string) ||
          e.email.includes(searchValue.current?.value as string) ||
          e.email.includes(searchValue.current?.value as string)
      );
      console.log(usersFound);
      setDisplayUsersRandoms(usersFound);
    } else if (optionUsername.current?.checked) {
      const usersFound = usersRandoms.filter(
        (e) =>
          e.login.username.includes(searchValue.current?.value as string) ||
          e.login.username.includes(searchValue.current?.value as string) ||
          e.login.username.includes(searchValue.current?.value as string)
      );
      console.log(usersFound);
      setDisplayUsersRandoms(usersFound);
    }
  };
  useEffect(() => {
    const getData = async () => {
      console.log("Chamou o useEffect");
      const response = await apiRandomUser.get(
        `?page=${currentPage}&results=12&seed=abc`
      );
      console.log(response.data);
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
      <form onSubmit={handleSubmit}>
        <div className="flex gap-1 pt-2 px-4">
          <input
            className=" bg-slate-200 p-2 rounded-md focus:outline-none focus:bg-slate-300"
            ref={searchValue}
            placeholder="Type what you want to search."
            type="text"
          />
          <input
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="submit"
            value="Search"
          />
          <button
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="button"
            onClick={handleResetSearch}
          >
            Reset Search
          </button>
        </div>
        <div className="flex justify-around">
          <label>
            <input ref={optionName} type="radio" name="name" id="" />
            Name
          </label>
          <label>
            <input ref={optionEmail} type="radio" name="name" id="" />
            Email
          </label>
          <label>
            <input ref={optionUsername} type="radio" name="name" id="" />
            Username
          </label>
        </div>
      </form>
      <div className="grid px-4 pt-10 pb-20 overflow-y-auto xl:overflow-y-hidden xl:overflow-x-hidden h-[80%] w-full md:h-full  place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10  ">
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
      </div>
      <div className="flex-col items-center gap-4 mb-24">
        <h2 className="text-center">Page</h2>
        <div className="flex items-center">
          <button onClick={previousPage}>
            <RxDoubleArrowLeft size={30} />
          </button>
          <p>{currentPage}</p>
          <button onClick={nextPage}>
            <RxDoubleArrowRight size={30} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default DashboardPage;
