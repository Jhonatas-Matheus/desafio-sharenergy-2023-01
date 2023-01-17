import React, { SyntheticEvent, useRef, useState } from "react";
import Container from "../components/Container";
import Empty from "../assets/empty_picture.png";
type Props = {};

const CatPage = (props: Props) => {
  const searchValue = useRef<HTMLInputElement>(null);
  const [catImage, setCatImage] = useState<string>("");
  const handleSubmit = async (e: SyntheticEvent) => {
    console.log(searchValue.current?.value);
    if (!searchValue.current?.value.length) {
      console.log("Caiu no if");
      return handleResetSearch(e);
    }
    e.preventDefault();
    setCatImage(("https://http.cat/" + searchValue.current?.value) as string);
  };
  const handleResetSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    setCatImage("");
  };
  return (
    <Container tailWindClass=" flex flex-col justify-around items-center py-10">
      <form onSubmit={handleSubmit} className="flex flex-col items-center ">
        <input
          className=" bg-slate-200 p-2 rounded-md focus:outline-none focus:bg-slate-300"
          ref={searchValue}
          placeholder="Type what you want to search."
          type="text"
        />
        <div className="flex gap-1 pt-2 px-4">
          <input
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="submit"
            value="Find Cat"
          />
          <button
            className="border-solid border-[1px] rounded-md p-2 cursor-pointer hover:bg-slate-200 "
            type="button"
            onClick={handleResetSearch}
          >
            Clean
          </button>
        </div>
      </form>
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] mb-10 md:mb-48">
        {catImage.length > 0 ? (
          <img
            className="object-scale-down w-full h-full"
            src={catImage}
            alt="Imagem do gato"
          />
        ) : (
          <img src={Empty} alt="Imagem empty"></img>
        )}
      </div>
    </Container>
  );
};

export default CatPage;
