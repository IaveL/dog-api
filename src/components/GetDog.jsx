import React, { useState } from "react";
import axios from "axios";
import {
  DogImg,
  Footer,
  Github,
  MainBox,
  Paws,
  Paws2,
  RequestButton,
  TextBox,
} from "./styles";
import pawImg from "../assets/paws2.png";
import github from "../assets/github-logo.svg";
import "./styles.css";
export default function GetDog() {
  const [dog, setDog] = useState(``);

  const [request, setRequest] = useState(false);

  function getDog() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((img) => {
      setDog(img.data.message);
      setRequest(true);
    });
  }

  return (
    <MainBox>
      <TextBox>
        <h1>Bem vindo ao roleta canina!</h1>
        <h2>Tente a sorte e clique no botão a baixo.</h2>
        <h3>(Funciona mais que uma vez!)</h3>
        <RequestButton onClick={getDog}>Aperta aí!</RequestButton>
      </TextBox>
      {request && <DogImg src={dog} alt="cute dog" />}
      <Paws src={pawImg} alt="dog paws" />
      <Paws2 src={pawImg} alt="dog paws" />
      <Footer>
        <h3>Made with ❤️</h3>
        <a href="https://github.com/IaveL">
          <Github src={github} alt="github logo" />
        </a>
      </Footer>
    </MainBox>
  );
}
