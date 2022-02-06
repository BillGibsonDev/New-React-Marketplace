//styled
import styled from 'styled-components';

// components
import Product from '../components/Product';

export default function Sugesstions({products, category}) {

    return (
        <StyledProducts>
            <div className="product-wrapper">
                <h1>You may also like</h1>
                {
                    products.length === 0 ? (
                        <div className="product-container" id="product-container">
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                        </div>
                    ): (
                        <>
                            <div className="product-container" id="product-container">
                                {
                                    products.filter(products => products.category === `${category}`).map((product, key) =>{
                                        return (
                                            <Product
                                                title={product.title}
                                                image={product.image}
                                                description={product.description}
                                                category={product.category}
                                                price={product.price}
                                                count={product.rating.count}
                                                rate={product.rating.rate}
                                                id={product.id}
                                                key={key}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </div>
        </StyledProducts>
    );
}

const StyledProducts = styled.div`
    min-height: 60vh;
    background: #f3f3f3;
    margin-top: 10%;
    border-top: 1px #e4e4e4 solid;
    .product-wrapper {
        display: flex;
        flex-direction: column;
        background: #ffffff;
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
            min-height: 45vh;
            display: flex;
            padding: 10px 0;
            width: 95%;
            margin: auto;
            position: relative;
            overflow-x: scroll;
            scrollbar-width: thin;          /* "auto" or "thin" */
            scrollbar-color: #4e4e4e #fff;   /* scroll thumb and track */
            @media (max-width: 375px){
                min-height: 50vh;
            }
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
            .placeholder {
                min-width: 300px;
                min-height: 350px;
                position: relative;
                background: white;
                border: #e2e2e2 1px solid;
                border-radius: 4px;
                box-shadow: 3px 3px 3px #c2c2c2;
                padding: 6px;
                opacity: .8;
                margin-right: 10px;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
`;