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
        </div>
      </section>
    </>
  );
};

export default Trending;
