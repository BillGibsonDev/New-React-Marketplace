import { useState } from 'react';

// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { removeFromCart, adjustQty } from '../redux/actions/cart.js';
import { connect } from "react-redux";

const CartProduct = ({ title, price, image, id, removeFromCart, adjustQty, index, qty }) => {

  return (
    <StyledProduct>
        <div className="product-container" >
            <img src={image} alt="" />
                <div className="info-container">
                    <div className="title-wrapper">
                        <div className="title-container">
                        <Link to={`/products/${id}`}>{title}</Link>
                        <label htmlFor="">Quanity:  
                            <input id="qty" type="number" min="1" max="10" defaultValue={qty}
                                onChange={(e) => adjustQty(id, e.target.value)}  />
                        </label>
                        </div>
                        <h3>${price}</h3>
                    </div>
                    <div className="button-container">
                        <button id="remove" onClick={()=> removeFromCart(index)}>Remove</button>
                    </div>
            </div>
        </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  min-height: 20vh;
  margin-top: 20px;
  @media (max-width: 700px){
    margin-top: 0;
  }
    .product-container {
        display: flex;
        margin: auto;
        position: relative;
        justify-content: space-between;
        width: 100%;
        max-height: 20vh;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        padding: 2% 0;
        @media (max-width: 700px){
            max-height: 34vh;
        }
        img {
            width: 200px;
            max-width: 30%;
            object-fit: contain;
            @media (max-width: 700px){
                max-width: 30%;
            }
        }
            .info-container {
                display: flex;
                flex-direction: column;
                width: 80%;
                @media (max-width: 700px){
                    width: 60%;
                }
                .title-wrapper {
                    display: flex;
                    flex-direction: column;
                    height: 90%;
                    .title-container {
                        display: flex;
                        justify-content: space-between;
                        @media (max-width: 710px){
                            flex-direction: column;
                        }
                        label {
                            font-size: 14px;
                            @media (max-width: 710px){
                                margin: 10px 0;
                            }
                            input {
                                margin-left: 4px;
                                width: 40px;
                            }
                        }
                    }
                    h3, a {
                        color: black;
                        font-size: 16px;
                        @media (max-width: 610px){
                            font-size: 12px;
                        }
                    }
                    a {
                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
                .button-container {
                    margin: auto 0;
                    @media (max-width: 700px){
                        margin-top: 20px;
                    }
                }
            }
        }
    }
    #total {
        margin-bottom: 20px;
    }
`;

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
    adjustQty: (id, qty) => dispatch(adjustQty(id, qty)),
  };
};


export default connect(null, mapDispatchToProps)(CartProduct);