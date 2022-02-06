

// images
import LandingImage from '../images/landing2.jpg';

// router
import { Link } from 'react-router-dom';

// styled
import styled from 'styled-components';

// component
import CartIcon from '../components/CartIcon';


export default function HomePage({products}) {

    return (
        <StyledLanding>
            <div className="background-image">
                <img src={LandingImage} alt="" />
            </div>
                <div className="landing-container">
                    <div className="nav-wrapper">
                        <Link to={"/"} id="logo">B.</Link>
                        <nav>
                            <Link to={"/"}>Home</Link>
                            <Link to={"/categories"}>Shop</Link>
                        </nav>
                        <CartIcon />
                    </div>
                    <div className="text-container">
                        <div className="top-container">
                            <h3 id='top-text'>Style.</h3>
                        </div>
                        <div className="middle-container">
                            <h3>Attitude.</h3>
                        </div>
                        <div className="bottom-container">
                            <h3>Confidence.</h3>
                        </div>
                    </div>
                    <h1 id="brand">Branded.</h1>
                    <div className="button-container">
                        <Link to={"/categories"} id="shop-button">Shop</Link>
                    </div>
                </div>
        </StyledLanding>
    );
}

const StyledLanding = styled.div`
    min-height: 90vh;
    border-radius: 12px;
    position: relative;
    @media (max-width: 600px){
        min-height: 70vh;
    }
    .background-image {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        opacity: 1;
        animation: backgroundOpacityOnLoad 3s 1;
        img {
            width: 100%;
            height: 100%;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            object-fit: cover;
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
                &:hover {
                    text-decoration: underline;
                }
            }
            #logo {
                font-size: 3em;
                font-weight: 700;
            }
        }
        #brand {
            color: white;
            font-size: 7em;
            display: flex;
            justify-content: flex-end;
            width: 90%;
            animation: opacityOnLoad 4s 1;
            @media (max-width: 800px){
                margin-top: 20%;
            }
        }
        .button-container {
            display: flex;
            justify-content: flex-end;
            width: 89%;
            animation: opacityOnLoad 4s 1;
        }
        
    }
    .text-container {
        position: relative;
        margin-top: 20%;
        @media (max-width: 375px){
            margin-top: 30%;
        }
        .middle-container, .top-container, .bottom-container {
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
                animation: opacityOnLoad 2s 1;
            }
        }
        .top-container {
            width: 30%;
            animation: widthOnLoad 2s 1;
        }
        .middle-container {
            width: 40%;
            animation: widthOnLoadMiddle 2s 1;
        }
        .bottom-container {
            width: 50%;
            animation: widthOnLoadBottom 2s 1;
        }
    }

    @keyframes widthOnLoad {
        from { width: 0; }
        to { width: 30%; }
    }

    @keyframes opacityOnLoad {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes backgroundOpacityOnLoad {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes widthOnLoadMiddle {
        from { width: 0; }
        to { width: 40%; }
    }

    @keyframes widthOnLoadBottom {
        from { width: 0; }
        to { width: 50%; }
    }

`;