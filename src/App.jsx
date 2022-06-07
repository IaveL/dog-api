import React, { useState } from "react";
import { GlobalStyle } from "./assets/GlobalStyles";
import GetDog from "./components/GetDog";
export default function App() {
  return (
    <>
      <GetDog />
      <GlobalStyle />
    </>
  );
}
