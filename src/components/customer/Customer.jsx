import "./Customer.css";
import img1 from "../../assets/images/images/Rectangle 23.png";
import img2 from "../../assets/images/icons/g.svg";
import { useState } from "react";
const Customer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: img1,
      text: "Ladiesvibe provided me the exact quality product I wanted. I'm very much satisfied by their quick delivery process. They delivered my dress within a day.",
      name: "Jane Bennet",
      title: "Fashion Model",
    },
    {
      image: img1,
      text: "I was impressed by the quality of the product and the customer service was excellent. I would definitely recommend Ladiesvibe to my friends.",
      name: "John Doe",
      title: "Software Engineer",
    },
    {
      image: img1,
      text: "I was skeptical at first, but the product exceeded my expectations. The delivery was fast and the packaging was great.",
      name: "Emily Chen",
      title: "Marketing Manager",
    },
  ];
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <>
      <section className="customer--component">
        <div className="customer-header">
          <h2>
            What our <span>Customer Says</span>
          </h2>
          <p>We value our customer's feedback to provide the best service.</p>
        </div>
        <div className="customer-body">
          <div className="slider">
            <img src={testimonials[currentIndex].image} alt="sehlvet" />
            <div className="text-container">
              <img src={img2} alt="sehlvet" />
              <p>{testimonials[currentIndex].text}</p>
              <h4>{testimonials[currentIndex].name}</h4>
              <span>{testimonials[currentIndex].title}</span>
            </div>
          </div>
          <div className="btn-container">
            <button className="prev" onClick={handlePrev}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 7L7 1"
                  stroke="#754F23"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="next" onClick={handleNext}>
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13L7 7L1 1"
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
export default Customer;
