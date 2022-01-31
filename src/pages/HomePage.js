

// sections
import Categories from '../sections/Categories';
import Landing from '../sections/Landing';
import Products from '../sections/Products';

// styled
import styled from 'styled-components';

export default function HomePage({products}) {

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
`;

