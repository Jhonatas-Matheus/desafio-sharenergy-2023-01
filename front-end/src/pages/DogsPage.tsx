import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import IconDog from "../assets/icon_dog.jpeg";
import { apiRandomDogs } from "../services/api";
type Props = {};

const DogsPage = (props: Props) => {
  const [dogChose, setDogChose] = useState<string>();
  const [buttonDisable, setButtonDisable] = useState<boolean>(false)
  const [lengthList, setLengthList] = useState<number>();
  const [picturesId, setPicturesId] = useState<string[]>();
  const generateRandomNumber = () =>
    Math.floor(Math.random() * (lengthList as number));
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const handleSubmit = async (e: SyntheticEvent) => {
    setButtonDisable(true)
    e.preventDefault();
    const randomDogNumber = generateRandomNumber();
    if (picturesId) {
      setDogChose(`https://random.dog/${picturesId[randomDogNumber]}`);
    }
    setTimeout(()=>{
      setButtonDisable(false)
    },2000)
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiRandomDogs.get("/doggos");
        const onlyPictures = response.data.filter(
          (e: string) => e.split(".")[1] !== "mp4"
        );
        setPicturesId(onlyPictures);
        setLengthList(onlyPictures.length);
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <Container tailWindClass="flex flex-col py-10 items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <h2 className=" pt-4 text-center">
          Clique no botão abaixo para gerar uma foto de cachorro aleatória.
        </h2>
        <div className="flex gap-1 pt-2 px-4">
          <button disabled={buttonDisable}>
            <img src={IconDog} alt="" />
          </button>
        </div>
      </form>
      <div ref={iframeRef} className="w-[50%] h-[50%] border-none">
        {dogChose ? (
          <img
            src={dogChose}
            className=" w-full h-[100%] object-scale-down border-none outline-none"
            alt=""
          />
        ) : (
          <p className="text-center">
            Por favor pressione o botão com o cachorro para gerar a foto do
            cachorrinho.
          </p>
        )}
      </div>
    </Container>
  );
};

export default DogsPage;
