// styled
import styled from 'styled-components';

// redux
import { removeFromCart } from '../redux/actions/cart.js';
import { connect } from "react-redux";

const CartProduct = ({ title, price, image, id, removeFromCart, index }) => {


  return (
    <StyledProduct>
        <div className="product-container" >
            <img src={image} alt="" />
                <div className="info-container">
                    <div className="title-container">
                        <h3>{title}</h3>
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
`;

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => dispatch(removeFromCart(product)),
  };
};


export default connect(null, mapDispatchToProps)(CartProduct);