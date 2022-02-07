
// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// images
import Womens from '../images/womens.jpg'
import Star from '../images/star.png';

export default function Promo({products}) {


    return (
        <StyledPromo>
            {
                products === undefined ? (
                    <div className="promo-container">
                        <img id="promo" src={Womens} alt="" />
                        <div className="product-container" id="ghost-product">
                            <Link id="image-link" to={`/`}></Link>
                            <Link id="title-link" to={`/`}></Link>
                            <div className="rating-container"></div>
                        </div>
                    </div>
                ): (
                    <div className="promo-container">
                        <img id="promo" src={Womens} alt="" />
                        <div className="product-container">
                            <Link id="image-link" to={`/products/${products[19].id}`}>
                                <img src={products[19].image} alt="" />
                            </Link>
                            <Link id="title-link" to={`/products/${products[19].id}`}>{products[19].title}</Link>
                            <div className="rating-container">
                                <div className="rate-container" >
                                    {
                                        Array.from(Array(Math.round(products[19].rating.rate)), (e, i) => {
                                            return <img src={Star} key={i} alt="" />
                                        })
                                    }
                                </div>
                                <h4>{products[19].rating.count}</h4>
                            </div>
                            <h4>$ {products[19].price}</h4>
                        </div>
                    </div>
                )
            }
        </StyledPromo>
    );
}
                    
const StyledPromo = styled.div`
    background: #ffffff;
    min-height: 50vh;
    margin: auto;
    .promo-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        position: relative;
        min-height: 80vh;
        @media (max-width: 450px){
            grid-template-columns: 1fr;
            grid-row-gap: 0;
            grid-column-gap: 0;
            background: #fff;
            padding: 2%;
        }
        #promo {
            min-height: 100%;
            width: 100%;
            transition: 0.2s;
            transition-timing-function: ease-in-out;
            @media (max-width: 450px){
                display: none;
            }
        }
        .product-container {
            width: 100%;
            min-height: 80vh;
            position: relative;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media (max-width: 375px){
                width: 95%;
                margin: auto;
            }
            #image-link {
                width: 100%;
                height: 70%;
                img {
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                }
            }
            #title-link {
                color: #000000;
                font-weight: 700;
                font-size: 20px;
                margin-top: 10px;
                &:hover {
                    text-decoration: underline;
                }
            }
            .rating-container {
                display: flex;
                align-items: center;
                margin: 10px 0;
                .rate-container{
                    display: flex;
                    align-items: center;
                    img {
                        width: 30px;
                        height: 30px;
                    }
                }
                h4 {
                    margin-left: 10px;
                    font-size: 18px;
                }
            }
            h4 {
                font-size: 20px;
                color: #3f3f3f;
                transition: 0.2s;
            }
        }
    }


`;