import React, { useState } from "react";
import axios from "axios";
import { DogImg, MainBox, RequestButton, TextBox } from "./styles";
import "./styles.css";
export default function GetDog() {
  const [dog, setDog] = useState(``);

  const [request, setRequest] = useState(false);

  async function getDog() {
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
    </MainBox>
  );
}
