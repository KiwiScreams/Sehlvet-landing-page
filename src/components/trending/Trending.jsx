import "./Trending.css";
import img1 from "../../assets/images/images/nikita-kachanovsky-GY6ViMxtmDE-unsplash.png";
import img2 from "../../assets/images/images/nathan-dumlao-aT2Voo0gyVE-unsplash.png";
import img3 from "../../assets/images/images/nikita-kachanovsky-GY6ViMxtmDE-unsplash (1).png";
import bookmarkIcon from "../../assets/images/icons/Bookmark.svg";
import bagIcon from "../../assets/images/icons/Bag.svg";
const Trending = () => {
  return (
    <>
      <section className="trending--component">
        <div className="trending-header">
          <h2>
            <span>Trending</span> Collections
          </h2>
          <p>Have a look on what's trending now!</p>
        </div>
        <div className="images">
          <div className="box">
            <div className="image-container">
              <img src={img1} alt="" />
            </div>
            <h4>Formal Shirt For Woman</h4>
            <div className="box-bottom">
              <p>Price: $25.38</p>
              <div className="flex-box">
                <img src={bookmarkIcon} alt="" />
                <img src={bagIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <div className="image-container">
              <img src={img2} alt="" />
            </div>
            <h4>Black and gray Exercise outfit</h4>
            <div className="box-bottom">
              <p>Price: $12.28</p>
              <div className="flex-box">
                <img src={bookmarkIcon} alt="" />
                <img src={bagIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="main">
            <div className="box">
              <div className="image-container">
                <img src={img3} alt="" />
              </div>
              <h4>Yellow Jacket For Winter </h4>
              <div className="box-bottom">
                <p>Price: $14.55</p>
                <div className="flex-box">
                  <img src={bookmarkIcon} alt="" />
                  <img src={bagIcon} alt="" />
                </div>
              </div>
            </div>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 1L35 8L28 15"
                  stroke="#754F23"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trending;
