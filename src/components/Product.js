// router
import { Link } from 'react-router-dom';

// styled
import styled from 'styled-components';

export default function Product({title, image, id, description, category, price}) {
  return ( 
    <StyledProduct>
      <div className="product-wrapper">
        <Link to={`/${id}`}><img src={image} alt="" /></Link>
        <div className="title-wrapper">
          <h2>{title}</h2>
          <h3>{price}</h3>
        </div>
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  max-width: 350px;
  height: 350px;
  display: flex;
  background: white;
  margin: 0 20px;
  border-radius: 8px;
    .product-wrapper {
      display: flex;
      flex-direction: column;
      margin: auto;
      a {
        margin: auto;
        width: 250px;
        img {
          width: 100%;
          height: 250px;
        }
      }
      .title-wrapper {
        display: flex;
        flex-direction: column;
        h2 {
          font-size: 13px;

        }
        h3 {
          color: #2e2e2e;
          font-size: 12px;
        }
      }
    }

`;
