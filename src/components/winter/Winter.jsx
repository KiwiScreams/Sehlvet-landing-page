import "./Winter.css";
import img1 from "../../assets/images/images/Rectangle 18.png";
import img2 from "../../assets/images/images/Rectangle 20.png";
const Winter = () => {
  return (
    <>
      <section className="winter--component">
        <div className="winter-header">
          <h2>
            <span>Winter</span> Collections
          </h2>
          <p>We consider your look and comfort on cold weather.</p>
        </div>
        <div className="winter-body">
          <div className="left-container">
            <p>
              We provide the largest clothing collection for any season. You can
              choose trendy or classy design according to your preferences. Our
              services are super fast and we update within 24 hours.
            </p>
            <div className="img-container">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="right-container">
            <button>
              View All
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
            <p>
              Our main aim is to serve our customer with better quality product.
              We try to understand their needs and provide them within a short
              period of time. We provide the largest clothing collection for any
              season. You can choose trendy or classy design according to your
              preferences. Our services are super fast and we update within 24
              hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Winter;
