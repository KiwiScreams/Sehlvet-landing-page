import "./Summer.css";
import img1 from "../../assets/images/images/Rectangle 14.png";
import img2 from "../../assets/images/images/Rectangle 13.png";
import img3 from "../../assets/images/images/Rectangle 15.png";
const Summer = () => {
  return (
    <>
      <section className="summer--component">
        <div className="summer-header">
          <h2>
            <span>Summer</span> Collections
          </h2>
          <p>We consider your look and comfort on scorching weather.</p>
        </div>
        <div className="summer-body">
          <div className="left-container">
            <img src={img1} alt="sehlvet" />
            <p>
              Our main aim is to serve our customer with better quality product.
              We try to understand their needs and provide them within a short
              period of time.
            </p>
          </div>
          <div className="right-container">
            <p>
              Our main aim is to serve our customer with better quality product.
              We try to understand their needs and provide them within a short
              period of time.
            </p>
            <div className="img-container">
              <img src={img2} alt="sehlvet" />
              <img src={img3} alt="sehlvet" />
            </div>
            <button>
              Explore
              <svg
                width="36"
                height="16"
                viewBox="0 0 36 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8L35 8"
                  stroke="#754F23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 1L35 8L28 15"
                  stroke="#754F23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summer;
