import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    margin: auto;
    scroll-behavior: smooth;
    width: 80%;
    max-width: 1000px;
    background: #2b2b2b;
    font-family: 'Playfair Display', serif;
    letter-spacing: .5px;
    line-height: 1.5;
    @media (max-width: 1450px){
        font-size: 90%;
    } 
    @media (max-width: 1220px){
        width: 90%
    }
    @media (max-width: 750px){
        font-size: 70%;
        width: 100%;
    } 
}

ul {
    list-style-type: none;
}
a {
    text-decoration: none;
}
button {
    letter-spacing: 1px;
    cursor: pointer;
}
`;

export default GlobalStyles;