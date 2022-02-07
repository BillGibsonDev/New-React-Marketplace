// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

// images
import Womens from '../images/womens.jpg'
import Star from '../images/star.png';

export default function Category({products, category}) {

    return (
        <StyledCategory>
            {
                products === undefined ? (
                    <div className="promo-container">
                        <img id="promo" src={Womens} alt="" />
                        <div className="product-container" id="ghost-product">
                            <Link id="image-link" to={`/`}>
                                
                            </Link>
                            <Link id="title-link" to={`/`}></Link>
                            <div className="rating-container"></div>
                        </div>
                    </div>
                ): category === undefined ? (
                    <div className="promo-container">
                        <img id="promo" src={Womens} alt="" />
                        <div className="product-container">
                            <Link id="image-link" to={`/products/${products[19].id}`}>
                                <img src={products[19].image} alt="" />
                            </Link>
                            <Link id="title-link" to={`/products/${products[19].id}`}>{products[19].title}</Link>
                            <div className="rating-container">
                                <div className="rate-container" >
                                    {Array.from(Array(Math.round(products[19].rating.rate)), (e, i) => {
                                        return <img src={Star} key={i} alt="" />
                                    })}
                                </div>
                                <h4>{products[19].rating.count}</h4>
                            </div>
                            <h4>$ {products[19].price}</h4>
                        </div>
                    </div>
                ): (
                    <div className="promo-container">
                        {
                            products.filter((products) => products.category === `${category}`).map((product, key) => {
                                return (
                                    <div className="product-container" key={key}>
                                        <Link id="image-link" to={`/products/${product.id}`}>
                                            <img src={product.image} alt="" />
                                        </Link>
                                        <Link id="title-link" to={`/products/${product.id}`}>{product.title}</Link>
                                        <div className="rating-container">
                                            <div className="rate-container" >
                                                {Array.from(Array(Math.round(product.rating.rate)), (e, i) => {
                                                    return <img src={Star} key={i} alt="" />
                                                })}
                                            </div>
                                            <h4>{product.rating.count}</h4>
                                        </div>
                                        <h4>$ {product.price}</h4>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </StyledCategory>
    );
}
                    
const StyledCategory = styled.div`
    background: #ffffff;
    width: 50%;
    max-height: 90vh;
    .promo-container {
        overflow-Y: scroll;
        max-height: 90vh;
        #promo {
            width: 50%;
            height: 50%;
        }
        .product-container {
            width: 80%;
            min-height: 50%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: 20px auto;
            #image-link {
                max-width: 90%;
                height: 50%;
                margin: auto;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            #title-link {
                color: #000000;
                font-weight: 700;
                font-size: 20px;
                margin-top: 10px;
                @media (max-width: 700px){
                    font-size: 14px;
                }
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
                        @media (max-width: 700px){
                            width: 20px;
                            height: 20px;
                        }
                    }
                }
                h4 {
                    margin-left: 10px;
                    font-size: 18px;
                    @media (max-width: 700px){
                        font-size: 14px;
                    }
                }
            }
            h4 {
                font-size: 20px;
                color: #3f3f3f;
                transition: 0.2s;
                @media (max-width: 700px){
                    font-size: 16px;
                }
            }
        }
    }
    #page {
        display: block;
        .product-container {
            max-height: 50vh;
            min-height: 5ovh;
            .image-link {
                height: 50%;
                width: 50%;
            }
            #promo {
                min-height: 30vh;
                max-height: 30vh;
                min-width: 100%;
                object-fit: cover;
            }
        }
        
    }

`;
