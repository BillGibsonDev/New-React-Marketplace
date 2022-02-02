
// icons
import Facebook from '../images/facebookWhite.png';
import Instagram from '../images/instagramWhite.png';
import Pinterest from '../images/pinterestWhite.png';
import Github from '../images/githubWhite.png';

// styled
import styled from 'styled-components';

// router
import { Link } from 'react-router-dom'; 

export default function Footer() {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <div className="icon-container">
          <a href='https://facebook.com' target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
          <a href='https://instagram.com' target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
          <a href='https://pinterest.com' target="_blank" rel="noreferrer"><img src={Pinterest} alt="" /></a>
          <a href='https://github.com/DevGibby/New-React-Marketplace' target="_blank" rel="noreferrer"><img src={Github} alt="" /></a>
        </div>
        <div className="directory-container">
          <div className="link-container">
            <Link to={""}>Home</Link>
            <Link to={""}>About</Link>
            <Link to={""}>Contact</Link>
            <Link to={""}>Shop</Link>
          </div>
          <div className="link-container">
            <Link to={""}>Terms of Service</Link>
            <Link to={""}>Privacy Policy</Link>
            <Link to={""}>Code of Conduct</Link>
            <Link to={""}>F.A.Q.</Link>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 20vh;
  background: #000000;
  display: flex;
  margin-bottom: 20px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  @media (max-width: 700px){
    margin-bottom: 0;
  }
  .footer-wrapper {
    display: flex;
    width: 95%;
    margin: auto;
    justify-content: space-between;
    @media (max-width: 700px){
      flex-direction: column;
      align-items: center;
    }
    .icon-container {
      display: flex;
      width: 30%;
      justify-content: space-between;
      @media (max-width: 700px){
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
    .directory-container {
      display: flex;
      width: 30%;
      height: 100%;
      margin: auto;
      justify-content: space-between;
      @media (max-width: 700px){
        width: 60%;
      }
      .link-container {
        display: flex;
        flex-direction: column;
        a {
          color: white;
          @media (max-width: 700px){
            font-size: 12px;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
