import "./Layout.css";
import womanImage from "../../assets/images/images/Group 57.png";
const Layout = () => {
  return (
    <>
      <section className="layout--component">
        <div className="text-container">
          <h1>Elevate Style, Embrace Story</h1>
          <p>
            We provide the largest clothing collection for any season. You can
            choose trendy or classy design according to your preferences. Our
            services are super fast and we update within 24 hours.
          </p>
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
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 1L35 8L28 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <img src={womanImage} alt="sehvlet" />
      </section>
    </>
  );
};

export default Layout;
