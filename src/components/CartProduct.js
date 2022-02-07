
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
                        <button id="checkout" onClick={()=> removeFromCart(index)}>Remove</button>
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
                            display: flex;
                            align-items: center;
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
                        font-size: 20px;
                        @media (max-width: 610px){
                            font-size: 16px;
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
                    #checkout {
                        display: flex;
                        align-items: center;
                        background: #5f5f5f;
                        margin-top: 20px;
                        padding: 6px 15px;
                        font-weight: 700;
                        color: white;
                        border: none;
                        font-size: 12px;
                        border: 1px solid #ffffff;
                        transition: 0.3s;
                        &:hover {
                            color: #5f5f5f;
                            background: white;
                            border: 1px solid #5f5f5f;
                        }
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