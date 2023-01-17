import React, { useContext, useEffect, useState } from "react";
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [windowSize, setWindowSize] = useState<number>();
  useResize(setWindowSize);
  useEffect(() => {
    const getData = async () => {
      if (window.screen.width >= 300 && window.screen.width <= 400) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=2&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      } else if (window.screen.width > 400 && window.screen.width <= 450) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=3&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      } else if (window.screen.width > 450 && window.screen.width <= 768) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=6&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      } else if (window.screen.width > 768 && window.screen.width <= 1024) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=8&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      } else if (window.screen.width > 1024 && window.screen.width <= 1500) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=9&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      } else if (window.screen.width > 1500) {
        const response = await apiRandomUser.get(
          `?page=${currentPage}&results=12&seed=abc`
        );
        console.log(response.data);
        setUsersRandoms(response.data.results);
      }
    };
    getData();
  }, [currentPage, windowSize]);
  console.log(windowSize);
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
      <div className="grid px-4 pt-20 place-items-center  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-10 w-full h-full ">
        {usersRandoms.map((e, i) => (
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
      <div className=" flex flex-col items-center gap-4 mb-5">
        <h2>Page</h2>
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
