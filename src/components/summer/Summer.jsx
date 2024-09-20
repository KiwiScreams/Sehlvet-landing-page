import "./Summer.css";
import img1 from "../../assets/images/images/Rectangle 14.png";
const Summer = () => {
  return (
    <>
      <section className="summer--component">
        <div className="summer-header">
          <h2>
            <span>Trending</span> Collections
          </h2>
          <p>Have a look on what's trending now!</p>
        </div>
        <div className="summer-body">
          <div className="left-container">
            <img src={img1} alt="" />
            <p>
              Our main aim is to serve our customer with better quality product.
              We try to understand their needs and provide them within a short
              period of time.
            </p>
          </div>
          <div className="left-container">
            <p>
              Our main aim is to serve our customer with better quality product.
              We try to understand their needs and provide them within a short
              period of time.
            </p>
            <div className="img-container">
              <img src={img1} alt="" />
              <img src={img1} alt="" />
            </div>
            <button>Explore</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summer;
