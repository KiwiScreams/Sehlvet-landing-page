import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import bookmarkIcon from "../../../assets/images/icons/Bookmark.svg";
import bagIcon from "../../../assets/images/icons/Bag.svg";
const Header = () => {
  return (
    <>
      <header className="desktop">
        <h1>
          <NavLink to="/">Sehlvet</NavLink>
        </h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Collections
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Brands
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
        </nav>
        <div className="icons">
          <img src={bookmarkIcon} alt="" />
          <div className="cart">
            <img src={bagIcon} alt="" />
            <div className="quantity">0</div>
          </div>
        </div>
      </header>
      <header className="mobile">
        <h1>
          <NavLink to="/">Sehlvet</NavLink>
        </h1>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Collections
          </NavLink>
          <NavLink
            to="/brands"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Brands
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About Us
          </NavLink>
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
