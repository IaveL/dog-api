import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
}
body {
    font-family: 'Montserrat', sans-serif;
}
`;
