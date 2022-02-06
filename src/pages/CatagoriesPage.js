import { useState } from 'react';

// styled
import styled from 'styled-components';

// components
import Nav from '../components/Nav';
import Category from '../components/Category';

// images
import Womens from '../images/womens2.jpg'
import Mens from '../images/mens2.jpg';
import Electronics from '../images/electronics2.jpg';
import Accessories from '../images/accessories2.jpg';


export default function CategoriesPage({products}) {

    const [ category, setCategory ] = useState("women's clothing")

    let buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    }

    return (
        <StyledCategory>
            <Nav />
            <div className="category-wrapper">
                <div className="selector-wrapper">
                    <div className="selector-container">
                        <button className="button active" onClick={() =>{ setCategory("women's clothing")}}>Women's</button>
                        <button className="button" onClick={() =>{ setCategory("men's clothing")}}>Men's</button>
                        <button className="button" onClick={() =>{ setCategory("jewelery")}}>Accessories</button>
                        <button className="button" onClick={() =>{ setCategory("electronics")}}>Electronics</button>
                    </div>
                    {
                        category === "women's clothing" ? (
                            <img src={Womens} alt="" />
                        ): category === "men's clothing" ? (
                            <img src={Mens} alt="" />
                        ): category === 'jewelery'? (
                            <img src={Accessories} alt="" />
                        ): category === 'electronics' ? (
                            <img src={Electronics} alt="" />
                        ): (
                            <img src={Womens} alt="" />
                        )
                    }
                </div>
                <Category
                    products={products}
                    category={category}
                />
            </div>
        </StyledCategory>
    );
}
                    
const StyledCategory = styled.div`
    background: #000000;
    min-height: 80vh;
    margin-top: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    @media (max-width: 700px){
        margin-top: 0;
    }
    .category-wrapper {
        display: flex;
        .selector-wrapper {
            display: flex; 
            flex-direction: column;
            margin: auto;
            width: 50%;
            max-height: 50%;
            margin: 0;
            img {
            }
            .selector-container {
                display: flex;
                flex-direction: column;
                min-width: 100%;
                background: black;
                button {
                    border: none;
                    background: none;
                    margin-bottom: 30px;
                    margin-top: 10px;
                    font-size: 50px;
                    color: #fff;
                    @media (max-width: 700px){
                        font-size: 30px;
                        margin-bottom: 50px;
                    }
                }
                .active {
                    background: #474747;
                }
            }
        }
    }
`;

