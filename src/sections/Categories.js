
// styled
import styled from 'styled-components';

export default function Categories({products}) {

    return (
        <StyledCategory>
            <div className="category-wrapper">
                <h1>Categories</h1>
                {
                    products[19] === undefined ? (
                        <h2>No Products Found</h2>
                    ): (
                        <div className="category-container" id="category-container">
                            <a href="" className="category">
                                <img src={products[19].image} alt="" />
                                <h2>Women's Clothing</h2>
                            </a>
                            <a href="" className="category">
                                <img src={products[1].image} alt="" />
                            <h2>Men's Clothing</h2>
                            </a>
                            <a href="" className="category">
                                <img src={products[5].image} alt="" />
                                <h2>Accessories</h2>
                            </a>
                            <a href="" className="category">
                                <img src={products[10].image} alt="" />
                                <h2>Electronics</h2>
                            </a>
                        </div>
                    )
                }
            </div>
        </StyledCategory>
    );
}
                    
const StyledCategory = styled.div`
    margin: 50px 0;
    background: #ffffff;
    border-radius: 12px;
    .category-wrapper {
        width: 95%;
        margin: auto;
        h1 {

        }
        .category-container {
            padding: 6px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-row-gap: 10px;
            grid-column-gap: 10px;
            position: relative;
            .category {
                width: 100%;
                height: 200px;
                position: relative;
                background: white;
                border: #e2e2e2 1px solid;
                border-radius: 4px;
                box-shadow: 3px 3px 3px #c2c2c2;
                padding: 6px;
                opacity: .8;
                &:hover {
                    opacity: 1;
                }
                img {
                    object-fit: contain;
                    width: 100%;
                    height: 100%;
                }
                h2 {
                    font-size: 25px;
                    color: #f71f10;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                    z-index: 2;
                    opacity: 1;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

`;

