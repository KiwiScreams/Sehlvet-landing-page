import "./Footer.css";
import facebookIcon from "../../../assets/images/icons/Group 42.svg";
import instagramIcon from "../../../assets/images/icons/Group 43.svg";
import linkedinIcon from "../../../assets/images/icons/Group 55.svg";
import twitterIcon from "../../../assets/images/icons/Group 56.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const links = [
    { title: "Home", to: "/" },
    { title: "Collections", to: "/collections" },
    { title: "Brands", to: "/brands" },
    { title: "About Us", to: "/about" },
  ];
  const contactInfo = [
    { text: "Contact Us" },
    { text: "525-252-4244" },
    { text: "sehlvet@gmail.com" },
    { text: "www.selvet.com" },
  ];
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
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <ul>
          {contactInfo.map((item, index) => (
            <li key={index}>{item.text}</li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
