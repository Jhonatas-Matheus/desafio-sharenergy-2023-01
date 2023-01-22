/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { SyntheticEvent, useState } from "react";
import Container from "../components/Container";
import Empty from "../assets/empty_picture.png";
import { codesHttpsOficial } from "../utils/CodesHtttp";

type Props = {};

const CatPage = (props: Props) => {
  const [catImage, setCatImage] = useState<string>("https://http.cat/100");
  const handleSubmit = async (e: SyntheticEvent, value: string) => {
    e.preventDefault();
    setCatImage(("https://http.cat/" + value) as string);
  };
  return (
    <Container tailWindClass=" flex flex-col justify-around items-center py-10 w-full">
      <form className="flex pt-4 md:pt-0 flex-col items-center ">
        <select
          className="bg-slate-200 p-2 rounded-md focus:outline-none focus:bg-slate-300"
          onChange={(e) => handleSubmit(e, e.target.value)}
        >
          {codesHttpsOficial.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          ))}
        </select>
      </form>
      <div className="min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px]  md:max-w-[300px] md:max-h-[300px] mb-10 md:mb-48">
        {catImage.length > 0 ? (
          <img
            className="object-scale-down w-full h-full"
            src={catImage}
            alt="Image of Cat"
          />
        ) : (
          <img
            className="object-scale-down w-full h-ful"
            src={Empty}
            alt="Image Empty"
          ></img>
        )}
      </div>
    </Container>
  );
};

export default CatPage;
