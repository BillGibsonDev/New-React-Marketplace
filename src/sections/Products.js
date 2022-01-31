import { useRef } from 'react';

// images
import Right from '../images/arrowRight.png';
import Left from '../images/arrowLeft.png';

// styled
import styled from 'styled-components';

// components
import Product from '../components/Product';

export default function HomePage({products}) {

    const buttonRef = useRef();

    const scroll = (scrollOffset) => {
        buttonRef.current.scrollLeft += scrollOffset;
        console.log(buttonRef)
        console.log(scrollOffset)
        console.log(buttonRef.current)
    };
    console.log(scroll)


    return (
        <StyledProducts>
            <div className="product-wrapper">
                <h1>All Products</h1>
                <button id="left-button" ref={buttonRef} onClick={() => scroll(-100)}><img src={Left} alt="" /></button>
                <button id="right-button" ref={buttonRef} onClick={() => scroll(100)}><img src={Right} alt="" /></button>
                <div className="product-container" id="product-container">
                    {
                        products.map((product, key) =>{
                            return (
                                <Product
                                    title={product.title}
                                    image={product.image}
                                    description={product.description}
                                    category={product.category}
                                    price={product.price}
                                    id={product.id}
                                    key={key}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </StyledProducts>
    );
}

const StyledProducts = styled.div`
    margin: 50px 0;
    .product-wrapper {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 12px;
        position: relative;
        h1 {
            width: 95%;
            margin: auto;
        }
        #left-button, #right-button {
            position: absolute;
            top: 45%;
            background: none;
            border: none;
            z-index: 2;
            img {
                width: 40px;
                height: 50px;
            }
        }
        #right-button {
            right: 0;
        }
        .product-container {
            display: flex;
            padding: 10px 0;
            width: 95%;
            margin: auto;
            position: relative;
            overflow-x: scroll;
            scrollbar-width: thin;          /* "auto" or "thin" */
            scrollbar-color: #4e4e4e #fff;   /* scroll thumb and track */
            &::-webkit-scrollbar {
                width: 12px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #fff;
                border-radius: 20px;
                border: 3px solid #4e4e4e;
            }
        }
    }
`;