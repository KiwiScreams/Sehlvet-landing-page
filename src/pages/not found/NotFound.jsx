import "./NotFound.css";
import errorImg from "../../assets/images/images/404.png";
import { useLocation } from "react-router-dom";
const NotFound = () => {
  const pageNames = {
    "/about": "About Us",
    "/collections": "Collections",
    "/brands": "Brands",
    "/": "Home",
  };
  const location = useLocation();
  const currentPageName = pageNames[location.pathname] || "Unknown Page";
  return (
    <>
      <section className="not-found--page">
        <div className="not-found-container">
          <div className="error-image">
            <img src={errorImg} alt="not found image" />
          </div>
          <div className="error-text">
            <h2>Oops...</h2>
            <p>
              We couldn't find the page you're looking for: 
               {currentPageName}. Please check the URL or return
              to the homepage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
