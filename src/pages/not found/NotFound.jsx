import "./NotFound.css";
import errorImg from "../../assets/images/images/404.png";
const NotFound = () => {
  return (
    <>
      <section className="not-found--page">
        <div className="error-image">
            <img src={errorImg} alt="" />
        </div>
        <div className="error-text">
            <h2>Oops</h2>
            <p>...</p>
        </div>
      </section>
    </>
  );
};

export default NotFound;
