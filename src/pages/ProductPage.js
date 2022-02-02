import { useState, useEffect } from 'react';
import axios from 'axios';

// router
import { useParams } from 'react-router-dom';

// components
import Nav from '../components/Nav';

// styled
import styled from 'styled-components';

// images
import Star from '../images/star.png';

export default function ProductPage({products}) {
    
    const { id } = useParams();

    const [ product, setProduct ] = useState([]);

  useEffect(() => {
    function handleProducts(){
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(function(response){
        setProduct(response.data)
      })
    }
    handleProducts();
  }, [ id ]);
  
  return (
    <StyledProduct>
      <Nav />
      {
        product.length === 0 ? (
          <div className="product-container" id="product-container">
            <div className="placeholder "></div>
            <div className="placeholder-container">
              <div className="placeholder "></div>
              <div className="placeholder "></div>
            </div>
        </div>
        ): (
        <div className="product-wrapper">
          <img src={product.image} alt="" />
          <div className="info-container">
            <h1>{product.title}</h1>
            <div className="rating-container">
              <div className="rate-container" >
                {
                  Math.round(product.rating) === isNaN ? (
                    <h2>No rating found</h2>
                  ): product.length === 0 ? (
                    <div className="placeholder"></div>
                  ): (
                    <>
                        { 
                          Array.from(Array(Math.round(product.rating.rate)), (e, i) => {
                            return <img src={Star} key={i} alt="" />
                          })
                        }
                    </>
                  )
                }
              </div>
              {
                product.length === 0 ? (
                  <></>
                ): (
                  <h4 id="rating-count">{product.rating.count}</h4>
                )
              }
            </div>
            <h3 id="price">$ {product.price}</h3>
            <h3 id="description">{product.description}</h3>
            <button id="add-button">Add to Cart</button>
          </div>
        </div>
        )
      }
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  background: #fff;
  min-height: 80vh;
  margin-top: 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  .product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 30px;
    padding: 20px 0;
    margin: auto;
    position: relative;
    .placeholder {
      min-width: 250px;
      min-height: 70vh;
      position: relative;
      background: white;
      border: #e2e2e2 1px solid;
      border-radius: 4px;
      box-shadow: 3px 3px 3px #c2c2c2;
      padding: 6px;
      margin-right: 10px;
    }
    .placeholder-container {
      .placeholder {
          min-width: 250px;
          min-height: 50%;
          position: relative;
          background: white;
          border-radius: 4px;
          box-shadow: 3px 3px 3px #c2c2c2;
          padding: 6px;
      }
    }
}
  .product-wrapper {
    display: flex;
    padding: 5% 0;
    img {
      width: 45%;
      margin: auto;
    }
    .info-container {
      width: 45%;
      margin: 10% auto;
      h1 {
        font-size: 2em;
      }
      .rating-container {
        display: flex;
        align-items: center;
        margin: 4px 0 20px 0;
        .rate-container {
            display: flex;
            align-items: center;
            img {
                width: 15px;
                height: 15px;
            }
        }
        h4 {
          margin-left: 10px;
          font-size: 16px;
          color: #5f5f5f;
        }
      }
      #description {
        margin: 10px 0;
        color: #5f5f5f;
      }
      #add-button {
        background: #5f5f5f;
        margin-top: 10px;
        padding: 6px 30px;
        font-weight: 700;
        color: white;
        border: none;
        font-size: 20px;
        border: 1px solid #ffffff;
        &:hover {
          color: #5f5f5f;
          background: white;
          border: 1px solid #5f5f5f;
        }
      }
    }
  }
`;