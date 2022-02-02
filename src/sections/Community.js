
// styled
import styled from 'styled-components';

// Animate on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// images
import CommunityImage from '../images/community.jpg';

// icons
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instagramWhite.png';
import Pinterest from '../images/pinterestWhite.png';
import Github from '../images/githubWhite.png';

export default function Community() {


    return (
        <StyledCommunity>
            <div className="background-image">
                <img src={CommunityImage} alt="" />
            </div>
            <div className="text-container">
                <div data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000" className="top-container">
                    <h3 id='top-text'>Create.</h3>
                </div>
                <div data-aos="fade-right" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-duration="1200" className="middle-container">
                    <h3>Share.</h3>
                </div>
                <div data-aos="fade-right" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-duration="1400" className="bottom-container">
                    <h3>Explore.</h3>
                </div>
            </div>
            <h1 id="join">Join our online community.</h1>
            <div className="icon-container">
                <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
                <a href='https://instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
                <a href='https://pinterest.com' target="_blank" rel="noreferrer"><img src={Pinterest} alt="" /></a>
                <a href='https://github.com/DevGibby/New-React-Marketplace' target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
            </div>
        </StyledCommunity>
    );
}

const StyledCommunity = styled.div`
    min-height: 70vh;
    position: relative;
    @media (max-width: 600px){
        min-height: 50vh;
    }
    .background-image {
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: .9;
        animation: backgroundOpacityOnLoad 3s 1;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .text-container {
        position: relative;
        padding-top: 15%;
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
            /* animation: widthOnLoad 2s 1; */
        }
        .middle-container {
            width: 40%;
          /*  animation: widthOnLoadMiddle 2s 1; */
        }
        .bottom-container {
            width: 50%;
          /*  animation: widthOnLoadBottom 2s 1; */
        }
    }
    #join {
        color: white;
        font-size: 3em;
        display: flex;
        justify-content: flex-end;
        width: 90%;
        margin-top: 10%;
        animation: opacityOnLoad 4s 1;
    }
    .icon-container {
        display: flex;
        justify-content: flex-end;
        width: 89%;
        animation: opacityOnLoad 4s 1;
      a {
        width: 30px;
        height: 30px;
        color: white;
        margin-left: 20px;
        &:hover {
          text-decoration: underline;
        }
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
    
`;