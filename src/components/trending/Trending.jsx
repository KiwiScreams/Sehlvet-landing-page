import "./Trending.css";
import img1 from "../../assets/images/images/nikita-kachanovsky-GY6ViMxtmDE-unsplash.png";
import img2 from "../../assets/images/images/nathan-dumlao-aT2Voo0gyVE-unsplash.png";
import img3 from "../../assets/images/images/nikita-kachanovsky-GY6ViMxtmDE-unsplash (1).png";
import bookmarkIcon from "../../assets/images/icons/Bookmark.svg";
import bagIcon from "../../assets/images/icons/Bag.svg";
const Trending = () => {
  const boxes = [
    {
      image: img1,
      title: "Formal Shirt For Woman",
      price: "$25.38",
    },
    {
      image: img2,
      title: "Black and gray Exercise outfit",
      price: "$12.28",
    },
    {
      image: img3,
      title: "Yellow Jacket For Winter",
      price: "$14.55",
    },
  ];
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
          {boxes.map((box, index) => (
            <div key={index} className="box">
              <div className="image-container">
                <img src={box.image} alt="" />
              </div>
              <h4>{box.title}</h4>
              <div className="box-bottom">
                <p>Price: {box.price}</p>
                <div className="flex-box">
                  <img src={bookmarkIcon} alt="" />
                  <img src={bagIcon} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Trending;
