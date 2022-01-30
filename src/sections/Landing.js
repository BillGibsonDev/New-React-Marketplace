import { useRef } from 'react';

// images
import Right from '../images/arrowRight.png';
import Left from '../images/arrowLeft.png';
import LandingImage from '../images/landingImage.jpg';
import Cart from '../images/cart.png';

// sections
import CategorySection from '../sections/Categories';

// styled
import styled from 'styled-components';
import Product from '../components/Product';

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
        <StyledLanding>
            <div className="background-image">
                <img src={LandingImage} alt="" />
            </div>
                <div className="landing-container">
                    <div className="nav-wrapper">
                        <a href="">Logo</a>
                        <nav>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Shop</a>
                        </nav>
                        <a href=""><img id="cart" src={Cart} alt="" /></a>
                    </div>
                    <div className="text-container">
                        <div className="left-container">
                            <h3>Look good</h3>
                        </div>
                        <div className="right-container">
                            <h3>Feel good</h3>
                        </div>
                    </div>
                </div>
        </StyledLanding>
    );
}

const StyledLanding = styled.div`
    margin: 50px 0;
    min-height: 60vh;
    margin-bottom: 40px;
    border-radius: 12px;
    position: relative;
    .background-image {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }
    }
    .landing-container {
        display: flex;
        flex-direction: column;
        width: 95%;
        margin: auto;
        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin: auto;
            min-height: 7vh;
            align-items: center;
            nav {
                display: flex;
                width: 250px;
                margin: auto;
                justify-content: space-between;
            }
            a {
                color: #fff;
                font-size: 20px;
                font-weight: 700;
            }
            #cart {
                width: 40px;
                height: 40px;
            }
        }
    }
    .text-container {
        position: relative;
        margin-top: 30%;
        .right-container, .left-container {
            background: white;
            display: flex;
            justify-content: flex-end;
            h3 {
                font-size: 30px;
                animation: opacityOnLoad 2s 1;
                padding-right: 4px;
            }
        }
        .left-container {
            animation: widthOnLoad 2s 1;
            width: 30%;
        }
        .right-container {
            width: 40%;
            animation: widthOnLoadBottom 2s 1;
        }
    }

    @keyframes widthOnLoad {
        from { width: 0; }
        to { width: 30%; }
    }

    @keyframes widthOnLoadBottom {
        from { width: 0; }
        to { width: 40%; }
    }

    @keyframes opacityOnLoad {
        from { 
            opacity: 0;
            font-size: 2px;
        }
        to { 
            opacity: 1;
            font-size: 30px;
        }
    }
`;