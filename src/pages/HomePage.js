

// sections
import Categories from '../sections/Categories';
import Landing from '../sections/Landing';
import Products from '../sections/Products';
import Community from '../sections/Community';
import Social from '../sections/Social';


// styled
import styled from 'styled-components';
import Promo from '../sections/Promo';

export default function HomePage({products}) {

    return (
        <StyledHome>
            <Landing />
            {
                products[19] === undefined ? (
                    <div className="product-container" id="product-container">
                            <div className="placeholder "></div>
                        </div>
                ): (
                    <Promo products={products}/>
                )
            }

            <Social />
            <Categories products={products} />
            <Community />
            <Products products={products} />
        </StyledHome>
    );
}

const StyledHome = styled.div`
    margin-top: 20px;
    @media (max-width: 375px){
        margin-top: 0;
    }
    .product-container {
        min-height: 70vh;
        display: flex;
        margin: auto;
        position: relative;
        .placeholder {
            min-width: 100%;
            min-height: 100%;
            position: relative;
            background: white;
            border: #e2e2e2 1px solid;
            border-radius: 4px;
        }
    }
`;

