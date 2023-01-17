import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo_color.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react";
type Props = {};

const Navbar = (props: Props) => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const navigate = useNavigate();
  const changeMenuState = (): void => {
    setMenuState(!menuState);
  };
  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <header className="fixed top-0 z-10 flex w-full h-[80px] shadow-xl px-5 items-center justify-between bg-white">
        <img
          src={logo}
          className="w-[50%] md:w-[20%] object-scale-down"
          alt=""
        />
        {/* Navbar desktop */}
        <nav className="hidden md:flex">
          <ul className="flex gap-4">
            <li>
              <Link to="/random-users" className="font-bold">
                Random User Generator
              </Link>
            </li>
            <li>
              <Link to="/cats" className="font-bold">
                HTTP Cat
              </Link>
            </li>
            <li>
              <Link to="/dogs" className="font-bold">
                Random Dog
              </Link>
            </li>
            <li>
              <Link to="/crud" className="font-bold">
                CRUD Api
              </Link>
            </li>
            <li>
              <button className="font-bold" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </nav>
        <button className="md:hidden relative z-[60]" onClick={changeMenuState}>
          <BiMenu size={40} />
        </button>
        {/* Navbar Mobile */}
      </header>
      <nav
        className={
          menuState
            ? "absolute z-50 w-[60%] min-h-[100%] duration-1000 text-center left-0 top-0 md:hidden bg-white "
            : "absolute z-50 -translate-x-[150%] duration-1000 w-[60%] min-h-[100%] text-center left-0 top-0 md:hidden"
        }
      >
        <div className="absolute top-2 right-2">
          <button className="md:hidden" onClick={changeMenuState}>
            <BiX size={30} />
          </button>
        </div>
        <ul className="flex z-20 w-full mt-40 h-full flex-col gap-2">
          <li className="border-b-2">
            <Link to="/random-user" className="font-bold">
              Random User Generator
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/cats" className="font-bold">
              HTTP Cat
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/dogs" className="font-bold">
              Random Dog
            </Link>
          </li>
          <li className="border-b-2">
            <Link to="/crud" className="font-bold">
              CRUD Api
            </Link>
          </li>
          <li className="border-b-2">
              <button className="font-bold" onClick={logout}>
                Logout
              </button>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
