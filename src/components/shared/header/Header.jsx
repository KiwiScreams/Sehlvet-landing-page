import { NavLink } from "react-router-dom";
import "./Header.css";
import bookmarkIcon from "../../../assets/images/icons/Bookmark.svg";
import bagIcon from "../../../assets/images/icons/Bag.svg";
import { useState, useEffect } from "react";
import { useRef } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileHeaderRef = useRef(null);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/collections", label: "Collections" },
    { to: "/brands", label: "Brands" },
    { to: "/about", label: "About Us" },
  ];
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (!mobileHeaderRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <>
      <header className="desktop">
        <h1>
          <NavLink to="/">Sehlvet</NavLink>
        </h1>
        <nav>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="icons">
          <img src={bookmarkIcon} alt="bookmark icon" />
          <div className="cart">
            <img src={bagIcon} alt="bag icon" />
            <div className="quantity">0</div>
          </div>
        </div>
      </header>
      <header className="mobile" ref={mobileHeaderRef}>
        <h1>
          <NavLink to="/">Sehlvet</NavLink>
        </h1>
        <nav className={`${isMenuOpen ? "open" : "closed"}`}>
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
          <img src={bookmarkIcon} alt="bookmark icon" />
          <div className="cart">
            <img src={bagIcon} alt="bag icon" />
            <div className="quantity">0</div>
          </div>
          <div
            className={`bar-container ${isMenuOpen ? "change" : ""}`}
            onClick={handleMenuToggle}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
