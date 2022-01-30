
import { useRef } from 'react';

// sections
import Categories from '../sections/Categories';
import Landing from '../sections/Landing';
import Products from '../sections/Products';

// styled
import styled from 'styled-components';

export default function HomePage({products}) {

    const buttonRef = useRef();

    const scroll = (scrollOffset) => {
        buttonRef.current.scrollLeft += scrollOffset;
        console.log(buttonRef)
        console.log(scrollOffset)
        console.log(buttonRef.current)
    };
    console.log(scroll)


    return (
        <StyledHome>
            <Landing />
            <Categories products={products} />
            <Products products={products} />
        </StyledHome>
    );
}

const StyledHome = styled.div`
    margin: 50px 0;
    .category-wrapper {
        margin-bottom: 20px;
        h1 {

        }
    }
`;

