// styled
import styled from 'styled-components';

// icons
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instagramWhite.png';
import Pinterest from '../images/pinterestWhite.png';
import Github from '../images/githubWhite.png';

export default function Social() {


    return (
        <StyledSocial>
            <h3>Don't miss out.</h3>
            <div className="social-wrapper">
                <div className="icon-container">
                    <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
                    <a href='https://instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
                    <a href='https://pinterest.com' target="_blank" rel="noreferrer"><img src={Pinterest} alt="" /></a>
                    <a href='https://github.com/DevGibby/New-React-Marketplace' target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
                </div>
                <div className="form-container">
                    <h4>Join our Email Newsletter</h4>
                    <form action="">
                        <input type="text" placeholder='Your Email' />
                        <button>Join</button>
                    </form>
                </div>
            </div>
        </StyledSocial>
    );
}

const StyledSocial = styled.div`
    min-height: 30vh;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2% 0;
    h3 {
        color: #fff;
        font-size: 4em;
        margin-left: 1.5%;
        @media (max-width: 375px){
            margin: auto;
            margin-bottom: 30px;
        }
    }
    .social-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        margin: auto;
        @media (max-width: 375px){
            flex-direction: column;
        }
        .icon-container {
            display: flex;
            width: 20%;
            justify-content: space-between;
            @media (max-width: 375px){
               width: 50%;
               margin-bottom: 20px;
            }
            a {
                width: 30px;
                height: 30px;
                color: white;
                &:hover {
                text-decoration: underline;
                }
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
        .form-container {
            display: flex;
            flex-direction: column;
            @media (max-width: 375px){
                width: 90%;
            }
            h4 {
                color: white;
                font-size: 20px;
                margin-bottom: 6px;
                @media (max-width: 375px){
                    margin: auto;
                    margin-bottom: 6px;
                }
            }
            form {
                height: 30px;
                @media (max-width: 375px){
                    width: 100%;
                }
                input {
                    height: 30px;
                    width: 300px;
                    background: #adadad;
                    @media (max-width: 850px){
                        width: 150px;
                    }
                    @media (max-width: 375px){
                       width: 80%;
                    }
                }
                button{
                    border: none;
                    font-weight: 700;
                    height: 100%;
                    width: 50px;
                }
            }
        }
    }
`;