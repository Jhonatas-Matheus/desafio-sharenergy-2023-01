import { useEffect, useState } from "react";
import Container from "../components/Container";
import CardRandomUser from "../components/CardRandomUser";
import { apiRandomUser } from "../services/api";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import {
  ISearchRandomUserGenarete,
  useValidateFormSearchRandomUser,
} from "../hooks/useValidateForm";
import { handleSearch } from "../utils/FunctionSearch";
import FormSearch from "../components/FormSearchRandomUserGenerator";

type Props = {};
export interface IUserRandom {
  login: { username: string };
  dob: { age: string };
  email: string;
  name: { title: string; first: string; last: string };
  picture: { large: string };
}
const DashboardPage = (props: Props) => {
  const { register, handleSubmit, reset } = useValidateFormSearchRandomUser();

  const [usersRandoms, setUsersRandoms] = useState<IUserRandom[] | any>([]);
  const [displayUsersRandoms, setDisplayUsersRandoms] =
    useState<IUserRandom[]>();
  const [triggerResetSearch, setTriggerResetSearch] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleResetSearch = () => {
    reset();
    setTriggerResetSearch(!triggerResetSearch);
  };
  const handleOnSubmit = (data: ISearchRandomUserGenarete) => {
    handleSearch({
      array: usersRandoms,
      data: data,
      setDisplay: setDisplayUsersRandoms,
    });
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
      <FormSearch
        handleOnSubmit={handleOnSubmit}
        handleResetSearch={handleResetSearch}
        handleSubmit={handleSubmit}
        register={register}
      />
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
