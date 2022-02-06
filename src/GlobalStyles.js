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
    max-width: 1200px;
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
        font-size: 50%;
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

#shop-button {
    background: #000000;
    padding: 0 100px;
    font-size: 40px;
    color: white;
    border: 2px white solid;
    transition: 0.2s;
    font-weight: bold;
    transition: 0.3s;
    @media (max-width: 700px){
        padding: 0 100px;
        font-size: 30px;
    }
    &:hover {
        color: black;
        background: #fff;
        text-decoration: underline;
        border: #000000 solid 2px;
    }
    }


`;

export default GlobalStyles;