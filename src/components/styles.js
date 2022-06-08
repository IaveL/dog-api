import styled from "styled-components";

export const MainBox = styled.main`
  position: relative;
  background-color: #b4ff9f;
  height: 100vh;

  @media (max-width: 375px) {
  }
`;
export const TextBox = styled.div`
  /* border: 0.75px solid red; */
  box-shadow: rgba(225, 228, 90, 0.5) 0px 5px 15px;
  opacity: 0.92;
  background-color: #f9ffa4;
  padding: 1em;
  width: 600px;
  border-radius: 50px;
  color: #f18686;
  position: absolute;
  top: 30%;
  left: 3%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1440px) {
    left: 2.3%;
  }
  @media (max-width: 1024px) {
    width: 400px;
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 420px;
    height: 400px;
    top: 1.5%;
    left: 24%;
  }
  @media (max-width: 425px) {
    left: 10%;
    width: 325px;
    height: 300px;
  }

  @media (max-width: 375px) {
    left: 8%;
  }
  @media (max-width: 320px) {
    width: 285px;
    height: 330px;
    left: 5%;
  }
`;
export const RequestButton = styled.button`
  border: solid 0.75px none;
  border-radius: 12px;
  background-color: #f8f5f5;
  width: 190px;
  padding: 0.65em;
  font-weight: bolder;
  font-size: 1.5em;
  color: #f18686;
  cursor: pointer;
  :hover {
    text-transform: uppercase;
  }
`;
export const DogImg = styled.img`
  width: 520px;
  height: 500px;
  position: relative;
  left: 42%;
  border-radius: 40px;
  top: 70px;

  @media (max-width: 1440px) {
    left: 50%;
    top: 275px;
  }

  @media (max-width: 1024px) {
    width: 420px;
    height: 400px;
  }

  @media (max-width: 768px) {
    top: 455px;
    left: 24%;
  }
  @media (max-width: 425px) {
    left: 10%;
    top: 375px;
    width: 325px;
    height: 300px;
  }

  @media (max-width: 375px) {
    left: 8%;
  }

  @media (max-width: 320px) {
    left: 4%;
    width: 300px;
    height: 340px;
  }
`;
export const Paws = styled.img`
  width: 300px;
  position: absolute;
  filter: grayscale(100%);
  top: 28%;
  left: 80%;
  transform: rotate(-75deg);

  @media (max-width: 1440px) {
    left: 60%;
    top: 12.5%;
    width: 240px;
    transform: rotate(30deg);
  }

  @media (max-width: 1024px) {
    transform: rotate(0deg);
    top: 10%;
  }

  @media (max-width: 768px) {
    left: 1%;
    width: 260px;
    transform: rotate(-35deg);
  }

  @media (max-width: 425px) {
    display: none;
  }
  @media (max-width: 320px) {
    display: block;
    width: 160px;
    top: 78%;
    left: 15%;
    transform: rotate(45deg);
  }
`;

export const Paws2 = styled.img`
  width: 200px;
  position: absolute;
  filter: grayscale(100%);
  top: 10%;
  left: 15%;
  transform: rotate(35deg);

  @media (max-width: 1024px) {
    top: 18%;
    transform: rotate(10deg);
  }

  @media (max-width: 768px) {
    left: 70%;
    top: 10%;
    width: 260px;
    transform: rotate(-66deg);
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  text-decoration: underline;
  top: 80%;
  color: #f18686;
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 120px;
    width: fit-content;
    justify-content: space-around;
    left: 2%;
  }

  @media (max-width: 425px) {
    left: 30%;
  }

  @media (max-width: 320px) {
    top: 87%;
  }
`;
export const Github = styled.img`
  width: 40px;
`;
