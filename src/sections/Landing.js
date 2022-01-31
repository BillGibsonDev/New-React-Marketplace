

// images
import LandingImage from '../images/landingImage.jpg';
import Cart from '../images/cart.png';

// styled
import styled from 'styled-components';


export default function HomePage({products}) {

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
                            <a href="">Shop</a>
                        </nav>
                        <a href=""><img id="cart" src={Cart} alt="" /></a>
                    </div>
                    <div className="text-container">
                        <div className="left-container">
                            <h3>Style.</h3>
                        </div>
                        <div className="right-container">
                            <h3>It's more than just fashion.</h3>
                        </div>
                    </div>
                </div>
        </StyledLanding>
    );
}

const StyledLanding = styled.div`
    margin: 50px 0;
    min-height: 80vh;
    margin-bottom: 40px;
    border-radius: 12px;
    position: relative;
    .background-image {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 12px;
        opacity: .7;
        img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
        }
    }
    .landing-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        position: relative;
        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin: auto;
            min-height: 7vh;
            align-items: center;
            background: #fff;
            padding: 0 2.5%;
            position: absolute;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            nav {
                display: flex;
                width: 150px;
                margin: auto;
                justify-content: space-between;
            }
            a {
                color: #000000;
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
            background: #ffffffb3;
            display: flex;
            justify-content: flex-end;
            h2 {
                font-size: 50px;
                padding-right: 4px;
            }
            h3 {
                font-size: 30px;
                padding-right: 4px;
            }
        }
        .left-container {
            width: 30%;
        }
        .right-container {
            width: 70%;
        }
    }

    @keyframes widthOnLoad {
        from { width: 0; }
        to { width: 30%; }
    }

    @keyframes widthOnLoadBottom {
        from { width: 0; }
        to { width: 70%; }
    }

    @keyframes opacityOnLoad {
        from { 
            display: none;
            opacity: 0;
        }
        to { 
            display: block;
            opacity: 1;
        }
    }
`;