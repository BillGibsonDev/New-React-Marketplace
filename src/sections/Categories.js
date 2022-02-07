
// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom';

export default function Categories({products}) {

    return (
        <StyledCategory>
            <div className="category-wrapper">
                <h1>Categories</h1>
                {
                    products[19] === undefined ? (
                        <div className="category-container" id="category-container">
                            <div className="category"></div>
                            <div className="category"></div>
                            <div className="category"></div>
                            <div className="category"></div>
                        </div>
                    ): (
                        <div className="category-container" id="category-container">
                            <Link to={`/category/${products[19].category}`} className="category">
                                <img src={products[19].image} alt="" />
                                <h2>Women's Clothing</h2>
                            </Link>
                            <Link to={`/category/${products[1].category}`} className="category">
                                <img src={products[1].image} alt="" />
                                <h2>Men's Clothing</h2>
                            </Link>
                            <Link to={`/category/${products[5].category}`} className="category">
                                <img src={products[5].image} alt="" />
                                <h2>Accessories</h2>
                            </Link>
                            <Link to={`/category/${products[10].category}`} className="category">
                                <img src={products[10].image} alt="" />
                                <h2>Electronics</h2>
                            </Link>
                        </div>
                    )
                }
            </div>
        </StyledCategory>
    );
}
                    
const StyledCategory = styled.div`
    background: #ffffff;
    .category-wrapper {
        width: 95%;
        margin: auto;
        .category-container {
            padding: 6px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 10px;
            grid-column-gap: 10px;
            position: relative;
            .category {
                width: 100%;
                height: 250px;
                position: relative;
                background: white;
                border: #e2e2e2 1px solid;
                border-radius: 4px;
                box-shadow: 3px 3px 3px #c2c2c2;
                padding: 6px;
                opacity: .9;
                &:hover {
                    opacity: 1;
                }
                img {
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                }
                h2 {
                    font-size: 14px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                    z-index: 2;
                    opacity: 1;
                    background: #000000;
                    padding: 0 30px;
                    color: white;
                    border: 2px white solid;
                    transition: 0.2s;
                    text-align: center;
                    &:hover {
                        color: black;
                        background: #fff;
                        text-decoration: underline;
                        border: #000000 solid 2px;
                    }
                }
            }
        }
    }

`;

