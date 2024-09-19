import "./Footer.css";
import facebookIcon from "../../../assets/images/icons/Group 42.svg";
import instagramIcon from "../../../assets/images/icons/Group 43.svg";
import linkedinIcon from "../../../assets/images/icons/Group 55.svg";
import twitterIcon from "../../../assets/images/icons/Group 56.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <h2>Sehlvet</h2>
          <p>2023 Sehlvet . All Rights Reserved</p>
          <div className="soc-icons">
            <img src={facebookIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/collections">Collections</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
        <ul>
          <li>Contact Us</li>
          <li>525-252-4244</li>
          <li>sehlvet@gmail.com</li>
          <li>www.selvet.com</li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
