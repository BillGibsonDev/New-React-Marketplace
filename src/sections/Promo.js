
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
                    products[19] === undefined ? (
                        <div className="promo-container">
                            <img src={Womens} alt="" />
                            <div className="product-container" id="ghost-product">
                                <Link id="image-link" to={`/`}>
                                    
                                </Link>
                                <Link id="title-link" to={`/`}></Link>
                                <div className="rating-container"></div>
                            </div>
                        </div>
                    ): (
                        <div className="promo-container">
                            <img id="promo" src={Womens} alt="" />
                            <div className="product-container">
                                <Link id="image-link" to={`/products/${products[15].id}`}>
                                    <img src={products[15].image} alt="" />
                                </Link>
                                <Link id="title-link" to={`/products/${products[15].id}`}>{products[15].title}</Link>
                                <div className="rating-container">
                                    <div className="rate-container" >
                                        {Array.from(Array(Math.round(products[15].rating.rate)), (e, i) => {
                                            return <img src={Star} key={i} alt="" />
                                        })}
                                    </div>
                                    <h4>{products[15].rating.count}</h4>
                                </div>
                                <h4>$ {products[15].price}</h4>
                            </div>
                        </div>
                    )
                }
        </StyledPromo>
    );
}
                    
const StyledPromo = styled.div`
    background: #ffffff;
    min-height: 60vh;
    margin: auto;
    .promo-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        position: relative;
        @media (max-width: 450px){
            grid-template-columns: 1fr;
            grid-row-gap: 0;
            grid-column-gap: 0;
            background: #fff;
            padding: 2%;
        }
        #promo {
            height: 100%;
            width: 100%;
            opacity: .9;
            @media (max-width: 450px){
                display: none;
            }
        }
        .product-container {
            width: 100%;
            height: 100%;
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