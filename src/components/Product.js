
// router
import { Link } from 'react-router-dom';

// styled
import styled from 'styled-components';

// images
import Star from '../images/star.png';

export default function Product({title, image, id, rate, count, price}) {

  return ( 
    <StyledProduct id="product">
      <div className="product-wrapper">
        <Link to={`/products/${id}`}><img src={image} alt="" /></Link>
        <div className="title-wrapper">
          <Link to={`/products/${id}`}>{title}</Link>
          <div className="rating-container">
            <div className="rate-container" >
              {
                Math.round(rate) === isNaN ? (
                  <h2>No rating found</h2>
                 ): rate === undefined ? (
                   <h1>Rate not found</h1>
                 ): (
                   <>
                      { 
                        Array.from(Array(Math.round(rate)), (e, i) => {
                          return <img src={Star} key={i} alt="" />
                        })
                      }
                  </>
                )
              }
            </div>
            <h4>{count}</h4>
          </div>
          <h3>$ {price}</h3>
        </div>
      </div>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  max-width: 450px;
  min-width: 350px;
  min-height: 350px;
  display: flex;
  margin:auto;
  border-radius: 8px;
  padding: 6px 2px;
  @media (max-width: 600px){
    max-width: 500px;
    min-width: 80vw;
    width: 100%;
    margin: auto;
  }
    .product-wrapper {
      display: flex;
      flex-direction: column;
      margin: auto;
      width: 100%;
      a {
        margin: auto;
        min-width: 90%;
        img {
          width: 100%;
          height: 250px;
        }
      }
      .title-wrapper {
        display: flex;
        flex-direction: column;
        a {
          font-size: 13px;
          color: black;
          &:hover {
            text-decoration: underline;
          }
        }
        .rating-container {
                display: flex;
                align-items: center;
                margin: 4px 0;
                .rate-container{
                    display: flex;
                    align-items: center;
                    img {
                        width: 15px;
                        height: 15px;
                    }
                }
                h4 {
                    margin-left: 10px;
                    font-size: 16px;
                }
            }
        h3 {
          color: #2e2e2e;
          font-size: 18px;
        }
      }
    }

`;
