import styled from "styled-components";

export const MainBox = styled.main`
  position: relative;
  background-color: #b4ff9f;
  /* background-image: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fdog-paw-isolated-dog-bone-seamless-pattern-vector-puppy-cat-wallpaper-vector-id916132504%3Fk%3D6%26m%3D916132504%26s%3D170667a%26w%3D0%26h%3DQOdBgHkI4PtBvkC9RIPWIbeFrEqkvHawF3Bpp_i1FCg%3D&f=1&nofb=1"); */
  border: 0.75px solid blue;
  min-height: 100vh;
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
`;
