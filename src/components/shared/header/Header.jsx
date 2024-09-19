import { Link } from "react-router-dom";
import "./Header.css";
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
      </header>
    </>
  );
};

export default Header;
