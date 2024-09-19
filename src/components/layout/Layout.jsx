import "./Layout.css";
import arrowIcon from "../../assets/images/icons/arrow.svg";
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
            Explore <img src={arrowIcon} alt="" />
          </button>
        </div>
        <img src={womanImage} alt="" />
      </section>
    </>
  );
};

export default Layout;
