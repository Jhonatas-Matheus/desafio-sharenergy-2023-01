import React from "react";

type Props = {
  username: string;
  fullname: string;
  email: string;
  age: string;
  photo: string;
};

const CardRandomUser = ({ username, fullname, email, age, photo }: Props) => {
  return (
    <>
      <li>
        <div className="flex gap-2 px-4 w-[348px] h-[128px] items-center shadow-perso2 hover:shadow-perso3">
          <img src={photo} className="w-[30%] rounded-full" alt="" />
          <div className="flex flex-col text-sm">
            <p>Usuário: {username}</p>
            <p>Nome: {fullname}</p>
            <p className=" w-[70%] whitespace-nowrap truncate hover:w-full">
              Email: {email}
            </p>
            <p>{age} anos</p>
          </div>
        </div>
        <div className=" hidden gap-2 px-4 w-auto h-[128px] items-center shadow-perso2 hover:shadow-perso3">
          <img src={photo} className="w-[100%] rounded-full" alt="" />
        </div>
      </li>
    </>
  );
};

export default CardRandomUser;
