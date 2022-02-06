import { useState, useEffect } from 'react';
import axios from 'axios';

// router
import { useParams } from 'react-router-dom';

// styled
import styled from 'styled-components';

// components
import Product from '../components/Product';
import Nav from '../components/Nav';

export default function CategoryPage() {

const { category } = useParams();

const [ products, setProducts ] = useState([]);

  useEffect(() => {
    function handleProducts(){
      axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(function(response){
        setProducts(response.data)
      })
    }
    handleProducts();
  }, [ category ]);

    return (
        <StyledCategory>
            <Nav />
            <div className="product-wrapper">
                <h1>{category}</h1>
                {
                    products.length === 0 ? (
                        <div className="product-container" id="product-container">
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                            <div className="placeholder "></div>
                        </div>
                    ): (
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
                                                count={product.rating.count}
                                                rate={product.rating.rate}
                                                id={product.id}
                                                key={key}
                                            />
                                        )
                                    })
                                }
                            </div>
                    )
                }
            </div>
        </StyledCategory>
    );
}

const StyledCategory = styled.div`
    background: #ffffff;
    .product-wrapper {
        display: flex;
        flex-direction: column;
        background: #ffffff;
        position: relative;
        width: 95%;
        margin: auto;
        h1 {
            text-transform: capitalize;
            margin: 5% auto;
            @media (max-width: 600px){
                font-size: 25px;
            }
        }
        .product-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-row-gap: 30px;
            padding: 20px 0;
            margin: auto;
            position: relative;
            @media (max-width: 1420px){
                grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 835px){
                grid-template-columns: 1fr;
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
    #product {
        margin-bottom: 50px;
    }
`;