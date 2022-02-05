
// components
import Nav from '../components/Nav';

// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { connect } from "react-redux";

// component
import CartProduct from '../components/CartProduct';


const CartPage = ({cart}) => {

  return (
    <StyledCart>
      <Nav />
        <div className="product-wrapper">
            <h1>Your Cart</h1>
            { 
                cart.cart.length === 0 ? (
                    <div className="placeholder">
                        <h1>Your cart is empty!</h1>
                        <Link to={"/"}>Continue Shopping</Link>
                    </div>
                ): cart.cart === undefined ? (
                    <div className="placeholder">
                        <h1>Your cart is empty!</h1>
                    </div>
                ): cart.cart === [] ? ( 
                    <div className="placeholder">
                        <h1>Your cart is empty!</h1>
                    </div>
                ): (
                    <>
                        {
                            cart.cart.map((product, index) => {
                                return (
                                    <div key={index}>
                                        {
                                            product.product === undefined ? (
                                                <div key={index}>
                                                    <h1>Your cart is empty!</h1>
                                                </div>
                                            ): (
                                                <CartProduct
                                                    key={index}
                                                    title={product.product.title}
                                                    image={product.product.image}
                                                    id={product.product.id}
                                                    price={product.product.price}
                                                    product={product.product}
                                                    index={index}
                                                />
                                            )
                                        }
                                    </div>
                                )}
                            )}
                        <h3 id="total">Total: $</h3>
                        <Link to={"/"} id="checkout">Proceed to Checkout</Link>
                    </>
                )
            }
        </div>
    </StyledCart>
  );
}

const StyledCart = styled.div`
  background: #fff;
  min-height: 80vh;
  margin-top: 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  @media (max-width: 700px){
    margin-top: 0;
  }
  h1 {
    font-size: 3em;
  }
  .product-wrapper {
    width: 95%;
    margin: auto;
    .placeholder {
        display: flex;
        flex-direction: column;
        margin: auto;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-height: 20vh;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
        padding: 2% 0;
        @media (max-width: 700px){
            max-height: 34vh;
        }
        h1 {
            
        }
        a {

        }
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
            width: 100px;
            max-width: 20%;
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
                .title-container {
                    display: flex;
                    flex-direction: column;
                    height: 90%;
                    h3, h3 {
                        font-size: 16px;
                        @media (max-width: 610px){
                            font-size: 12px;
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
    #checkout {
        background: #5f5f5f;
        margin-top: 20px;
        padding: 6px 30px;
        font-weight: 700;
        color: white;
        border: none;
        font-size: 16px;
        border: 1px solid #ffffff;
        transition: 0.3s;
        &:hover {
            color: #5f5f5f;
            background: white;
            border: 1px solid #5f5f5f;
        }
    }
`;

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};


export default connect(mapStateToProps)(CartPage);