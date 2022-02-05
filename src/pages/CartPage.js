
// components
import Nav from '../components/Nav';

// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// redux
import { removeFromCart } from '../redux/actions/cart.js';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

export default function CartPage() {

    const dispatch = useDispatch();

     const cart = useSelector((state) => state.cart, shallowEqual);

  return (
    <StyledCart>
      <Nav />
        { 
            cart.length === 0 ? (
                <h1>Your cart is empty</h1>
            ): cart.items === undefined ? ( 
                <h1>Your Cart is empty</h1>
        ): (
            <div className="product-wrapper">
                <h1>Your Cart</h1>
                {
                    cart.items.map((product, key) => {
                        return (
                            <div key={key} >
                                <div className="product-container" >
                                    <img src={product.product.image} alt="" />
                                        <div className="info-container">
                                            <div className="title-container">
                                                <h3>{product.product.title}</h3>
                                                <h3>${product.product.price}</h3>
                                            </div>
                                            <div className="button-container">
                                                <button id="remove" onClick={()=> dispatch(removeFromCart(product.product.id))}>Remove</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <h3 id="total">Total: $</h3>
                <Link to={"/"} id="checkout">Proceed to Checkout</Link>
            </div>
        )
      }
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