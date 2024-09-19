import { Link } from "react-router-dom";
import "./Header.css";
import bookmarkIcon from "../../../assets/images/icons/Bookmark.svg";
import bagIcon from "../../../assets/images/icons/Bag.svg";
const Header = () => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Sehlvet</Link>
        </h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/about">About Us</Link>
        </nav>
        <div className="icons">
          <img src={bookmarkIcon} alt="" />
          <div className="cart">
            <img src={bagIcon} alt="" />
            <div className="quantity">0</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
